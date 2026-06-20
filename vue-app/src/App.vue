<template>
  <!-- Warm background -->
  <div class="bg-wrap"></div>

  <!-- Pill nav -->
  <nav>
    <a href="#" class="nav-logo">ao<em>ye</em></a>
    <ul class="nav-links">
      <li><a href="#about">关于</a></li>
      <li><a href="#interests">兴趣</a></li>
      <li><a href="#now">现在</a></li>
      <li><a href="https://github.com/aoye666" target="_blank">GitHub ↗</a></li>
    </ul>
  </nav>

  <div class="page">
    <!-- ══ HERO ══ -->
    <div class="hero g reveal" id="about" ref="heroRef">
      <div>
        <p class="hero-eyebrow">从毕节出发</p>
        <h1 class="hero-name">ao<em>ye</em></h1>
        <div class="hero-tags">
          <span class="htag" v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="hero-right">
        <blockquote class="hero-quote">
          用代码和好奇心<br />探索世界的高中生
        </blockquote>
        <p class="hero-bio">
          自学成瘾的 <strong>AI 玩家</strong>，持续迭代 AI Agent 项目。<br />
          对系统架构和工具有天然的整合欲。
        </p>
        <div class="hero-origin">
          <span class="origin-dot"></span>
          <span>自学成瘾的 AI 玩家 · 从毕节出发</span>
        </div>
      </div>
    </div>

    <!-- ══ INFO + TECH ══ -->
    <div class="row2">
      <div class="card g reveal" ref="infoCardRef">
        <div class="clabel">基本信息</div>
        <div class="info-list">
          <div class="irow" v-for="item in basicInfo" :key="item.key">
            <span class="ikey">{{ item.key }}</span>
            <span class="ival">
              <a v-if="item.link" :href="item.link" target="_blank">{{ item.value }} ↗</a>
              <span v-else>{{ item.value }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="card g reveal" ref="techCardRef">
        <div class="clabel">技术方向</div>
        <div class="tech-list">
          <div class="titem" v-for="(tech, index) in techDirections" :key="index">
            <span class="ticon">{{ tech.icon }}</span>
            <p class="ttext">{{ tech.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ INTERESTS ══ -->
    <div class="row3" id="interests">
      <div 
        class="icard g reveal" 
        :class="'icard-' + interest.type" 
        v-for="interest in interests" 
        :key="interest.type"
        ref="interestRefs"
      >
        <span class="icard-icon">{{ interest.icon }}</span>
        <div class="icard-title">{{ interest.title }}</div>
        <ul class="icard-list">
          <li v-for="item in interest.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- ══ PROJECT ══ -->
    <div class="card g reveal" ref="projectRef" style="border-radius:18px; padding:28px; display:flex; gap:24px; align-items:center;">
      <img src="/public/bot-avatar.jpg" alt="毕小研" style="width:80px; height:80px; border-radius:50%; border:2px solid rgba(240,174,88,0.35); flex-shrink:0; object-fit:cover;" />
      <div style="flex:1; min-width:0;">
        <div class="clabel">Projects</div>
        <div class="nbadge" style="margin-bottom:10px;">
          <span class="nbadge-dot"></span>ACTIVE
        </div>
        <div class="ncontent" style="margin-bottom:6px;">毕小研</div>
        <div class="nsub" style="margin-bottom:14px;">一个正在成长的 QQ 聊天 Bot，持续迭代中</div>
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <span 
            class="qq-badge"
            @click="copyQQ"
          >{{ qqBadgeText }}</span>
          <span style="font-size:11px; color:var(--muted);">点击复制 → QQ 搜索添加</span>
        </div>
      </div>
    </div>

    <!-- ══ NOW / CONTACT ══ -->
    <div class="row2" id="now">
      <div class="ncard g reveal" v-for="card in nowCards" :key="card.title" ref="nowCardRefs">
        <div class="clabel">{{ card.label }}</div>
        <div class="nbadge">
          <span class="nbadge-dot"></span>{{ card.badge }}
        </div>
        <div class="ncontent">
          <a v-if="card.link" :href="card.link" target="_blank">{{ card.content }} ↗</a>
          <span v-else>{{ card.content }}</span>
        </div>
        <div class="nsub">{{ card.sub }}</div>
      </div>
    </div>

    <!-- ══ FOOTER ══ -->
    <div class="footer g reveal" ref="footerRef">
      <div class="footer-logo">ao<em>ye</em></div>
      <div class="footer-center">
        17 · INTP · AI Agent 开发者<br />
        从毕节出发，用代码和好奇心探索世界
      </div>
      <div class="footer-right">
        <a href="https://github.com/aoye666" target="_blank">@aoye666</a><br />
        2026
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tags = ['17 岁', 'INTP', 'AI Agent', '高中生', '毕节']

const basicInfo = [
  { key: '姓名', value: 'aoye' },
  { key: '生日', value: '2008 年 12 月' },
  { key: 'MBTI', value: 'INTP — 逻辑学家' },
  { key: 'GitHub', value: '@aoye666', link: 'https://github.com/aoye666' }
]

const techDirections = [
  { icon: '⚙️', text: '持续迭代 AI Agent 项目至今，探索 LLM 与工具链的深度融合。' },
  { icon: '🔗', text: '对系统架构和工具有天然的整合欲，热衷于将零散开源项目串联成顺畅工作流。' },
  { icon: '🛠️', text: '喜欢折腾服务器部署与自动化工具，享受从零搭建并让它跑通的那一刻。' }
]

const interests = [
  { 
    type: 'music', 
    icon: '🎵', 
    title: '音乐', 
    items: ['《衡山路宛平路》', '人洞山', '加州旅馆', "Free Bird", "Sweet Child O' Mine"] 
  },
  { 
    type: 'anime', 
    icon: '🎌', 
    title: '动漫', 
    items: ['哭泣少女乐队', 'Girls Band Cry', '孤独摇滚', 'MyGO!!!!!', '超时空辉夜姬', '铃芽之旅'] 
  },
  { 
    type: 'tech', 
    icon: '💻', 
    title: '技术探索', 
    items: ['开源项目折腾', '服务器部署', '自动化工具', 'AI 新玩法'] 
  }
]

const qqBadgeText = ref('QQ: 3855048524')
const copyQQ = () => {
  navigator.clipboard.writeText('3855048524')
  qqBadgeText.value = '已复制 ✓'
  setTimeout(() => {
    qqBadgeText.value = 'QQ: 3855048524'
  }, 1500)
}

const nowCards = [
  { label: 'Writing', badge: 'FICTION', content: '《白丝与黑丝》', link: 'https://baisiheisi.suotianyi.top', sub: '个人小说 · 8 章 · 约 2 万字' },
  { label: 'Now', badge: '2026', content: '备考高三', sub: '距高考还有一些时间' },
  { label: 'Contact', badge: 'GITHUB', content: 'github.com/aoye666', link: 'https://github.com/aoye666', sub: '欢迎来看看' }
]

// Scroll reveal logic
const revealRefs = ref([])

const collectRevealRefs = () => {
  const refs = []
  if (heroRef.value) refs.push(heroRef.value)
  if (infoCardRef.value) refs.push(infoCard.value)
  if (techCardRef.value) refs.push(techCardRef.value)
  if (interestRefs.value) refs.push(...interestRefs.value)
  if (projectRef.value) refs.push(projectRef.value)
  if (nowCardRefs.value) refs.push(...nowCardRefs.value)
  if (footerRef.value) refs.push(footerRef.value)
  return refs
}

const heroRef = ref(null)
const infoCardRef = ref(null)
const techCardRef = ref(null)
const interestRefs = ref([])
const projectRef = ref(null)
const nowCardRefs = ref([])
const footerRef = ref(null)

onMounted(() => {
  const items = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const parent = e.target.parentElement
      const siblings = [...parent.querySelectorAll('.reveal')]
      const idx = siblings.indexOf(e.target)
      e.target.style.transitionDelay = (idx * 0.09) + 's'
      e.target.classList.add('in')
      io.unobserve(e.target)
    })
  }, { threshold: 0.08, rootMargin: '-10px 0px' })

  items.forEach(el => io.observe(el))
})
</script>

