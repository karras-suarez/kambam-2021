import { ThenableReference, Unsubscribe } from "firebase/database";
import { useContext, createContext } from "react";

export interface FirebaseContextType {
  postRSVP: (data: {
    name: string;
    email: string;
    answer: string;
  }) => ThenableReference;
  postQuestion: (question, answer) => ThenableReference;
  listen: (formatter, setter) => Unsubscribe;
  getPSWD: () => Promise<string>;
  getQuestions: () => Promise<any>;
  getRSVPStatus: (key: string) => Promise<any>;
}
export const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error(
      "Unable to find a <FirebaseContext.Provider /> in the parent tree."
    );
  }
  return context;
};
