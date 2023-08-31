import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import { TopNavigator } from '../../../../navigation/navigators/TopNavigator';

const HelpCenter: React.FC = () => {
    return (
        <View>
            <Header leftIcon title='Trung tâm trợ giúp' istitle />
            <View>
                <TopNavigator />
            </View>
        </View>
    )
}

export default HelpCenter