import React, { Component } from "react";

class st extends Component {
  render() {
    let tabData = (
      <div data-height="222" data-scrollable="" className="list-group border">
        <div className="row dropDownPanel">
          <CurrentTrendDropDown
            wlan={this.state.wlanVal}
            dropdownValue={this.state.currentSSIDVal}
            handleParentState={this.handleParentState}
            autoRefresh={this.props.autoRefresh}
          />
          <CurrentTrendDeviceInfo
            wlan={this.state.wlanVal}
            dropdownValue={this.state.currentSSIDVal}
            handleParentState={this.handleParentState}
            autoRefresh={this.props.autoRefresh}
            clientsType={
              this.state.activeKey == 1 ? "Recent Clients" : "Active Clients"
            }
          />
        </div>
      </div>
    );
    return (
      <div className="current-trendtable">
        <div role="tabpanel" className="panel customPanel">
          <Tabs
            activeKey={this.state.keycheck}
            onSelect={this.handleSelect.bind(this)}
            justified
          >
            <Tab eventKey={1} className="radioTab" title="Recent Clients">
              {tabData}
            </Tab>
          </Tabs>
          <Tab eventKey={1} className="radioTab" title="Active Clients">
            {tabData}
          </Tab>
        </div>
      </div>
    );
  }
}

export default st;
