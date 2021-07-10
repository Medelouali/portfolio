const pager=(state="About Me", action)=>{
    switch(action.type){
        case "Pager":
            state=action.payload;
            return state;
        default:
            return state;
    }
};

export default pager;