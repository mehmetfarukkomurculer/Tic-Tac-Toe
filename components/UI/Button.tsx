import { Pressable } from "react-native";

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({onPress, children}) => {
    return <Pressable onPress={onPress}>
        {children}
    </Pressable>
}

export default Button;