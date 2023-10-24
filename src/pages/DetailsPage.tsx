import { FC } from "react"
import { Text, View } from "react-native"
import { DetailsPageProps } from "../types/DetailsPageProps"
import { CustomText } from "../components/CustomText"
import { MotiView } from "moti"
import { styles } from "../utils/styles"

export const DetailsPage: FC<DetailsPageProps> = ({ route }) => {
    const selectedTodo = route.params?.selectedTodo

    const applyAccomplishmentColor = () => {
        if (selectedTodo?.isAccomplished) {
            return { ...styles.todoIndicator, ...styles.accomplishedTodoIndicator }
        }

        return { ...styles.todoIndicator, ...styles.notAccomplishedTodoIndicator}
    }

    return (
        <View>
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "timing", duration: 1000 }}
                style={styles.detailsContainer}>
                <CustomText style={styles.bigHeader}>{selectedTodo?.title}</CustomText>
            </MotiView>

            <MotiView
                 from={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 delay={500}
                 transition={{ type: "timing", duration: 1000 }}
                 style={styles.detailsSubcontainer}>
                <CustomText style={styles.descriptionText}>{selectedTodo?.description}</CustomText>
                <CustomText style={applyAccomplishmentColor()}>{selectedTodo?.isAccomplished ? 'To-Done 🥳' : 'To-Didn\'t 😡' }</CustomText>
            </MotiView>
        </View>
    )
}