import "./page.css"

const HeadBanner = () => {
  return (
    <div className="container">
      <nav className="head">
        <p>SpaceXdata</p>
      </nav>
      <div className="banner">
        <div className="text_part">
          <h1>Expirence the Future <br></br> with SpaceX</h1>
          <p>Discover the next generation of <br></br> Space Technology</p>
        </div>
        <div className="image_part">
          <img src="https://www.silicon.co.uk/wp-content/uploads/2020/05/spacex-00006.jpg" alt="image" />
        </div>
      </div>
    </div>

  )

}

export default HeadBanner;