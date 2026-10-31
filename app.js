const catalog = {
  'Todos los servicios': [
    ['Limpieza básica', 'Pulido, máscara e hidratación. Tratamiento súper completo.', '$60.000'],
    ['Limpieza profunda', 'Puntas de diamante, extracciones, máscara e hidratación.', '$70.000'],
    ['Peeling / Dermapen / Dermaplaning / Radiofrecuencia', 'Tratamientos súper completos para renovar y cuidar tu piel.', '$80.000'],
    ['Radiofrecuencia + Dermapen', 'Combinación ideal para firmeza, textura y rejuvenecimiento.', '$90.000'],
    ['Pilates · Abono 4 clases', '1 vez por semana · 4 camas por clase · unisex · todos los niveles.', '$55.000'],
    ['Masaje 60 minutos', 'Masaje deportivo, relajante o ayurvédico.', '$60.000']
  ],
  'Pilates': [['Abono 4 clases', '1 vez por semana · 4 clases · lunes a viernes de 9 a 20 h · 4 camas por clase · unisex · todos los niveles.', '$55.000'], ['Abono 8 clases', '2 veces por semana · 8 clases · lunes a viernes de 9 a 20 h · 4 camas por clase · unisex · todos los niveles.', '$80.000'], ['Abono 12 clases', '3 veces por semana · 12 clases · lunes a viernes de 9 a 20 h · 4 camas por clase · unisex · todos los niveles.', '$105.000'], ['Clase de prueba', 'Probá una clase y, si continuás, se descuenta del abono.', '$20.000'], ['Promo 2x1', '8 clases cada una · cada abono queda en $50.000.', '$100.000']],
  'Estética facial': [['Limpieza básica', 'Pulido + máscara + hidratación. Tratamiento súper completo.', '$60.000'], ['Limpieza profunda', 'Puntas de diamante + extracciones + máscara + hidratación. Tratamiento súper completo.', '$70.000'], ['Limpieza extra profunda', 'Para muchos quistes miliums y puntos negros + todo lo anterior.', 'Desde $80.000'], ['Peeling', 'Tratamiento súper completo para renovar y mejorar la piel.', '$80.000'], ['Dermapen', 'Tratamiento súper completo que estimula el colágeno y mejora la textura.', '$80.000'], ['Dermaplaning', 'Tratamiento súper completo que exfolia y elimina el vello fino.', '$80.000'], ['Radiofrecuencia', 'Tratamiento súper completo para mejorar la firmeza de la piel.', '$80.000'], ['Radiofrecuencia + Dermapen', 'Combinación completa para rejuvenecer la piel.', '$90.000'], ['Radiofrecuencia + Dermapen con exosomas', 'Tratamiento completo con exosomas para potenciar la regeneración.', '$110.000'], ['Peeling + radiofrecuencia + Dermapen con exosomas', 'La combinación facial más completa.', '$120.000']],
  'Cejas y pestañas': [['Lifting de pestañas clásico', 'Curvatura y definición natural.', '$30.000'], ['Lifting clásico + color', 'Lifting con tinte.', '$35.000'], ['Lifting coreano', 'Resultado intenso y duradero.', '$50.000'], ['Extensiones pelo por pelo · natural', 'Volumen sutil.', '$42.000'], ['Extensiones pelo por pelo · intermedio', 'Volumen medio.', '$45.000'], ['Extensiones pelo por pelo · volumen', 'Mayor densidad.', '$50.000'], ['Perfilado de cejas', 'Diseño de cejas.', '$30.000'], ['Henna', 'Color y definición.', '$30.000'], ['Laminado de cejas', 'Peinado y fijación.', '$40.000'], ['Perfilado + henna', 'Combo de mirada.', '$50.000'], ['Perfilado + laminado', 'Combo de mirada.', '$60.000'], ['Full cejas', 'Perfilado + henna + laminado.', '$80.000'], ['Combo lifting + cejas', 'Descuento aplicado al combinar ambos servicios.', '10% de descuento'], ['Combo pestañas pelo por pelo + cejas', 'Descuento aplicado al combinar ambos servicios.', '15% de descuento']],
  'Presoterapia': [['Piernas · 1 sesión', 'Sesión de 30 minutos · valor promoción.', '$30.000'], ['Piernas · combo 4 sesiones', 'Sesiones de 30 minutos · 1 vez por semana.', '$100.000'], ['Piernas · combo 8 sesiones', 'Sesiones de 30 minutos · 2 veces por semana.', '$150.000'], ['Cuerpo completo · 1 sesión', '30 minutos · con o sin calor.', '$50.000'], ['Cuerpo completo · combo 4 sesiones', 'Sesiones de 30 minutos · 1 vez por semana.', '$175.000']],
  'Modelación corporal': [['LipoSonix', 'Ultrasonido focalizado para grasa localizada.', 'Desde $50.000'], ['Criolipólisis', 'Hasta 6 cabezales en una o dos zonas.', '$40.000'], ['Mío Up · 1 zona', 'Estimulación electromagnética y tonificación.', '$30.000'], ['Mío Up · 2 zonas', 'Estimulación electromagnética y tonificación.', '$45.000']],
  'Masajes y osteopatía': [['Masaje deportivo / relajante / ayurvédico · 60 min', 'Elegí tu estilo de masaje.', '$60.000'], ['Masaje deportivo / relajante / ayurvédico · 90 min', 'Elegí tu estilo de masaje.', '$90.000'], ['Masaje reductor', 'Masaje corporal enfocado en modelar y reducir.', '$60.000'], ['Maderoterapia · 1 zona', 'Técnica corporal con elementos de madera.', '$60.000'], ['Maderoterapia · 2 zonas', 'Técnica corporal con elementos de madera.', 'Consultar'], ['Osteopatía', 'Sesión personalizada.', '$60.000']],
  'Depilación definitiva': [['Mujeres · cuerpo completo', 'Depilación definitiva con cupos limitados.', '$80.000'], ['Hombres · cuerpo completo', 'Depilación definitiva con cupos limitados.', '$200.000']]
};
let active = 'Todos los servicios', cart = [];
const cats = document.querySelector('#categories'), services = document.querySelector('#services'), title = document.querySelector('#category-title');
const drawer = document.querySelector('#drawer'), overlay = document.querySelector('#overlay'), cartItems = document.querySelector('#cartItems');
function money(price){
  const amount = price.match(/\$\s*([\d.]+)/);
  return amount ? Number(amount[1].replace(/\./g, '')) : 0;
}
function hasPrice(price){ return /\$\s*[\d.]+/.test(price); }
function render(){
  cats.innerHTML = Object.keys(catalog).map(x => `<button class="category ${x===active?'active':''}" data-category="${x}">${x}</button>`).join('');
  title.textContent = active;
  services.innerHTML = catalog[active].map(([name, desc, price]) => `<article class="service"><div><h3>${name}</h3><p>${desc}</p><div class="price">${price}</div></div><button class="add ${cart.some(s=>s[0]===name)?'selected':''}" data-name="${name}">${cart.some(s=>s[0]===name)?'Agregado ✓':'Agregar'}</button></article>`).join('');
  document.querySelector('#count').textContent=cart.length; document.querySelector('#cartButton').classList.toggle('has',!!cart.length);
  cartItems.innerHTML=cart.length ? cart.map(([name,,price])=>`<div class="cart-item"><div><p>${name}</p><small>${price}</small></div><button class="remove" data-remove="${name}" aria-label="Quitar ${name}">×</button></div>`).join('') : '<p class="empty">Todavía no seleccionaste ningún servicio.</p>';
  const pricedTotal=cart.reduce((sum,s)=>sum+money(s[2]),0);
  const hasUnpriced=cart.some(s=>!hasPrice(s[2]));
  document.querySelector('#total').textContent=(pricedTotal?'$'+pricedTotal.toLocaleString('es-AR'):'A confirmar')+(pricedTotal&&hasUnpriced?' + a confirmar':'');
  document.querySelector('#continue').disabled=!cart.length;
}
function openDrawer(){drawer.classList.add('open');overlay.classList.add('open')} function closeDrawer(){drawer.classList.remove('open');overlay.classList.remove('open')}
cats.addEventListener('click',e=>{if(e.target.dataset.category){active=e.target.dataset.category;render()}});
services.addEventListener('click',e=>{const name=e.target.dataset.name;if(!name)return;const item=Object.values(catalog).flat().find(s=>s[0]===name);cart=cart.some(s=>s[0]===name)?cart.filter(s=>s[0]!==name):[...cart,item];render()});
cartItems.addEventListener('click',e=>{if(e.target.dataset.remove){cart=cart.filter(s=>s[0]!==e.target.dataset.remove);render()}});
document.querySelector('#cartButton').onclick=openDrawer;document.querySelector('#closeDrawer').onclick=closeDrawer;overlay.onclick=closeDrawer;
const whatsappUrl='https://wa.me/5491127442407';
document.querySelectorAll('a[href*="chat.whatsapp.com"]').forEach((link)=>{link.href=whatsappUrl});
let pendingMessage='';
document.querySelector('#continue').onclick=()=>{
  if(!cart.length)return;
  const pricedTotal=cart.reduce((sum,s)=>sum+money(s[2]),0);
  const hasUnpriced=cart.some(s=>!hasPrice(s[2]));
  const totalText=pricedTotal ? `$${pricedTotal.toLocaleString('es-AR')}${hasUnpriced?' + servicios a confirmar':''}` : 'A confirmar';
  const message=`Hola Jeszell! Quiero reservar:\n\n${cart.map(s=>`• ${s[0]} — ${s[2]}`).join('\n')}\n\nTotal estimado: ${totalText}`;
  closeDrawer();
  pendingMessage=message;
  document.querySelector('#modal').classList.add('open');
};
document.querySelector('#copyMessage').onclick=async()=>{try{await navigator.clipboard.writeText(pendingMessage);document.querySelector('#copyMessage').textContent='¡Mensaje copiado!';document.querySelector('#openWhatsapp').style.display='block'}catch{document.querySelector('#copyMessage').textContent='No se pudo copiar; mantené presionado para copiar';document.querySelector('#openWhatsapp').style.display='block'}};
document.querySelector('#openWhatsapp').onclick=()=>window.open(whatsappUrl+'?text='+encodeURIComponent(pendingMessage),'_blank','noopener,noreferrer');
document.querySelector('#done').onclick=()=>document.querySelector('#modal').classList.remove('open');document.querySelector('#closeModal').onclick=()=>document.querySelector('#modal').classList.remove('open');
const themeToggle=document.querySelector('#themeToggle');
if(localStorage.getItem('jeszell-theme')==='dark')document.body.classList.add('dark');
if(document.body.classList.contains('dark'))themeToggle.innerHTML='☀ <span>Modo claro</span>';
themeToggle.onclick=()=>{const dark=document.body.classList.toggle('dark');localStorage.setItem('jeszell-theme',dark?'dark':'light');themeToggle.innerHTML=dark?'☀ <span>Modo claro</span>':'☾ <span>Modo oscuro</span>'};
render();
