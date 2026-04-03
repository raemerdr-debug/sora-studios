-- =============================================
-- Sora Studios - Database Setup
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- =============================================

-- 1. Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  hero_image TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Team Members Table
CREATE TABLE IF NOT EXISTS public.team_members (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  image_url TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Contact messages: anyone can INSERT (submit form), only authenticated can read
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated can read messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Projects: anyone can read
CREATE POLICY "Anyone can read projects"
  ON public.projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Team members: anyone can read
CREATE POLICY "Anyone can read team members"
  ON public.team_members FOR SELECT
  TO anon, authenticated
  USING (true);

-- =============================================
-- Seed Data: Projects
-- =============================================

INSERT INTO public.projects (slug, name, description, hero_image, images, display_order) VALUES
  ('simsdr', '20 Sims Drive', 'Modern living space renovation', 'DSC07273_ef0kw8', ARRAY['DSC07232_xy4g1b','DSC07264_lpfzzg','DSC07300_jxz4ng','DSC07286_q9wyhq','DSC07068_hbkud1','DSC07206_apyz02'], 1),
  ('tengah', '224a Tengah Empyrean', 'Contemporary interior redesign', 'DSC09789_hjzyni', ARRAY['DSC09728_q7gjlu','DSC09723_za8t32','DSC09754_i1ye78','DSC09748_xr2esq','DSC09761_e6fzo2','DSC09798_ygjlql'], 2),
  ('aljunied', '233B Upper Aljunied Road', 'Elegant home transformation', '_M4A4820_cmlssp', ARRAY['_M4A4814_ulknha','_M4A4826_ojmaxr','_M4A4841_vobvpw','_M4A4863_bj6joj','_M4A4889_ux530z','_M4A4958_yd5ptx'], 3),
  ('choachukang', '285 Choa Chu Kang', 'Warm residential styling', '_M4A0920_madduo', ARRAY['_M4A0910_tuqjp7','_M4A0925_uobsop','_M4A0961_ui4gbm','_M4A0988_f67kux','_M4A1003_cgy8p1','_M4A1036_ddjrkv'], 4),
  ('sembawang', '408 Sembawang', 'Minimalist home design', '_M4A9574_iryram', ARRAY['_M4A9542_ojegnm','_M4A9550_pyifrs','_M4A9565_c8e8mt','_M4A9568_lncehn','_M4A9583_a1gipe','_M4A9642_r6hz80'], 5),
  ('woodlands436', '436 Woodlands', 'Cozy family home makeover', 'DSC06775_bks3su', ARRAY['DSC06815_pe5mlp','DSC06837_lqtb7s','DSC06786_bxpyh8','DSC06788_rktjzb','DSC06791_kukdjg','DSC06807_nzfhtt'], 6),
  ('woodlands796', '796 Woodlands Drive', 'Bright open-plan renovation', 'DSC04626_t5dqca', ARRAY['DSC04619_oimb8l','DSC04623_vqpein','DSC04622_sd7lns','DSC04615_ropsdw','IMG_5017_ewqgkl','IMG_5009_l8yqiy'], 7),
  ('jalan', 'Jalan', 'Luxury space renovation', 'DSC00018_pv3xvk', ARRAY['DSC00046_jtbwnd','DSC00025_cwdj39','DSC00031_yy9bwl','DSC00032_gzyxa6','DSC00035_samh8r','DSC00040_cofxx2'], 8),
  ('metropolitan', 'Metropolitan', 'Modern urban living concept', 'Still_2025-01-22_233739_1.1.1_ezoj1t', ARRAY['Still_2025-01-22_233739_1.2.1_ibm9xs','Still_2025-01-22_233739_1.4.1_teh0pt','Still_2025-01-22_233739_1.6.1_kwrebg','Still_2025-01-22_233739_1.7.1_govztc','Still_2025-01-22_233739_1.9.1_amou7y','Still_2025-01-22_233739_1.10.1_bmiikx'], 9),
  ('senett', 'Senett Drive', 'Refined residential interiors', 'DSC04385_lrw9st', ARRAY['DSC04381_btbido','DSC04378_frmvh8','DSC04373_kng6bw','DSC04372_e2qotj','DSC04387_lvvsfq','IMG_4521_kgyx4a'], 10)
ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- Seed Data: Team Members
-- =============================================

INSERT INTO public.team_members (name, position, image_url, display_order) VALUES
  ('Sarah Mitchell', 'Creative Director', 'https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 1),
  ('James Carter', 'Lead Designer', 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 2),
  ('Elena Rodriguez', 'Senior Architect', 'https://images.unsplash.com/photo-1767605769884-ae3e4653186e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 3),
  ('Michael Chen', 'Project Manager', 'https://images.unsplash.com/photo-1769636929231-3cd7f853d038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 4),
  ('Olivia Brown', 'Interior Stylist', 'https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 5),
  ('David Park', 'Design Consultant', 'https://images.unsplash.com/photo-1607167494912-a6153535f03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 6),
  ('Lisa Wang', 'Space Planner', 'https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 7),
  ('Ryan Adams', 'Furniture Designer', 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', 8);
