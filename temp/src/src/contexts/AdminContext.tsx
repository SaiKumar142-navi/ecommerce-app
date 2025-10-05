import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AdminUser {
  id: string;
  username: string;
  name: string;
}

interface AdminContextType {
  isAdminLoggedIn: boolean;
  currentAdmin: AdminUser | null;
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Predefined admin accounts
const ADMIN_ACCOUNTS = [
  { id: '1', username: 'admin1', password: 'admin123', name: 'Admin One' },
  { id: '2', username: 'admin2', password: 'admin456', name: 'Admin Two' },
  { id: '3', username: 'admin3', password: 'admin789', name: 'Admin Three' },
  { id: '4', username: 'admin4', password: 'admin101', name: 'Admin Four' },
  { id: '5', username: 'admin5', password: 'admin202', name: 'Admin Five' },
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<AdminUser | null>(null);

  // Check for saved admin session on mount
  useEffect(() => {
    const savedAdmin = localStorage.getItem('admin-session');
    if (savedAdmin) {
      try {
        const adminData = JSON.parse(savedAdmin);
        setCurrentAdmin(adminData);
        setIsAdminLoggedIn(true);
      } catch (error) {
        localStorage.removeItem('admin-session');
      }
    }
  }, []);

  const adminLogin = (username: string, password: string): boolean => {
    const admin = ADMIN_ACCOUNTS.find(
      acc => acc.username === username && acc.password === password
    );

    if (admin) {
      const adminUser: AdminUser = {
        id: admin.id,
        username: admin.username,
        name: admin.name,
      };
      
      setCurrentAdmin(adminUser);
      setIsAdminLoggedIn(true);
      localStorage.setItem('admin-session', JSON.stringify(adminUser));
      return true;
    }
    
    return false;
  };

  const adminLogout = () => {
    setCurrentAdmin(null);
    setIsAdminLoggedIn(false);
    localStorage.removeItem('admin-session');
  };

  return (
    <AdminContext.Provider value={{
      isAdminLoggedIn,
      currentAdmin,
      adminLogin,
      adminLogout,
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};