export const News = (props) => {
  return (
    <div id='news'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>相關報導</h2>
        </div>
        <div className='row row-flex'>
          {props.data
            ? props
              .data
              .map((d, i) => (

                <div className='col-md-4 col-sm-6 col-xs-12'>
                  <div className='news'>
                    <div className='news-image'>
                      {' '}
                      <a href={d.link} key={`${d.title}-${i}`} target="_blank" rel="noreferrer"><img src={d.img} alt=''/></a>{' '}
                    </div>
                    <div className='news-content'>
                      <a href={d.link} key={`${d.title}-${i}`}>
                        <h4>{d.title}</h4>
                      </a>
                      <p>{d.abstract}</p>
                      <div className='news-meta'>
                        - {d.source}
                      </div>
                    </div>
                  </div>
                </div>

              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
