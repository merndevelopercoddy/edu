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
    }
];
    return (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {
          qiymat.map(
            (e)=>(<Menuitem key={e.id} {...e} />)
            )
            }
          {/* <li><a className="active" href="/index.html">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Trainers</a></li>
          <li><a href="/">Events</a></li>
          <li><a href="/">Pricing</a></li> */}

          <li className="dropdown"><a href="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Drop Down 1</a></li>
              <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/">Deep Drop Down 1</a></li>
                  <li><a href="/">Deep Drop Down 2</a></li>
                  <li><a href="/">Deep Drop Down 3</a></li>
                  <li><a href="/">Deep Drop Down 4</a></li>
                  <li><a href="/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/">Drop Down 2</a></li>
              <li><a href="/">Drop Down 3</a></li>
              <li><a href="/">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="courses.html" className="get-started-btn">Get Started</a>

    </div>
  </header>
    )
}