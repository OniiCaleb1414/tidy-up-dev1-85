/*
  # Authentication and User Management Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `full_name` (text)
      - `phone` (text)
      - `user_type` (enum: customer, maid)
      - `location` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `maid_profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `bio` (text)
      - `experience` (text)
      - `hourly_rate` (numeric)
      - `specialties` (text array)
      - `availability` (text array)
      - `has_transportation` (boolean)
      - `has_insurance` (boolean)
      - `has_references` (boolean)
      - `verified` (boolean)
      - `rating` (numeric)
      - `total_reviews` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for public read access to maid profiles
*/

-- Create enum for user types
CREATE TYPE user_type AS ENUM ('customer', 'maid');

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  phone text,
  user_type user_type NOT NULL DEFAULT 'customer',
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create maid_profiles table
CREATE TABLE IF NOT EXISTS maid_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  bio text,
  experience text,
  hourly_rate numeric(10,2),
  specialties text[],
  availability text[],
  has_transportation boolean DEFAULT false,
  has_insurance boolean DEFAULT false,
  has_references boolean DEFAULT false,
  verified boolean DEFAULT false,
  rating numeric(3,2),
  total_reviews integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE maid_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles table
CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create policies for maid_profiles table
CREATE POLICY "Maids can view own profile"
  ON maid_profiles
  FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.user_type = 'customer'
    )
  );

CREATE POLICY "Public can view verified maid profiles"
  ON maid_profiles
  FOR SELECT
  TO anon
  USING (verified = true);

CREATE POLICY "Maids can update own profile"
  ON maid_profiles
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Maids can insert own profile"
  ON maid_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create function to handle updated_at timestamp
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER maid_profiles_updated_at
  BEFORE UPDATE ON maid_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS profiles_user_type_idx ON profiles(user_type);
CREATE INDEX IF NOT EXISTS profiles_location_idx ON profiles(location);
CREATE INDEX IF NOT EXISTS maid_profiles_user_id_idx ON maid_profiles(user_id);
CREATE INDEX IF NOT EXISTS maid_profiles_verified_idx ON maid_profiles(verified);
CREATE INDEX IF NOT EXISTS maid_profiles_rating_idx ON maid_profiles(rating);