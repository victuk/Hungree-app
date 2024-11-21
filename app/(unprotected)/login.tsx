import { Link, useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';
import { toast } from 'sonner-native';
import { CustomInput } from '~/components/form/CustomInput';
import { LoginForm } from '~/components/form/LoginForm';
import { CustomButton } from '~/components/ui/CustomButton';
import { Title } from '~/components/ui/Title';
import { Wrapper } from '~/components/ui/Wrapper';
import { useLogin } from '~/lib/tanstack/queries';
import { useUserStore } from '~/lib/zustand/auth';
import { validateEmail, validatePassword } from '~/utils';

export default function Login() {
  // const navigation = useNavigation();
  const router = useRouter();

  const createUser = useUserStore((state) => state.createUser);
  const showUserDetails = useUserStore((state) => state.getUser);

  // useEffect(() => {
  //   navigation.setOptions({ title: "Login" });
  // }, [navigation, router]);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [loginDisabled, setLoginDisabled] = useState(false);

  const { email, password } = values;

  const disabled = email.trim() === '' || password.trim() === '';

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };

  const logUserDetails = () => {
    console.log(showUserDetails());
  };

  const handleSubmit = async () => {
    try {
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

      console.log(email, password);

      const { data, status } = await useLogin(email, password);

      console.log(data);

      createUser({
        token: data.token,
        email: data.user.email,
        fullName: data.user.fullName,
      });

      // if(isLoading) {setLoginDisabled(true)} else {setLoginDisabled(false)}

      // if(isError) {
      //   toast.error("An error occoured while trying to login");
      // }

      // router.replace('/');

      console.log({
        email,
        password,
      });
      setValues({
        email: '',
        password: '',
      });
      setErrorEmail('');
      setErrorPassword('');
    } catch (error: any) {
      console.log('Errrrr', JSON.stringify(error.response.data.errorMessage));
    }
  };
  return (
    <Wrapper>
        <KeyboardAvoidingView>
        <Title title="Welcome" />
        {/* <LoginForm /> */}

        <View style={{ gap: 20 }}>
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
            buttonTitle={'Login'}
            onPress={handleSubmit}
          />

          <Link href="/register">Don't have an account? Register</Link>
        </View>

        <Pressable onPress={logUserDetails}>
          <Text>Log user details</Text>
        </Pressable>
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
