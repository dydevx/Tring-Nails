const images=[
 ['assets/nails/acrylic-clean.png','Acrylic nails'],
 ['assets/nails/biab-clean.png','BIAB builder gel'],
 ['assets/nails/french-floral-clean.png','French manicure and pedicure'],
 ['assets/nails/pedicure/pedicure-01-blue.jpg','Royal blue pedicure'],
 ['assets/nails/pedicure/pedicure-02-pink.jpg','Pink pedicure'],
 ['assets/nails/pedicure/pedicure-03-lilac.jpg','Soft lilac pedicure'],
 ['assets/nails/pedicure/pedicure-04-pink-french.jpg','Pink French pedicure'],
 ['assets/nails/pedicure/pedicure-05-blue-french.jpg','Blue French pedicure'],
 ['assets/nails/pedicure/pedicure-06-nude.jpg','Natural nude pedicure'],
 ['assets/nails/pedicure/pedicure-07-white.jpg','Classic white pedicure'],
 ['assets/nails/pedicure/pedicure-08-peach-french.jpg','Peach French pedicure'],
 ['assets/nails/pedicure/pedicure-09-peach.jpg','Glossy peach pedicure'],
 ['assets/nails/pink-pedicure-clean.png','Pale pink French pedicure'],
 ['708498bc0795b78158e4dcb38f0a1dd1a573ec21.jpg','Our Tring salon']];
const aiHandImages=[
 ['assets/nails/ai-library/hand-01-french.jpg','Micro French almond nails'],
 ['assets/nails/ai-library/hand-02-biab-gold.jpg','Nude BIAB nails with gold detail'],
 ['assets/nails/ai-library/hand-03-burgundy.jpg','Glossy burgundy nails'],
 ['assets/nails/ai-library/hand-04-white-ombre.jpg','Pink and white ombre nails'],
 ['assets/nails/ai-library/hand-05-line-art.jpg','Minimal line-art nails'],
 ['assets/nails/ai-library/hand-06-green-cat-eye.jpg','Forest green cat-eye nails'],
 ['assets/nails/ai-library/hand-07-chocolate-french.jpg','Chocolate French nails'],
 ['assets/nails/ai-library/hand-08-dusty-rose.jpg','Dusty rose pearl nails'],
 ['assets/nails/ai-library/hand-09-champagne-chrome.jpg','Champagne chrome nails'],
 ['assets/nails/ai-library/hand-10-classic-red.jpg','Classic red manicure'],
 ['assets/nails/ai-library/hand-11-black-french.jpg','Black French coffin nails'],
 ['assets/nails/ai-library/hand-12-lavender-cat-eye.jpg','Lavender cat-eye nails'],
 ['assets/nails/ai-library/hand-13-botanical.jpg','Milky botanical nail art'],
 ['assets/nails/ai-library/hand-14-navy-french.jpg','Navy French nails'],
 ['assets/nails/ai-library/hand-15-peach-ombre.jpg','Peach ombre nails']];
const aiFootImages=[
 ['assets/nails/ai-library/foot-01-classic-red.jpg','Classic red pedicure'],
 ['assets/nails/ai-library/foot-02-pink-french.jpg','Pink French pedicure'],
 ['assets/nails/ai-library/foot-03-navy-cat-eye.jpg','Navy cat-eye pedicure'],
 ['assets/nails/ai-library/foot-04-nude-gold.jpg','Nude pedicure with gold detail'],
 ['assets/nails/ai-library/foot-05-peach.jpg','Glossy peach pedicure']];
const realSalonImages=[
 ['Acrylic nail.jpg','Pink French acrylic set'],
 ['biab.jpg','Natural BIAB French manicure'],
 ['22cc2a863116cd4da55da528849704ef2220d224.jpg','Pink floral manicure and pedicure inspiration'],
 ['8c5fb5216a9a1d637e380e03295fba0f256b14b8.jpg','Soft pink French pedicure']];
