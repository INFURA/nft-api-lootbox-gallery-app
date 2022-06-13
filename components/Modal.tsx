import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: React.HTMLProps<HTMLElement>) => {
  const el = document.createElement('div');
  const elRef = useRef(el);

  el.classList.add('modal', 'w-screen', 'h-screen', 'z-20');

  useEffect(() => {
    const root = document.getElementById('modal-root');
    const current = elRef.current;

    if (root) {
      root.appendChild(current);
      root.classList.add('z-20');
    }

    return () => {
      current.remove();
      root?.classList.remove('z-20');
    };
  }, []);

  return createPortal(
    children,
    el
  );
};

export default Modal;
