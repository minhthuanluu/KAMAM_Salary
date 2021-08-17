import React from 'react';
import { View, Image, Text } from 'react-native';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles';

const ListItem = (props) => {
    const { title, icon, price, jusTitle } = props;
    return (
        <View style={styles.container}>
            {
                props.main ? <>
                    <View style={styles.titleContain}>
                        <Text style={styles.mainTitle}>{title}</Text>
                    </View>
                    {
                        jusTitle ? null :
                            <View style={styles.price}>
                                <Text style={[styles.price, { color: "#00BECC", fontSize: fontScale(18), fontWeight: "bold" }]}>{price}</Text>
                            </View>
                    }
                </> : <>
                    <View style={styles.titleContain}>
                        <Image source={icon} resizeMode="contain" style={[styles.icon, props.iconStyle]} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    {
                        jusTitle ? null :
                            <Text style={styles.price}>{price}</Text>
                    }
                </>
            }
        </View>
    );
}

export default ListItem;