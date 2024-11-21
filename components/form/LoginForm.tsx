/* eslint-disable prettier/prettier */

import { Href, Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CustomInput } from './CustomInput';
import { CustomButton } from '../ui/CustomButton';

import { validateEmail, validatePassword } from '~/utils';

type Props = {
  register?: boolean;
};
export const LoginForm = ({ register }: Props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const router = useRouter();
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };
  const { email, password, name } = values;
  const handleSubmit = () => {
    if (register && name.trim() === '') {
      setErrorName('Please enter your name');
      return;
    }
    if (!validateEmail(email)) {
      setErrorEmail('Please enter a valid email address');
      return;
    }
    if (!validatePassword(password)) {
      setErrorPassword(
        'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );

      return;
    }

    router.replace('/');

    console.log({
      email,
      password,
      name,
    });
    setValues({
      email: '',
      name: '',
      password: '',
    });
    setErrorEmail('');
    setErrorPassword('');
  };

  const disabled = email.trim() === '' || password.trim() === '';
  const buttonTitle = register ? 'Sign up' : 'Sign in';
  const bottomText = register ? 'Already' : 'Don’t';
  const actionText = register ? 'Sign in' : 'Sign up';
  const href: Href<string | object> = register ? '/login' : '/register';
  return (
    <View style={styles.container}>
      {register && (
        <CustomInput
          label="Full name"
          placeholder="eg John Doe"
          keyboardType="default"
          value={name}
          onChangeText={(text) => handleChange('name', text)}
          error={errorName}
        />
      )}
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
      <CustomButton disabled={disabled} buttonTitle={buttonTitle} onPress={handleSubmit} />

      <Link href={href} asChild>
        <Text style={styles.account}>
          {bottomText} have an account? <Text style={styles.register}>{actionText}</Text>
        </Text>
      </Link>
    </View>
  );
};

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
