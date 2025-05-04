'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navTypeNames = ['Information', 'Faq', 'News', 'Contact'] as const;
type NavType = (typeof navTypeNames)[number];

interface NavTypeInfo {
  label: string;
  href: string;
}

const navTypeMap: Record<NavType, NavTypeInfo> = {
  Information: {
    label: '서비스 소개',
    href: 'https://wiblebiz.kia.com/Guide',
  },
  Faq: {
    label: '자주 묻는 질문',
    href: '/',
  },
  News: {
    label: '새소식',
    href: 'https://wiblebiz.kia.com/News',
  },
  Contact: {
    label: '상담문의',
    href: 'https://wiblebiz.kia.com/Counsel',
  },
};

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('nav-opened', !isNavOpen);
    document.body.classList.toggle('modal-opened', !isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 0) {
        headerRef.current.classList.add('is-pinned');
      } else {
        headerRef.current.classList.remove('is-pinned');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <header ref={headerRef} id="header">
      <div className="inner">
        <a
          className="logo"
          href="https://wiblebiz.kia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          logo
        </a>
        <nav>
          <ul>
            {navTypeNames.map((navType) => (
              <li key={navType} className={'active'}>
                <a href={navTypeMap[navType].href} target="_blank">
                  {navTypeMap[navType].label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="util">
          <button
            type="button"
            className="nav"
            data-ui-click="nav-toggle"
            onClick={toggleNav}
          >
            메뉴 열기/닫기
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
