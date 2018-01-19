import React from "react";
import { sampleData } from "../theme";
import { VictoryChart, VictoryBar } from "victory";

export default class Charts extends React.PureComponent {
  render() {
    const { theme } = this.props;
    return (
      <React.Fragment>
        <VictoryChart theme={theme} domainPadding={20}>
          <VictoryBar data={sampleData} x="quarter" y="earnings" />
        </VictoryChart>
      </React.Fragment>
    );
  }
}
