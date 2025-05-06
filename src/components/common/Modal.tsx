import React, { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  open: boolean;
  onRequestClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onRequestClose,
  children,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement;
      dialogNode.showModal();
    } else {
      dialogNode.close();
      lastActiveElement.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onRequestClose();
    };
    dialogNode.addEventListener('cancel', handleCancel);
    return () => {
      dialogNode.removeEventListener('cancel', handleCancel);
    };
  }, [onRequestClose]);

  return (
    <dialog ref={dialogRef} style={{ padding: 0 }}>
      <div {...props}>{children}</div>
    </dialog>
  );
};

export default Modal;
