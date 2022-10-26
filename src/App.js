import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import "./styles.css";

import awsExports from "./aws-exports";


import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('fr');

I18n.putVocabularies({
  fr: {
    'User does not exist.': "L'usager n'existe pas",
    'Sign In': 'Se connecter',
    'Sign Up': "S'inscrire",
    'We Emailed You': 'Nous vous avons envoyé un e-mail avec votre code de vérification',
    'Password must have at least 8 characters': 'Votre mot de passe doit contenir un minimum de 8 charactères',
    'Your passwords must match': 'Les mots de passe doivent être identiques',
    'Your code is on the way': 'Un code de vérification vous a été envoyé',
    'To log in, enter the code we emailed to': 'Pour vous authentifier veuillez saisir le code de vérification envoyé à',
    'It may take a minute to arrive': 'Il peut y avoir un délai dans la réception du code de vérification'
  },
  es: {
    'Sign In': 'Registrarse',
    'Sign Up': 'Regístrate',
  },
});


Amplify.configure(awsExports);

export function App({ signOut, user }) {
  return (
    <main>
      <h1>Bonjour {user.username}</h1>
      <button onClick={signOut}>Se déconnecter</button>
    </main>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