<style scoped>
:root {
  --glass-bg:      rgba(16, 7, 2, 0.50);
  --glass-border:  rgba(255, 205, 120, 0.20);
  --glass-glow:    rgba(255, 185, 80, 0.07);
  --glass-inner:   rgba(255, 225, 155, 0.09);

  --text:    #f4ebdc;
  --muted:   rgba(235, 198, 148, 0.52);
  --gold:    #f0ae58;
  --coral:   #e87868;
  --pale:    #f8d98a;
  --white:   #fdf6ed;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  min-height: 100vh;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  color: var(--text);
  overflow-x: hidden;
}

/* ─── BACKGROUND ─── */
.bg-wrap {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    url('/public/bg.jpg')
    center / cover no-repeat;
}
.bg-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(10,5,2,0.38) 100%);
}

/* ─── GLASS UTILITY ─── */
.g {
  background: var(--glass-bg);
  backdrop-filter: blur(26px) saturate(1.75);
  -webkit-backdrop-filter: blur(26px) saturate(1.75);
  border: 1px solid var(--glass-border);
  box-shadow:
    0 10px 40px rgba(0,0,0,0.30),
    inset 0 1px 0 var(--glass-inner),
    inset 0 -1px 0 rgba(0,0,0,0.1);
}

/* ─── FLOATING NAV ─── */
nav {
  position: fixed;
  top: 16px; left: 50%; transform: translateX(-50%);
  z-index: 900;
  width: calc(100% - 48px);
  max-width: 880px;
  padding: 13px 22px;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(14, 6, 1, 0.62);
  backdrop-filter: blur(32px) saturate(1.6);
  -webkit-backdrop-filter: blur(32px) saturate(1.6);
  border: 1px solid rgba(255, 200, 110, 0.22);
  box-shadow:
    0 4px 24px rgba(0,0,0,0.28),
    0 0 0 0.5px rgba(255,180,80,0.08);
}

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 21px;
  font-weight: 500;
  color: var(--white);
  letter-spacing: 0.05em;
  text-decoration: none;
}
.nav-logo em { font-style: italic; color: var(--gold); }

