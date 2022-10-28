import { Redirect, Route } from 'react-router-dom';
import React from 'react'
import {
    IonApp,
    IonCardHeader,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
    IonCard,
    IonItem,
    IonTabsContext,
    IonTab,
    IonImg,
  } from '@ionic/react';
  import { IonReactRouter } from '@ionic/react-router';
  import { ellipse, square,cart, triangle, homeOutline, mailOutline, hammerOutline } from 'ionicons/icons';
  import App from './App';
  import Tab2 from './Tab2';
  
  /* Core CSS required for Ionic components to work properly */
  import '@ionic/react/css/core.css';
  
  /* Basic CSS for apps built with Ionic */
  import '@ionic/react/css/normalize.css';
  import '@ionic/react/css/structure.css';
  import '@ionic/react/css/typography.css';
  
  /* Optional CSS utils that can be commented out */
  import '@ionic/react/css/padding.css';
  import '@ionic/react/css/float-elements.css';
  import '@ionic/react/css/text-alignment.css';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '@ionic/react/css/display.css';
  
  /* Theme variables */
  import './theme/variables.css';

setupIonicReact();

const Main: React.FC = () => {
  

  
  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <App />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color="dark" slot="top">
          {/* <IonTabButton>
            <IonIcon size="large" icon={homeOutline}/>
          </IonTabButton> */}
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={cart} />
            <IonLabel>Material</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={hammerOutline} />
            <IonLabel>Job Report</IonLabel>
          </IonTabButton>
        </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

export default Main;
