export interface User {
  id: string;
  email: string;
  isAuthenticated: boolean;
  fullName: string;
  phone: string;
  deviceId: string;
  accessGranted: boolean;
  lastAccess: string;
  createdAt: string;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
  clicks: number;
  cost: number;
  active: boolean;
  targetAudience: string[];
}

export interface AuthState {
  user: User | null;
  error: string | null;
  isAdmin: boolean;
}

export interface UserStats {
  totalTimeSpent: number;
  dataUsed: number;
  lastSeen: string;
}