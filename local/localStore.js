import * as LocalStorage from "expo-secure-store";

export const SaveValue = async (key, value) => {
  await LocalStorage.setItemAsync(key, value);
};

export const GetValue = async (key) => {
  let value = await LocalStorage.getItemAsync(key);
  if (value) return value;
  else return null;
};
