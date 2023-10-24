import { FC } from "react";
import { Text } from "react-native";
import { CustomTextProps } from "../types/CustomTextProps"
import { styles } from "../utils/styles";

export const CustomText: FC<CustomTextProps> = ({ children, style }) => {
    return (
        <Text style={{ ...styles.customText, ...style }}>{children}</Text>
    )
}