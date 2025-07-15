import { supabase } from '../config/supabaseClient.js';

export const getProducts = async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    return res.status(500).json({ error: "Failed to fetch products" });
  }
  res.json(data);
};
