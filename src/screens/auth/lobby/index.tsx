import LottieView from 'lottie-react-native';
import React from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {JsonImages} from '../../../assets';
import {GoogleIcon} from '../../../assets/icons';
import {routes} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AppActions, AuthActions} from '../../../redux/reducer';
import usestyles from './styles';
import {getAppIsReady} from '../../../redux';

const LobbyScreen: React.FunctionComponent = () => {
  const styles = usestyles();

  const dispatch = useAppDispatch();
  // const getSatate = useAppSelector(getAppIsReady);

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      }),
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LottieView
            style={styles.headerIMage}
            source={JsonImages.logo}
            autoPlay
            loop={false}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>
              Welcome to
              <Text style={[styles.title, styles.colors]}> Easy </Text>
              <Text style={styles.title}>Rent</Text>
            </Text>
          </View>
          <Text style={styles.subTitle}>
            Newsly is a social network that allows you to connect with friends
          </Text>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[styles.button, styles.backgroundColorsWhite]}
              onPress={handleGoogle}>
              <GoogleIcon />
              <Text style={styles.buttonText}> Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.CREATE_ACCOUNT);
              }}
              style={[styles.button, styles.backgroundColors]}>
              <Text style={[styles.buttonText, styles.colorWhite]}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.SIGN_IN);
              }}
              style={[styles.button, styles.backgroundColorsSecondary]}>
              <Text style={[styles.buttonText, styles.colors]}>
                I Already Have an Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LobbyScreen;
