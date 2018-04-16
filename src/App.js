/*
 *
 * MeshApp Component Boilerplate
 *
 * This is the main component to load your developed components
 * You can use this project to develop your component,
 * or use your own environment and push the changes into this boilerplate
 *
 */
import React, { Component } from 'react'
//
// This is the place where you need to load your component
// The component structure most live inside the folder:
// ./node_modules/components/YOUR_COMPONENT_FOLDER
// ----
// To properly load you component duplicate the following import
//
// import COMPONENTNAME from 'components/COMPONENTNAME'
//
// Replace COMPONENTNAME with your component name
// Open the index.js file inside the ./node_modules folder
//

// eslint-disable-next-line
import ComponentExample from 'components/ComponentExample'

import ImageGroup from 'components/ImageGroup'
//
// Default component to load your components
// Include your imported component after the <ComponentExample /> component
//
class App extends Component {

  imagem(url) {
    console.log('image clicked', url)
  }

  render() {
    return (
      <ImageGroup width={'300px'} height={'300px'} borderRad={'0px'} imageClicked={this.imagem}/>
    )
  }
}

export default App
