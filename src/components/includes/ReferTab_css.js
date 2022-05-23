import axios from "axios";
import React from "react";
import ReferCont from "./ReferCont";

class ReferTab_css extends React.Component {
  state = {
    refers: [],
  };

  getRefershtml = async () => {
    const {
      data: {
        data: { cssRefer },
      },
    } = await axios.get(
      // "https://jliliflora.github.io/react/src/assets/json/refercss.json"
      "https://cogcod.github.io/JSON/referCss.json"
    );

    console.log(cssRefer);
    this.setState({ refers: cssRefer });
  };

  componentDidMount() {
    this.getRefershtml();
  }

  render() {
    const { refers } = this.state;

    console.log(refers);

    return (
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
    );
  }
}

export default ReferTab_css;
