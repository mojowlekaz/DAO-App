import supabase from "../config/supabaseClient";


export default function handler(req, res) {
    supabase.auth.api.setAuthCookie(req, res)
}