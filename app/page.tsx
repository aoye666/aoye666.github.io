"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function copyQQ() {
  navigator.clipboard.writeText("3855048524");
  const btn = document.getElementById("qq-btn");
  if (btn) {
    btn.textContent = "已复制 ✓";
    setTimeout(() => {
      if (btn) btn.textContent = "QQ: 3855048524";
    }, 1500);
  }
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      <div className="bg-wrap"></div>

      <nav>
        <a href="#" className="nav-logo">
          ao<em>ye</em>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">关于</a>
          </li>
          <li>
            <a href="#interests">兴趣</a>
          </li>
          <li>
            <a href="#now">现在</a>
          </li>
          <li>
            <a href="https://github.com/aoye666" target="_blank">
              GitHub ↗
            </a>
          </li>
        </ul>
      </nav>

      <div className="page">
        {/* HERO */}
        <div className="hero g reveal" id="about">
          <div>
            <p className="hero-eyebrow">从毕节出发</p>
            <h1 className="hero-name">
              ao<em>ye</em>
            </h1>
            <div className="hero-tags">
              <span className="htag">17 岁</span>
              <span className="htag">INTP</span>
              <span className="htag">AI Agent</span>
              <span className="htag">高中生</span>
              <span className="htag">毕节</span>
            </div>
          </div>
          <div className="hero-right">
            <blockquote className="hero-quote">
              用代码和好奇心
              <br />
              探索世界的高中生
            </blockquote>
            <p className="hero-bio">
              自学成瘾的 <strong>AI 玩家</strong>，持续迭代 AI Agent
              项目。
              <br />
              对系统架构和工具有天然的整合欲。
            </p>
            <div className="hero-origin">
              <span className="origin-dot"></span>
              <span>自学成瘾的 AI 玩家 · 从毕节出发</span>
            </div>
          </div>
        </div>

        {/* INFO + TECH */}
        <div className="row2">
          <div className="card g reveal">
            <div className="clabel">基本信息</div>
            <div className="info-list">
              <div className="irow">
                <span className="ikey">姓名</span>
                <span className="ival">aoye</span>
              </div>
              <div className="irow">
                <span className="ikey">生日</span>
                <span className="ival">2008 年 12 月</span>
              </div>
              <div className="irow">
                <span className="ikey">MBTI</span>
                <span className="ival">INTP — 逻辑学家</span>
              </div>
              <div className="irow">
                <span className="ikey">GitHub</span>
                <span className="ival">
                  <a href="https://github.com/aoye666" target="_blank">
                    @aoye666 ↗
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="card g reveal">
            <div className="clabel">技术方向</div>
            <div className="tech-list">
              <div className="titem">
                <span className="ticon">⚙️</span>
                <p className="ttext">
                  持续迭代 AI Agent 项目至今，探索 LLM
                  与工具链的深度融合。
                </p>
              </div>
              <div className="titem">
                <span className="ticon">🔗</span>
                <p className="ttext">
                  对系统架构和工具有天然的整合欲，热衷于将零散开源项目串联成顺畅工作流。
                </p>
              </div>
              <div className="titem">
                <span className="ticon">🛠️</span>
                <p className="ttext">
                  喜欢折腾服务器部署与自动化工具，享受从零搭建并让它跑通的那一刻。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="row3" id="interests">
          <div className="icard g icard-music reveal">
            <span className="icard-icon">🎵</span>
            <div className="icard-title">音乐</div>
            <ul className="icard-list">
              <li>《衡山路宛平路》</li>
              <li>人洞山</li>
              <li>加州旅馆</li>
              <li>Free Bird</li>
              <li>Sweet Child O&apos; Mine</li>
            </ul>
          </div>

          <div className="icard g icard-anime reveal">
            <span className="icard-icon">🎌</span>
            <div className="icard-title">动漫</div>
            <ul className="icard-list">
              <li>哭泣少女乐队</li>
              <li>Girls Band Cry</li>
              <li>孤独摇滚</li>
              <li>MyGO!!!!!</li>
              <li>超时空辉夜姬</li>
              <li>铃芽之旅</li>
            </ul>
          </div>

          <div className="icard g icard-tech reveal">
            <span className="icard-icon">💻</span>
            <div className="icard-title">技术探索</div>
            <ul className="icard-list">
              <li>开源项目折腾</li>
              <li>服务器部署</li>
              <li>自动化工具</li>
              <li>AI 新玩法</li>
            </ul>
          </div>
        </div>

        {/* PROJECT */}
        <div className="card g reveal project-card">
          <img
            src="/bot-avatar.jpg"
            alt="毕小研"
            className="project-avatar"
          />
          <div className="project-content">
            <div className="clabel">Projects</div>
            <div className="nbadge" style={{ marginBottom: "10px" }}>
              <span className="nbadge-dot"></span>ACTIVE
            </div>
            <div className="ncontent" style={{ marginBottom: "6px" }}>
              毕小研
            </div>
            <div className="nsub" style={{ marginBottom: "14px" }}>
              一个正在成长的 QQ 聊天 Bot，持续迭代中
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <button
                id="qq-btn"
                className="qq-btn"
                onClick={copyQQ}
              >
                QQ: 3855048524
              </button>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                点击复制 → QQ 搜索添加
              </span>
            </div>
          </div>
        </div>

        {/* NOW / CONTACT */}
        <div className="row2" id="now">
          <div className="ncard g reveal">
            <div className="clabel">Writing</div>
            <div className="nbadge">
              <span className="nbadge-dot"></span>FICTION
            </div>
            <div className="ncontent">
              <a href="https://baisiheisi.suotianyi.top" target="_blank">
                《白丝与黑丝》↗
              </a>
            </div>
            <div className="nsub">个人小说 · 8章 · 约 2 万字</div>
          </div>

          <div className="ncard g reveal">
            <div className="clabel">Now</div>
            <div className="nbadge">
              <span className="nbadge-dot"></span>2026
            </div>
            <div className="ncontent">备考高三</div>
            <div className="nsub">距高考还有一些时间</div>
          </div>
        </div>

        <div className="row2">
          <div className="ncard g reveal">
            <div className="clabel">Contact</div>
            <div className="nbadge">
              <span className="nbadge-dot"></span>GITHUB
            </div>
            <div className="ncontent">
              <a href="https://github.com/aoye666" target="_blank">
                github.com/aoye666 ↗
              </a>
            </div>
            <div className="nsub">欢迎来看看</div>
          </div>

          <div className="ncard g reveal" style={{ visibility: "hidden" }}></div>
        </div>

        {/* FOOTER */}
        <div className="footer g reveal">
          <div className="footer-logo">
            ao<em>ye</em>
          </div>
          <div className="footer-center">
            17 · INTP · AI Agent 开发者
            <br />
            从毕节出发，用代码和好奇心探索世界
          </div>
          <div className="footer-right">
            <a href="https://github.com/aoye666" target="_blank">
              @aoye666
            </a>
            <br />
            2026
          </div>
        </div>
      </div>
    </>
  );
}
