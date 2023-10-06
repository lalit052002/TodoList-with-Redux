import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './Component/features/contactSLice'


export default configureStore({

  reducer: {
    contact:contactReducer
  },
})