const heroSlides=[...document.querySelectorAll('.hero-slides img')];
const heroDots=[...document.querySelectorAll('.hero-dots button')];
let heroSlide=0,heroTimer;
function showHeroSlide(index){heroSlide=(index+heroSlides.length)%heroSlides.length;heroSlides.forEach((slide,i)=>slide.classList.toggle('active',i===heroSlide));heroDots.forEach((dot,i)=>{dot.classList.toggle('active',i===heroSlide);dot.setAttribute('aria-pressed',String(i===heroSlide))})}
function startHeroSlider(){clearInterval(heroTimer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)heroTimer=setInterval(()=>showHeroSlide(heroSlide+1),5000)}
heroDots.forEach((dot,i)=>dot.addEventListener('click',()=>{showHeroSlide(i);startHeroSlider()}));showHeroSlide(0);startHeroSlider();
// Keep gallery sets distinct from the service-card imagery.
const galleryImages=[
 aiHandImages[4],aiHandImages[5],aiHandImages[6],aiHandImages[7],
 aiHandImages[8],aiHandImages[11],aiHandImages[12],aiHandImages[13],
 aiHandImages[14],aiFootImages[0],aiFootImages[2],aiFootImages[4]
];
const data={
'Acrylic':[['Full Set with Shellac',40,75],['Full Set with Shellac and French White Tips',43,90],['Acrylic Refill with Shellac',35,60],['Acrylic Refill with French White Tips',38,60],['Take Off and New Acrylic Set',55,90],['Full Set Acrylic Toes',40,60],['Full Set Acrylic Toes with Design',45,75],['Acrylic Toes Refill',35,60],['Take Off and New Acrylic Set with French White Tips',60,90],['Take Off and Redone',50,90],['Nail Design Add-on',5,15],['One Nail Extension with Tip',5,15]],
'BIAB Builder Gel':[['BIAB Overlay',40,60],['BIAB Overlay with Gel Colour',45,75],['BIAB Overlay with French',48,75],['BIAB Extension',45,75],['BIAB Extension with Gel Colour',50,90],['BIAB Refill',35,60],['BIAB Refill with French',40,75],['Take Off and Redone with Extensions',48,90],['Take Off and Redone with Extensions + French',53,90],['Take Off and Redone Overlay',45,75],['Take Off and Redone Overlay with Gel Colour',48,75],['French Add-on with Colour',5,15]],
'Manicure':[['Classic Manicure without Colour',20,30],['Classic Manicure with Normal Polish',25,45],['Classic Manicure with Gel Colour',30,45],['Classic Manicure with Gel and French White Tips',35,60],['Gel Take Off, Redone and Manicure',35,60],['Gel Take Off, Redone, Manicure and French White Tips',38,60]],
'Pedicure':[['Normal Polish Only',20,30],['Spa Pedicure with Normal Polish',35,60],['Spa Pedicure with Gel Colour',40,60],['Spa Pedicure with French White Tips',45,75],['Gel Take Off and Redone',30,45],['Gel Take Off and French White Tips',35,60]],
'Extra Services':[['French Tips',5,15],['Chrome Effect',5,15],['Nail Art',5,30],['Gel Removal',10,20],['Nail Repair',5,15],['BIAB or Acrylic Removal',15,30],['BIAB or Acrylic Removal with Manicure',25,45]],
'Ombre':[['Ombre Full Set',50,75],['Ombre Refill, One Colour',35,60],['Take Off and New Ombre Set',50,90]],
'Cat Eyes':[['Cat Eyes Full Set',50,75],['Cat Eyes Refill',35,60],['Take Off and New Cat Eyes Set',50,90]]};
const popular=[
 ['Acrylic Nails','Beautiful, durable extensions tailored to your shape, length and colour.','From £35',realSalonImages[0],'Acrylic','1h 15m'],
 ['BIAB Builder Gel','Strengthen natural nails with a smooth, long-lasting finish.','From £35',aiHandImages[1],'BIAB Builder Gel','1h'],
 ['Manicure','Careful shaping and cuticle care with your chosen polished finish.','From £20',aiHandImages[9],'Manicure','45m'],
 ['Spa Pedicure','Relaxing foot care with professional shaping and colour.','From £35',aiFootImages[3],'Pedicure','1h'],
 ['Ombre Nails','Seamless colour blending for a soft, elegant statement.','From £35',aiHandImages[3],'Ombre','1h 15m'],
 ['Pedicure Colour','Fresh colour and a clean, carefully finished shape.','From £20',aiFootImages[1],'Pedicure','45m'],
 ['French Finish','A crisp, timeless finish for hands or toes.','From £5',images[2],'Extra Services','30m']];
