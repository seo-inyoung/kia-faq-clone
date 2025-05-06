import React from 'react'

const ErrorDialog: React.FC = () => {
  return (
    <dialog className="dialog-wrapper dialog-error" id="error">
      <div className="dialog-header">
        <button
          type="button"
          className="close"
          onClick={() =>
            (document.querySelector('#error') as HTMLDialogElement).close()
          }
        >
          닫기
        </button>
      </div>
      <div className="dialog-body">
        <p className="message">
          데이터 통신 실패로 정상적인 서비스를 제공할 수 없습니다.
          <br />
          잠시 후 서비스를 이용해 주세요.
        </p>
        <div className="button-group">
          <button
            type="button"
            className="btn-xlg btn-tertiary"
            onClick={() =>
              (document.querySelector('#error') as HTMLDialogElement).close()
            }
          >
            확인
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ErrorDialog
