import { useAuth } from '@/contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAuth?: boolean
  userType?: 'customer' | 'maid'
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  userType 
}: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600"></div>
      </div>
    )
  }

  if (requireAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (userType && profile?.user_type !== userType) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}