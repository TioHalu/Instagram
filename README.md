 $ git clone [link]
 
 masuk ke project cd Instagram 
$ cd Instagram
 
 install npm
$ npm install

install depedencies
$ npm install @react-navigation/native
$ npm install react-native-screens react-native-safe-area-context
$ npm install @react-navigation/native-stack
$ npm install @react-navigation/bottom-tabs
$ npm i react-native-vector-icons

Create a folder named fonts under the assets directory and place the font files in it.
Create a configuration file named react-native.config.js in the root project directory and add the following code
   
 module.exports = {
      project: {
          ios:{},
          android:{}
      },
      assets:['./assets/fonts/'],
  }
