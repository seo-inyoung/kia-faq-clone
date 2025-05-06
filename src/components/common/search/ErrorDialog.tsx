import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface ErrorDialogHandle {
  show: () => void;
  close: () => void;
}

interface ErrorDialogProps {
  message: string;
}

const ErrorDialog = forwardRef<ErrorDialogHandle, ErrorDialogProps>(
  (props, ref) => {
    const { message } = props;
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      show: () => {
        dialogRef.current?.showModal();
      },
      close: () => {
        dialogRef.current?.close();
      },
    }));

    return (
      <dialog className="dialog-wrapper dialog-error" ref={dialogRef}>
        <div className="dialog-body" style={{ marginTop: '35px' }}>
          <p className="message">{message}</p>
          <div className="button-group">
            <button
              type="button"
              className="btn-xlg btn-tertiary"
              onClick={() => dialogRef.current?.close()}
            >
              확인
            </button>
          </div>
        </div>
      </dialog>
    );
  },
);

export default ErrorDialog;
