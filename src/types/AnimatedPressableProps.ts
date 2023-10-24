import { ReactNode } from "react"
import { ViewStyle } from "react-native"

export type AnimatedPressableProps = {
    style: ViewStyle,
    onPress: () => void,
    children?: ReactNode
}