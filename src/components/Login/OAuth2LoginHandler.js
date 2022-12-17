import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"
import { membersApis } from "../../api/instance"

const OAuth2LoginHandler = () => {

  // const [newNotice, setNewNotice] = useRecoilState(notificationSSE)

  //카카오 로그인
  const navigate = useNavigate()
  let object = ""
  const kakaoLogin = async (payload) => {
    try {
      const res = await membersApis.kakaologinAX(payload)
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("Refresh_Token", res.headers.refresh)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("location", null)
      localStorage.setItem("gu", null)
      localStorage.setItem("site", "kakao")
      if (res.data.data.kakaoUser) {
        localStorage.setItem("othersite", res.data.data.naverUser)
      }
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      window.location.replace("/")
      navigate('/home', object)
    } catch (error) {
      return
    }
  }

  let code = new URL(window.location.href).searchParams.get("code")

  useEffect(() => {
    kakaoLogin(code)
  }, [])

  return <Loading />
}

export default OAuth2LoginHandler
