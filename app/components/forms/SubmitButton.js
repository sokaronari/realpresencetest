import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

function SubmitButton({ buttonText, color, marginTop, textColor }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      buttonText={buttonText}
      color={color}
      onPress={handleSubmit}
      marginTop={marginTop}
      textColor={textColor}
    />
  );
}

export default SubmitButton;
