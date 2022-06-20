import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurentScreen } from "./src/components/restaurents/screen/restaurent.screen";
export default function App() {
  return (
    <>
     <RestaurentScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
