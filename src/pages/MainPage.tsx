import { FC } from "react";
import { MainPageProps } from "../types/MainPageProps";
import { SafeAreaView, View } from "react-native";
import { TodosList } from "../components/TodosList";
import { colors } from "../utils/colors";
import { styles } from "../utils/styles";
import { FAB } from "../components/FAB";

export const MainPage: FC<MainPageProps> = (props) => {
    const { navigation } = props

    const onFabPressed = () => {
        navigation.navigate('New')
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, ...styles.strechHeightWrapper }}>
            <View style={{ ...styles.mainContainer, ...styles.strechHeightWrapper}}>
                <TodosList navigation={navigation} />
                <FAB onPress={onFabPressed} />
            </View>
        </SafeAreaView>
    )
}