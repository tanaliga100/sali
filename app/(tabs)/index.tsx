import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://preview.redd.it/winner-bini-mikha-v0-cgiegvvc2jge1.jpg?width=640&crop=smart&auto=webp&s=c0831311f383f9ccc66fbc652469b792731bebc9",
        }}
        style={styles.profilePic}
      />
      <Link href="/notifications">Feed Screen In tabs</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60, // Perfect circle (half of width/height)
    resizeMode: "cover", // Mas maganda 'to kaysa 'fill' para hindi pango ang mukha
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