.nav-links { display: flex; gap: 22px; list-style: none; }
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--gold); }

/* ─── PAGE CONTAINER ─── */
.page {
  max-width: 880px;
  margin: 0 auto;
  padding: 112px 20px 56px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ─── HERO ─── */
.hero {
  border-radius: 22px;
  padding: 52px 52px 48px;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 340px; height: 340px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240,160,60,0.14) 0%, transparent 65%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: -60px; left: -40px;
  width: 260px; height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,120,100,0.09) 0%, transparent 65%);
  pointer-events: none;
}

.hero-eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.hero-eyebrow::before {
  content: '';
  display: inline-block;
  width: 20px; height: 1px;
  background: var(--gold);
  opacity: 0.7;
}

.hero-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(72px, 10vw, 106px);
  font-weight: 300;
  line-height: 0.88;
  letter-spacing: -0.025em;
  color: var(--white);
  margin-bottom: 28px;
}
.hero-name em { font-style: italic; color: var(--gold); }

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.htag {
  padding: 4px 13px;
  border-radius: 100px;
  background: rgba(255, 200, 110, 0.09);
  border: 1px solid rgba(255, 200, 110, 0.24);
  color: rgba(235,200,148,0.85);
  font-size: 11px;
  letter-spacing: 0.06em;
  transition: all 0.22s;
  cursor: default;
}
.htag:hover {
  background: rgba(240,174,88,0.18);
  color: var(--pale);
  border-color: rgba(240,174,88,0.4);
}

.hero-right {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.hero-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 21px;
  font-weight: 300;
  font-style: italic;
  color: rgba(244,235,220,0.88);
  line-height: 1.65;
  border-left: 2px solid var(--gold);
  padding-left: 18px;
}

.hero-bio {
  font-family: 'Noto Serif SC', serif;
  font-size: 14.5px;
  font-weight: 300;
  color: var(--muted);
  line-height: 2;
}
.hero-bio strong { color: var(--text); font-weight: 400; }

.hero-origin {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 11.5px;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.origin-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 10px var(--gold), 0 0 20px rgba(240,174,88,0.4);
  animation: glow-pulse 2.5s ease-in-out infinite;
}
@keyframes glow-pulse {
  0%,100% { box-shadow: 0 0 8px var(--gold), 0 0 16px rgba(240,174,88,0.3); }
  50%      { box-shadow: 0 0 14px var(--gold), 0 0 28px rgba(240,174,88,0.55); }
}

/* ─── TWO-COLUMN ROW ─── */
.row2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 14px;
}

/* ─── CARD BASE ─── */
.card {
  border-radius: 18px;
  padding: 28px 28px;
  transition: transform 0.25s cubic-bezier(.22,.68,0,1.2),
              box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 52px rgba(0,0,0,0.36),
    inset 0 1px 0 rgba(255,225,150,0.16);
}

.clabel {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.clabel::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255, 200, 120, 0.16);
}

