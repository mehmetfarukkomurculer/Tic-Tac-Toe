import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({onPress, children, style}) => {
    return <Pressable style={ ({pressed}) => pressed ? [style, styles.pressed] : [style]} onPress={onPress}>
        {children}
    </Pressable>
}

export default Button;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})