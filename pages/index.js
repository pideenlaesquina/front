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
      {context => (
        !context.isReady
        ?<Loading/>
        :(
          <div>
            <SideMenu user={context.user} auth0Login={context.loginWithRedirect}/>
            <WelcomeSection 
              name={(
                context.user!=null 
                && context.user.name!=null 
                ? context.user.name
                :null
              )} 
              address={context.address}
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
