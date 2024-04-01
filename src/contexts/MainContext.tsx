import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import i18n from "i18next";

type Language = "en" | "pt";

interface MainContextProps {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleToggleModal: () => void;
  handleSetLanguage: (lang: Language) => void;
}

export const MainContext = createContext<MainContextProps>({
  language: "en",
  setLanguage: () => {},
  showModal: false,
  setShowModal: () => {},
  handleToggleModal: () => {},
  handleSetLanguage: () => {},
});

interface MainContextProviderProps {
  children: ReactNode;
}

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>("en");

  const handleSetLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContext.Provider
      value={{
        language,
        setLanguage,
        showModal,
        setShowModal,
        handleToggleModal,
        handleSetLanguage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
