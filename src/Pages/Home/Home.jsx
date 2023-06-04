import s from "./style.module.css"
export function Home() {
  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Welcome to Wedding Knots</h2>
            <p className="lead">Plan Your Dream Wedding with Ease</p>
          </div>
          <div className="text-center">
            <p>Wedding Knots is your ultimate wedding planning companion. Whether you're envisioning a grand celebration or an intimate gathering, we're here to make your dream wedding a reality.</p>
            <p>Discover a World of Inspiration</p>
            <p>Browse through our vast collection of wedding themes, venues, decor ideas, and more. Find inspiration to create a wedding that truly reflects your style and personality.</p>
            <p>Start Planning Your Perfect Day Today</p>
            <p>Explore our website, browse our collections, and embark on a memorable journey to plan the wedding of your dreams. Let Wedding Knots be your trusted companion every step of the way.</p>
          </div>

        </div>
      </div>
    </div>
  );
}