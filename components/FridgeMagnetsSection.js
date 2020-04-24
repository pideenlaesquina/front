import React, { Component, Fragment} from 'react'
import FridgeMagnets from './FridgeMagnets'
import FridgeMagnetsNoFavorites from './FridgeMagnetsNoFavorites'

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
              padding-bottom: 0px;
            }

            .first{
              background: linear-gradient(180deg, #ffcf0200 0%, #ffcf0280 100%);
            }

            .second{
              background: linear-gradient(180deg, #ffcf0280 0%, #ffcf02ff 90%);
            }

            .alone{
              background: linear-gradient(180deg, #ffcf0200 0%, #ffcf02ff 90%);
            }
          `}
        </style>

        <List style={{paddingTop:'0', paddingBottom:'0'}}>
          {this.props.featuredStores != null && (<div className="divider first">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Destacados" secondary="Especialmente escogidas para tí" />
            </ListItem>
            <FridgeMagnets stores={this.props.featuredStores} />
          </div>
          <div className={"divider "+(this.props.featuredStores != nullfavorite?"second":"alone")}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Favoritos" secondary="Tus establecimientos favoritos" />
            </ListItem>
            {(this.props.favoriteStores
            ?<FridgeMagnets stores={this.props.favoriteStores} style={{marginBottom:"15px"}}/>
            :<FridgeMagnetsNoFavorites style={{marginBottom:"15px"}}/>
            )}
          </div>
        </List>
      </div>
    )
  }
}

export default FridgeMagnetsSection;
