import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import {
    userLoginReducer,
    userRegisterReducer
} from '../reducers/authReducers'
import {
    agentsListReducer,
    userDeleteReducer,
    userDetailsReducer,
    userListReducer,
    userUpdateReducer
} from '../reducers/userReducer'
import { TicketCreateReducer, TicketDetailsReducer, ticketsListReducer } from '../reducers/ticketReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    agentsList: agentsListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userDetails: userDetailsReducer,


    createTicket: TicketCreateReducer,
    ticketList: ticketsListReducer,
    ticketDetail: TicketDetailsReducer,
    ticketDelte: TicketDetailsReducer

})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
