import React, { useState } from 'react';
import { AuthState, User } from './types';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    error: null,
    isAdmin: false,
  });

  const handleLogin = (email: string, password: string) => {
    // For demo purposes, check if it's an admin login
    if (email === 'admin@example.com' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin-1',
        email,
        isAuthenticated: true,
        fullName: 'Administrator',
        phone: '',
        deviceId: '',
        accessGranted: true,
        lastAccess: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };
      setAuth({ user: adminUser, error: null, isAdmin: true });
    } else {
      setAuth({ user: null, error: 'Invalid credentials', isAdmin: false });
    }
  };

  const handleRegister = (userData: Partial<User>) => {
    // Check if it's an admin registration
    const isAdmin = userData.email === 'admin@example.com';
    
    const user: User = {
      id: crypto.randomUUID(),
      email: userData.email || '',
      fullName: userData.fullName || '',
      phone: userData.phone || '',
      deviceId: userData.deviceId || '',
      isAuthenticated: true,
      accessGranted: true,
      lastAccess: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    setAuth({ user, error: null, isAdmin });
  };

  const handleLogout = () => {
    setAuth({ user: null, error: null, isAdmin: false });
  };

  // If no user is logged in, show registration form
  if (!auth.user) {
    return (
      <RegistrationForm 
        onRegister={handleRegister} 
        error={auth.error} 
      />
    );
  }

  // Show appropriate dashboard based on user type
  return auth.isAdmin ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <Dashboard user={auth.user} onLogout={handleLogout} />
  );
}

export default App;