// import {
//   DarkTheme as _DarkTheme,
//   DefaultTheme,
// } from "@react-navigation/native";
// import { useColorScheme } from "nativewind";

// import colors from "@/ui/colors";

// const DarkTheme = {
//   ..._DarkTheme,
//   colors: {
//     ..._DarkTheme.colors,
//     primary: colors.primary[200],
//     background: colors.charcoal[950],
//     text: colors.charcoal[100],
//     border: colors.charcoal[500],
//     card: colors.charcoal[850],
//   },
// };

// const LightTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: colors.primary[400],
//     background: colors.white,
//   },
// };

// export function useThemeConfig() {
//   const { colorScheme } = useColorScheme();

//   if (colorScheme === "dark") return DarkTheme;

//   return LightTheme;
// }
