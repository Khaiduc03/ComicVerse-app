import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Input} from '@rneui/base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native';

const FooterComment = () => {
  const styles = useStyles();
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Shoot your comment..."
          placeholderTextColor={'#939297'}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FooterComment;
