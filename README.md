### MeshApp Component Boilerplate

This boilerplate will create a ready to use package of your component,
to be loaded into the mainframe of the meshapp-webapp,

You can insert your developed component and build it,
or you can start from scratch.

After adding your component just run

```
yarn run lib
```

Props

```
  width: PropTypes.string
    <ImageGroup width={'200px'}/>

  height: PropTypes.string
    <ImageGroup height={'200px'}/>

  borderRad: PropTypes.string
    <ImageGroup borderRad={'8px'}/>

  data: PropTypes.array
    <ImageGroup data={['imageUrl(1)', 'imageUrl(2)']}/>

  imageClicked: PropTypes.func
    <ImageGroup imageClicked={this.YourFunction}/>
      This functions will pass the url of the image clicked. The format of your function should be something like:
      twitterImageClicked(urlOfTheImage){}
```
