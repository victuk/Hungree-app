import { Link, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { toast } from 'sonner-native';
import { CustomInput } from '~/components/form/CustomInput';
import { LoginForm } from '~/components/form/LoginForm';
import { CustomButton } from '~/components/ui/CustomButton';
import { Title } from '~/components/ui/Title';
import { Wrapper } from '~/components/ui/Wrapper';
import { useAuth } from '~/context/AuthContext';
import { useLogin, useRegister } from '~/lib/tanstack/queries';
import { validateEmail, validatePassword } from '~/utils';

export default function Register() {
  // const navigation = useNavigation();

  const router = useRouter();

  // useEffect(() => {
  //   navigation.setOptions({ title: "Register" });
  // }, [navigation, router]);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [loginDisabled, setLoginDisabled] = useState(false);

  const { firstName, lastName, email, password } = values;

  const disabled =
    firstName.trim() === '' ||
    lastName.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '';

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };

  const handleSubmit = async () => {
    // if (!validateEmail(email)) {
    //   setErrorEmail('Please enter a valid email address');
    //   return;
    // }
    // if (!validatePassword(password)) {
    //   setErrorPassword(
    //     'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    //   );

    //   return;
    // }

    const { data, status } = await useRegister(firstName, lastName, email, password);

    console.log(data?.data);

    // if(isLoading) {setLoginDisabled(true)} else {setLoginDisabled(false)}

    // if(isError) {
    //   toast.error("An error occoured while registering");
    // }

    // router.replace('/');

    console.log({
      email,
      password,
    });
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setErrorEmail('');
    setErrorPassword('');
  };
  return (
    <Wrapper>
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ gap: 20 }}>
          <Title title="Welcome" />
          {/* <LoginForm /> */}

          <CustomInput
            label="First Name"
            placeholder="Enter your first name"
            keyboardType="default"
            value={firstName}
            onChangeText={(text) => handleChange('firstName', text)}
            error={errorEmail}
          />

          <CustomInput
            label="Last Name"
            placeholder="Enter your last name"
            keyboardType="default"
            value={lastName}
            onChangeText={(text) => handleChange('lastName', text)}
            error={errorEmail}
          />

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => handleChange('email', text)}
            error={errorEmail}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            keyboardType="default"
            value={password}
            onChangeText={(text) => handleChange('password', text)}
            error={errorPassword}
            secureTextEntry={secure}
            toggleSecure={toggleSecure}
            password
          />

          <CustomButton
            disabled={disabled || loginDisabled}
            buttonTitle={'Register'}
            onPress={handleSubmit}
          />

          <View>
            <Link href="/login">Already have an account? Login</Link>
          </View>
        </View>
    </KeyboardAvoidingView>
      </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
  register: {
    color: 'blue',
  },
  account: {
    marginTop: 20,
    textAlign: 'center',
  },
});
