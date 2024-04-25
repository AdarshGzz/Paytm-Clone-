import React from 'react'

import { Text, View, ScrollView } from 'react-native';
import { Button, Div, Img, Link, P } from '../elements/export';
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';




const HorizontalCards = () => {
    return (
        <ScrollView
            horizontal={true}
            className={'mt-6 flex flex-row'}
            style={{ gap: 5 }}
            showsHorizontalScrollIndicator={false}
        >
            <Div
                className={'flex flex-row'}
                style={{ gap: hp(1.6) }}
            >
                <Div className={'bg-[#F6F8FE] rounded-xl flex items-start justify-center p-2 '} height={11} width={10}>
                    <P>Deals for You</P>
                    <Div className={'flex flex-row items-center justify-center'}>
                        <P className={'text-[#02B5EE] font-extrabold'}>Help</P>
                        <AntDesign name="right" size={16} color="#02B5EE" />
                    </Div>
                </Div>
                {/*  */}
                <Div className={' rounded-xl overflow-hidden  '} height={11} width={14}>
                    <Img source={require('../assets/spek.jpg')} height={11} className={'w-full'} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,2)']}
                        className={'absolute h-full w-full flex items-start justify-end '}
                    >

                        <Div className={'  p-2'}>
                            <P fontSize={1.6} className={'text-white font-bold'}>Boat</P>
                            <P fontSize={1.3} className={'text-[#25AF70] font-semibold bg-gradient-to-b from-[#0000001d] to-slate-800'}>upto 50% off*</P>
                        </Div>
                    </LinearGradient>
                </Div>
                <Div className={' rounded-xl overflow-hidden  '} height={11} width={14}>
                    <Img source={require('../assets/earp.jpg')} height={11} className={'w-full'} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,2)']}
                        className={'absolute h-full w-full flex items-start justify-end '}
                    >

                        <Div className={'  p-2'}>
                            <P fontSize={1.6} className={'text-white font-bold'}>Noice</P>
                            <P fontSize={1.3} className={'text-[#25AF70] font-semibold bg-gradient-to-b from-[#0000001d] to-slate-800'}>Earbuds at 900</P>
                        </Div>
                    </LinearGradient>
                </Div>
                <Div className={' rounded-xl overflow-hidden  '} height={11} width={14}>
                    <Img source={require('../assets/head.jpg')} height={11} className={'w-full'} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,2)']}
                        className={'absolute h-full w-full flex items-start justify-end '}
                    >

                        <Div className={'  p-2'}>
                            <P fontSize={1.6} className={'text-white font-bold'}>Deals for You</P>
                            <P fontSize={1.3} className={'text-[#25AF70] font-semibold bg-gradient-to-b from-[#0000001d] to-slate-800'}>Help</P>
                        </Div>
                    </LinearGradient>
                </Div>
                <Div className={' rounded-xl overflow-hidden  '} height={11} width={14}>
                    <Img source={require('../assets/spek.jpg')} height={11} className={'w-full'} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,2)']}
                        className={'absolute h-full w-full flex items-start justify-end '}
                    >

                        <Div className={'  p-2'}>
                            <P fontSize={1.6} className={'text-white font-bold'}>Deals for You</P>
                            <P fontSize={1.3} className={'text-[#25AF70] font-semibold bg-gradient-to-b from-[#0000001d] to-slate-800'}>Help</P>
                        </Div>
                    </LinearGradient>
                </Div>
                <Div className={' rounded-xl overflow-hidden  '} height={11} width={14}>
                    <Img source={require('../assets/earp.jpg')} height={11} className={'w-full'} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,2)']}
                        className={'absolute h-full w-full flex items-start justify-end '}
                    >

                        <Div className={'  p-2'}>
                            <P fontSize={1.6} className={'text-white font-bold'}>Deals for You</P>
                            <P fontSize={1.3} className={'text-[#25AF70] font-semibold bg-gradient-to-b from-[#0000001d] to-slate-800'}>Help</P>
                        </Div>
                    </LinearGradient>
                </Div>
            </Div>

        </ScrollView>
    )
}

export default HorizontalCards