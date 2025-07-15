import { supabase } from "../config/supabaseClient.js";

export const authMiddleware = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }
  const { data, error } = await supabase
    .from("users")
    .select("username, password")
    .eq("username", username)
    .single();

  if (error || !data || data.password !== password) {
    return res.status(401).json({ error: "Wrong username or password" });
  }
  // Optionally attach user info to request
  req.user = { username: data.username };
  next();
};
