export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-6 col-md-offset-1 contact-info'>
            <div className='section-title'>
              <h2>聯絡我們</h2>
            </div>

            <div className='contact-item'>
              <div className="facebook">
                <a
                  href={props.data
                  ? props.data.facebook
                  : '/'}>
                  <i className='fa fa-facebook'></i>
                </a>
              </div>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i>
                  Email
                </span>{' '} {props.data
                  ? props.data.email
                  : 'loading'}
              </p>

            </div>
          </div>
          <div className="col-md-3 logoSection">
            <img
              src={props.data
              ? props.data.logo
              : ''}
              alt="logo"/>
            <h3>漪七科技</h3>
            <h3>跟漁民站在一起</h3>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 漪七科技 Yichi Tech
          </p>
        </div>
      </div>
    </div>
  )
}
