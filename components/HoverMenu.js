import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Button, Div, Img, Link, P } from '../elements/export';
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const HoverMenu = () => {
  return (
      <Div className={'flex items-center '}>
          <Div className={'bg-[#05448E] absolute rounded-full bottom-10 flex items-center flex-row justify-evenly '} width={35} height={8}>
            <Button>
              <Div className={'flex items-center'} style={{gap:3}}>
                <Img source={require('../assets/home.png')} height={2} width={2}/>
                
                  <P fontSize={1.5} className={'font-semibold text-white'}>
                      Home
                  </P>
              </Div>
              </Button>
              <Button>
                  <Div className={'flex items-center'} style={{ gap: 3 }}>
                  <Img source={require('../assets/qr.png')} height={2} width={2} />
                  <P fontSize={1.5} className={'font-semibold text-white'}>
                      Scan
                  </P>
              </Div>
              </Button>
              <Button>
                  <Div className={'flex items-center'} style={{ gap: 3 }}>
                  <Img source={require('../assets/cb.png')} height={2} width={3} />
                  <P fontSize={1.5} className={'font-semibold text-white'}>
                      Cashback
                  </P>
              </Div>
              </Button>
              <Button>
                  <Div className={'flex items-center'} style={{ gap: 3 }}>
                  <Img source={require('../assets/passbook.png')} height={2.7} width={2} />
                  <P fontSize={1.5} className={'font-semibold text-white'}>
                      Passbook
                  </P>
              </Div>
              </Button>
          </Div>
      </Div>
  )
}
