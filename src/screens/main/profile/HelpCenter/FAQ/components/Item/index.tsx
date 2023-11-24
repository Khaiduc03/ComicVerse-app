import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import Toggleable_Security from '../Toggleable-list/components/Security';
import {
  Toggleable_App,
  Toggleable_Service,
} from '../Toggleable-list/components';
import {SearchCustom} from '../../../../../../../components';

const ItemFAQ: React.FC = () => {
  const styles = useStyles();

  const categories = [
    {key: 'all', label: 'All'},
    {key: 'app', label: 'App'},
    {key: 'security', label: 'Security'},
    {key: 'service', label: 'Service'},
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const shouldShowAllItems = selectedCategory === 'all';

  return (
    <View style={styles.viewItem}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollViewTitle}>
        <View style={styles.viewRow}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.key}
              onPress={() => handleCategoryClick(category.key)}
              style={[
                styles.btnTitle,
                {
                  backgroundColor:
                    selectedCategory === category.key
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                },
              ]}>
              <Text
                style={[
                  styles.textTitle,
                  {
                    color:
                      selectedCategory === category.key
                        ? styles.colorsTextTitleFocus.color
                        : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        style={styles.scrollViewItem}>
        {categories.map(category => (
          <View key={category.key}>
            {shouldShowAllItems || selectedCategory === category.key ? (
              <View style={styles.viewAll}>
                <View style={styles.viewText}>
                  <Text style={styles.textApp}>{category.label}</Text>
                </View>
                {category.key === 'app' && <Toggleable_App />}
                {category.key === 'security' && <Toggleable_Security />}
                {category.key === 'service' && <Toggleable_Service />}
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemFAQ;
