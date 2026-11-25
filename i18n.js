/* Client-side localization. Chinese is the original document; all other locales
   are local files (no translation service or network dependency). */
(() => {
  const locales = {'zh-Hant':'繁體中文', en:'English', ja:'日本語', ko:'한국어', fr:'Français', de:'Deutsch', es:'Español'};
  const normalize = value => {
    if (!value) return null;
    if (/^zh(?:-|$)/i.test(value)) return 'zh-Hant';
    const base = value.toLowerCase().split('-')[0];
    return Object.hasOwn(locales,base) ? base : null;
  };
  const params = new URLSearchParams(location.search);
  let saved; try { saved = localStorage.getItem('rpm-site-language'); } catch {}
  const systemLanguage = (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  const explicitLanguage = normalize(params.get('lang')) || normalize(saved);
  const language = explicitLanguage || systemLanguage;
  const data = window.RPM_TRANSLATIONS?.[language];
  document.documentElement.lang = language;
  const tr = value => data?.ui?.[value] || value;
  window.rpmText = tr;
  // Text nodes are translated individually so links, numbers and SVGs survive.
  if (data) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node; node = walker.nextNode();) {
      if (node.parentElement.closest('script,style,svg')) continue;
      const original = node.nodeValue;
      const key = original.trim();
      if (key && data.ui[key]) node.nodeValue = original.replace(key, data.ui[key]);
    }
    for (const node of document.querySelectorAll('[aria-label], [alt], meta[name="description"]')) {
      for (const attr of ['aria-label','alt','content']) if (node.hasAttribute(attr)) {
        const original = node.getAttribute(attr);
        if (data.ui[original]) node.setAttribute(attr,data.ui[original]);
      }
    }
    const page = location.pathname.split('/').pop().replace('.html','') || 'index';
    document.title = tr(document.title);
    // Keep the existing section ids and contents table; insert the localized
    // document paragraphs and preserve the explicitly known external links.
    if (['terms','privacy'].includes(page) && data[page]) {
      const links = {
        email:'<a href="mailto:jstudio0430@gmail.com">jstudio0430@gmail.com</a>',
        terms:`<a href="terms.html">${tr('使用條款')}</a>`, privacy:`<a href="privacy.html">${tr('隱私政策')}</a>`,
        feedback:`<a href="https://forms.gle/BbbcXge1BpcNwwj79" target="_blank" rel="noopener noreferrer">${tr('意見回饋')}</a>`,
        apple:'<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple EULA</a>',
        google:'<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>',
        eu:'<a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en" target="_blank" rel="noopener noreferrer">European Commission</a>'
      };
      data[page].forEach(([heading,...paragraphs],i) => {
        const section = document.getElementById(`s${i+1}`); if (!section) return;
        section.querySelector('h2').textContent = heading;
        section.querySelectorAll('p').forEach(p=>p.remove());
        for(const content of paragraphs){ const p=document.createElement('p'); p.textContent=content; p.innerHTML=p.innerHTML.replace(/\{(email|terms|privacy|feedback|apple|google|eu)\}/g,(_,key)=>links[key]); section.append(p); }
        const toc = document.querySelector(`.policy-toc a[href="#s${i+1}"]`);
        if(toc) for(const n of toc.childNodes) if(n.nodeType===3 && n.textContent.trim()) n.textContent=heading;
      });
    }
    if(page==='faq' && data.faq) {
      document.querySelectorAll('.faq-group').forEach((group,i)=> {
        const [heading,...items]=data.faq[i]; group.querySelector('h2').textContent=heading;
        group.querySelectorAll('details').forEach((detail,j)=>{const [q,a]=items[j];detail.querySelector('summary').textContent=q; detail.querySelector('p').textContent=a;});
      });
    }
  }
  const nav=document.querySelector('.site-header nav');
  if (nav) {
    const control=document.createElement('div'); control.className='language-control';
    const trigger=document.createElement('button'); trigger.type='button'; trigger.className='language-trigger';
    trigger.setAttribute('aria-label',tr('語言')+': '+locales[language]);
    trigger.setAttribute('aria-haspopup','menu');trigger.setAttribute('aria-expanded','false');trigger.setAttribute('aria-controls','site-language-menu');
    trigger.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 7h14M5 17h14"/></svg>';
    const panel=document.createElement('div'); panel.className='language-popover';panel.id='site-language-menu';panel.hidden=true;panel.setAttribute('role','menu');panel.setAttribute('aria-label',tr('語言'));
    const heading=document.createElement('div');heading.className='language-heading';heading.setAttribute('aria-hidden','true');
    const headingTitle=document.createElement('strong');headingTitle.textContent=tr('語言');
    const headingCurrent=document.createElement('span');headingCurrent.textContent=locales[language];
    heading.append(headingTitle,headingCurrent);panel.append(heading);
    const check='<svg viewBox="0 0 20 20" width="19" height="19" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const codes={'zh-Hant':'繁中',en:'EN',ja:'JA',ko:'KO',fr:'FR',de:'DE',es:'ES'};
    const options=[];
    function choose(code) {
      const url=new URL(location.href);
      try{if(code==='system')localStorage.removeItem('rpm-site-language');else localStorage.setItem('rpm-site-language',code);}catch{}
      if(code==='system')url.searchParams.delete('lang');else url.searchParams.set('lang',code);
      location.href=url.href;
    }
    for(const [code,name] of Object.entries({system:tr('跟隨系統'),...locales})) {
      const option=document.createElement('button'); option.type='button';option.className='language-option';option.dataset.language=code;option.tabIndex=-1;
      option.setAttribute('role','menuitemradio');option.setAttribute('aria-checked',String((explicitLanguage||'system')===code));
      if(code==='system')option.classList.add('language-system');
      const badge=document.createElement('span');badge.className='language-badge';badge.setAttribute('aria-hidden','true');
      if(code==='system')badge.innerHTML='<svg viewBox="0 0 20 20" width="17" height="17" fill="none"><rect x="3" y="3" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M7 17h6M10 13v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
      else badge.textContent=codes[code];
      const title=document.createElement('span');title.className='language-name';title.textContent=name;
      const indicator=document.createElement('span');indicator.className='language-check';indicator.innerHTML=check;
      option.append(badge,title,indicator);panel.append(option);options.push(option);
      option.addEventListener('click',()=>choose(code));
    }
    control.append(trigger,panel);nav.append(control);
    function open(focusIndex) {
      panel.hidden=false; trigger.setAttribute('aria-expanded','true');
      options.forEach((o,i)=>o.tabIndex=i===focusIndex?0:-1);
      options[focusIndex]?.focus();
    }
    function close(restoreFocus=false) {
      panel.hidden=true;trigger.setAttribute('aria-expanded','false');options.forEach(o=>o.tabIndex=-1);
      if(restoreFocus)trigger.focus();
    }
    const activeIndex=()=>Math.max(0,options.findIndex(o=>o.getAttribute('aria-checked')==='true'));
    trigger.addEventListener('click',()=>panel.hidden?open(activeIndex()):close(true));
    trigger.addEventListener('keydown',event=>{if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();open(event.key==='ArrowDown'?0:options.length-1);}});
    panel.addEventListener('keydown',event=>{
      const index=options.indexOf(document.activeElement);
      let next;
      if(event.key==='ArrowDown')next=(index+1)%options.length;
      if(event.key==='ArrowUp')next=(index-1+options.length)%options.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=options.length-1;
      if(next!==undefined){event.preventDefault();options.forEach((o,i)=>o.tabIndex=i===next?0:-1);options[next].focus();}
    });
    control.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){event.preventDefault();close(true);}});
    document.addEventListener('pointerdown',event=>{if(!panel.hidden&&!control.contains(event.target))close();});
    control.addEventListener('focusout',event=>{if(!panel.hidden&&event.relatedTarget&&!control.contains(event.relatedTarget))close();});
  }
  // Propagate explicit language through local site links, including direct policy links.
  document.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.href,location.href);if(explicitLanguage && url.origin===location.origin && /\/(?:index|terms|privacy|faq|feedback)\.html$/.test(url.pathname)){url.searchParams.set('lang',language);a.href=url.href;}});
})();
