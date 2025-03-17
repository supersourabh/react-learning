

export const fetchReducer = ({state, action})=>{
    switch (action.type) {
        case "Loading":
            return {...state, isLoading: true}
        case "Success":
            return { isLoading: false, data: action.payload }
        default:
            break;
    }
}