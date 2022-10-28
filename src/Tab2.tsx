import React,{useRef,useState} from 'react'
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
    IonText,
    IonTextarea,
  } from "@ionic/react";
import { calculatorOutline, refreshOutline, paperPlane} from "ionicons/icons";
import MaterialControls from './components/MaterialControls';
interface Props {}

const Tab2 = () => {
  const [error, setError] = useState<string>("");
  const nameInputRef = useRef<HTMLIonInputElement>(null);
  const locationInputRef = useRef<HTMLIonInputElement>(null);
  const summaryInputRef = useRef<HTMLIonInputElement>(null);
  const[textArea,setTextArea]=useState("");
  const clearError = () => {
    setError("");
  };
  const handleReset=()=>{
    locationInputRef.current!.value = "";
    summaryInputRef.current!.value = "";
    nameInputRef.current!.value = "";
    setTextArea('')
  }
  const handleSend=()=>{
    const enteredName=nameInputRef.current!.value
    const enteredLocation=locationInputRef.current!.value
    const enteredSummary=summaryInputRef.current!.value
    const enteredTextArea=textArea
    const currentTime= new Date()

    if (
      !enteredName ||
      !enteredLocation ||
      !enteredSummary ||
      !enteredTextArea
    ) {
      setError("Please do not leave any blanks");
      return;
    }
    console.log({enteredName,enteredLocation,enteredSummary,enteredTextArea,currentTime})
    locationInputRef.current!.value = "";
    summaryInputRef.current!.value = "";
    nameInputRef.current!.value = "";
    setTextArea('')
  }

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
                  <IonLabel position="floating">
                    <IonText className="ion-text-wrap">
                         Name/Nombre
                    </IonText>
                    </IonLabel>
                  <IonInput ref={nameInputRef} type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                  <IonText className="ion-text-wrap">Location/Ubicación</IonText>
                    </IonLabel>
                  <IonInput ref={locationInputRef} type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                  <IonText className="ion-text-wrap">
                    How many hours? / ¿Cuantas horas?
                  </IonText>
                    </IonLabel>
                  <IonInput ref={summaryInputRef} type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
            <IonItem color="primary">
        <IonLabel position="floating" color="medium">
            <IonText className="ion-text-wrap">
                Job description / Descripción del trabajo...
            </IonText>
        </IonLabel>
          <IonTextarea 
          auto-grow
          rows={6}
          value={textArea} 
          onIonChange={e => setTextArea(e.detail.value!)}>
          </IonTextarea>
        </IonItem>
        </IonCol>
            </IonRow>
            <MaterialControls onSend={handleSend} onReset={handleReset} />
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
}

export default Tab2