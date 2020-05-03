import React, { Component} from 'react'

import SideMenu from '../components/SideMenu'
import WelcomeSection from '../components/WelcomeSection'
import FridgeMagnetsSection from '../components/FridgeMagnetsSection'
import StoreCard from '../components/StoreCard'
import SearchCard from '../components/SearchCard'

class Ready extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      selectedStore:null,
      storeCardOpen:false,
      searchCardOpen:false,
    }
  }

  render() {
    
    return (
      <div>
        <style jsx>
          {`
            .root{
              background: linear-gradient(180deg, #ffcf0200 50%, #ffcf02ff 90%);
            }
          `}
        </style>
        <StoreCard 
          store={this.state.selectedStore} 
          location={this.props.deviceLocation} 
          open={this.state.storeCardOpen} 
          close={()=>this.setState({storeCardOpen:false})}
        />
        <SearchCard 
          stores={this.props.stores} 
          location={this.props.deviceLocation} 
          open={this.state.searchCardOpen} 
          close={()=>this.setState({searchCardOpen:false})} 
          openSelectedStore={(newStore)=>this.setState({storeCardOpen:true, selectedStore:newStore})}
        />
        <div className="root">
          <SideMenu 
            user={this.props.user} 
            auth0Login={this.props.loginWithRedirect}
            auth0Logout={this.props.logout}
            numOrders={(this.props.orders!==null?this.props.orders.length:0)}
            />
          <WelcomeSection 
            name={(
              this.props.user!==null 
              && this.props.user.name!==null 
              ? this.props.user.name
              :null
            )} 
            addresses={(
              this.props.user!==null
              &&this.props.user.addresses!==null
              ?this.props.user.addresses!==[]
              :[]
            )}
            deviceLocation={this.props.deviceLocation}
            selectedLocation={this.props.selectedLocation}
            numStores={(this.props.stores!==null?this.props.stores.length:0)}
            openSearch={(newStore)=>this.setState({searchCardOpen:true})}
          />
          {( (this.props.stores !== null && this.props.stores.length > 0)
          &&<FridgeMagnetsSection 
            favoriteStores={(this.props.user!==null&&this.props.user.favoriteStores!==null?this.props.user.favoriteStores:[])} 
            featuredStores={this.props.featuredStores} 
            openSelectedStore={(newStore)=>this.setState({storeCardOpen:true, selectedStore:newStore})}
          />
          )}
        </div>
      </div>
    )
  }
}

export default Ready;
