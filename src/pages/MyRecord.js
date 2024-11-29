// src/pages/Web1280MyRecord.js
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoCount from '../components/InfoCount'
import ComponentRecord from '../components/ComponentRecord'
import MyRecordGraph from '../components/MyRecordGraph'
import ComponentBtn from '../components/ComponentBtn'
import PortalPopup from '../components/PortalPopup'
import Web390DrawrMenue from '../components/Web390DrawrMenue'
import DiaryEntries from '../components/DiaryEntries'

const MyRecord = () => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false)
  const navigate = useNavigate()

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true)
  }, [])

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false)
  }, [])

  const onLogoImageClick = useCallback(() => {
    navigate('/web-1280-top-mypage')
  }, [navigate])

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <section
          className="w-full flex flex-col items-start justify-start gap-[3.5rem] text-left text-[1.375rem] text-darkslategray-100 font-inter">
          <div className="w-full flex flex-row items-start justify-stretch gap-[3rem] flex-wrap mt-16">
            <ComponentRecord
              img="/-91.svg"
              myRecommend1="/myrecommend1@2x.png"
              title={'BODY RECORD'}
              buttonText={'自分のカラダの記録'}
            />
            <ComponentRecord
              img="/-91.svg"
              myRecommend1="/myrecommend2@2x.png"
              mYEXERCISE="MY EXERCISE"
              title={'MY EXERCISE'}
              buttonText={'自分の運動の記録'}
            />
            <ComponentRecord
              img="/-91.svg"
              myRecommend1="/myrecommend3@2x.png"
              mYEXERCISE="MY DIARY"
              title={'MY DIARY'}
              buttonText={'自分の日記'}
            />
          </div>
        </section>
        <section className={'w-full mt-10'}>
          <MyRecordGraph/>
          <div className="w-full flex flex-col items-start justify-start mt-10">
            <h1
              className="m-0 w-[14.375rem] relative text-inherit tracking-[0.11px] leading-[1.688rem] font-normal font-inter inline-block">
              MY DIARY
            </h1>
            <DiaryEntries/>
          </div>
        </section>
      </div>
      {isWeb390DrawrMenueOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWeb390DrawrMenue}
        >
          <Web390DrawrMenue onClose={closeWeb390DrawrMenue}/>
        </PortalPopup>
      )}
    </>
  )
}

export default MyRecord