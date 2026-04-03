// Cloudinary image helper for Sora Studios
const CLOUD_NAME = 'dms0udpbq';

/**
 * Generate an optimized Cloudinary URL with aggressive compression
 * @param publicId - The public ID of the image
 * @param options - Optional transformation options
 */
export function cloudImg(
  publicId: string,
  options: { w?: number; h?: number; crop?: string; q?: string; f?: string; dpr?: number } = {}
): string {
  const { w, h, crop = 'fill', q = 'auto:low', f = 'auto', dpr } = options;
  const transforms = [`c_${crop}`, `q_${q}`, `f_${f}`];
  if (w) transforms.push(`w_${w}`);
  if (h) transforms.push(`h_${h}`);
  if (dpr) transforms.push(`dpr_${dpr}`);
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(',')}/${publicId}`;
}

// ─── Project images (curated selections per project folder) ───

export const projects = {
  simsdr: {
    name: '20 Sims Drive',
    hero: 'DSC07273_ef0kw8',
    images: [
      'DSC07232_xy4g1b',
      'DSC07264_lpfzzg',
      'DSC07300_jxz4ng',
      'DSC07286_q9wyhq',
      'DSC07068_hbkud1',
      'DSC07206_apyz02',
    ],
  },
  tengah: {
    name: '224a Tengah Empyrean',
    hero: 'DSC09789_hjzyni',
    images: [
      'DSC09728_q7gjlu',
      'DSC09723_za8t32',
      'DSC09754_i1ye78',
      'DSC09748_xr2esq',
      'DSC09761_e6fzo2',
      'DSC09798_ygjlql',
    ],
  },
  aljunied: {
    name: '233B Upper Aljunied Road',
    hero: '_M4A4820_cmlssp',
    images: [
      '_M4A4814_ulknha',
      '_M4A4826_ojmaxr',
      '_M4A4841_vobvpw',
      '_M4A4863_bj6joj',
      '_M4A4889_ux530z',
      '_M4A4958_yd5ptx',
    ],
  },
  choachukang: {
    name: '285 Choa Chu Kang',
    hero: '_M4A0920_madduo',
    images: [
      '_M4A0910_tuqjp7',
      '_M4A0925_uobsop',
      '_M4A0961_ui4gbm',
      '_M4A0988_f67kux',
      '_M4A1003_cgy8p1',
      '_M4A1036_ddjrkv',
    ],
  },
  sembawang: {
    name: '408 Sembawang',
    hero: '_M4A9574_iryram',
    images: [
      '_M4A9542_ojegnm',
      '_M4A9550_pyifrs',
      '_M4A9565_c8e8mt',
      '_M4A9568_lncehn',
      '_M4A9583_a1gipe',
      '_M4A9642_r6hz80',
    ],
  },
  woodlands436: {
    name: '436 Woodlands',
    hero: 'DSC06775_bks3su',
    images: [
      'DSC06815_pe5mlp',
      'DSC06837_lqtb7s',
      'DSC06786_bxpyh8',
      'DSC06788_rktjzb',
      'DSC06791_kukdjg',
      'DSC06807_nzfhtt',
    ],
  },
  woodlands796: {
    name: '796 Woodlands Drive',
    hero: 'DSC04626_t5dqca',
    images: [
      'DSC04619_oimb8l',
      'DSC04623_vqpein',
      'DSC04622_sd7lns',
      'DSC04615_ropsdw',
      'IMG_5017_ewqgkl',
      'IMG_5009_l8yqiy',
    ],
  },
  jalan: {
    name: 'Jalan',
    hero: 'DSC00018_pv3xvk',
    images: [
      'DSC00046_jtbwnd',
      'DSC00025_cwdj39',
      'DSC00031_yy9bwl',
      'DSC00032_gzyxa6',
      'DSC00035_samh8r',
      'DSC00040_cofxx2',
    ],
  },
  metropolitan: {
    name: 'Metropolitan',
    hero: 'Still_2025-01-22_233739_1.1.1_ezoj1t',
    images: [
      'Still_2025-01-22_233739_1.2.1_ibm9xs',
      'Still_2025-01-22_233739_1.4.1_teh0pt',
      'Still_2025-01-22_233739_1.6.1_kwrebg',
      'Still_2025-01-22_233739_1.7.1_govztc',
      'Still_2025-01-22_233739_1.9.1_amou7y',
      'Still_2025-01-22_233739_1.10.1_bmiikx',
    ],
  },
  senett: {
    name: 'Senett Drive',
    hero: 'DSC04385_lrw9st',
    images: [
      'DSC04381_btbido',
      'DSC04378_frmvh8',
      'DSC04373_kng6bw',
      'DSC04372_e2qotj',
      'DSC04387_lvvsfq',
      'IMG_4521_kgyx4a',
    ],
  },
} as const;

// Ordered array for easy iteration
export const projectList = [
  projects.simsdr,
  projects.tengah,
  projects.aljunied,
  projects.choachukang,
  projects.sembawang,
  projects.woodlands436,
  projects.woodlands796,
  projects.jalan,
  projects.metropolitan,
  projects.senett,
];
