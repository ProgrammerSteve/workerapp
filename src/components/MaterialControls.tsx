import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { refreshOutline, paperPlane } from "ionicons/icons";


const MaterialControls: React.FC<{
  onSend: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow style={{
      display:'flex',
      flex:'wrap',
    }}>
      
        <IonButton onClick={() => props.onSend()}>
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

export default MaterialControls;
