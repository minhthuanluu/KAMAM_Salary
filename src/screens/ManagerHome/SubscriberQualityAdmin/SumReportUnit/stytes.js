import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    firstDateView:{ flex: 1, marginLeft: -width / 5 },
    secondDateView:{ flex: 1, marginLeft: -width / 4 }
});