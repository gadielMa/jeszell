const catalog = {
  'Todos los servicios': [
    ['Pilates Reformer', 'Clase personalizada de pilates reformer.', '$12.000'],
    ['Limpieza facial profunda', 'Limpieza, exfoliación e hidratación según tu tipo de piel.', '$25.000'],
    ['Masaje descontracturante', 'Un momento para liberar tensiones y recuperar bienestar.', '$22.000'],
    ['Drenaje linfático', 'Tratamiento manual para favorecer la circulación.', '$20.000'],
    ['Perfilado de cejas', 'Diseño de cejas para realzar tu mirada.', '$10.000']
  ],
  'Pilates': [['Pilates Reformer', 'Clase personalizada de pilates reformer.', '$12.000'], ['Pilates dúo', 'Clase de pilates para compartir y entrenar acompañada.', '$18.000'], ['Evaluación inicial', 'Entrevista y evaluación postural previa a tus clases.', '$8.000']],
  'Estética facial': [['Limpieza facial profunda', 'Limpieza, exfoliación e hidratación según tu tipo de piel.', '$25.000'], ['Peeling facial', 'Renovación suave para una piel más luminosa.', '$24.000'], ['Dermaplaning', 'Exfoliación profesional para suavizar y revitalizar.', '$22.000']],
  'Estética corporal': [['Masaje descontracturante', 'Un momento para liberar tensiones y recuperar bienestar.', '$22.000'], ['Drenaje linfático', 'Tratamiento manual para favorecer la circulación.', '$20.000'], ['Maderoterapia', 'Tratamiento corporal modelador y relajante.', '$23.000']],
  'Mirada': [['Perfilado de cejas', 'Diseño de cejas para realzar tu mirada.', '$10.000'], ['Lifting de pestañas', 'Curvatura natural y definición para tus pestañas.', '$18.000']]
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
document.querySelector('#continue').onclick=()=>{
  if(!cart.length)return;
  const total=cart.reduce((sum,s)=>sum+money(s[2]),0).toLocaleString('es-AR');
  const message=`Hola Jeszell! Quiero reservar:\n\n${cart.map(s=>`• ${s[0]} — ${s[2]}`).join('\n')}\n\nTotal estimado: $${total}`;
  try{navigator.clipboard.writeText(message)}catch{}
  closeDrawer();
  document.querySelector('#modal').classList.add('open');
  window.open(whatsappUrl+'&text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
};document.querySelector('#done').onclick=()=>document.querySelector('#modal').classList.remove('open');document.querySelector('#closeModal').onclick=()=>document.querySelector('#modal').classList.remove('open');
document.querySelector('#login').onclick=()=>alert('El acceso de clientes estará disponible próximamente.');render();
