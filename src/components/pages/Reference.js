import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import axios from "axios";

// function Reference() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Reference", "search"]} />
//         <ReferCont />
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };

  getRefers = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );

    // console.log(htmlRefer);
    this.setState({ refers: htmlRefer, isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRefers();
    }, 2000);
  }

  render() {
    const { isLoading, refers } = this.state;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["Reference", "book"]} />
              <section className="refer__cont">
                <div className="container">
                  <div className="refer__inner">
                    <h2>HTML</h2>
                    <ul className="refer__list">
                      {refers.map((refer) => (
                        <ReferCont
                          key={refer.id}
                          id={refer.id}
                          title={refer.title}
                          desc={refer.desc}
                          use={refer.use}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Reference;
