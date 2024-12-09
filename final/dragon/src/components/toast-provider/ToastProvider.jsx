import { createContext, useContext, useState } from "react";
import './ToastProvider.css';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const PREFIX = 'global-toast';

  const [content, setContent] = useState();
  const [visible, setVisible] = useState(false);

  const showToast = (content, delay = 3000) => {
    setContent(content);
    setVisible(true);
    setTimeout(() => setVisible(false), delay);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`${PREFIX} ${visible ? 'visible' : ''}`}>
        {content}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
