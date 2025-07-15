import { supabase } from "../config/supabaseClient.js";

export const authMiddleware = async (req, res, next) => {
  // Check for credentials in body first, then headers
  let username, password;
  
  if (req.body.username && req.body.password) {
    username = req.body.username;
    password = req.body.password;
  } else if (req.headers.username && req.headers.password) {
    username = req.headers.username;
    password = req.headers.password;
  } else {
    return res.status(400).json({ error: "Username and password required in body or headers" });
  }

  // Verify credentials against Supabase users table
  const { data, error } = await supabase
    .from("users")
    .select("username, password")
    .eq("username", username)
    .single();

  if (error || !data || data.password !== password) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  // Attach user info to request for next handlers
  req.user = { username: data.username };
  next();
};
