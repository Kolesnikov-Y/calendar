import { RENDER_DATA , IS_MODAL_OPEN, IS_MODAL_CLOSE, ADD_TASK, DELETE_TASK, EDIT_TASK, GET_ITEM} from "./types"

const initialState = {
    isVisible: false,
    calendarTime: [
        {time: "8:00", id: 0, items: [], isOpen: false},
        {time: "8:30", id: 30, items: [], isOpen: false},
        {time: "9:00", id: 60, items: [], isOpen: false},
        {time: "9:30", id: 90, items: [], isOpen: false},
        {time: "10:00", id: 120, items: [], isOpen: false},
        {time: "10:30", id: 150, items: [], isOpen: false},
        {time: "11:00", id: 180, items: [], isOpen: false},
        {time: "11:30", id: 210, items: [], isOpen: false},
        {time: "12:00", id: 240, items: [], isOpen: false},
        {time: "12:30", id: 270, items: [], isOpen: false},
        {time: "1:00", id: 300, items: [], isOpen: false},
        {time: "1:30", id: 330, items: [], isOpen: false},
        {time: "2:00", id: 360, items: [], isOpen: false},
        {time: "2:30", id: 390, items: [], isOpen: false},
        {time: "3:00", id: 420, items: [], isOpen: false},
        {time: "3:30", id: 450, items: [], isOpen: false},
        {time: "4:00", id: 480, items: [], isOpen: false},
        {time: "4:30", id: 510, items: [], isOpen: false},
        {time: "5:00", id: 540, items: [], isOpen: false},
    ], 
    itemForChange: 0
}
export default function calendarData (state=initialState, action) {
    switch(action.type){
        case RENDER_DATA: 
            return state ={...state, isVisible: true}; 

        case ADD_TASK: 
            return state = {...state, calendarTime: state.calendarTime.map(i => {
                if(i.id === action.id){
                    return i =  {...i, items: [...i.items, action.payload]}; 
                }else{
                    return i
                }
             })}; 

        case DELETE_TASK: 
            return state = {...state, calendarTime: state.calendarTime.map(i => {
                if(i.id === action.id){
                    return i =  {...i, items: i.items.filter(item => item.id !== action.itemID)}; 
                }else{
                    return i
                }
             }) }; 

        case EDIT_TASK: 
            const editTask = state.calendarTime.map(i => {
                if(i.id === action.id){
                    return i =  {...i, items: i.items.map(item => {
                        if(item.id === action.itemID){
                            return item = action.data
                        }else{
                           return item
                        } 
                    }
                )}; 
                }else{
                    return i
                }
             })

            return state = {...state, calendarTime: editTask}; 

        case GET_ITEM: 
            return state = {...state, itemForChange: action.id}

        case IS_MODAL_OPEN: 
            const item = state.calendarTime.find(i => i.id === action.id)

            item.isOpen = true; 
            
            return state = {...state, calendarTime: state.calendarTime.map(i => i.id === item.id ? item : i)}; 
        case IS_MODAL_CLOSE: 
            const item1 = state.calendarTime.find(i => i.id === action.id)

            item1.isOpen = false; 
        
            return state = {...state, calendarTime: state.calendarTime.map(i => i.id === item1.id ? item1 : i)}; 
        default:
            return state
    }
   
}