export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>產品特色</h2>
          <h3>看手機，就像在巡視魚塭一樣!</h3>
        </div>
        <div className='content'>
          <div className="col">
          {props.data
            ? props
              .data.left
              .map((d, i) => (
                <div key={`${d.title}-${i}`} className='item'>
                  {' '}
                  <img src={d.icon} alt={d.title}/>
                  <div className='features-desc'>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
          </div>
          <img src="img/features/app-demo.gif" alt="appDemo" className="gif"/>
          <div className="col">
          {props.data
            ? props
              .data.right
              .map((d, i) => (
                <div key={`${d.title}-${i}`} className='item'>
                  {' '}
                  <img src={d.icon} alt={d.title}/>
                  <div className='features-desc'>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
          </div>
        </div>
      </div>
    </div>
  )
}
