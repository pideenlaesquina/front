import React, { Component, Fragment} from 'react'
import FridgeMagnets from './FridgeMagnets'
import FridgeMagnetsNoFavorites from '../components/FridgeMagnetsNoFavorites'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'


class FridgeMagnetsSection extends Component {

  constructor(props)
  {
    super(props)
  }
  
  render() {
    
    return (
      <div>

        <style jsx>
          {`
            .divider{
              padding-top: 5px;
              padding-bottom: 25px;
            }

            .featured{
              background: linear-gradient(180deg, #ffcf0200 0%, #ffcf02ffgit 100%);
            }

            .favorite{
              background: #ffcf02ff;
            }
          `}
        </style>

        <List style={{paddingTop:'0', paddingBottom:'0'}}>
          {this.props.featuredStores != null && (<div className="dividers">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Destacados" secondary="Especialmente escogidas para tí" />
            </ListItem>
            <FridgeMagnets 
              stores={this.props.featuredStores} 
              openSelectedStore={(newStore)=>this.props.openSelectedStore(newStore)}
            />
          </div>)}
          <div className="divider">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Favoritos" secondary="Tus establecimientos favoritos" />
            </ListItem>
            {(this.props.favoriteStores !== null && this.props.favoriteStores !== []
            ?<FridgeMagnets 
              stores={this.props.favoriteStores} style={{marginBottom:"15px"}}
              openSelectedStore={(newStore)=>this.props.openSelectedStore(newStore)}
            />
            :<FridgeMagnetsNoFavorites style={{marginBottom:"15px"}}/>
            )}
          </div>
        </List>
      </div>
    )
  }
}

export default FridgeMagnetsSection;
