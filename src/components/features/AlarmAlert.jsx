import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AlarmAlert = ({ newNotice, setNewNotice }) => {
  const navigate = useNavigate()
  const userLocation = localStorage.getItem("location")
  useEffect(() => {
    if (newNotice.alarmType !== undefined) {
      setTimeout(() => {
        setNewNotice({})
      }, 3000)
    }
  }, [newNotice])

  const clickMove = () => {
    if (newNotice.alarmType === "eventNewChat") {
      let regex = /[^0-9]/g
      let result = newNotice.articlesId.replace(regex, "")
      navigate(`/ChatRoomPage/${result}`)
    } else if (newNotice.alarmType === "eventGuPost") {
      let regex = /[^0-9]/g
      let result = newNotice.articlesId.replace(regex, "")
      navigate(`/detail/${result}`)
    } else {
      let regex = /[^0-9]/g
      let result = newNotice.articlesId.replace(regex, "")
      navigate(`/detail/${result}`)
    }
  }

  return (
    <div
      className='cursor-pointer'
      onClick={() => clickMove()}
      key={Math.random()}>
      {newNotice.message !== undefined && userLocation !== "chat" ? (
        <div
          className="absolute left-0 top-[76px] w-full mx-auto z-30
                    bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[4px] flex items-start px-[24px] py-[22px]  "
        >
          <div className="relative mt-[4px] bg-bbred w-[8px] h-[8px] rounded-full mr-[8px]">
            <div className="absolute top-[1px] left-[1px] bg-bbred w-[6px] h-[6px] rounded-full animate-ping"></div>
          </div>
          <p

            className="text-b11 font-medium text-bb66 break-all"
          >
            {newNotice.message}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default AlarmAlert
