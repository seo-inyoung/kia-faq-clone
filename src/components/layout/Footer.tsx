'use client';
import QuickUtil from 'src/components/common/QuickUtil';

const Footer: React.FC = () => {
  //   const policyPopupRef = useRef();

  const childPolicyBtnEvent = () => {
    // policyPopupRef.current.openDialog();
  };
  const childPrivacyBtnEvent = () => {
    window.open('https://privacy.kia.com/overview/full-policy', '_blank'); // KIA 개인정보처리방침 URL
  };

  return (
    <>
      <QuickUtil />
      <footer>
        <div className="inner">
          <div className="information">
            <span className="util">
              <button type="button" onClick={childPrivacyBtnEvent}>
                <b>개인정보 처리방침</b>
              </button>
              <button type="button" onClick={childPolicyBtnEvent}>
                이용약관
              </button>
            </span>
            <address>
              <span>
                서울특별시 서초구 헌릉로 12 <i>기아㈜</i>
              </span>
              <br />
              <span>
                대표: <i>송호성, 최준영</i>
              </span>
              <br />
              <span>
                사업자등록번호: <i>119-81-02316</i>
              </span>
              <br />
              <span>
                통신판매번호: <i>2006-07935</i>
              </span>
              <br />
              <span>
                고객센터: <i>1833-4964</i>
              </span>
              <br />
              <span>
                제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
              </span>
            </address>
          </div>
          <p className="copyright">© 2023 KIA CORP. All Rights Reserved.</p>
        </div>
        {/* <PolicyPopup ref={policyPopupRef} /> */}
      </footer>
    </>
  );
};

export default Footer;
