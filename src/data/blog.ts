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
    title: "新店美甲教學如何配合樂器與運動？把手部使用情境帶進練習",
    excerpt: "新店美甲教學可把樂器、球拍、攀岩或其他手部使用習慣帶入課程溝通，安排長度、操作和作品紀錄。",
    date: "2026-09-12",
    href: '/blog/xindian-nail-class-musician-sports-practice-plan-20260912/',
    cluster: "hand-foot-care",
  },
  {
    title: "新店美甲教學怎麼安排練習？用作品紀錄找到下一次修正重點",
    excerpt: "新店美甲教學練習可從課程目標、工具準備、作品拍照與老師回饋開始，建立清楚的修正順序，讓每次練習都有可比較的依據。",
    date: "2026-09-10",
    href: '/blog/xindian-nail-class-practice-record-feedback-20260910/',
    cluster: "hand-foot-care",
  },
  {
    title: "新店凝膠美甲參考圖怎麼選？短甲的比例、留白與配色練習",
    excerpt: "挑選新店凝膠美甲參考圖時，分開看甲形、留白、配色和飾品位置，整理短甲也能清楚溝通的設計方向。",
    date: "2026-09-09",
    href: '/blog/xindian-gel-nails-short-nail-reference-proportion-color-20260909/',
    cluster: "hand-foot-care",
  },
  {
    title: "新店凝膠美甲遇到旅行行程，款式、長度、維護與卸除時間怎麼排？",
    excerpt: "新店凝膠美甲若要配合旅行，可先確認施作與卸除日期、活動所需長度、款式素材、日常維護和異常處理方式。",
    date: "2026-09-08",
    href: '/blog/xindian-gel-nails-travel-design-length-care-removal-20260908/',
    cluster: "hand-foot-care",
  },
  {
    title: "第一次找景美美甲店怎麼比較？作品、卸除、工具與日常需求清單",
    excerpt: "第一次比較景美美甲店時，可用相同欄位查看作品方向、既有材料卸除、工具清潔、所需時間及日常使用需求。",
    date: "2026-09-07",
    href: '/blog/jingmei-nail-shop-first-visit-portfolio-removal-tools-daily-needs-20260907/',
    cluster: "hand-foot-care",
  },
  {
    title: "景美手部保養怎麼排？打字、家事、指甲長度與卸除需求先說",
    excerpt: "預約景美手部保養時，先說明工作打字、家事、常戴手套等使用情境，並確認甲面材料、長度、清潔與卸除範圍。",
    date: "2026-09-06",
    href: '/blog/jingmei-hand-care-typing-chores-nail-length-removal-20260906/',
    cluster: "hand-foot-care",
  },
  {
    title: "景美足部保養預約前，鞋款、步行安排與指甲現況怎麼整理？",
    excerpt: "景美足部保養前，先說明常穿鞋款、當天步行計畫、既有甲面材料與目前不適，確認服務範圍、清潔流程和需要先就醫的問題。",
    date: "2026-09-05",
    href: '/blog/jingmei-foot-care-shoes-walking-nail-condition-booking-20260905/',
    cluster: "hand-foot-care",
  },
  {
    title: "景美手部保養後隔天要做家事？碰水、手套與不適觀察清單",
    excerpt: "景美手部保養後若要洗碗、清潔或搬物，先確認碰水與手套使用方式，並觀察指緣、甲面和皮膚是否持續不適。",
    date: "2026-09-04",
    href: '/blog/jingmei-hand-care-aftercare-water-gloves-discomfort-20260904/',
    cluster: "hand-foot-care",
  },
  {
    title: "景美手部保養預約前，指緣、甲面與日常工作怎麼說明？",
    excerpt: "安排景美手部保養時，先說明指緣、甲面、慣用手與工作接觸，遇到破皮疼痛或感染疑慮應先尋求醫療評估。",
    date: "2026-09-03",
    href: '/blog/jingmei-hand-care-cuticle-nail-daily-work-20260903/',
    cluster: "hand-foot-care",
  },
  {
    title: "新店手足護理前有破皮或壓痛怎麼說？預約、鞋襪與停止界線",
    excerpt: "手足有破皮、紅腫或壓痛時，先描述位置與時間，不自行遮蓋。服務前確認是否適合進行，必要時先由醫療人員評估。",
    date: "2026-09-02",
    href: '/blog/xindian-hand-foot-care-skin-break-tenderness-boundaries-20260902/',
    cluster: "hand-foot-care",
  },
  {
    title: "新店手足護理怎麼安排鞋襪與行程？預約前先說明日常使用狀況",
    excerpt: "手足護理前先整理工作用手、鞋襪、運動與敏感狀況，確認服務範圍和返家動線；有傷口或疑似感染時，不用勉強進行美容服務。",
    date: "2026-09-01",
    href: '/blog/xindian-hand-foot-care-shoes-schedule-20260901/',
    cluster: "hand-foot-care",
  },
  {
    title: '新店美甲課程怎麼排練習？上班族報名前先算工具、時間與回饋',
    excerpt: '選新店美甲課程，不只比較上課堂數。從每週練習空檔、工具清單、手模安排到作品回饋，整理上班族報名前可以問清楚的學習條件，不承諾短期接案。',
    date: '2026-08-31',
    href: '/blog/xindian-nail-course-practice-schedule-20260831/',
    cluster: 'courses',
  },
  {
    title: '美甲照片拍完才發現太亮？記錄作品時，光線與色差怎麼看',
    excerpt: '同一款美甲在窗邊、店內與手機畫面可能看起來不同。從光線、角度、原圖留存到分享範圍，整理能幫助下次選色的作品拍照方法，不把照片當成色彩保證。',
    date: '2026-08-30',
    href: '/blog/nail-photo-lighting-color-record-20260830/',
    cluster: 'style-visit',
  },
  {
    title: '新店凝膠美甲第一次怎麼選？長度、色系與卸甲安排先說清楚',
    excerpt: '第一次預約新店凝膠美甲，可先整理工作用手、期望長度、喜歡與不喜歡的色系、甲況及卸甲時間。本文說明參考圖如何溝通、為何不必一開始就做複雜款，以及紅腫破皮等應先就醫的界線。',
    date: '2026-08-29',
    href: '/blog/xindian-first-gel-manicure-consultation-20260829/',
    cluster: 'gel-care',
  },
  {
    title: '指甲剪得太短還能做美甲嗎？先看甲緣、皮膚與日常使用',
    excerpt: '指甲剪得很短不一定完全不能做美甲，但需要先看甲板是否完整、甲緣周圍有無破皮疼痛，以及日常工作是否容易磨碰。本文整理到店前不要再挖剪、服務項目怎麼調整，以及紅腫、滲液、甲片分離等應先就醫的界線。',
    date: '2026-08-28',
    href: '/blog/jingmei-short-nails-manicure-assessment-20260828/',
    cluster: 'gel-care',
  },
  {
    title: '景美手部保養不只修指緣：乾燥、倒刺與日常清潔怎麼整理',
    excerpt: '手部乾燥與倒刺不適合直接撕掉。本文整理景美手部保養前如何觀察清潔、碰水與摩擦習慣，基礎指緣整理的安全界線、工具衛生、居家保濕，以及紅腫滲液等應先就醫的情況。',
    date: '2026-08-27',
    href: '/blog/jingmei-hand-care-dry-cuticle-20260827/',
    cluster: 'hand-foot-care',
  },
  {
    title: '做完美甲隔天要洗衣打掃，手套怎麼戴？景美凝膠美甲的家事防護',
    excerpt: '美甲後不可能完全不碰水。本文整理洗碗、洗衣與清潔時如何選合適手套、為什麼內部潮濕要立刻更換、指尖不要拿來摳刮，以及凝膠翹起、疼痛或甲周紅腫時的處理界線。',
    date: '2026-08-26',
    href: '/blog/jingmei-manicure-housework-gloves-20260826/',
    cluster: 'gel-care',
  },
  {
    title: '景美足部保養不只是擦指甲油：久站、走路多的人先看受力與鞋襪習慣',
    excerpt: '久站、通勤走很多路，腳底粗糙與趾甲不適不一定只靠一次保養解決。本文整理到店前的受力觀察、鞋襪與清潔習慣、基礎足部整理的範圍，以及傷口、感染疑慮等應先就醫的界線。',
    date: '2026-08-24',
    href: '/blog/jingmei-foot-care-standing-walking-20260824/',
    cluster: 'hand-foot-care',
  },
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
