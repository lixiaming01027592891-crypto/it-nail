export type BlogClusterKey = 'gel-care' | 'style-visit' | 'hand-foot-care' | 'courses';

export interface BlogCluster {
  key: BlogClusterKey;
  title: string;
  description: string;
  hubHref: string;
  hubLabel: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  cluster: BlogClusterKey;
}

export const blogClusters: BlogCluster[] = [
  {
    key: 'gel-care',
    title: '凝膠美甲與日常保養',
    description: '從施作、持久度到卸甲與居家照顧，完整理解凝膠美甲。',
    hubHref: '/services/',
    hubLabel: '查看凝膠美甲服務',
  },
  {
    key: 'style-visit',
    title: '款式選擇與到店指南',
    description: '依膚色、甲型、場合與生活習慣，找到適合自己的款式與店家。',
    hubHref: '/gallery/',
    hubLabel: '查看美甲作品',
  },
  {
    key: 'hand-foot-care',
    title: '手足深層保養',
    description: '整理指緣、甲面、足部與日常衛生保養的實用知識。',
    hubHref: '/services/#care',
    hubLabel: '查看手足保養服務',
  },
  {
    key: 'courses',
    title: '美甲教學與課程',
    description: '了解零基礎學習、課程內容與進階接案所需準備。',
    hubHref: '/courses/',
    hubLabel: '查看美甲課程',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: '美甲器材怎麼消毒？景美美甲店的衛生流程與顧客可以觀察的重點',
    excerpt: '美甲用到的器材是怎麼清潔消毒的？美甲師拆解推棒、剪鉗、磨頭鑽針、指模與毛刷各自的處理方式，並整理顧客到店時可以自己觀察的重點。',
    date: '2026-08-07',
    href: '/blog/nail-tool-sterilization-hygiene-20260807/',
    cluster: 'courses',
  },
  {
    title: '夏天做美甲容易脫落嗎？新店凝膠美甲師談流汗、玩水與高溫對持久度的影響',
    excerpt: '同一款凝膠，冬天撐三週、夏天兩週就翹起？解析流汗、玩水與高溫對持久度的影響，以及夏季日常照顧方式。',
    date: '2026-08-05',
    href: '/blog/summer-gel-durability-20260805/',
    cluster: 'gel-care',
  },
  {
    title: '指甲顏色怎麼挑才襯膚色？新店造型美甲師的冷暖調判斷與配色指南',
    excerpt: '教你判斷冷調、暖調與中性調膚色，並從甲床、指節、季節與場合挑選更適合自己的色系。',
    date: '2026-08-02',
    href: '/blog/nail-color-skin-tone-guide-20260802/',
    cluster: 'style-visit',
  },
  {
    title: '光療可以一直做下去嗎？景美美甲推薦店家談指甲休息期的判斷與安排',
    excerpt: '從甲面實際狀態的判斷訊號、休息期保養方式，到連續施作時的回店節奏完整說明。',
    date: '2026-08-01',
    href: '/blog/nail-rest-period-guide-20260801/',
    cluster: 'gel-care',
  },
  {
    title: '男生也需要做手部保養嗎？景美手部保養美甲師談男士指甲的常見狀況與到店流程',
    excerpt: '整理男性常見指甲狀況、不上色的收尾選擇、深層保養需求，以及第一次到店的實際流程。',
    date: '2026-07-30',
    href: '/blog/mens-hand-care-guide-20260730/',
    cluster: 'hand-foot-care',
  },
  {
    title: '新店凝膠美甲做完之後怎麼顧？美甲師分享撐滿三週的日常保養與該避開的習慣',
    excerpt: '分享洗手後補油、碰水與清潔劑防護、正確使用指尖，以及翹起時該如何處理。',
    date: '2026-07-29',
    href: '/blog/gel-nail-aftercare-guide-20260729/',
    cluster: 'gel-care',
  },
  {
    title: '指甲形狀怎麼挑才適合自己的手？景美美甲店美甲師的五種甲型解析與選型指南',
    excerpt: '解析五種常見甲型，教你從甲床長短、指腹寬窄與生活型態判斷適合自己的形狀。',
    date: '2026-07-28',
    href: '/blog/nail-shape-guide-20260728/',
    cluster: 'style-visit',
  },
  {
    title: '懷孕可以做美甲嗎？景美美甲推薦店家談孕期與哺乳期的指甲照顧',
    excerpt: '從孕期指甲變化、店內環境、款式挑選到待產前卸甲時機，說明保養與醫療的界線。',
    date: '2026-07-25',
    href: '/blog/pregnancy-nail-care-20260725/',
    cluster: 'hand-foot-care',
  },
  {
    title: '第一次到景美美甲店該注意什麼？美甲師帶你走一遍預約到售後的完整流程',
    excerpt: '帶你走一遍從預約、居家準備、諮詢、施作到售後的完整流程，也整理衛生觀察重點。',
    date: '2026-07-24',
    href: '/blog/first-visit-nail-salon-20260724/',
    cluster: 'style-visit',
  },
  {
    title: '新店手足護理指南｜手部與足部保養的專業療程搭配',
    excerpt: '整理手部與足部保養的項目、搭配方式與到店前準備，協助依需求選擇療程。',
    date: '2026-07-23',
    href: '/blog/xindian-hand-foot-care-20260723/',
    cluster: 'hand-foot-care',
  },
  {
    title: '新店美甲課程學什麼？從零基礎到能接案，美甲師談課程內容與適合對象',
    excerpt: '說明零基礎課程內容、學習安排與適合對象，也整理學費之外影響學習成效的關鍵。',
    date: '2026-07-22',
    href: '/blog/nail-course-guide-20260722/',
    cluster: 'courses',
  },
  {
    title: '指甲總是斷裂、分層、變薄怎麼辦？景美手部保養美甲師的常見指甲問題觀察與日常照顧',
    excerpt: '整理指甲斷裂、分層與表面不平的常見原因、居家照顧方式，以及需要就醫的界線。',
    date: '2026-07-21',
    href: '/blog/common-nail-problems-guide-20260721/',
    cluster: 'hand-foot-care',
  },
  {
    title: '涼鞋季腳跟乾裂粗糙怎麼救？景美足部保養美甲師的夏日去角質與日常照顧指南',
    excerpt: '分享泡腳、去角質、足膜與補水步驟，並說明居家保養與到店護理如何分工。',
    date: '2026-07-20',
    href: '/blog/summer-foot-care-guide-20260720/',
    cluster: 'hand-foot-care',
  },
  {
    title: '光療凝膠和一般指甲油差在哪？新店凝膠美甲師的完整比較與挑選建議',
    excerpt: '從硬化方式、持久度、光澤與卸除方式比較光療凝膠和一般指甲油，協助依生活型態選擇。',
    date: '2026-07-18',
    href: '/blog/gel-vs-nail-polish-20260718/',
    cluster: 'gel-care',
  },
  {
    title: '指緣乾裂、倒刺長不停？景美手部保養美甲師的甘皮日常照顧指南',
    excerpt: '說明甘皮與指緣觀念、每天兩分鐘的補油補水步驟，以及倒刺的安全處理方式。',
    date: '2026-07-17',
    href: '/blog/cuticle-care-guide-20260717/',
    cluster: 'hand-foot-care',
  },
  {
    title: '新店造型美甲款式怎麼挑？美甲師的熱門風格解析與選款指南',
    excerpt: '解析貓眼、法式、漸層與暈染四種風格，分享依場合、生活型態與指型選款的方法。',
    date: '2026-07-16',
    href: '/blog/styling-nail-trends-20260716/',
    cluster: 'style-visit',
  },
  {
    title: '新娘婚禮美甲怎麼準備？景美美甲師的婚前時程規劃與款式提案',
    excerpt: '分享婚前手部保養時程、試做安排、婚紗與捧花配色，以及婚宴與蜜月的持久度準備。',
    date: '2026-07-14',
    href: '/blog/bridal-wedding-nails-20260714/',
    cluster: 'style-visit',
  },
  {
    title: '上班族低調美甲怎麼選？景美美甲師推薦耐看又專業的凝膠款式',
    excerpt: '分享裸色、法式等低調耐看的凝膠款式挑選原則，兼顧職場專業、耐長與日常使用。',
    date: '2026-07-12',
    href: '/blog/office-low-key-nails-20260712/',
    cluster: 'style-visit',
  },
  {
    title: '凝膠美甲卸甲全攻略｜景美美甲師教你不傷指甲',
    excerpt: '解析軟式與硬式凝膠差異、正確卸甲流程與卸甲後指緣護理，降低自行剝除造成的損傷。',
    date: '2026-07-08',
    href: '/blog/gel-removal-guide/',
    cluster: 'gel-care',
  },
];

export function normalizePagePath(pathname: string): string {
  if (pathname === '/') return '/';
  return `${pathname.replace(/\/+$/, '')}/`;
}

export function getBlogPost(pathname: string): BlogPost | undefined {
  const normalizedPath = normalizePagePath(pathname);
  return blogPosts.find((post) => post.href === normalizedPath);
}

export function getBlogCluster(key: BlogClusterKey): BlogCluster {
  const cluster = blogClusters.find((item) => item.key === key);
  if (!cluster) throw new Error(`Unknown blog cluster: ${key}`);
  return cluster;
}

export function getRelatedPosts(pathname: string, limit = 3): BlogPost[] {
  const current = getBlogPost(pathname);
  if (!current) return [];

  const clusterPosts = blogPosts.filter((post) => post.cluster === current.cluster);
  const currentIndex = clusterPosts.findIndex((post) => post.href === current.href);
  const relatedCount = Math.min(limit, clusterPosts.length - 1);

  return Array.from({ length: relatedCount }, (_, index) => (
    clusterPosts[(currentIndex + index + 1) % clusterPosts.length]
  ));
}
