import { createContext, useContext, useState } from "react";
import './ToastProvider.css';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const PREFIX = 'global-toast';

  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (text, delay = 3000) => {
    setText(text);
    setVisible(true);
    setTimeout(() => setVisible(false), delay);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`${PREFIX} ${visible ? 'visible' : ''}`}>
        {text}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
