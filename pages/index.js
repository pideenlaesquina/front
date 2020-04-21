import React, { Component, useContext} from 'react'
import ReactDOM from 'react-dom';
import Context from '../components/Context';
import Loading from '../components/loading.js';

import SideMenu from '../components/sideMenu.js'
import WelcomeSection from '../components/welcomeSection.js'
import FridgeMagnetsSection from '../components/fridgeMagnetsSection.js'

const App = (props) => {
  const ready = (s, f) =>(
    <div>
      <SideMenu/>
      <WelcomeSection/>
      <FridgeMagnetsSection stores={s} featuredStores={f}/>
    </div>
  )
  return(
    <Context.Consumer>
      {context => (
        !context.isReady && context.isLoading
        ?<Loading/>
        :ready(context.stores, context.featuredStores)
      )}
    </Context.Consumer>
  )
}

export default App;
