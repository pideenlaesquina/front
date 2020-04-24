import React, { Component, Fragment} from 'react'
import Magnet from '../components/Magnet'

import Carousel, { Dots } from '@brainhubeu/react-carousel'

class FridgeMagnets extends Component {

  constructor(props)
  {
    super(props)
  }
  
  render() {
    
    return (
      <div>

        <style jsx>
          {`
            
          `}
        </style>

        <Carousel
          clickToChange
          centered
          infinite
          slidesPerPage={2}
        >
          {(
          this.props.stores==null
            ?""
            :this.props.stores.map((store) => (
              <div className="" key={store.id}><Magnet store={store}/></div>
            ))
          )}
        </Carousel>
      </div>
    )
  }
}

export default FridgeMagnets;
