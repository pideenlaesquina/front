import React, { Component, Fragment} from 'react'

class loading extends Component {
  
  render() {
    
    return (
      <div>

        <style jsx>
          {`
            .root{
                height:100vh;
                width:100%;
                background: #ffcf02;
                display:flex;
                align-items: center;
                justify-content: center;
            }
          `}
        </style>
        <div className="root">
            <img className="logo" src="/brand/logo_blanco_naranja.svg" width="80%"></img>
        </div>
      </div>
    )
  }
}

export default loading;
