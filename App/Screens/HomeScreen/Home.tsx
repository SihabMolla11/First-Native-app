import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../authContext/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>This is Home component {user} </Text>
    </View>
  );
};

export default Home;
