import { forwardRef, useImperativeHandle, useRef } from 'react';
import 'src/styles/component/common/search.css';

export interface SearchErrorDialogHandle {
  show: () => void;
  close: () => void;
}

interface SearchErrorDialogProps {
  message: string;
}

const SearchErrorDialog = forwardRef<
  SearchErrorDialogHandle,
  SearchErrorDialogProps
>((props, ref) => {
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
});

export default SearchErrorDialog;
