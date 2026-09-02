(function () {
  const cfg = window.SHETREND_REVIEWS_CONFIG || {};
  const configured = cfg.supabaseUrl && cfg.supabaseAnonKey &&
    !cfg.supabaseUrl.includes('YOUR_') && !cfg.supabaseAnonKey.includes('YOUR_');
  let client = null;
  if (configured && window.supabase) client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);

  const DEMO_KEY = 'shetrend_reviews_demo';
  const demoSeed = [
    { id:'seed-1', name:'سارة محمد', city:'غزة', rating:5, avatar_data:'assets/testimonials/avatar-1.jpg', review_text:'العباية أجمل من الصور والخامة جدًا راقية، أكيد مو آخر طلب.', status:'approved' },
    { id:'seed-2', name:'جنى أحمد', city:'غزة', rating:5, avatar_data:'assets/testimonials/avatar-2.jpg', review_text:'تجربة تسوق مريحة والتوصيل كان سريع جدًا. القصة تناسب جميع الأجسام.', status:'approved' },
    { id:'seed-3', name:'لمى عبدالله', city:'خانيونس', rating:5, avatar_data:'assets/testimonials/avatar-3.jpg', review_text:'من أفضل المتاجر اللي جربتها، التفاصيل دقيقة والقماش يستاهل السعر.', status:'approved' },
    { id:'seed-4', name:'نور خالد', city:'غزة', rating:5, avatar_data:'assets/testimonials/avatar-4.jpg', review_text:'عباية المناسبات فاقت توقعاتي، لبستها في عرس أختي وكل الناس سألوا عنها.', status:'approved' },
    { id:'seed-5', name:'ريم سعيد', city:'خان يونس', rating:5, avatar_data:'assets/testimonials/avatar-5.jpg', review_text:'خدمة العملاء عبر واتساب سهلت علي كل شي، تواصل راقٍ وسريع.', status:'approved' },
    { id:'seed-6', name:'دانة يوسف', city:'غزة', rating:5, avatar_data:'assets/testimonials/avatar-6.jpg', review_text:'أناقة وحشمة في نفس الوقت، فعلاً شعار She Trend ينطبق على منتجاتهم.', status:'approved' }
  ];

  function demoReviews() {
    try {
      const saved = JSON.parse(localStorage.getItem(DEMO_KEY) || '[]');
      return demoSeed.concat(Array.isArray(saved) ? saved : []);
    } catch { return demoSeed.slice(); }
  }
  function initialsAvatar(name) {
    const initials = (name || 'ST').trim().split(/\s+/).slice(0,2).map(x => x[0]).join('');
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#e8ded4"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#5a4030">${initials}</text></svg>`);
  }
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }
  function stars(rating) {
    return Array.from({length:5}, (_,i) => `<i class="bi ${i < rating ? 'bi-star-fill' : 'bi-star'}"></i>`).join('');
  }
  function card(r) {
    const avatar = r.avatar_data || initialsAvatar(r.name);
    return `<div class="col-md-6 col-lg-4 fade-in-up visible">
      <div class="review-card">
        <div class="review-stars">${stars(Number(r.rating) || 5)}</div>
        <p class="review-text">"${escapeHtml(r.review_text || r.text)}"</p>
        <div class="review-author">
          <img src="${escapeHtml(avatar)}" alt="${escapeHtml(r.name)}" class="review-avatar">
          <div><div class="review-name">${escapeHtml(r.name)}</div><div class="review-city">${escapeHtml(r.city)}</div></div>
        </div>
      </div>
    </div>`;
  }

  async function getApproved() {
    if (client) {
      const { data, error } = await client.from('reviews').select('*').eq('status','approved').order('created_at',{ascending:false});
      if (!error) return data || [];
      console.warn('Supabase reviews error:', error);
    }
    return demoReviews().filter(r => r.status === 'approved');
  }

  async function submit(review) {
    if (client) {
      const payload = {...review, status:'pending'};
      const { error } = await client.from('reviews').insert(payload);
      if (error) throw error;
      return;
    }
    const current = demoReviews().filter(r => !String(r.id).startsWith('seed-'));
    current.push({...review, id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), status:'pending', created_at:new Date().toISOString()});
    localStorage.setItem(DEMO_KEY, JSON.stringify(current));
  }

  async function adminLogin(email, password) {
    if (!client) throw new Error('CONFIG');
    const { data, error } = await client.auth.signInWithPassword({email,password});
    if (error) throw error;
    return data;
  }
  async function adminLogout() { if (client) await client.auth.signOut(); }
  async function currentAdmin() { if (!client) return null; const {data} = await client.auth.getUser(); return data.user || null; }
  async function allForAdmin() {
    if (!client) return demoReviews();
    const {data,error} = await client.from('reviews').select('*').order('created_at',{ascending:false});
    if (error) throw error; return data || [];
  }
  async function updateStatus(id,status) {
    if (!client) {
      const all = demoReviews();
      const item = all.find(r => r.id === id); if (item) item.status = status;
      localStorage.setItem(DEMO_KEY, JSON.stringify(all.filter(r=>!String(r.id).startsWith('seed-')))); return;
    }
    const {error} = await client.from('reviews').update({status}).eq('id',id);
    if (error) throw error;
  }
  async function remove(id) {
    if (!client) return updateStatus(id,'rejected');
    const {error} = await client.from('reviews').delete().eq('id',id);
    if (error) throw error;
  }

  window.SheTrendReviews = { configured, getApproved, submit, adminLogin, adminLogout, currentAdmin, allForAdmin, updateStatus, remove, card, stars, initialsAvatar };
})();
