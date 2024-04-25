import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Button, Div, Img, Link, P } from '../elements/export';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useRef,useState,useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import Shares from '../screens/Shares';
import { useNavigation } from '@react-navigation/native';

const PayCard = ({ yourName, formattedDateTime,generatedNumber,SetDrawer, drawer, clientName, clientUPI, amount }) => {
    const navigation = useNavigation();

    const navigateTioShares=()=>{
        navigation.navigate('Shares', {
            dateFormat,
            generatedNumber,
            clientName,
            clientUPI,
            amount,
            yourName,
        });
    }
    const [initials, setInitials] = useState('');
    const [dateFormat, setDateFormat] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    
    // console.log(generatedNumber)
    useEffect(()=>{
        extractInitials();
        setDateFormat(formattedDateTime);
        extractLastFourDigits();
    }, [generatedNumber,formattedDateTime])
//    console.log(dateFormat)
    const extractLastFourDigits = () => {
        // Ensure inputNumber is a valid number
        if (!isNaN(generatedNumber) && generatedNumber.length >= 4) {
            // Extract last four digits using substring
            const extractedDigits = generatedNumber.substring(generatedNumber.length - 4);
            setLastFourDigits(extractedDigits);
        } else {
            // Handle invalid input
            setLastFourDigits('Invalid input');
        }
    };
    // console.log(lastFourDigits)
    const extractInitials = () => {
        // Split the input string into words
        const words = clientName.trim().split(' ');

        if (words.length >= 2) {
            // Extract the first and last words
            const firstWord = words[0];
            const lastWord = words[words.length - 1];

            // Get the initials of the first and last words
            const firstInitial = firstWord.charAt(0).toUpperCase();
            const lastInitial = lastWord.charAt(0).toUpperCase();

            // Set the initials state
            setInitials(`${firstInitial}${lastInitial}`);
        } else {
            // Handle cases where there are not enough words
            setInitials('PY');
        }
    };
    // const getCurrentDateTime = () => {
    //     const currentDate = new Date();

    //     // Format the date
    //     const day = currentDate.getDate().toString().padStart(2, '0');
    //     const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //     const month = monthNames[currentDate.getMonth()];
    //     const year = currentDate.getFullYear();

    //     // Format the time
    //     let hours = currentDate.getHours();
    //     const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12 || 12; // Convert 0 to 12-hour format

    //     // Combine date and time in the desired format
    //     const formattedDateTime = `${day} ${month}, ${hours}:${minutes} ${ampm}`;

    //     setFormattedDateTime(formattedDateTime);
    // };


    // const ShareDetail = () => {
    //     return (
    //         <ViewShot ref={viewRef} options={{ format: 'jpg', quality: 0.9 }}>
    //             <Div className={'w-full h-full bg-[#FAFAFA] p-5 '}>
    //                 <Div className={' mt-10 flex items-center justify-center'}>
    //                     <Img source={require('../assets/payLogo.png')} height={3.5} width={11} />
    //                 </Div>

    //                 <Div className={'bg-[#02B5EE] w-full rounded-t-xl flex mt-10 items-center justify-start overflow-hidden'} height={27} >
    //                     <Div className={'bg-[#DDF6FF] w-full rounded-t-xl flex items-center  p-2 '} height={24} >
    //                         <Div className={'flex flex-row items-center pt-8'}>
    //                             {/* Payment successfull */}
    //                             <Div className={'px-1 flex flex-col'} style={{ gap: hp(.1) }}>
    //                                 <P fontSize={2.3} className={'font-bold'}>Payment Successful</P>
    //                             </Div>
    //                         </Div>
    //                         {/* amount */}
    //                         <Div className={'flex flex-row items-center justify-center p-5'} style={{ gap: 4 }}>
    //                             <P fontSize={4.4} className={'font-bold'}>10000</P>
    //                             <Img source={require('../assets/tick1.gif')} height={4} width={4} />
    //                         </Div>
    //                         {/* price in alphabets */}
    //                         <Div className={'mt-1'}>
    //                             <P fontSize={1.9} className={'font-normal capitalize'}>Rupees Ten Thousands Only</P>
    //                         </Div>
    //                     </Div>
    //                     <Div className={'bg-[#07306F]  w-full mt-3 '} height={4} />
    //                 </Div>
    //                 <Div className={'mt-10'}>
    //                     <Img source={require('../assets/bg.png')} height={33.4} className={'w-full  '} />
    //                     {/* details */}
    //                     <Div className={' absolute px-6 py-5 w-full '} >
    //                         <Div className={'flex item-start justify-center'} style={{ gap: 8 }}>
    //                             <P fontSize={2.1} className={' font-semibold'}>
    //                                 To: Anita Gupta
    //                             </P>
    //                             <P fontSize={1.5}>
    //                                 anitagupta797400@paytm
    //                             </P>
    //                         </Div>
    //                         <Div className={'w-full h-0 border border-[#77777777] border-dashed mt-7'} />
    //                         <Div className={'flex item-start justify-between flex-row mt-7'} >
    //                             <Div style={{ gap: 8 }}>
    //                                 <P fontSize={2.1} className={' font-semibold'}>
    //                                     From: Adarsh Kumar Gupta
    //                                 </P>
    //                                 <P fontSize={1.5}>
    //                                     State Bank Of India - 2371
    //                                 </P>
    //                             </Div>
    //                             <Div>
    //                                 <Img source={require('../assets/sbi.png')} height={6} width={6} />
    //                             </Div>
    //                         </Div>
    //                         <Div style={{ gap: 5 }} className={'mt-5'}>
    //                             <Div style={{ gap: 5 }} className={'flex flex-row items-center'}>
    //                                 <P fontSize={1.5} >
    //                                     UPI Ref. No: 4103332
    //                                 </P>
    //                                 <P fontSize={1.5} className={' font-semibold'}>
    //                                     57221
    //                                 </P>
    //                             </Div>
    //                             <P fontSize={1.5} className={'text-black/50'}>
    //                                 12 Apr 2024, 06:48 PM
    //                             </P>
    //                         </Div>
    //                     </Div>
    //                     <Div className={'flex items-center justify-center mt-10'} style={{ gap: 5 }}>
    //                         <P fontSize={1.5} className={'text-black/60 font-semibold'} >
    //                             Powered by
    //                         </P>
    //                         <Img source={require('../assets/upi.png')} height={2} width={6} />
    //                     </Div>
    //                 </Div>
    //             </Div>
    //         </ViewShot>
    //     )
    // }

  return (
      <Div className={'bg-[#02B5EE] w-full rounded-xl flex items-center justify-start overflow-hidden'} height={40} >
          {/* name and upi */}
          <Div className={'bg-[#DDF6FF] w-full rounded-t-xl flex items-center justify-between p-2 '} height={36} >
              <Div className={'flex flex-row items-center pt-5'}>
                  <Div className={'rounded-full bg-purple-500 flex items-center justify-center'} height={7} width={7}>
                      <P className={'text-white'} fontSize={2.5}>{initials}</P>
                  </Div>
                  <Div className={'px-4 flex flex-col'} style={{gap:hp(1.8)}}>
                      <P fontSize={2.3} className={'font-bold'}>{clientName}</P>
                      <P fontSize={1.8} className={'tracking-widest'}>{clientUPI}</P>
                  </Div>
              </Div>
              {/* amount */}
              <Div className={'flex flex-row items-center justify-center p-5'} style={{gap:4}}>
                  <FontAwesome5 name="rupee-sign" size={hp(3.9)} color="black" style={{marginTop:hp(.5)}} />
                  <P fontSize={4.4} className={'font-bold'}>{amount}</P>
                  <Img source={require('../assets/tick1.gif')} height={4} width={4} />
              </Div>
              {/* date */}
              <Div className={'mt-3'}>
                  <P fontSize={1.6} className={'font-bold'}>{dateFormat}</P>
              </Div>
              {/* reciete */}
              <Button onPress={() => SetDrawer(true)}>
                  <Div className={'flex flex-row items-center justify-center mt-4'}>
                      <P fontSize={1.7} className={'font-bold text-[#00BAF6] tracking-widest'} >Ref. No: XX {lastFourDigits} </P>
                      <AntDesign name="down" size={16} color="#00BAF6" />
                  </Div>
              </Button>
              {/* buttons */}
              <Div className={'flex flex-row items-center justify-center mt-4 '} style={{ gap: 5 }}>
                  <Button>
                      <Div className={'bg-white p-3 rounded-full border border-[#E4EFF2] '}>
                          <P fontSize={1.4} className={'font-bold'}>Check Balance</P>
                      </Div>
                  </Button>
                  {/* sharing */}

                  {/* <ViewShot ref={viewRef} options={{ format: 'jpg', quality: 0.9 ,}} >
                      <Shares/>
                  </ViewShot> */}
                  {/*  */}
                  <Button onPress={navigateTioShares}>
                      <Div className={'bg-white p-3 rounded-full border border-[#E4EFF2] '}>
                          <P fontSize={1.4} className={'font-bold'}>Share</P>
                      </Div>
                  </Button>
                  <Button>
                      <Div className={'bg-white p-3 rounded-full border border-[#E4EFF2] '}>
                          <P fontSize={1.4} className={'font-bold'}>Pay Again</P>
                      </Div>
                  </Button>
              </Div>
          </Div>
          {
              drawer && <Div className={'bg-[#07306F]  w-full mt-3 '} height={4} />
          }
          
          <P className={'text-white font-medium pt-2'} fontSize={1.5}>Your payment took less than 4 seconds!🚀</P>
      </Div>
  )
}

export default PayCard
