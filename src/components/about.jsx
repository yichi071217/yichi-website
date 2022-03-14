export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>關於</h2>
              <h3>{props.data
                  ? props.data.paragraph
                  : "loading..."}</h3>
              <div className="paragraph">{props.data
                  ? props
                    .data
                    .p1
                    .map((d, i) => (
                      <p key={`${d}-${i}`}>{d}</p>
                    ))
                  : "loading"}</div>
              <div className="paragraph">{props.data
                  ? props
                    .data
                    .p2
                    .map((d, i) => (
                      <p key={`${d}-${i}`}>{d}</p>
                    ))
                  : "loading"}</div>
              <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">
                閱讀更多
              </button>{' '}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt=""/>{" "}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-body">
              <h3>{props.data
                  ? props.data.readMore.title
                  : "loading..."}</h3>
              <h4>{props.data
                  ? props.data.readMore.subTitle
                  : "loading..."}</h4>
              <div className="paragraph">{props.data
                  ? props
                    .data
                    .readMore
                    .p1
                    .map((d, i) => (
                      <p key={`${d}-${i}`}>{d}</p>
                    ))
                  : "loading"}</div>
              <div className="paragraph">{props.data
                  ? props
                    .data
                    .readMore
                    .p2
                    .map((d, i) => (
                      <p key={`${d}-${i}`}>{d}</p>
                    ))
                  : "loading"}</div>

            </div>

          </div>
        </div>
      </div>

    </div>

  );
};
