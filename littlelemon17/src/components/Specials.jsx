function Specials(){
  return(
<>
  <div className="grid-container maxWidth super-light-grey">
    <div className="item-left">
      <h1 className="markazi-text-600 superSize">This Weeks Specials!</h1>
    </div>
    <div className="item-right">
      <button className="btn btn-warning">Online Menu</button>
    </div>
  </div>
  <div className="card-grid super-light-grey maxWidth">
    <div className="card-container">
      <div className="card">
        <img
          src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/greek-salad02.png"
          alt="Description of image"
          className="card__image"
        />
        <div className="card__content">
          <h2>
            <span className="left-text">Greek salad</span>
            <span className="right-element">$11.99</span>
          </h2>
          <div className="card-text">
            <p aria-label="Food Description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
        </div>
        <div className="card__info">
          <span>
            <img
              src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/delivery-bike03.png"
              width={60}
            />{" "}
            Order a delivery{" "}
          </span>
        </div>
      </div>
    </div>
    <div className="card-container">
      <div className="card">
        <img
          src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/bruchetta02.png"
          alt="Description of image"
          className="card__image"
        />
        <div className="card__content">
          <h2>
            <span className="left-text">Bruschetta</span>
            <span className="right-element">$5.99</span>
          </h2>
          <div className="card-text">
            <p aria-label="Food Description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </div>
        </div>
        <div className="card__info">
          <span>
            <img
              src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/delivery-bike03.png"
              width={60}
            />{" "}
            Order a delivery{" "}
          </span>
        </div>
      </div>
    </div>
    <div className="card-container">
      <div className="card">
        <img
          src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/lemon_dessert02.png"
          alt="Description of image"
          className="card__image"
        />
        <div className="card__content">
          <h2>
            <span className="left-text">Lemon Dessert</span>
            <span className="right-element">$4.99</span>
          </h2>
          <div className="card-text">
            <p aria-label="Food Description">
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
          </div>
        </div>
        <div className="card__info">
          <span>
            <img
              src="https://uploads.onecompiler.io/43kv2wvza/44evj8dcu/delivery-bike03.png"
              width={60}
            />{" "}
            Order a delivery{" "}
          </span>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default Specials