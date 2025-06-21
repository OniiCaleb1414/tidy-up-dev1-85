import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          user_type: 'customer' | 'maid'
          location: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          user_type: 'customer' | 'maid'
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          user_type?: 'customer' | 'maid'
          location?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      maid_profiles: {
        Row: {
          id: string
          user_id: string
          bio: string | null
          experience: string | null
          hourly_rate: number | null
          specialties: string[] | null
          availability: string[] | null
          has_transportation: boolean
          has_insurance: boolean
          has_references: boolean
          verified: boolean
          rating: number | null
          total_reviews: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          bio?: string | null
          experience?: string | null
          hourly_rate?: number | null
          specialties?: string[] | null
          availability?: string[] | null
          has_transportation?: boolean
          has_insurance?: boolean
          has_references?: boolean
          verified?: boolean
          rating?: number | null
          total_reviews?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          bio?: string | null
          experience?: string | null
          hourly_rate?: number | null
          specialties?: string[] | null
          availability?: string[] | null
          has_transportation?: boolean
          has_insurance?: boolean
          has_references?: boolean
          verified?: boolean
          rating?: number | null
          total_reviews?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_type: 'customer' | 'maid'
    }
  }
}