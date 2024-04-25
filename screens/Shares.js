import React, { useRef, useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import { Button, Div, Img, Link, P } from '../elements/export';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Shares = () => {
    const route = useRoute(); 
    const navigation = useNavigation();
    const viewRef = useRef();
    const { yourName, dateFormat, generatedNumber, clientName, clientUPI, amount } = route.params;
   
    const [numToWord,setNumToWord] = useState('');
    const [lastFiveDigits, setLastFiveDigits] = useState('');

    useEffect(() => {
        convertNumberToWords(amount);
        extractLastFiveDigits();
        // shareScreenshot();
    }, []);

    const extractLastFiveDigits = () => {
        if (!isNaN(generatedNumber) && generatedNumber.length >= 5) {
            const extractedDigits = generatedNumber.substring(generatedNumber.length - 5);
            setLastFiveDigits(extractedDigits);
        } else {
            setLastFiveDigits('Invalid input');
        }
    };

    const shareScreenshot = async () => {
        try {
            const screenshot = await viewRef.current.capture();
            Sharing.shareAsync(screenshot);
        } catch (error) {
            Alert.alert('Error sharing screenshot:', error.message);
        }
    };
    const navigateBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };
    
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
    const convertThreeDigit = (num) => {
        let str = '';
        if (num >= 100) {
            str += units[Math.floor(num / 100)] + ' hundred ';
            num %= 100;
        }
        if (num >= 10 && num <= 19) {
            str += teens[num - 10];
            return str;
        } else if (num >= 20) {
            str += tens[Math.floor(num / 10)];
            num %= 10;
        }
        if (num > 0) {
            str += ' ' + units[num];
        }
        return str;
    };
    const convertNumberToWords = (num) => {
        if (num === 0) return 'zero';

        let words = '';
        let chunkCount = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                const chunk = convertThreeDigit(num % 1000);
                words = chunk + ' ' + thousands[chunkCount] + ' ' + words;
            }
            num = Math.floor(num / 1000);
            chunkCount++;
        }

         setNumToWord(words.trim())
    };

    return (
        <Div className={'w-full h-full bg-[#FAFAFA]  '}>
            <ViewShot ref={viewRef} options={{ format: 'jpg', quality: 0.9 }} className="bg-[#FAFAFA] p-5">
                <Div className={' mt-10 flex items-center justify-center'}>
                    <Img source={require('../assets/payLogo.png')} height={3.5} width={11} />
                </Div>

                <Div className={'bg-[#02B5EE] w-full rounded-t-xl flex mt-10 items-center justify-start overflow-hidden'} height={27} >
                    <Div className={'bg-[#DDF6FF] w-full rounded-t-xl flex items-center  p-2 '} height={24} >
                        <Div className={'flex flex-row items-center pt-8'}>
                            {/* Payment successfull */}
                            <Div className={'px-1 flex flex-col'} style={{ gap: hp(.1) }}>
                                <P fontSize={2.3} className={'font-bold'}>Payment Successful</P>
                            </Div>
                        </Div>
                        {/* amount */}
                        <Div className={'flex flex-row items-center justify-center p-5'} style={{ gap: 4 }}>
                            <FontAwesome5 name="rupee-sign" size={hp(3.9)} color="black" style={{ marginTop: hp(.5) }} />
                            <P fontSize={4.4} className={'font-bold'}>{amount}</P>
                            <Img source={require('../assets/tickimg.png')} height={4} width={4} />
                        </Div>
                        {/* price in alphabets */}
                        <Div className={'mt-1'}>
                            <P fontSize={1.7} className={'font-sm text-center capitalize p-2'}>Rupees {numToWord} Only</P>
                        </Div>
                    </Div>
                    <Div className={'bg-[#07306F]  w-full mt-3 '} height={4} />
                </Div>
                <Div className={'mt-10'}>
                    <Img source={require('../assets/bg.png')} height={33.4} className={'w-full  '} />
                    {/* details */}
                    <Div className={' absolute px-6 py-5 w-full '} >
                        <Div className={'flex item-start justify-center'} style={{ gap: 8 }}>
                            <P fontSize={2.1} className={' font-semibold'}>
                                To: {clientName}
                            </P>
                            <P fontSize={1.5}>
                                {clientUPI}
                            </P>
                        </Div>
                        <Div className={'w-full h-0 border border-[#77777777] border-dashed mt-7'} />
                        <Div className={'flex item-start justify-between flex-row mt-7'} >
                            <Div style={{ gap: 8 }}>
                                <P fontSize={2.1} className={' font-semibold'}>
                                    From: {yourName}
                                </P>
                                <P fontSize={1.5}>
                                    State Bank Of India - 3271
                                </P>
                            </Div>
                            <Div>
                                <Img source={require('../assets/sbi.png')} height={6} width={6} />
                            </Div>
                        </Div>
                        <Div style={{ gap: 5 }} className={'mt-5'}>
                            <Div style={{ gap: 5 }} className={'flex flex-row items-center'}>
                                <P fontSize={1.5} >
                                    UPI Ref. No: 4103332
                                </P>
                                <P fontSize={1.5} className={' font-semibold'}>
                                    {lastFiveDigits}
                                </P>
                            </Div>
                            <P fontSize={1.5} className={'text-black/50'}>
                                {dateFormat}
                            </P>
                        </Div>
                    </Div>
                    <Div className={'flex items-center justify-center mt-10'} style={{ gap: 5 }}>
                        <P fontSize={1.5} className={'text-black/60 font-semibold'} >
                            Powered by
                        </P>
                        <Img source={require('../assets/upi.png')} height={2} width={6} />
                    </Div>
                </Div>
            </ViewShot>
            <Div className={'flex flex-row justify-between items-center px-10'}>
                <Button onPress={navigateBack}>
                    <Div className={'bg-white p-3 rounded-full border border-[#E4EFF2] '}>
                        <P fontSize={1.4} className={'font-bold'}>Back</P>
                    </Div>
                </Button>
                <Button onPress={shareScreenshot}>
                    <Div className={'bg-white p-3 rounded-full border border-[#E4EFF2] '}>
                        <P fontSize={1.4} className={'font-bold'}>Share</P>
                    </Div>
                </Button>
            </Div>
            
        </Div>
    )
}

export default Shares
