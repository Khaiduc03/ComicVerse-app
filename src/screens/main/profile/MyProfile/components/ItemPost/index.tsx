import {Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {ForumType} from '../../../../../../redux/types/forum.type';

type Props = {
  data?: ForumType;
};
const ItemPost: React.FC<Props> = props => {
  const {data} = props;
  const itemWidth = Dimensions.get('window').width / 3;
  const handleDetailClick = () => {
    NavigationService.navigate(routes.POSTDETAIL, {data: props.data});
  };
  return (
    <TouchableOpacity
      onPress={handleDetailClick}
      style={{
        width: itemWidth,
        height: itemWidth,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Image
        source={{
          uri: data?.images[0]
            ? data?.images[0]
            : 'https://demofree.sirv.com/nope-not-here.jpg',
        }}
        style={{width: itemWidth - 5, height: itemWidth - 5, borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

export default ItemPost;
