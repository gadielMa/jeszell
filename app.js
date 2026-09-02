const catalog = {
  'Todos los servicios': [
    ['Limpieza básica', 'Pulido, máscara e hidratación. Tratamiento súper completo.', '$50.000'],
    ['Limpieza profunda', 'Puntas de diamante, extracciones, máscara e hidratación.', '$60.000'],
    ['Peeling / Dermapen / Dermaplaning', 'Tratamientos para mejorar manchas, textura, poros y luminosidad.', '$70.000'],
    ['Radiofrecuencia + Dermapen', 'Combinación ideal para firmeza, textura y rejuvenecimiento.', '$80.000'],
    ['Pilates · Abono 4 clases', '1 vez por semana · lunes a viernes · todos los niveles.', '$50.000'],
    ['Masaje 60 minutos', 'Masaje deportivo, relajante o ayurvédico.', '$60.000']
  ],
  'Pilates': [['Abono 4 clases', '1 vez por semana · 4 clases · lunes a viernes · todos los niveles.', '$50.000'], ['Abono 8 clases', '2 veces por semana · 8 clases · lunes a viernes · todos los niveles.', '$70.000'], ['Abono 12 clases', '3 veces por semana · 12 clases · lunes a viernes · todos los niveles.', '$95.000'], ['Clase de prueba', 'Luego se descuenta del abono.', '$20.000'], ['Promo 2x1', '8 clases en total · cada una queda en $50.000.', '$100.000']],
  'Estética facial': [['Limpieza básica', 'Pulido + máscara + hidratación.', '$50.000'], ['Limpieza profunda', 'Puntas de diamante + extracciones + máscara + hidratación.', '$60.000'], ['Limpieza extra profunda', 'Para muchos quistes miliums y puntos negros + todo lo anterior.', 'Desde $70.000'], ['Peeling químico', 'Renueva capas superficiales y mejora manchas, acné, poros, textura y luminosidad.', '$70.000'], ['Dermapen', 'Microcanales que estimulan colágeno y mejoran cicatrices, manchas, poros y textura.', '$70.000'], ['Dermaplaning', 'Exfolia, elimina vello fino y favorece la absorción de productos.', '$70.000'], ['Radiofrecuencia', 'Estimula colágeno y mejora firmeza y líneas de expresión.', '$70.000'], ['Radiofrecuencia + Dermapen', 'La combinación ideal para rejuvenecer la piel.', '$80.000']],
  'Cejas y pestañas': [['Lifting de pestañas clásico', 'Curvatura y definición natural.', '$25.000'], ['Lifting clásico + color', 'Lifting con tinte.', '$30.000'], ['Lifting coreano', 'Resultado intenso y duradero.', '$45.000'], ['Extensiones pelo por pelo · natural', 'Volumen sutil.', '$40.000'], ['Extensiones pelo por pelo · intermedio', 'Volumen medio.', '$45.000'], ['Extensiones pelo por pelo · volumen', 'Mayor densidad.', '$50.000'], ['Perfilado de cejas', 'Diseño de cejas.', '$20.000'], ['Henna', 'Color y definición.', '$20.000'], ['Laminado de cejas', 'Peinado y fijación.', '$30.000'], ['Perfilado + henna', 'Combo de mirada.', '$30.000'], ['Perfilado + laminado', 'Combo de mirada.', '$40.000'], ['Full cejas', 'Perfilado + henna + laminado.', '$55.000']],
  'Presoterapia': [['Piernas · 2 sesiones', 'Sesiones de 30 minutos · promoción.', '$30.000'], ['Piernas · combo mensual', '8 sesiones · 2 veces por semana.', '$100.000'], ['Cuerpo completo', '30 minutos · con o sin calor.', '$50.000'], ['Cuerpo completo · combo mensual', '4 sesiones · 1 vez por semana.', '$150.000'], ['Post LipoSonix', 'Presoterapia cuerpo completo de 30 minutos el mismo día.', '$20.000']],
  'Modelación corporal': [['LipoSonix · 1 zona', 'Ultrasonido focalizado para grasa localizada.', '$50.000'], ['LipoSonix · 2 zonas', 'Ultrasonido focalizado para grasa localizada.', '$70.000'], ['LipoSonix · 3 zonas', 'Ultrasonido focalizado para grasa localizada.', '$100.000'], ['Criolipólisis', 'Hasta 6 cabezales en una o dos zonas.', '$40.000'], ['Mío Up · 1 zona', 'Estimulación electromagnética y tonificación.', '$30.000'], ['Mío Up · promo 2x1', '2 sesiones o 2 zonas el mismo día.', '$40.000']],
  'Masajes y osteopatía': [['Masaje deportivo / relajante / ayurvédico · 60 min', 'Elegí tu estilo de masaje.', '$60.000'], ['Masaje deportivo / relajante / ayurvédico · 90 min', 'Elegí tu estilo de masaje.', '$90.000'], ['Osteopatía', 'Sesión personalizada.', '$60.000']],
  'Depilación definitiva': [['Mujeres · cuerpo completo', 'Depilación definitiva con cupos limitados.', '$70.000'], ['Hombres · cuerpo completo', 'Depilación definitiva con cupos limitados.', '$130.000']]
};
let active = 'Todos los servicios', cart = [];
const cats = document.querySelector('#categories'), services = document.querySelector('#services'), title = document.querySelector('#category-title');
const drawer = document.querySelector('#drawer'), overlay = document.querySelector('#overlay'), cartItems = document.querySelector('#cartItems');
function money(n){ return Number(n.replace(/[^0-9]/g,'')); }
function render(){
  cats.innerHTML = Object.keys(catalog).map(x => `<button class="category ${x===active?'active':''}" data-category="${x}">${x}</button>`).join('');
  title.textContent = active;
  services.innerHTML = catalog[active].map(([name, desc, price]) => `<article class="service"><div><h3>${name}</h3><p>${desc}</p><div class="price">${price}</div></div><button class="add ${cart.some(s=>s[0]===name)?'selected':''}" data-name="${name}">${cart.some(s=>s[0]===name)?'Agregado ✓':'Agregar'}</button></article>`).join('');
  document.querySelector('#count').textContent=cart.length; document.querySelector('#cartButton').classList.toggle('has',!!cart.length);
  cartItems.innerHTML=cart.length ? cart.map(([name,,price])=>`<div class="cart-item"><div><p>${name}</p><small>${price}</small></div><button class="remove" data-remove="${name}" aria-label="Quitar ${name}">×</button></div>`).join('') : '<p class="empty">Todavía no seleccionaste ningún servicio.</p>';
  document.querySelector('#total').textContent='$'+cart.reduce((sum,s)=>sum+money(s[2]),0).toLocaleString('es-AR');
  document.querySelector('#continue').disabled=!cart.length;
}
function openDrawer(){drawer.classList.add('open');overlay.classList.add('open')} function closeDrawer(){drawer.classList.remove('open');overlay.classList.remove('open')}
cats.addEventListener('click',e=>{if(e.target.dataset.category){active=e.target.dataset.category;render()}});
services.addEventListener('click',e=>{const name=e.target.dataset.name;if(!name)return;const item=Object.values(catalog).flat().find(s=>s[0]===name);cart=cart.some(s=>s[0]===name)?cart.filter(s=>s[0]!==name):[...cart,item];render()});
cartItems.addEventListener('click',e=>{if(e.target.dataset.remove){cart=cart.filter(s=>s[0]!==e.target.dataset.remove);render()}});
document.querySelector('#cartButton').onclick=openDrawer;document.querySelector('#closeDrawer').onclick=closeDrawer;overlay.onclick=closeDrawer;
const whatsappUrl='https://chat.whatsapp.com/Lv1FJlEjPhrDb8r5HyubqI?utm_source=ig&utm_medium=social&utm_content=link_in_bio';
let pendingMessage='';
document.querySelector('#continue').onclick=()=>{
  if(!cart.length)return;
  const total=cart.reduce((sum,s)=>sum+money(s[2]),0).toLocaleString('es-AR');
  const message=`Hola Jeszell! Quiero reservar:\n\n${cart.map(s=>`• ${s[0]} — ${s[2]}`).join('\n')}\n\nTotal estimado: $${total}`;
  closeDrawer();
  pendingMessage=message;
  document.querySelector('#whatsappMessage').textContent=message;
  document.querySelector('#modal').classList.add('open');
};
document.querySelector('#copyMessage').onclick=async()=>{try{await navigator.clipboard.writeText(pendingMessage);document.querySelector('#copyMessage').textContent='¡Copiado!'}catch{document.querySelector('#copyMessage').textContent='Seleccioná y copiá el texto'}};
document.querySelector('#openWhatsapp').onclick=()=>window.open(whatsappUrl+'&text='+encodeURIComponent(pendingMessage),'_blank','noopener,noreferrer');
document.querySelector('#done').onclick=()=>document.querySelector('#modal').classList.remove('open');document.querySelector('#closeModal').onclick=()=>document.querySelector('#modal').classList.remove('open');
render();
