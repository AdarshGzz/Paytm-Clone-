import React from 'react'
import { Button, Div, Img, Link, P } from '../elements/export';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const OfferCards = () => {
  return (
      <Div className={'flex flex-row justify-evenly mt-5'} style={{ gap: hp(1) }}>
          <Div className={'bg-[#FDD730] rounded-lg overflow-hidden flex justify-start items-center'} height={17} width={13.4} >
              <Img source={require('../assets/myntra.png')} height={13} width={13.4} />
              <P fontSize={2.5} className={'font-bold p-1'}>90% off*</P>
          </Div>
          <Div className={'bg-[#FDD730] rounded-lg overflow-hidden flex justify-start items-center'} height={17} width={13.4} >
              <Img source={require('../assets/pubg.jpg')} height={13} width={13.4} />
              <P fontSize={2.5} className={'font-bold p-1'}>43% Bonus</P>
          </Div>
          <Div className={'bg-[#FDD730] rounded-lg overflow-hidden flex justify-start items-center'} height={17} width={13.4} >
              <Img source={require('../assets/mc.jpeg')} height={13} width={13.4} />
              <P fontSize={2.5} className={'font-bold p-1'}>₹200 off*</P>
          </Div>
      </Div>
  )
}
