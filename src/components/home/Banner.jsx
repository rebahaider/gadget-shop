
const Banner = () => {
  return (
    <div>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/flat-lay-top-view-office-table-desk-workspace-background_1150-6825.jpg?t=st=1731564948~exp=1731568548~hmac=c4f8caaa53658359988b3dfd3c8a153cc70d8cdabcc4d13a8f1bca7139e71d50&w=740)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Gadget Shop</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
