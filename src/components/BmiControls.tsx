import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";

import { refreshOutline, paperPlane } from "ionicons/icons";


const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow style={{
      display:'flex',
      flex:'wrap',
    }}>
      
        <IonButton onClick={() => props.onCalculate()}>
          <IonIcon slot="start" icon={paperPlane}></IonIcon>
          Send / Enviar
        </IonButton>
     
      
        <IonButton fill="outline" onClick={() => props.onReset()}>
          <IonIcon slot="start" icon={refreshOutline}></IonIcon>
          Reset
        </IonButton>
      
    </IonRow>
  );
};

export default BmiControls;
