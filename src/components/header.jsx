export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h3>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h3>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://forms.gle/TnQHBqzJR2haqXo7A'
                  className='btn btn-custom btn-lg'
                  target="_blank"
                  rel="noreferrer"
                >
                  申請試用
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
