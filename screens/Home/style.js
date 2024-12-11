import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  previewContainer: {
    width: 225,
    height: 225,
    marginBottom: 24,
  },
  manicacaTemplate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 16,
    color: "#000",
  },
  button: {
    width: "50%",
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

  export default styles;