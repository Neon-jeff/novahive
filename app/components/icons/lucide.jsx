import { icons } from "lucide-react-native";

const Icon = ({ name, color, size,strokeWidth=2.7 }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} strokeWidth={strokeWidth}  />;
};

export default Icon;
