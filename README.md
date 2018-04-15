Server build:
* `npm install`
* `nodemon index.js`

Framework build:
* `cd troo`
* `npm install`
* `webpack --watch`

TODO:

* set intial data

* Confirm actions work on server

* Bundle app and get component hydration working

* hook up router to render something
* pass root component to client app
  * get ref to Wrapper from Root
  * have Wrapper return null if store is not initialized or (if on client, document hasn't loaded)
* pass data init function to client app and tie into root init
* render to string on server and output template use `react-dom/server` and react-server-boilerplate
* see TODOs in index.js

* Add Head Root
