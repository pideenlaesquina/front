import React, { Component, Fragment} from 'react'
import FridgeMagnets from './fridgeMagnets.js'
import FridgeMagnetsNoFavorites from './fridgeMagnetsNoFavorites.js'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'


class fridgeMagnetsSection extends Component {

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

            .first{
              background:aliceblue;
            }

            .second{
              background:lavenderblush;
            }
          `}
        </style>

        <List style={{paddingTop:'0', paddingBottom:'0'}}>
          <div className="divider first">
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
          <div className="divider second">
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
        </List>
      </div>
    )
  }
}

export default fridgeMagnetsSection;
