export default function user(user={
    data:[],
    loading: true
},action) {
    switch (action.type) {
        case "user_loading":
            return {
                data:[],
                loading: true
            }
        case "user_loadOver":
            return {
                data: action.data,
                loading: false
            }
        default:
            return user
    }
}