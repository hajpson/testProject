import { MotiPressable } from "moti/interactions"
import { FC, PropsWithChildren, useMemo } from "react"
import { AnimatedPressableProps } from "../types/AnimatedPressableProps"

export const AnimatedPressable: FC<AnimatedPressableProps> = ({ style, onPress, children }) => {
    return (
        <MotiPressable 
            style={style}
            onPress={onPress}
            animate={useMemo(
                () => ({ hovered, pressed }) => {
                    'worklet'

                    return {
                        opacity: hovered || pressed ? 0.5 : 1,
                        scale: hovered || pressed ? 0.9 : 1
                    }
                },
                []
            )}>
            {children}
        </MotiPressable>
    )
}