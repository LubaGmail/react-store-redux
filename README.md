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

Testing
    npm test a -- --coverage

User
    Context
        https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31147848#overview
    Context to redux
        https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31426036#overview

jest.spyOn
    const mockDispatch = jest.fn();
    const mockSelector = jest.fn();

    jest.mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: () => mockDispatch,
        useSelector: () => mockSelector,
    }));