/* ─── INFO LIST ─── */
.info-list { display: flex; flex-direction: column; gap: 15px; }
.irow { display: flex; flex-direction: column; gap: 3px; }
.ikey {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.ival {
  font-family: 'Noto Serif SC', serif;
  font-size: 15px;
  font-weight: 300;
  color: var(--white);
}
.ival a {
  color: var(--gold);
  text-decoration: none;
}
.ival a:hover { text-decoration: underline; }

/* ─── TECH LIST ─── */
.tech-list { display: flex; flex-direction: column; gap: 10px; }
.titem {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  padding: 13px 16px;
  border-radius: 11px;
  background: rgba(255, 195, 90, 0.055);
  border: 1px solid rgba(255, 195, 90, 0.11);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}
.titem:hover {
  background: rgba(255, 195, 90, 0.11);
  border-color: rgba(255, 195, 90, 0.22);
  transform: translateX(3px);
}
.ticon { font-size: 17px; line-height: 1.4; flex-shrink: 0; }
.ttext {
  font-family: 'Noto Serif SC', serif;
  font-size: 13.5px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.75;
}

/* ─── THREE-COLUMN ROW ─── */
.row3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

/* ─── INTEREST CARDS ─── */
.icard {
  border-radius: 18px;
  padding: 28px 22px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(.22,.68,0,1.2);
}
.icard:hover { transform: translateY(-5px); }

.icard::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2.5px;
}
.icard-music::before  { background: linear-gradient(90deg, var(--gold), var(--pale)); }
.icard-anime::before  { background: linear-gradient(90deg, var(--coral), var(--gold)); }
.icard-tech::before   { background: linear-gradient(90deg, var(--pale), var(--coral)); }

.icard::after {
  content: '';
  position: absolute;
  bottom: -40px; right: -40px;
  width: 120px; height: 120px;
  border-radius: 50%;
  pointer-events: none;
}
.icard-music::after { background: radial-gradient(circle, rgba(240,174,88,0.1) 0%, transparent 70%); }
.icard-anime::after { background: radial-gradient(circle, rgba(232,120,104,0.1) 0%, transparent 70%); }
.icard-tech::after  { background: radial-gradient(circle, rgba(248,217,138,0.1) 0%, transparent 70%); }

.icard-icon {
  font-size: 28px;
  margin-bottom: 12px;
  display: block;
}
.icard-title {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}
.icard-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.icard-list li {
  font-family: 'Noto Serif SC', serif;
  font-size: 13px;
  font-weight: 300;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 8px;
}
.icard-list li::before {
  content: '';
  display: inline-block;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--gold);
  opacity: 0.6;
  flex-shrink: 0;
}

/* ─── NOW CARDS ─── */
.ncard {
  border-radius: 18px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.25s cubic-bezier(.22,.68,0,1.2);
}
.ncard:hover { transform: translateY(-4px); }

.nbadge {
  display: inline-flex; align-items: center;
  gap: 6px;
  padding: 3px 11px;
  border-radius: 100px;
  font-size: 10px;
  letter-spacing: 0.1em;
  background: rgba(240, 174, 92, 0.12);
  border: 1px solid rgba(240, 174, 92, 0.28);
  color: var(--gold);
  width: fit-content;
}
.nbadge-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--gold);
  animation: live-pulse 2s ease-in-out infinite;
}
@keyframes live-pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.45; transform: scale(0.75); }
}

.ncontent {
  font-family: 'Noto Serif SC', serif;
  font-size: 16px;
  font-weight: 300;
  color: var(--white);
  line-height: 1.65;
}
.ncontent a {
  color: var(--gold);
  text-decoration: none;
}
.ncontent a:hover { text-decoration: underline; }
.nsub {
  font-size: 12px;
  color: var(--muted);
}

/* ─── FOOTER STRIP ─── */
.footer {
  border-radius: 18px;
  padding: 26px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 300;
  color: var(--white);
}
.footer-logo em { font-style: italic; color: var(--gold); }

.footer-center {
  font-family: 'Noto Serif SC', serif;
  font-size: 13px;
  font-weight: 300;
  color: var(--muted);
  text-align: center;
  line-height: 1.9;
}
.footer-right {
  font-size: 11px;
  color: var(--muted);
  text-align: right;
  line-height: 2;
}
.footer-right a { color: rgba(240,174,88,0.7); text-decoration: none; }
.footer-right a:hover { color: var(--gold); }

/* ─── SCROLL REVEAL ─── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.in {
  opacity: 1;
  transform: translateY(0);
}

/* ─── QQ BADGE ─── */
.qq-badge {
  display:inline-flex; align-items:center; gap:6px;
  padding:6px 16px; border-radius:100px; font-size:11px;
  background:rgba(240,174,92,0.12); border:1px solid rgba(240,174,92,0.28);
  color:var(--gold); letter-spacing:0.06em;
  cursor:pointer;
  transition: all 0.2s;
}
.qq-badge:hover {
  background:rgba(240,174,92,0.18);
}

/* ─── RESPONSIVE ─── */
@media (max-width: 700px) {
  .hero { grid-template-columns: 1fr; padding: 36px 28px; gap: 28px; }
  .hero-name { font-size: 70px; }
  .row2 { grid-template-columns: 1fr; }
  .row3 { grid-template-columns: 1fr; }
  .footer { flex-direction: column; text-align: center; padding: 24px; }
  .footer-right { text-align: center; }
  nav { border-radius: 16px; top: 12px; }
}
</style>
