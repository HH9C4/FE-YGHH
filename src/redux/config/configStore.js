import { configureStore } from "@reduxjs/toolkit"

import chatting from "../modules/chatSlice"

const store = configureStore({
  reducer: {
    chatting,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
//
