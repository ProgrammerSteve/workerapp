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

import { calculatorOutline, refreshOutline } from "ionicons/icons";

import BmiControls from "./components/BmiControls";
import BmiResults from "./components/BmiResults";
import InputControl from "./components/InputControl";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


setupIonicReact();

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [calcUnits,setCalcUnits]=useState<'mkg'|'ftlbs'>('mkg');


  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter a valid, non-negative, input number");

      return;
    }
    const weightConversionFactor=(calcUnits=='ftlbs')? (1/2.2)  : 1;
    const heightConversionFactor=(calcUnits=='ftlbs')? (1/3.28)  : 1;

    const weight=+enteredWeight*weightConversionFactor;
    const height=+enteredHeight*heightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };

  const selectCalcUnitHandler=(selectedValue: 'mkg'|'ftlbs')=>{
    setCalcUnits(selectedValue);
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
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid className="ion-text-center ion-margin">


            <IonRow>
              <IonCol>
                  <InputControl 
                    selectedValue={calcUnits} 
                    onSelectValue={selectCalcUnitHandler}
                  />
              </IonCol>
            </IonRow>


            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height {calcUnits=="mkg"?'(meters)':'(ft)'}</IonLabel>
                  <IonInput ref={heightInputRef} type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>


              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight {calcUnits=="mkg"?'(kg)':'(lbs)'}</IonLabel>
                  <IonInput ref={weightInputRef} type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>


            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            {calculatedBmi > 0 && <BmiResults result={calculatedBmi} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
