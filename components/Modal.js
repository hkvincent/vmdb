'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const overlay = useRef(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center" ref={overlay} onClick={onDismiss}>
      <dialog ref={dialogRef} className="bg-white/90  dark:bg-black/90 rounded-lg" >
        {children}
        {/* <button onClick={onDismiss} className="close-button relative dark:text-white text-black">
          <span className="absolute inset-0 flex items-center justify-center">
            X
          </span>
        </button> */}
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
}