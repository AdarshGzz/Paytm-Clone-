import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Div, Img, Link, P } from '../elements/export';
import { AntDesign } from '@expo/vector-icons';
import PayCard from '../components/PayCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HorizontalCards from '../components/HorizontalCards';
import { OfferCards } from '../components/OfferCards';
import { HoverMenu } from '../components/HoverMenu';
import { useState,useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import Drawer from '../components/Drawer';
import { useNavigation,useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av';

const Payment = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const { yourName, clientName, clientUPI, amount } = route.params;
    const [formattedDateTime, setFormattedDateTime] = useState('');
    const [drawer, SetDrawer] = useState(false)
    const [generatedNumber, setGeneratedNumber] = useState('');
    const [sound, setSound] = useState(null);

    useEffect(() => {
        // Load the sound when the Payment page opens
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/paySound.mp3')
            );
            setSound(sound);
            // Play the sound
            await sound.playAsync();
        };

        loadSound(); // Call the function to load and play the sound

        return () => {
            // Unload the sound when leaving the Payment page
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(()=>{
        generateRandomNumber();
        getCurrentDateTime();
    },[]);

    const getCurrentDateTime = () => {
        const currentDate = new Date();

        // Format the date
        const day = currentDate.getDate().toString().padStart(2, '0');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[currentDate.getMonth()];
        const year = currentDate.getFullYear();

        // Format the time
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 to 12-hour format

        // Combine date and time in the desired format
        const formattedDateTime = `${day} ${month}, ${hours}:${minutes} ${ampm}`;

        setFormattedDateTime(formattedDateTime);
    };

    const generateRandomNumber = () => {
        const initials = '4103332';
        let randomNumber = initials;

        // Generate 6 random digits
        for (let i = 0; i < 5; i++) {
            const digit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            randomNumber += digit.toString();
        }

        setGeneratedNumber(randomNumber);
    };
    // console.log(drawer)
    return (
        <Div>
        <Div className=" h-full flex items-center pt-[6vh] px-4 bg-white ">
            <StatusBar style="dark" />
            {/* <P className={'text-black'}>Payment</P>
          <Img source={require('../assets/tick1.gif')} height={4} width={4} /> */}
            {/* navbar */}
            <Div className={'flex flex-row justify-between items-center  w-full'}>
                    <Button onPress={() => navigation.goBack()} >
                    <AntDesign name="arrowleft" size={20} color="black" />
                    {/* <P className={'text-black    text-xl'}>&larr;</P> */}
                </Button>
                {/* <Icon name="arrowLeft" size={30}  /> */}
                <Div className={'flex items-center justify-center'}>
                    <Img source={require('../assets/payLogo.png')} height={3} width={10} />
                </Div>
                <Link url={'https://www.google.com'}>
                    <P className={'text-[#02B5EE] font-extrabold'}>Help</P>
                </Link>
            </Div>
            <Div className={'mt-5 w-full'}>
                <ScrollView
                    // className={'h-full'}
                    showsVerticalScrollIndicator={false}
                >
                    {/* card */}
                    <PayCard yourName={yourName} formattedDateTime={formattedDateTime} generatedNumber={generatedNumber} clientName={clientName} clientUPI={clientUPI} amount={amount} SetDrawer={SetDrawer} drawer={drawer} />
                    {/* Banks */}
                    <Div className={'flex flex-row p-3 items-center justify-center border border-[#D6D5DD] rounded-xl mt-6'} style={{ gap: hp(1.3) }}>
                        <Div style={{ gap: 4 }} className={'justify-center items-center'}>
                            <P fontSize={1.5} className={'font-bold'}>We've partnered with leading banks</P>
                            <Img source={require('../assets/bank.png')} height={1.5} width={25} />
                        </Div>
                        <Button>
                            <Div className={'rounded-full bg-[#02B5EE]'}>
                                <P fontSize={1.5} className={'font-bold p-2 text-white'}>Know More</P>
                            </Div>
                        </Button>
                    </Div>
                    {/* horizontal cards */}
                    <HorizontalCards />
                    {/* offer cards */}
                    <OfferCards />
                    {/* advertise banner */}
                    <Div className={'mt-5 flex items-center justify-center w-full rounded-lg overflow-hidden'} height={27}>
                        <Img source={require('../assets/fresh.jpg')} className={'h-full w-full'} />
                    </Div>

                </ScrollView>
                <HoverMenu />

            </Div>
                {drawer && (
                    // <Div className={'h-screen w-screen absolute'}>
                    <Drawer formattedDateTime={formattedDateTime} yourName={yourName} clientName={clientName} generatedNumber={generatedNumber}  drawer={drawer} SetDrawer={SetDrawer}/>
                    // </Div>
                )}
            </Div>

        </Div>
        
    )
}

export default Payment


