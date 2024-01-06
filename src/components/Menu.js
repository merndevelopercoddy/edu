import Menuitem from './Menuitem';
export default function Menyu(){
  const qiymat  = [
    {
      id:"1",
      manzil:"/",
      nomi:"Bosh sahifa"
    },
    {
      id:"2",
      manzil: "/about",
      nomi: "Biz haqimizda"
    },
    {
      id:"3",
      manzil: "/courses",
      nomi: "Kurslar"
    },
    {
      id:"4",
      manzil:"#",
      nomi:"Kurslar",
      submenu:[
        {
          manzil:"/react",
          nomi:"React developer"
        },
        {
          manzil:"/nodejs",
          nomi:"Nodejs developer"
        },
        {
          manzil:"/vue",
          nomi:"Vuejs developer"
        },
        {
          manzil:"/fullstack",
          nomi:"FullStack developer"
        }
      ]
    },
    {
      id:"5",
      manzil: "/contact",
      nomi: "Bog'lanish"
    },
];
    return (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {console.log(qiymat)}
          {
          qiymat.map(
            (e)=>(<Menuitem key={e.id} items={e} />)
            )
            }
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="courses.html" className="get-started-btn">Get Started</a>

    </div>
  </header>
    )
}