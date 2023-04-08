
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cipgigkrorcbasjstost.supabase.co'
const supabaseKey = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcGdpZ2tyb3JjYmFzanN0b3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5ODU5NTksImV4cCI6MTk5MjU2MTk1OX0.x1q2EnXpn4W3afZeUTalwBXRAsYi7vGeNsmU9Fvm4fY'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;