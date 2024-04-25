import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Button, Div, Img, Input, Link, P } from '../elements/export';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

   const navigation = useNavigation();

    const[yourName,setYourName] = useState('')
    const[clientName,setClientName] = useState('')
    const[clientUPI,setClientUPI] = useState('')
    const[amount,setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
      if (!yourName || !clientName || !clientUPI || !amount) {
        return; // Stop execution if any field is empty
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('Payment', {
          yourName,
          clientName,
          clientUPI,
          amount,
        });
      }, 3000);
    }
  return (
    <Div className={'flex h-full w-full items-center p-3 pt-[60px]'}>
        <Div className={'flex flex-row '} style={{gap:4}}>
              <P fontSize={2} className={'font-semibold text-[#042e6f]'}>Fill</P>
              <P fontSize={2} className={'font-semibold text-[#00baf2]'}>Details</P>
        </Div>
      <ScrollView className={'h-full w-full px-5 pt-10'}>
                  
              <Div className={'flex flex-col items-start justify-center '} style={{ gap:hp(4) }}>
                  <Div className={'w-full'} style={{ gap: 2 }}>
                        <P fontSize={1.6}>Your Name</P>
                    <TextInput
                        style={{ height: hp(3) }}
                        className={'border border-[#042e6f] w-full text-[#00baf2] p-1 '}
                          onChangeText={(input) => { setYourName(input)}}
                        value={yourName}
                    /> 
                  </Div>
                  <Div className={'w-full'} style={{ gap: 2 }}>
                        <P fontSize={1.6}>Reciever's Name</P>
                    <TextInput
                        style={{ height: hp(3) }}
                        className={'border border-[#042e6f] w-full text-[#00baf2] p-1 '}
                        onChangeText={(input)=>{setClientName(input)}}
                        value={clientName}
                    /> 
                  </Div>
                  <Div className={'w-full'} style={{ gap: 2 }}>
                        <P fontSize={1.6}>Reciever's UPI</P>
                    <TextInput
                        style={{ height: hp(3) }}
                        className={'border border-[#042e6f] w-full text-[#00baf2] p-1 '}
                        onChangeText={(input)=>{setClientUPI(input)}}
                        value={clientUPI}
                    /> 
                  </Div>
                  <Div className={'w-full'} style={{ gap: 2 }}>
                        <P fontSize={1.6}>Amount</P>
                    <TextInput
                        style={{ height: hp(3) }}
                        className={'border border-[#042e6f] w-full text-[#00baf2] p-1 '}
                        onChangeText={(input)=>{setAmount(input)}}
                        value={amount}
                    /> 
                  </Div>
                   
                    <Div className={'flex items-center justify-center w-full mt-4'}>
                      <Button
                          className={'bg-[#00baf2] px-7 py-3 flex items-center  justify-center rounded-lg'}
                          onPress={handleSubmit}
                      >
                    <P className={'text-white font-bold'}>Next</P>
                      </Button>
                    </Div>
                </Div>
                 
      </ScrollView>
      {/* Loading screen */}
      {isLoading && (
        <Div
          className={'absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50'}
        >
          <Img height={4} width={11} source={require('../assets/lod.gif')}/>
          {/* <P className={'text-white font-bold text-xl'}>Loading...</P> */}
        </Div>
      )}
    </Div>
  )
}

export default HomeScreen