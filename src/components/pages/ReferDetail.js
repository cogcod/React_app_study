import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";

// function ReferDetail(props) {
//   console.log(props);
//   return <div>ReferDetail</div>;
// }

class ReferDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // 외부에서 들어왔다고 하면 주소명을 이렇게 바꿔준다.
      history.push("/reference");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state === undefined) {
      return <div>잘못된 페이지 입니다.</div>;
    } else {
      return (
        <>
          <Header />
          <Contents>
            <section className="refer__cont">
              <div className="container">
                <div className="refer__inner">
                  <div className="refer__table">
                    <h3>{location.state.title}</h3>
                  </div>
                </div>
              </div>
            </section>
          </Contents>
          <Footer />
        </>
      );
    }
  }
}

export default ReferDetail;
