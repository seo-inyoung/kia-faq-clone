import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { getTermsUseAPI } from 'src/util/API';
import { yyyymmdd } from 'src/util/dataUtil';
import Modal from 'src/components/common/Modal';
import LoadingIndicator from 'src/components/common/LoadingIndicator';
import HtmlViewer from 'src/components/common/HTMLViewer';

export interface PolicyPopupHandles {
  openDialog: () => void;
}

interface Term {
  termsName: string;
  termsVersion: number;
  startDate: string;
  endDate: string;
  contents: string;
}

const PolicyPopup = forwardRef<PolicyPopupHandles, object>((props, ref) => {
  useImperativeHandle(ref, () => ({
    openDialog,
  }));

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [termsUse, setTermsUse] = useState<Term[]>([]);
  const [selected, setSelected] = useState<number>(0);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const getTermsUse = async () => {
    setIsLoading(true);
    const result = await getTermsUseAPI();
    const newTerms = result.map((term) => ({
      ...term,
      startDate: yyyymmdd(term.startDate),
      endDate: yyyymmdd(term.endDate),
    }));
    setTermsUse(newTerms);

    setIsLoading(false);
  };

  useEffect(() => {
    getTermsUse();
    return () => {};
  }, []);

  useEffect(() => {
    if (!open) {
      setSelected(0);
    }
  }, [open]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value));
  };

  return (
    <Modal open={open} onRequestClose={closeDialog}>
      <div className="dialog-wrapper dialog-policy" id="ms_policy1">
        <div className="dialog-header">
          <h4>이용약관</h4>
          <button type="button" className="close" onClick={closeDialog}>
            닫기
          </button>
        </div>
        <div className="dialog-body">
          <div className="policy-top">
            <select onChange={handleSelect} value={selected}>
              {termsUse.map((el, idx) => (
                <option key={el.termsVersion} value={idx}>
                  {el.startDate} ~ {el.endDate}
                </option>
              ))}
            </select>
          </div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <HtmlViewer html={termsUse[selected]?.contents} />
          )}
        </div>
      </div>
    </Modal>
  );
});

export default PolicyPopup;
