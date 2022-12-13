export default (state, action) =>{
    switch(action.type){
        case"ADD_GAME_TO_LIST":
        return{
            ...state,
            gamelist:[action.payload, ...state.gamelist],
        }
        case"REMOVE_GAME_FROM_LIST":
        return{
            ...state,
            gamelist: state.gamelist.filter(game => game.id !== action.payload),
        }
        
        default:
            return state;
    }
}