import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons"
import api from "../../services/api";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles";

interface RouteParam {
  pointID: number;
}

interface ParamData {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    state: string;
    city: string;
  };
  items: {
    title: string
  }[];
}

const Detail = () => {
  const [paramData, setParamData] = useState<ParamData>({} as ParamData);
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as RouteParam;

  useEffect(() => {
    api.get(`points/${routeParams.pointID}`).then(response => {
      setParamData(response.data);
    });
  }, []);

  function backToPoints() {
    navigation.goBack();
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: "Wasting Point Information",
      recipients: [paramData.point.email]
    });
  }

  if (!paramData.point) {
    return null; // or loading screen
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={backToPoints}>
          <Icon name="arrow-left" size={20} color="#34CB79" />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: paramData.point.image_url }} />
        <Text style={styles.pointName}>{paramData.point.name}</Text>
        <Text style={styles.pointItems}>
          {paramData.items.map(item => item.title).join(", ")}
        </Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Adress</Text>
          <Text style={styles.addressContent}>{paramData.point.city}, {paramData.point.state}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#FFFFFF" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </>
  )
};

export default Detail;