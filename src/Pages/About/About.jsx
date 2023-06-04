import s from "./style.module.css"
export function About(){
    return (
    <div className={s.container}>
      
      <div className="row">
        <div className="col-lg-12 offset-lg-0">
         
            <div className="card-body">
              <h2 className="card-title text-center">About Wedding Knots</h2>
              <p className="card-text">Wedding Knots is a premier wedding planning platform dedicated to helping couples create their dream weddings. Our mission is to provide a seamless and enjoyable experience throughout the wedding planning journey.</p>
              <p className="card-text">With Wedding Knots, you can explore a wide range of wedding themes, discover top-notch vendors, stay organized with planning tools, and connect with a vibrant community of couples.</p>
              <p className="card-text">We believe that every wedding should be unique and reflective of the couple's love story. Let Wedding Knots be your guide as you embark on this exciting adventure of planning your perfect day.</p>
              <p className="card-text">Checkout our collections and start planning your dream wedding with Wedding Knots today!</p>
              <div className="text-center">
                <a href="/collections" className="btn btn-primary">Explore Collections</a>
              </div>
              </div>
          
        </div>
      </div>
    </div>
    );
}