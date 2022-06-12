import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";


const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={() => props.onCalculate()}>
          <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton fill="outline" onClick={() => props.onReset()}>
          <IonIcon slot="start" icon={refreshOutline}></IonIcon>
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
