import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PageView = 'home' | 'menu';

interface NavigationContextType {
  currentPage: PageView;
  navigateTo: (page: PageView, sectionId?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getPageFromHash = (): PageView => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#menu' || hash.startsWith('#menu/')) {
      return 'menu';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageView>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'menu') {
      window.location.hash = '#menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
