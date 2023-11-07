import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import ItemFavoritesList from '../ItemFavoritesList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  getListFavorite,
  nextPageFavorite,
} from '../../../../../../redux/selectors/comic.selector';
import {ComicActions, ComicType} from '../../../../../../redux';
import {
  getIsLoadingPage,
  getIsLoadingTopic,
} from '../../../../../../redux/selectors/loading.selector';
ItemFavoritesList;

const FavoritesList: FunctionComponent = () => {
  const data = useAppSelector(getListFavorite);
  const nextPage = useAppSelector(nextPageFavorite);
  const [page, setPage] = useState(1);
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);

  useEffect(() => {
    dispatch(ComicActions.getListFavorite(page));
  }, [page]);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      setPage(page + 1);
    }
  };

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        style={{marginBottom: 10}}
        size={'large'}
        color={'#F89300'}
      />
    );
  }, []);

  const RenderItem = ({item}: {item: ComicType}) => (
    <ItemFavoritesList key={item.comic_uuid} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreComic}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default FavoritesList;
