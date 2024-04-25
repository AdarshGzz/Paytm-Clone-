import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Div, Img, Link, P } from '../elements/export';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';

const Drawer = ({ yourName, formattedDateTime, clientName,generatedNumber,drawer, SetDrawer }) => {
  return (
      <Div className={'h-[105vh] w-screen absolute -pb-20 bg-[#00000081] flex justify-end'} >
          <Div  className={'bg-white w-full bottom-0 rounded-xl'} height={55} style={{gap:10}}>
              <Div className={'p-6 pt-8 flex  w-full items-start'}>
                {/* heading */}
                  <Div className={'flex flex-row items-center w-full justify-between'}>
                      <P fontSize={2.8} className={'font-bold'}>
                          Payment Details
                      </P>
                      <Button onPress={() => SetDrawer(false)} className={'rounded-full bg-[#7E7E7E] flex items-center justify-center'} height={4} width={4}>
                          <Entypo name="cross" size={24} color="white" />
                      </Button>
                  </Div>
                {/* Details */}
                <Div className={'flex flex-row mt-5'} style={{gap:8}}>
                      <P fontSize={1.5} className={'font-bold'}>UPI Ref. No: {generatedNumber}</P>
                      <Button>
                          <P fontSize={1.5} className={'font-bold text-[#02B5EE]'}>Copy</P>
                      </Button>
                </Div>
                {/* text */}
                <Div className={'mt-4'}>
                    <P fontSize={1.4}>
                          You can check the status of this payment with your bank (State Bank Of India) using this UPI Ref. Id.
                    </P>
                    {/* date and time */}
                      <P fontSize={1.4} className={'text-[#00000097] mt-3'}>
                          {formattedDateTime}
                      </P>
                </Div>
                <Div className={'border-dashed w-full tracking-widest  border border-[#00000044] mt-4'}/>
              </Div>
              {/* success path */}
              <Div className={'relative p-2 pl-10 -mt-5'}>
                <Div className={'bg-black'} height={20} width={.1} />
                {/* points */}
                <Div className={'flex flex-row items-start absolute'} style={{gap:4,marginLeft:hp(3.5)}}>
                    {/* tick */}
                    <Div height={2.5} width={2.5} className={'bg-[#26A45B] flex items-center justify-center  rounded-full'}>
                          <P fontSize={'1.3'} className={'text-white mr-1'}> &#10003;</P> 
                    </Div>
                    {/* detail */}
                      <Div className={'flex flex-row items-center justify-start'} style={{ gap: 3 }}>
                          <P fontSize={1.6} className={'font-normal'}>Payment Started by</P>
                          <P fontSize={1.6} className={'font-bold'}>{yourName}</P>
                    </Div>
                </Div>
                <Div className={'flex flex-row items-start absolute'} style={{gap:4,marginLeft:hp(3.5),marginTop:hp(7)}}>
                    {/* tick */}
                    <Div height={2.5} width={2.5} className={'bg-[#26A45B] flex items-center justify-center  rounded-full'}>
                        <P fontSize={'1.3'} className={'text-white mr-1'}> &#10003;</P> 
                    </Div>
                    {/* detail */}
                      <Div className={'flex flex-col justify-start'} style={{ gap: 15 }}>
                          <P fontSize={1.6} className={'font-normal'}>Money transferred from {yourName}'s State
                              Bank Of India A/c - 2371</P>
                          {/* <P fontSize={1.6} className={'font-bold'}>Adarsh Kumar Gupta</P> */}
                          <Button className={'border border-[#02B5EE] rounded-full flex items-center justify-center'} height={4} width={13}>
                              <P fontSize={1.4} className={'text-[#02B5EE] font-bold'}>Check Balance</P>
                          </Button>
                    </Div>
                </Div>
                  <Div className={'flex flex-row items-start absolute'} style={{ gap: 4, marginLeft: hp(3.5),marginTop:hp(19) }}>
                      {/* tick */}
                      <Div height={2.5} width={2.5} className={'bg-[#26A45B] flex items-center justify-center  rounded-full'}>
                          <P fontSize={'1.3'} className={'text-white mr-1'}> &#10003;</P>
                      </Div>
                      {/* detail */}
                      <Div className={'flex flex-row items-center justify-start'} style={{ gap: 3 }}>
                          <P fontSize={1.6} className={'font-normal'}>Money sent to {clientName}'s A/c</P>
                      </Div>
                  </Div>
              </Div>
          </Div>
      </Div>
  )
}

export default Drawer