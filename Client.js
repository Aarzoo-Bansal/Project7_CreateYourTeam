import { createClient } from '@supabase/supabase-js'

const URL = 'https://dotnbiumhgycimcqodoi.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdG5iaXVtaGd5Y2ltY3FvZG9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3ODAwNzAsImV4cCI6MjA0NjM1NjA3MH0.zheFnJ_YY3Q0ksTn7xCtX4P8GraetbRBnVhLA6wUkgo';



export const supabase = createClient(URL, API_KEY);


