(() => {
  'use strict';
  const localized = window.rpmText || (value => value);
  const config = window.AIRPODS_RPM_CONFIG || {};
  const menu = document.querySelector('.menu-toggle');
  if (menu) {
    const nav = document.querySelector('.site-header nav');
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a,button').forEach(item => item.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); } });
  }
  const dialog = document.getElementById('release-dialog');
  document.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => {
    if (config.appStore && /^https:\/\/apps\.apple\.com\//.test(config.appStore)) { window.open(config.appStore, '_blank', 'noopener,noreferrer'); return; }
    if (dialog) dialog.showModal();
  }));
  if (dialog) {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog && (e.offsetX < 0 || e.offsetY < 0 || e.offsetX > dialog.clientWidth || e.offsetY > dialog.clientHeight)) dialog.close(); });
  }
  const orientationDemo = document.getElementById('orientation-demo');
  if (orientationDemo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let orientationVisible = false;
    new IntersectionObserver(entries => { orientationVisible = entries[0].isIntersecting; }, {threshold:.2}).observe(orientationDemo);
    setInterval(() => {
      if (!orientationVisible || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const next = orientationDemo.dataset.orientation === 'portrait' ? 'landscape' : 'portrait';
      orientationDemo.dataset.orientation = next;
      orientationDemo.querySelector('[data-orientation-label]').textContent = localized(next === 'portrait' ? '直式儀表板' : '橫式儀表板');
    }, 4500);
  }
  const form = document.getElementById('feedback-form');
  if (form) {
    const status = document.getElementById('form-status');
    const prepare = () => {
      const data = new FormData(form);
      return `AirPods RPM 意見回饋\n\n類型：${data.get('category')}\n聯絡信箱：${data.get('email') || '未提供'}\n裝置／系統：${data.get('device') || '未提供'}\n\n${data.get('message') || ''}`;
    };
    form.addEventListener('submit', e => {
      e.preventDefault(); if (!form.reportValidity()) return;
      if (config.feedback && /^https:\/\//.test(config.feedback)) { window.open(config.feedback, '_blank', 'noopener,noreferrer'); status.textContent = '請在外部回饋頁面完成提交；此頁不會自動傳送你的內容。'; return; }
      location.href = `mailto:${config.email || 'jstudio0430@gmail.com'}?subject=${encodeURIComponent('[AirPods RPM] 意見回饋')}&body=${encodeURIComponent(prepare())}`;
      status.textContent = '請在郵件 App 確認並送出。如果沒有開啟郵件 App，可以複製內容後自行寄送。網站尚未代你送出。';
    });
    document.getElementById('copy-feedback').addEventListener('click', async () => {
      if (!form.reportValidity()) return;
      try { await navigator.clipboard.writeText(prepare()); status.textContent = '內容已複製，請貼到你的郵件 App，寄給 jstudio0430@gmail.com。'; }
      catch { const field = form.elements.message; field.focus(); field.select(); status.textContent = '無法自動複製，已選取意見文字。請手動複製，寄給 jstudio0430@gmail.com。'; }
    });
  }
  const tocLinks = [...document.querySelectorAll('.policy-toc a')];
  function markSection() { const hash = location.hash || '#s1'; tocLinks.forEach(a => { if(a.hash === hash) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); }); }
  markSection(); window.addEventListener('hashchange',markSection);
  const scene = document.getElementById('ride-scene');
  if (!scene) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const buttons = [...document.querySelectorAll('.mode-tabs button')];
  const description = document.getElementById('scene-description');
  const progress = document.querySelector('.scene-progress span');
  const labels = {seated:'正常坐姿，不用刻意擺頭。', standing:'離開坐墊，切換站姿的偵測基準。', landscape:'手機橫放，放大你的騎乘視野。', history:'結束並保存，留下這一趟騎乘摘要。'};
  const modes = ['seated', 'standing', 'landscape', 'history'];
  let mode = 'seated', running = !reduceMotion.matches, visible = true, auto = !reduceMotion.matches, finished = false;
  let phase = 0.6, time = 0, segment = 0, standBlend = 0, last = 0, lastLabel = -1, raf = 0;
  const el = id => document.getElementById(id);
  function setMode(next, manual = false) {
    mode = next; scene.dataset.mode = next; segment = 0;
    if (manual) { auto = !reduceMotion.matches; finished = false; }
    buttons.forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.mode === next)); b.classList.toggle('is-complete', modes.indexOf(b.dataset.mode) < modes.indexOf(next)); });
    description.textContent = localized(labels[next]);
    document.querySelector('[data-seat-label]').classList.toggle('selected', next !== 'standing');
    document.querySelector('[data-stand-label]').classList.toggle('selected', next === 'standing');
    if (reduceMotion.matches || !running) standBlend = next === 'standing' ? 1 : 0;
    render(0); updateToggle();
  }
  function updateToggle() {
    document.body.classList.toggle('paused', !running || !visible);

  }
  function leg(hip, foot, near) {
    const dx = foot.x - hip.x, dy = foot.y - hip.y, d = Math.max(1, Math.hypot(dx,dy));
    const length = 154, clamped = Math.min(d, length * 2 - 0.1), along = clamped / 2;
    const h = Math.sqrt(Math.max(0, length * length - along * along));
    const knee = {x:hip.x + dx / d * along + dy / d * h, y:hip.y + dy / d * along - dx / d * h};
    const id = near ? 'near' : 'far';
    el(`${id}-leg-path`).setAttribute('d', `M${hip.x} ${hip.y} ${knee.x} ${knee.y} ${foot.x} ${foot.y}`);
    el(`${id}-shorts`).setAttribute('d', `M${hip.x} ${hip.y} ${hip.x + (knee.x - hip.x)*0.52} ${hip.y + (knee.y - hip.y)*0.52}`);
    if (near) el('near-sock').setAttribute('d', `M${foot.x + (knee.x-foot.x)*0.16} ${foot.y + (knee.y-foot.y)*0.16} ${foot.x} ${foot.y}`);
    el(`${id}-shoe`).setAttribute('d', `M${foot.x-8} ${foot.y+4} ${foot.x+25} ${foot.y+4}`);
  }
  function render(dt) {
    const target = mode === 'standing' ? 1 : 0;
    standBlend += (target - standBlend) * (reduceMotion.matches ? 1 : Math.min(1, dt * 4.5));
    const bob = Math.sin(phase*2) * (2 + standBlend*7);
    const hip = {x:375 + standBlend*60, y:340 - standBlend*40 + bob};
    const shoulder = {x:500 + standBlend*18, y:200 - standBlend*34 + bob*.6};
    const foot = {x:430 + 55*Math.cos(phase), y:535+55*Math.sin(phase)};
    const other = {x:430 - 55*Math.cos(phase), y:535-55*Math.sin(phase)};
    leg({x:hip.x-8,y:hip.y-2},other,false); leg({x:hip.x+10,y:hip.y+3},foot,true);
    el('torso').setAttribute('d', `M${hip.x-6} ${hip.y+8}Q${hip.x-8} ${shoulder.y+40} ${shoulder.x-8} ${shoulder.y-10}L${shoulder.x+22} ${shoulder.y+24}Q${hip.x+70} ${hip.y-70} ${hip.x+39} ${hip.y+12}Z`);
    el('kit-stripe').setAttribute('d', `M${hip.x+4} ${hip.y-8}Q${hip.x+35} ${shoulder.y+45} ${shoulder.x-10} ${shoulder.y+9}`);
    el('back-seam').setAttribute('d', `M${hip.x} ${hip.y}Q${hip.x+9} ${shoulder.y+40} ${shoulder.x-6} ${shoulder.y+3}`);
    const elbow={x:shoulder.x+55,y:shoulder.y+78};
    el('arm').setAttribute('d',`M${shoulder.x+3} ${shoulder.y+12} ${elbow.x} ${elbow.y} 653 288`);
    el('sleeve').setAttribute('d',`M${shoulder.x+3} ${shoulder.y+12} ${shoulder.x+24} ${shoulder.y+39}`);
    el('head').setAttribute('transform',`translate(${shoulder.x+32} ${shoulder.y-57}) rotate(${standBlend*-3})`);
    el('crank').setAttribute('transform',`rotate(${phase*180/Math.PI} 430 535)`);
    el('wheel-spokes').setAttribute('transform',`rotate(${phase*360/Math.PI} 643 545)`);
    if (Math.floor(time*2) !== lastLabel) {
      lastLabel=Math.floor(time*2);
      const rpm=Math.round((mode==='standing'?94:82)+5*Math.sin(time*.7));
      document.querySelectorAll('[data-demo-rpm]').forEach(n=>n.textContent=String(rpm));
      el('hero-gauge-fill').style.strokeDasharray=`${Math.min(90,rpm/150*100)} 100`;
      const total=Math.floor(time)+8;
      document.querySelector('[data-demo-time]').textContent=`${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
    }
    buttons.forEach(b => b.style.setProperty('--mode-progress', b.dataset.mode === mode ? (auto ? `${Math.min(100,segment/6.5*100)}%` : '100%') : '0%'));
  }
  function frame(now) {
    raf=0;
    const dt=last?Math.min((now-last)/1000,.06):0; last=now;
    if (running && visible && !document.hidden) {
      time+=dt; segment+=dt;
      if(mode!=='history') phase+=dt*(mode==='standing'?94:82)/60*Math.PI*2;
      if(auto&&segment>=6.5) {
        const index=modes.indexOf(mode);
        setMode(modes[(index+1)%modes.length]);
      }
      render(dt);
    }
    if(running&&visible&&!document.hidden) raf=requestAnimationFrame(frame);
  }
  function schedule(){last=0;if(!raf&&running&&visible&&!document.hidden)raf=requestAnimationFrame(frame);}
  buttons.forEach(b=>b.addEventListener('click',()=>{setMode(b.dataset.mode,true);schedule();}));
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;updateToggle();schedule();},{threshold:.05}).observe(scene);
  document.addEventListener('visibilitychange',()=>{updateToggle();schedule();});
  reduceMotion.addEventListener('change',e=>{running=!e.matches;auto=false;updateToggle();render(0);schedule();});
  render(0);updateToggle();schedule();
})();
