Setup
    npx create-react-app react-store-reducers
        npm i sass      npm i react-router-dom      npm i firebase
        npm i styled-components
        npm i redux react-redux redux-logger
        npm i reselect
    npm start     

Redux
    Single Point of Truth
    index.js    <Provider store={store}>

feature/featured-products TODO:
    1.  close cart dropdown on navigate to checkout                     x
    2.  move routes from components to src/                             x
    3.  replace place-holder Home with list of featured products        x
    4.  create redux util to create actions                             x
    5.  style Home                                                      x
    6.  replace master with the feature branch                          x
        git checkout develop
        git merge -s ours master
        git checkout master
        git merge develop
            git branch -d  local_branch_name

    

