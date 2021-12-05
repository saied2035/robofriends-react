import configureMockStore from 'redux-mock-store'
import thunkMiddleware from  'redux-thunk'
const  mockStore = configureMockStore([thunkMiddleware])
export default mockStore  