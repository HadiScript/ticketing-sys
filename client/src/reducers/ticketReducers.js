import {
    TICKET_CREATE_FAIL,
    TICKET_CREATE_REQUEST,
    TICKET_CREATE_RESET,
    TICKET_CREATE_SUCCESS,
    TICKET_DELETE_FAIL,
    TICKET_DELETE_REQUEST,
    TICKET_DELETE_SUCCESS,
    TICKET_DETAILS_FAIL,
    TICKET_DETAILS_REQUEST,
    TICKET_DETAILS_SUCCESS,
    TICKET_LIST_FAIL,
    TICKET_LIST_REQUEST,
    TICKET_LIST_SUCCESS
} from "../constants/ticket"

export const TicketCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TICKET_CREATE_REQUEST:
            return { loading: true }
        case TICKET_CREATE_SUCCESS:
            return { loading: false, success: true, ticket: action.payload }
        case TICKET_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case TICKET_CREATE_RESET:
            return {}
        default:
            return state
    }
}
export const ticketsListReducer = (state = { tickets: [] }, action) => {
    switch (action.type) {
        case TICKET_LIST_REQUEST:
            return { loading: true, tickets: [] }
        case TICKET_LIST_SUCCESS:
            return {
                loading: false,
                tickets: action.payload,
                // pages: action.payload.pages,
                // page: action.payload.page,
            }
        case TICKET_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const TicketDetailsReducer = (
    state = { ticket: {} },
    action
) => {
    switch (action.type) {
        case TICKET_DETAILS_REQUEST:
            return { ...state, loading: true }
        case TICKET_DETAILS_SUCCESS:
            return { loading: false, ticket: action.payload }
        case TICKET_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const ticketDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TICKET_DELETE_REQUEST:
            return { loading: true }
        case TICKET_DELETE_SUCCESS:
            return { loading: false, success: true }
        case TICKET_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}