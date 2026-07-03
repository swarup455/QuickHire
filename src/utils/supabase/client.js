import { useAuth } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";

export const useSupabase = () => {
    const { getToken } = useAuth();

    return createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY,
        {
            accessToken: async () => {
                return await getToken();
            },
        }
    );
};