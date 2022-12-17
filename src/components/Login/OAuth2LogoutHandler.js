import React from "react"
import { useEffect } from "react"
import Loading from "./Loading"
import { membersApis } from "../../api/instance"

const OAuth2LogoutHandler = () => {

  const kakaoLogout = async (payload) => {
    try {
      const res = await membersApis.logoutAX(payload)
      if (res.data.status === "200 OK") {
        localStorage.removeItem("Authorization")
        localStorage.removeItem("Refresh_Token")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("bookmarkList")
        localStorage.removeItem("sse")
        window.location.replace("/")
      }
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    kakaoLogout()
  }, [])

  return <Loading />
}

export default OAuth2LogoutHandler
