import { styles } from "../utils/styles"
import { FC } from "react"
import { FABProps } from "../types/FABProps"
import { AnimatedPressable } from "./AnimatedPressable"
import { Text } from "react-native"

export const FAB: FC<FABProps> = ({ onPress }) => {
    return (
            <AnimatedPressable 
                style={styles.fab}
                onPress={onPress}>
                <Text style={styles.fabTitle}>Add</Text>
            </AnimatedPressable>
    )
}