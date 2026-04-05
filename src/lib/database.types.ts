export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: number;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          message?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: number;
          slug: string;
          name: string;
          description: string;
          hero_image: string;
          images: string[];
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          slug: string;
          name: string;
          description?: string;
          hero_image: string;
          images?: string[];
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          slug?: string;
          name?: string;
          description?: string;
          hero_image?: string;
          images?: string[];
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      consultations: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string | null;
          property_type: string;
          budget: string | null;
          room_count: string | null;
          preferred_date: string | null;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone?: string | null;
          property_type: string;
          budget?: string | null;
          room_count?: string | null;
          preferred_date?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string | null;
          property_type?: string;
          budget?: string | null;
          room_count?: string | null;
          preferred_date?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      team_members: {
        Row: {
          id: number;
          name: string;
          position: string;
          image_url: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          position: string;
          image_url: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          position?: string;
          image_url?: string;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
