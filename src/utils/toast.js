import Toast from 'react-native-toast-message';

export const showToast = (type, title, message) => {
    // type: 'success | error | info',
    Toast.show({
        type: type,
        position: 'top',
        text1: title,
        text2: message,
        visibilityTime: 2000,
        autoHide: true,
        // onShow: () => { },
        // onHide: () => { },
        // onPress: () => { }
    });
}