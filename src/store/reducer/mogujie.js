export default function mogujie(mogujie={
    data:[],
    loading:true
},action) {
    switch (action.type) {
        case "mogujie_loading":
            return {
                data: [],
                loading: true
            }
        case "mogujie_loadOver":
            return {
                data: action.data,
                loading :false
            }
        default:
            return mogujie
    }
}