import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MainContextProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleToggleModal: () => void;
}

export const MainContext = createContext<MainContextProps>({
  showModal: false,
  setShowModal: () => {},
  handleToggleModal: () => {},
});

interface MainContextProviderProps {
  children: ReactNode;
}

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContext.Provider
      value={{ showModal, setShowModal, handleToggleModal }}
    >
      {children}
    </MainContext.Provider>
  );
}
