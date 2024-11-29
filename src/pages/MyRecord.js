// src/pages/Web1280MyRecord.js
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoCount from '../components/InfoCount'
import ComponentRecord from '../components/ComponentRecord'
import MyRecordGraph from '../components/MyRecordGraph'
import ComponentBtn from '../components/ComponentBtn'
import PortalPopup from '../components/PortalPopup'
import Web390DrawrMenue from '../components/Web390DrawrMenue'

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
          <div className="w-full flex flex-col items-start justify-start">
            <h1
              className="m-0 w-[14.375rem] relative text-inherit tracking-[0.11px] leading-[1.688rem] font-normal font-[inherit] inline-block">
              MY DIARY
            </h1>
            <div className="w-full flex flex-col items-start justify-start gap-[1.5rem]">
              <img
                className="w-full relative max-w-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/-3.svg"
              />
              <div className="w-full flex flex-row items-center justify-center">
                <ComponentBtn
                  componentBtnPosition="relative"
                  componentBtnTop="unset"
                  componentBtnLeft="unset"
                  componentBtnWidth="unset"
                  componentBtnAlignSelf="unset"
                  componentBtnFlex="1"
                  prop="/-88.svg"
                  prop1="自分の日記をもっと見る"
                  h1Width="calc(100% - 7px)"
                  h1Height="1.625rem"
                  h1Margin="0"
                  h1FontWeight="400"
                />
              </div>
            </div>
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