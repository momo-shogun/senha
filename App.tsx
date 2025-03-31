import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {object, string, number, date, InferType} from 'yup';
import {uppercase, lowercase, numbers, specialCharacters} from './constant';

let passwordSchema = object({
  password: string()
    .required()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be less than 20 characters long'),
});

export default function App() {
  let [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState<string>('8');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(true);

  const generatePasswordString = (passwordLength: string) => {
    const length = parseInt(passwordLength);
    let generatedPassword = '';
    for (let i = 0; i < length && generatedPassword.length < length; i++) {
      generatedPassword += generatePass(length);
    }
    setIsPasswordGenerated(true);
    setPassword(generatedPassword);    
    console.log(password);

    // if (passwordSchema.validateSync(password)) {
    //   setIsPasswordGenerated(true);
    // } else {
    //   setIsPasswordGenerated(false);
    // }
  };

  const generatePass = (length:number) => {
    let pass = '';
    if (isUppercase && pass.length < length) {
      pass += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (isLowercase && pass.length < length) {
      pass += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (isNumber && pass.length < length) {
      pass += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (isSpecialCharacter && pass.length < length) {
      pass +=
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    return pass;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIsUppercase(true);
    setIsLowercase(false);
    setIsNumber(false);
    setIsSpecialCharacter(false);
    setPasswordLength('8');
  };

  return (
    <SafeAreaView className="bg-black h-full pt-20 px-6">
      <View className="">
        <Text className="text-white text-4xl font-bold">
          Password Generator
        </Text>
      </View>
      <View className="my-5 flex flex-row justify-between items-center gap-8">
        <Text className="text-white text-2xl font-bold">Password Length</Text>
        <TextInput
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
          placeholder="ex 8"
          onChangeText={text => setPasswordLength(text)}
          value={passwordLength}
          keyboardType="number-pad"
        />
      </View>
      {/* <View className="my-5 flex flex-row justify-between items-center gap-8">
        <Text className="text-white text-2xl font-bold">
          Include Special Characters
        </Text>
      </View> */}
      <View className='flex-row justify-between items-center gap-8 mt-10'>
      <TouchableOpacity
        className="h-11 rounded-md px-8 bg-primary inline-flex items-center justify-center gap-2 whitespace-nowrap  ring-offset-background transition-colors"
        onPress={() => {
          generatePasswordString(passwordLength);
        }}>
        <Text className="text-primary-foreground text-sm font-medium">Generate Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-11  px-8 border border-input bg-background hover:bg-accent  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  ring-offset-background transition-colors"
        onPress={() => {
          resetPassword();
        }}>
        <Text className="text-secondary-foreground text-sm font-medium">Reset Password</Text>
      </TouchableOpacity>
      </View>
      {isPasswordGenerated && (
        <View className="my-5 rounded-full p-4 justify-center items-center w-full">
          <Text className="text-white text-2xl font-bold">{password}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
