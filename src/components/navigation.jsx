export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {/* <a className='navbar-brand page-scroll' href='#page-top'>
            
          </a>{' '} */}
          <img src="../img/logo.png" className="logo" alt="logo"/>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                關於
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                功能
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                產品特色
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                養殖故事
              </a>
            </li> */}
            <li>
              <a href='#news' className='page-scroll'>
                相關報導
              </a>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                聯絡我們
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
              聯絡我們
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
