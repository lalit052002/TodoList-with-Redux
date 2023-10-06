import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    contacts: [
        {
            id: 1,
            name: "Mayank Kumar",
            email: "mayankkumar@gmail.com",
            phone: "+91767656526",
            status: "Active",
        },
        {
            id: 2,
            name: "Jitender Kumar",
            email: "jitenderskumar@gmail.com",
            phone: "+918878446746",
            status: "Inactive",
        },
        {
            id: 3,
            name: "James Gun",
            email: "jamesgun@gmail.com",
            phone: "+919768446746",
            status: "Active",
        },
        {
            id: 4,
            name: "James Bond",
            email: "jamesbind@gmail.com",
            phone: "+917768446746",
            status: "Inactive",
        },
    ],
    Filter: "All",
    contact: {
        name: "",
        email: "",
        phone: "",
        status: "",
    }
}


export const contactSlice = createSlice({

    name: 'contact',
    initialState,
    reducers: {

        getContact: (state, action) => {
            state.contact = state.contacts.find((data) => data.id == action.payload);
        },
        addContact: (state, action) => {
            const newData = {
                id: nanoid(),
                ...action.payload
            }
                  
            state.contacts.push(newData)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((data) => data.id !== action.payload)
        }
        ,
        updateConatct: (state, action) => {
            state.contacts = state.contacts.map
                ((item) => item.id === action.payload ? action.payload : item);
        },
        setFilter:(state,action)=>{
              state.Filter=action.payload;
        }
    }


})

export const { addContact, deleteContact ,getContact,updateConatct ,setFilter} = contactSlice.actions

export default contactSlice.reducer;