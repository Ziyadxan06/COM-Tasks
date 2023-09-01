import searchImg from '../../assets/search-img.svg'

export const Search = () => {
  return (
    <section className='search-section'>
        <div className="search-container">
            <div className="content">
                <h2 className="content-header">Search Your Product</h2>
                <p className="content-text">Find the product you are looking for easily according to name information.</p>
                <a href="#" className="btn-search">Search</a>
            </div>

            <img src={searchImg} alt="" />
        </div>
    </section>
  )
}
