import { useRef, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonTitle,
  IonInput,
  IonContent,
  IonItem,
  IonToolbar,
  setupIonicReact,
  IonAlert,
} from "@ionic/react";

import { calculatorOutline, refreshOutline, paperPlane} from "ionicons/icons";
import BmiResults from "./components/BmiResults";
import MaterialControls from "./components/MaterialControls";

// setupIonicReact();
const App: React.FC = () => {
  const [error, setError] = useState<string>("");
  const fenceInputRef = useRef<HTMLIonInputElement>(null);
  const postsInputRef = useRef<HTMLIonInputElement>(null);
  const nameInputRef = useRef<HTMLIonInputElement>(null);
  const handleReset=()=>{
    fenceInputRef.current!.value = "";
    postsInputRef.current!.value = "";
    nameInputRef.current!.value = "";
  }
  const handleSend=()=>{
    const enteredFence=fenceInputRef.current!.value
    const enteredPosts=postsInputRef.current!.value
    const enteredName=nameInputRef.current!.value
    const currentTime= new Date()
    if (
      !enteredName ||
      !enteredFence ||
      !enteredPosts ||
      +enteredFence <= 0 ||
      +enteredPosts <= 0
    ) {
      setError("Please do not leave any blanks");
      return;
    }
    console.log({enteredFence,enteredPosts,enteredName,currentTime})
    fenceInputRef.current!.value = "";
    postsInputRef.current!.value = "";
    nameInputRef.current!.value = "";
  }
  const clearError = () => {
    setError("");
  };
  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>The Dave App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid className="ion-text-center ion-margin">

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Name/Nombre</IonLabel>
                  <IonInput ref={nameInputRef} type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating"># Fences/Vallas</IonLabel>
                  <IonInput ref={fenceInputRef} type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating"># Posts/Poste </IonLabel>
                  <IonInput ref={postsInputRef} type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <MaterialControls onSend={handleSend} onReset={handleReset} />
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
