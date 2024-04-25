import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Input = () => {
    const [text, setText] = useState('');


    const handleInputChange = (input) => {
        setText(input);
    }

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={handleInputChange}
                value={text}
            />
        </View>
    );
}

export default Input;