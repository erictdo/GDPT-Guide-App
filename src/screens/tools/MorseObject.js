import React from "react";
import { Octicons } from "@expo/vector-icons";

const dotIcon = () => {
  return <Octicons name="primitive-dot" color="#000000" size={32} />;
};

const dashIcon = () => {
  return <Octicons name="dash" color="#000000" size={32} />;
};

const morseUnit = {
  dot: dotIcon,
  dash: dashicon
};

export default morseUnit;
