import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor:'#F1F1F1',
    }
}))
export default useStyles
