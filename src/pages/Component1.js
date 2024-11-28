import FrameComponent1 from "../components/FrameComponent1";
import ComponentBtn from "../components/ComponentBtn";
import ComponentDropdownMenu from "../components/ComponentDropdownMenu";
import ComponentPhoto from "../components/ComponentPhoto";
import ComponentRecord from "../components/ComponentRecord";
import ComponentColumn from "../components/ComponentColumn";
import Footer from "../components/Footer";

const Component1 = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[2rem] pb-[11.062rem] pl-[5rem] pr-[3.875rem] box-border gap-[4.375rem] leading-[normal] tracking-[normal] mq700:gap-[1.063rem] mq950:gap-[2.188rem] mq950:pl-[2.5rem] mq950:pr-[1.938rem] mq950:box-border">
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-start justify-start gap-[0.375rem] max-w-full text-left text-[0.688rem] text-darkslategray-200 font-hiragino-kaku-gothic-pro">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[3.375rem] max-w-full mq950:gap-[1.688rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4.875rem] max-w-full mq450:min-w-full mq950:gap-[1.188rem] mq975:gap-[2.438rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem] max-w-full">
              <div className="self-stretch h-[18.125rem] relative max-w-full mq700:h-auto mq700:min-h-[290]">
                <div className="absolute top-[0rem] left-[29.5rem] w-[22.5rem] flex flex-col items-start justify-start gap-[12.187rem]">
                  <div className="w-[18.5rem] flex flex-col items-start justify-start gap-[0.437rem]">
                    <div className="w-[8.75rem] flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0.062rem] box-border">
                      <div className="flex-1 relative tracking-[0.03px] leading-[1rem]">
                        ボタン
                      </div>
                    </div>
                    <ComponentBtn
                      componentBtnPosition="relative"
                      componentBtnTop="unset"
                      componentBtnLeft="unset"
                      componentBtnWidth="unset"
                      componentBtnAlignSelf="stretch"
                      componentBtnFlex="unset"
                      prop="pending_I0:179;0:621"
                      prop1="記録をもっと見る"
                      h1Width="calc(100% - 7px)"
                      h1Height="1.625rem"
                      h1Margin="0"
                      h1FontWeight="400"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end">
                    <div className="w-[12.063rem] relative tracking-[0.03px] leading-[1rem] inline-block shrink-0">
                      コラムサムネイル用パーツ
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[51.375rem] w-[17.5rem] flex flex-col items-start justify-start gap-[0.437rem]">
                  <div className="self-stretch relative tracking-[0.03px] leading-[1rem]">
                    ハンバーガーメニュー用
                  </div>
                  <ComponentDropdownMenu placeholder="自分の記録" />
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[31.938rem] flex flex-col items-start justify-start gap-[7.187rem] max-w-full">
                  <div className="w-[19.688rem] flex flex-col items-start justify-start gap-[0.437rem]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.375rem] mq700:flex-wrap">
                      <div className="w-[8.563rem] relative tracking-[0.03px] leading-[1rem] inline-block shrink-0">
                        六角形メニュー用
                      </div>
                      <div className="flex-1 relative tracking-[0.03px] leading-[1rem] inline-block min-w-[6.438rem]">
                        六角形メニュー用アイコン
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[1.5rem] text-center text-[1.25rem] text-white font-inter">
                      <div className="h-[8.5rem] w-[8.5rem] flex flex-col items-start justify-start py-[1.75rem] pl-[1.812rem] pr-[1.75rem] box-border relative">
                        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] z-[0]" />
                        <div className="w-[4.188rem] h-[3.5rem] flex flex-row items-start justify-start py-[0rem] pl-[0.687rem] pr-[0rem] box-border z-[4]">
                          <img
                            className="h-[3.5rem] w-[3.5rem] relative"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="w-[4.938rem] h-[1.5rem] flex flex-row items-start justify-start relative z-[3]">
                          <img
                            className="h-[8.375rem] w-[7.25rem] absolute !m-[0] top-[-5.187rem] left-[-1.187rem] object-contain z-[0]"
                            alt=""
                          />
                          <h2 className="m-0 h-[1.5rem] w-[5rem] relative text-inherit leading-[1.5rem] font-normal font-[inherit] inline-block shrink-0 z-[1]">
                            Morning
                          </h2>
                        </div>
                      </div>
                      <img className="h-[3.5rem] w-[3.5rem] relative" alt="" />
                      <img
                        className="h-[3.5rem] w-[3.5rem] relative object-contain"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq950:flex-wrap">
                    <div className="w-[11.813rem] relative tracking-[0.03px] leading-[1rem] inline-block shrink-0">
                      トップページサムネイル用パーツ
                    </div>
                    <div className="w-[14rem] relative tracking-[0.03px] leading-[1rem] inline-block shrink-0">
                      自分の記録カテゴリ用パーツ
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[3.375rem] max-w-full mq450:flex-wrap mq700:gap-[1.688rem]">
                <ComponentPhoto />
                <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem]">
                  <ComponentRecord
                    prop="pending_I0:180;0:613"
                    myRecommend1="pending_I0:180;0:614"
                  />
                </div>
                <ComponentColumn />
              </div>
            </div>
            <div className="w-[14.563rem] relative tracking-[0.03px] leading-[1rem] inline-block">
              フッター
            </div>
          </div>
          <div className="w-[8.313rem] flex flex-col items-start justify-start gap-[0.437rem]">
            <div className="self-stretch relative tracking-[0.03px] leading-[1rem]">
              トップへ戻る
            </div>
            <img className="w-[3rem] h-[3rem] relative" loading="lazy" alt="" />
          </div>
        </div>
        <Footer
          footerPosition="relative"
          footerTop="unset"
          footerLeft="unset"
          footerDisplay="flex"
          footerFlexDirection="row"
          footerAlignItems="flex-start"
          footerJustifyContent="flex-start"
          footerPadding="3.5rem 10rem"
          footerGap="2.812rem"
          divMargin="0 !important"
          h3Margin="unset"
          h3Position="relative"
          h3Top="unset"
          h3Left="unset"
          h3FontWeight="unset"
          h3MinWidth="unset"
          h3Height="1rem"
          h3Width="2.875rem"
          h3Margin1="unset"
          h3Position1="relative"
          h3Top1="unset"
          h3Left1="unset"
          h3FontWeight1="unset"
          h3MinWidth1="unset"
          h3Height1="1rem"
          h3Width1="2.875rem"
          h3Margin2="unset"
          h3Position2="relative"
          h3Top2="unset"
          h3Left2="unset"
          h3FontWeight2="unset"
          h3MinWidth2="unset"
          h3Height2="1rem"
          h3Width2="2.875rem"
          h3Margin3="unset"
          h3Position3="relative"
          h3Top3="unset"
          h3Left3="unset"
          h3FontWeight3="unset"
          h3MinWidth3="unset"
          h3Height3="1rem"
          h3Width3="7.625rem"
          h3Margin4="unset"
          h3Position4="relative"
          h3Top4="unset"
          h3Left4="unset"
          h3FontWeight4="unset"
          h3Height4="1rem"
          h3Width4="8.375rem"
          h3Display="inline-block"
          h3Margin5="unset"
          h3Position5="relative"
          h3Top5="unset"
          h3Right="unset"
          h3FontWeight5="unset"
          h3MinWidth4="unset"
          h3Height5="1rem"
          h3Width5="4.25rem"
        />
      </section>
    </div>
  );
};

export default Component1;
