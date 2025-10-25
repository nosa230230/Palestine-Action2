const products = [
  {id:1,name:"تيشيرت صيفي",price:250,img:"https://www.teelivery.com/wp-content/uploads/2019/05/Teelivery_print_front-600x849.jpg",desc:"وصف مختصر للمنتج تيشيرت صيفي بجودة عالية."},
  {id:2,name:"بنطلون جينز",price:300,img:"https://m.media-amazon.com/images/I/61e6FbilRbL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج بنطلون جينز بجودة عالية."},
  {id:3,name:"سويت شيرت",price:280,img:"https://m.media-amazon.com/images/I/51n6CIoIN-L._AC_UL480_FMwebp_QL65_.jpg",desc:"وصف مختصر للمنتج سويت شيرت بجودة عالية."},
  {id:4,name:"جاكيت جلد",price:600,img:"https://m.media-amazon.com/images/I/51oOypZWilL._AC_UL480_FMwebp_QL65_.jpg",desc:"وصف مختصر للمنتج جاكيت جلد بجودة عالية."},
  {id:5,name:"هودي شتوي",price:350,img:"https://m.media-amazon.com/images/I/31XnBUbC8bL._AC_UL480_FMwebp_QL65_.jpg",desc:"وصف مختصر للمنتج هودي شتوي بجودة عالية."},
  {id:6,name:"حذاء رياضي",price:450,img:"https://m.media-amazon.com/images/I/51GSIOpnuDL._AC_SY625_.jpg",desc:"وصف مختصر للمنتج حذاء رياضي بجودة عالية."},
  {id:7,name:"نظارة شمسية",price:200,img:"https://m.media-amazon.com/images/I/41tr1xTMnFL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج نظارة شمسية بجودة عالية."},
  {id:8,name:"ساعة يد",price:500,img:"https://m.media-amazon.com/images/I/41InQeRsQgL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج ساعة يد بجودة عالية."},
  {id:9,name:"حقيبة ظهر",price:220,img:"https://m.media-amazon.com/images/I/51ENDWK07TL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج حقيبة ظهر بجودة عالية."},
  {id:10,name:"حزام جلدي",price:150,img:"https://m.media-amazon.com/images/I/814ts0OdiWL._AC_SY741_.jpg",desc:"وصف مختصر للمنتج حزام جلدي بجودة عالية."},
  {id:11,name:"كاب شبابي",price:120,img:"https://m.media-amazon.com/images/I/51tti-33MBL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج كاب شبابي بجودة عالية."},
  {id:12,name:"جوارب قطنية",price:60,img:"https://m.media-amazon.com/images/I/61ywVNcJskL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج جوارب قطنية بجودة عالية."},
  {id:13,name:"عطر رجالي",price:400,img:"https://m.media-amazon.com/images/I/51BPsI71DBL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج عطر رجالي بجودة عالية."},
  {id:14,name:"قميص كلاسيكي",price:270,img:"https://m.media-amazon.com/images/I/51dvBohAzfL._AC_SX679_.jpg",desc:"وصف مختصر للمنتج قميص كلاسيكي بجودة عالية."},
  {id:15,name:"شراب شتوي",price:90,img:"https://m.media-amazon.com/images/I/41Hgm+rOF9L._AC_UL480_FMwebp_QL65_.jpg",desc:"وصف مختصر للمنتج شراب شتوي بجودة عالية."}
];

const cart = [];
const cartItemsDiv = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');
const productsDiv = document.getElementById('products');
const popup = document.getElementById('popup');
const detailsPopup = document.getElementById('details-popup');
const detailsContent = document.getElementById('details-content');

function renderProducts(){
  products.forEach(p=>{
    const div=document.createElement('div');
    div.className='product';
    div.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.price} جنيه</p>
        <div>
          <button class="btn" onclick="showDetails(${p.id})">عرض التفاصيل</button>
          <button class="btn-muted" onclick="addToCart(${p.id})">أضف للسلة</button>
        </div>
      </div>`;
    productsDiv.appendChild(div);
  });
}

function showDetails(id){
  const p=products.find(x=>x.id===id);
  detailsContent.innerHTML=`
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p style="color:#aaa">${p.desc}</p>
    <p><b>${p.price} جنيه</b></p>
    <div class="details-actions">
      <button class="btn" onclick="addToCart(${p.id}); closeDetails()">أضف للسلة</button>
      <button class="btn-muted" onclick="closeDetails()">إغلاق</button>
    </div>`;
  detailsPopup.style.display='flex';
}
function closeDetails(){detailsPopup.style.display='none';}

function addToCart(id){
  const p=products.find(x=>x.id===id);
  cart.push(p);
  updateCart();
  alert(p.name+' تمت إضافته إلى السلة');
}
function updateCart(){
  cartItemsDiv.innerHTML='';
  let total=0;
  cart.forEach(item=>{
    total+=item.price;
    const div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`<span>${item.name}</span><span>${item.price} ج</span>`;
    cartItemsDiv.appendChild(div);
  });
  totalSpan.innerText=total;
}
function openPopup(){
  if(cart.length===0){alert('السلة فارغة!');return;}
  popup.style.display='flex';
}
function closePopup(){popup.style.display='none';}

function checkout(){
  const name=document.getElementById('cust-name').value.trim();
  const address=document.getElementById('cust-address').value.trim();
  const phone=document.getElementById('cust-phone').value.trim();
  if(!name||!address||!phone){alert('يرجى إدخال جميع الحقول');return;}
  let message='مرحبًا، أريد إتمام طلبي من TOWN TEAM Store. التفاصيل:%0A%0A';
  cart.forEach(it=>{message+=`- ${it.name} (${it.price} جنيه)%0A`;});
  message+=`%0Aالإجمالي: ${totalSpan.innerText} جنيه%0A%0A👤 الاسم: ${name}%0A📍 العنوان: ${address}%0A📞 الهاتف: ${phone}%0A`;
  const phoneNumber='201062970993';
  window.open(`https://wa.me/${phoneNumber}?text=${message}`,'_blank');
  closePopup();
}

renderProducts();
