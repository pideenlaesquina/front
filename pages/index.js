import React, { Component, useContext} from 'react'
import ReactDOM from 'react-dom';
import Context from '../components/Context';
import Loading from '../components/Loading';

import SideMenu from '../components/SideMenu'
import WelcomeSection from '../components/WelcomeSection'
import FridgeMagnetsSection from '../components/FridgeMagnetsSection'

const App = (props) => {
  return(
    <Context.Consumer>
      <style jsx>
        {`
          .root{
            background: linear-gradient(180deg, #ffcf0200 50%, #ffcf02ff 90%);
          }
        `}
      </style>

      {context => (
        !context.isReady
        ?<Loading/>
        :(
          <div className="root">
            <SideMenu 
              user={context.user} 
              auth0Login={context.loginWithRedirect}
              auth0Logout={context.logout}
              numOrders={(context.orders!==null?context.orders.length:0)}
              />
            <WelcomeSection 
              name={(
                context.user!=null 
                && context.user.name!=null 
                ? context.user.name
                :null
              )} 
              addresses={(
                context.user!=null
                &&context.user.addresses!=null
                ?context.user.addresses
                :[]
              )}
              currentLocation={context.currentLocation}
              numStores={(context.stores!==null?context.stores.length:0)}
            />
            {( (context.stores !== null && context.stores.length > 0)
            &&<FridgeMagnetsSection 
              favoriteStores={(context.user!=null?context.user.favoriteStores:[])} 
              featuredStores={context.featuredStores}
            />
            )}
          </div>
        )
      )}
    </Context.Consumer>
  )
}

export default App;
