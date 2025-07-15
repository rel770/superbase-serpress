import { supabase } from '../config/supabaseClient.js';

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  // Query Supabase users table
  const { data, error } = await supabase
    .from('users')
    .select('username, password')
    .eq('username', username)
    .single();

  if (error || !data) {
    return res.status(401).json({ error: "Wrong username or password" });
  }

  // Simple password check (plaintext, for demo; use hashing in production)
  if (data.password !== password) {
    return res.status(401).json({ error: "Wrong username or password" });
  }

  return res.json({ message: "Login successful" });
};
