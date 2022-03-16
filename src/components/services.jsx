export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>功能</h2>
          <h3>
            還在擔心天有不測風雲?別擔心,有漁民曆的陪伴,讓您365天日日是好日!
          </h3>
        </div>
        <div className='row'>
          {props.data
            ? props
              .data
              .map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 content'>
                  {' '}
                  <img src={d.img} alt={d.name} onMouseEnter={e => (e.currentTarget.src = d.imgHover)} onMouseLeave={e => (e.currentTarget.src = d.img)}/>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
