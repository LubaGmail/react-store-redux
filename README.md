Setup
    npx create-react-app react-store-reducers
        npm i sass      npm i react-router-dom      npm i firebase
        npm i styled-components
        npm i redux     react-redux    redux-logger
        npm i redux-persist
    npm start     

Redux
    Single Point of Truth
    index.js    <Provider store={store}>

redux-persist
    store.js
        create and export persist-reducer
    index.js
        add PersistGate wrapper

Git
    git clone -b feature/redux-persist https://github.com/LubaGmail/react-store-redux.git
    git checkout feature/redux-persist
    npm i               npm start

