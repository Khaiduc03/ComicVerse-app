import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../../../../../assets';
import {HeaderCustom} from '../../../../../../components';
import TextCustom from '../../../../../../components/customs/Text';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import Icon_Comment from '../Icon-Comment';
import useStyles from './styles';

const PostDetail: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
  };

  const [selectedIcon, setSelectedIcon] = useState('');

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Post Details"
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.viewInformation}>
        <View style={styles.viewimage}>
          <Image style={styles.avatarUser} source={images.avata} />
          <TextCustom textBold title="Drake Kun" />
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" type="ionicon" />
        </TouchableOpacity>
      </View>
      <View>
        <Icon_Comment />
        <View style={styles.test1}>
          <Text style={styles.text}>44 Like</Text>
          <Text style={styles.text}>
            DraKe Kun Phim này đỉnh cao lắm anh em à 😎😎
          </Text>
          <Text style={styles.text}>3 day ago</Text>
        </View>
      </View>
    </View>
  );
};

export default PostDetail;