const price=v=>typeof v==='number'?`£${v}`:v;
document.querySelector('#service-grid').innerHTML=popular.map(s=>`<article class="service-card reveal"><img src="${s[3][0]}" loading="lazy" alt="${s[3][1]} for ${s[0]} at Tring Nails and Beauty"><div class="service-card-body"><h3>${s[0]}</h3><div class="service-meta"><span>${s[2].replace('From ','<small>From</small> ')}</span><time>${s[5]}</time></div></div><button class="service-book" data-book="${s[4]}">Book Now</button></article>`).join('');
const serviceSlider=document.querySelector('#service-grid');
const slideServices=direction=>serviceSlider.scrollBy({left:direction*(serviceSlider.querySelector('.service-card').getBoundingClientRect().width+24),behavior:'smooth'});
document.querySelector('#service-prev').onclick=()=>slideServices(-1);document.querySelector('#service-next').onclick=()=>slideServices(1);
const priceTabs=document.querySelector('#price-tabs'),priceGrid=document.querySelector('#price-grid');let priceCategory='Acrylic';
const isFootService=(category,name)=>category==='Pedicure'||/\btoe(s)?\b|pedicure/i.test(name);
const priceHandImages=[...aiHandImages,images[0],images[1],images[2],realSalonImages[0],realSalonImages[1],realSalonImages[2]];
const priceFootImages=[...aiFootImages,...images.slice(3,13)];
const categoryImageStart={
 'Acrylic':0,
 'BIAB Builder Gel':9,
 'Manicure':16,
 'Extra Services':1,
 'Ombre':8,
 'Cat Eyes':11,
 'Pedicure':0
};
const servicePhoto=(category,name,index)=>{
 const foot=isFootService(category,name),pool=foot?priceFootImages:priceHandImages;
 const sameTypePosition=data[category].slice(0,index).filter(x=>isFootService(category,x[0])===foot).length;
 const start=foot&&category==='Acrylic'?6:(categoryImageStart[category]||0);
 return pool[(start+sameTypePosition)%pool.length];
};
const durationLabel=minutes=>minutes>=60?`${Math.floor(minutes/60)}h${minutes%60?` ${minutes%60}m`:''}`:`${minutes}m`;
priceTabs.innerHTML=Object.keys(data).map(cat=>`<button type="button" role="tab" aria-selected="${cat===priceCategory}" data-price-cat="${cat}" class="${cat===priceCategory?'active':''}">${cat}</button>`).join('');
function renderPrices(){priceGrid.innerHTML=data[priceCategory].map((x,i)=>{const image=servicePhoto(priceCategory,x[0],i);return `<article class="price-service-card"><img src="${image[0]}" loading="lazy" alt="${image[1]} for ${x[0]}"><div class="price-card-body"><h3>${x[0]}</h3><div class="price-card-meta"><span>${String(price(x[1])).replace('From ','<small>From</small> ').replace(/^£/,'<small>From</small> £')}</span><time>${durationLabel(x[2])}</time></div></div><button type="button" class="price-card-book" data-service="${x[0]}" data-cat="${priceCategory}">Book Now</button></article>`}).join('');priceGrid.scrollLeft=0}
renderPrices();
priceTabs.onclick=e=>{const b=e.target.closest('[data-price-cat]');if(!b)return;priceCategory=b.dataset.priceCat;priceTabs.querySelectorAll('button').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-selected',active)});renderPrices()};
const slidePrices=direction=>priceGrid.scrollBy({left:direction*(priceGrid.querySelector('.price-service-card').getBoundingClientRect().width+24),behavior:'smooth'});document.querySelector('.price-prev').onclick=()=>slidePrices(-1);document.querySelector('.price-next').onclick=()=>slidePrices(1);
document.querySelector('#gallery-grid').innerHTML=galleryImages.map((x,i)=>`<button data-image="${i}" aria-label="Open ${x[1]} image"><img src="${x[0]}" loading="lazy" alt="${x[1]} by Tring Nails and Beauty"></button>`).join('')+`<aside class="gallery-cta"><span>Inspired?</span><h3>Let’s create your next set.</h3><p>Bring your favourite colour, shape or reference — we’ll make it personal.</p><a class="button" href="#booking">Book an Appointment</a></aside>`;
const gallerySlider=document.querySelector('#gallery-grid');
const slideGallery=direction=>gallerySlider.scrollBy({left:direction*Math.max(280,gallerySlider.clientWidth*.72),behavior:'smooth'});
document.querySelector('#gallery-prev').onclick=()=>slideGallery(-1);document.querySelector('#gallery-next').onclick=()=>slideGallery(1);
const tabs=document.querySelector('#category-tabs'), services=document.querySelector('#booking-services');let category='Acrylic',selected=null,step=0;
tabs.innerHTML=Object.keys(data).map(x=>`<button type="button" data-category="${x}" class="${x===category?'active':''}">${x}</button>`).join('');
function renderBooking(){services.innerHTML=data[category].map((x,i)=>`<button type="button" class="booking-service ${selected?.name===x[0]?'selected':''}" data-select="${i}"><strong>${x[0]}</strong><small>Approx. ${x[2]} minutes</small><span>${price(x[1])}</span></button>`).join('')}
renderBooking();
tabs.onclick=e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;selected=null;tabs.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));renderBooking()};
services.onclick=e=>{const b=e.target.closest('[data-select]');if(!b)return;const x=data[category][+b.dataset.select];selected={category,name:x[0],price:price(x[1]),duration:x[2]};renderBooking();setTimeout(()=>go(1),180)};
function go(n){step=n;document.querySelectorAll('.step-panel').forEach((x,i)=>x.classList.toggle('active',i===n));document.querySelectorAll('.steps li').forEach((x,i)=>x.classList.toggle('active',i<=n));document.querySelector('#booking').scrollIntoView({behavior:'smooth',block:'start'});if(n===3)summary()}
document.querySelectorAll('.back').forEach(b=>b.onclick=()=>go(step-1));document.querySelectorAll('.next').forEach(b=>b.onclick=()=>{if(validate(step))go(step+1)});
function validate(s){let ok=true;if(s===1){['date','time'].forEach(id=>{const e=document.querySelector('#'+id);const msg=e.parentElement.querySelector('.error');if(!e.value){msg.textContent='Please select this field.';ok=false}else msg.textContent=''})}if(s===2){document.querySelectorAll('[data-step="2"] [required]').forEach(e=>{const valid=e.type==='checkbox'?e.checked:e.checkValidity();const msg=e.type==='checkbox'?document.querySelector('.check-error'):e.parentElement.querySelector('.error');if(!valid){msg.textContent=e.type==='email'?'Please enter a valid email address.':'Please complete this field.';ok=false}else msg.textContent=''})}return ok}
const date=document.querySelector('#date'),time=document.querySelector('#time');
const londonNow=()=>{const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),get=t=>parts.find(x=>x.type===t).value;return{iso:`${get('year')}-${get('month')}-${get('day')}`,mins:+get('hour')*60 + +get('minute')}};
date.min=londonNow().iso;date.onchange=()=>{const d=new Date(date.value+'T12:00:00'),sun=d.getDay()===0,end=sun?17*60:18*60+30,now=londonNow();time.innerHTML='<option value="">Select a time</option>';for(let m=540;m<=end;m+=30){const h=Math.floor(m/60),min=m%60,v=`${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}`;if(date.value===now.iso&&m<=now.mins)continue;time.insertAdjacentHTML('beforeend',`<option>${v}</option>`)} };
const form=document.querySelector('#booking-form');function summary(){const f=new FormData(form);document.querySelector('#booking-summary').innerHTML=[['Service',selected.name],['Price',selected.price],['Duration',`Approx. ${selected.duration} minutes`],['Date',new Date(f.get('date')+'T12:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})],['Time',f.get('time')],['Name',f.get('name')]].map(x=>`<div><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('')}
form.onsubmit=e=>{e.preventDefault();const f=new FormData(form),msg=`Hello Tring Nails & Beauty,\n\nI would like to request an appointment.\n\nName: ${f.get('name')}\nService: ${selected.name}\nPrice: ${selected.price}\nPreferred Date: ${f.get('date')}\nPreferred Time: ${f.get('time')}\nPhone Number: ${f.get('phone')}\nNotes: ${f.get('notes')||'None'}\n\nPlease confirm whether this appointment is available. Thank you.`;window.open('https://wa.me/447484284142?text='+encodeURIComponent(msg),'_blank','noopener')};
function choose(cat,name){category=cat;const x=data[cat].find(v=>v[0]===name)||data[cat][0];selected={category,name:x[0],price:price(x[1]),duration:x[2]};tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.category===cat));renderBooking();go(1)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-book],[data-service]');if(!b)return;choose(b.dataset.book||b.dataset.cat,b.dataset.service)});
document.querySelectorAll('.price-toggle').forEach(b=>b.onclick=()=>{const c=b.closest('.price-category'),open=c.classList.toggle('open');b.textContent=open?'−':'+';b.setAttribute('aria-expanded',open)});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');menu.onclick=()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)};nav.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')};
const light=document.querySelector('#lightbox'),li=light.querySelector('img'),cap=light.querySelector('figcaption');let current=0;function showImage(n){current=(n+galleryImages.length)%galleryImages.length;li.src=galleryImages[current][0];li.alt=galleryImages[current][1];cap.textContent=galleryImages[current][1]}
document.querySelector('#gallery-grid').onclick=e=>{const b=e.target.closest('[data-image]');if(!b)return;showImage(+b.dataset.image);light.showModal()};light.querySelector('.lightbox-close').onclick=()=>light.close();light.querySelector('.lightbox-prev').onclick=()=>showImage(current-1);light.querySelector('.lightbox-next').onclick=()=>showImage(current+1);let sx=0;light.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});light.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>45)showImage(current+(dx<0?1:-1))});
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];document.querySelector('#hours-list').innerHTML=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(d=>`<div class="hours-row"><span>${d}</span><span>${d==='Sunday'?'9:00 am – 5:00 pm':'9:00 am – 6:30 pm'}</span></div>`).join('');
function status(){const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',weekday:'long',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),get=t=>parts.find(x=>x.type===t).value,day=get('weekday'),mins=+get('hour')*60 + +get('minute'),end=day==='Sunday'?1020:1110,el=document.querySelector('#open-status');let txt='Closed',cls='';if(mins>=540&&mins<end){txt=end-mins<=60?'Closing Soon':'Open Now';cls=end-mins<=60?'closing':'open'}el.textContent=txt;el.className=cls;document.querySelectorAll('.hours-row').forEach(r=>r.classList.toggle('today',r.firstElementChild.textContent===day))}status();setInterval(status,60000);
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
const legal=document.querySelector('#legal'),legalContent=document.querySelector('#legal-content'),copy={privacy:['Privacy Policy','We only use the personal details you enter in the appointment form to prepare your WhatsApp booking request. This website does not store, sell or share your personal information. WhatsApp processes messages under its own privacy terms. Contact the salon via WhatsApp with any privacy enquiry.'],terms:['Terms and Conditions','Online requests are not confirmed appointments. Your booking is confirmed only when Tring Nails & Beauty responds. Prices may vary with nail length, shape, design complexity and added services. Loyalty rewards are applied in salon and cannot be combined unless agreed by the salon. Please contact us as soon as possible if you need to amend or cancel a request.']};document.querySelectorAll('[data-legal]').forEach(b=>b.onclick=()=>{const x=copy[b.dataset.legal];legalContent.innerHTML=`<h2>${x[0]}</h2><p>${x[1]}</p><p>Last updated: August 2026.</p>`;legal.showModal()});legal.querySelector('.legal-close').onclick=()=>legal.close();
const studentOffer=document.querySelector('#student-offer');
const closeStudentOffer=()=>studentOffer.close();
studentOffer.querySelector('.student-offer-close').onclick=closeStudentOffer;
studentOffer.querySelector('[data-close-student-offer]').onclick=closeStudentOffer;
studentOffer.addEventListener('click',e=>{if(e.target===studentOffer)closeStudentOffer()});
setTimeout(()=>studentOffer.showModal(),900);
