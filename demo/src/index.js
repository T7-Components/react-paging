import React, { PureComponent } from 'react'
import Pager from '../../src'
import { render } from 'react-dom'
import DemoData from './demo-data'

class PagerDemo extends PureComponent {
  state = {
    pageIndex: 0,
    total: DemoData.length,
    pageSize: 10,
    maxButtons: 10,
    autoLayout: true,
    message: 'Starting page is 1'
  }


  handlePageChanged = index => {
    this.setState({ pageIndex: index })
    this.setState({ message: `Page changed to ${index + 1}` })
  }

  changePageIndex = event => {
    const { target: { value } } = event
    if (value) {
      this.setState({ pageIndex: parseInt(value, 10) })
    }
  }

  changeTotal = event => {
    const { target: { value } } = event
    if (value) {
      this.setState({ total: parseInt(value, 10) })
    }
  }

  changePageSize = event => {
    const { target: { value } } = event
    if (value) {
      this.setState({ pageSize: parseInt(value, 10) })
    }
  }

  changePagerButtons = event => {
    const { target: { value } } = event
    if (value) {
      this.setState({ maxButtons: parseInt(value, 10) })
    }
  }

  changeCalculate = event => {
    const { target: { checked } } = event
    this.setState({ autoLayout: checked })
  }

  render() {
    const {
      pageIndex,
      total,
      pageSize,
      maxButtons,
      autoLayout,
      message
    } = this.state

    const chunk = DemoData.slice(pageIndex * pageSize, (pageIndex * pageSize) + pageSize)

    return (
      <div className="max-w-1200 m-l-50">
        <h4>Sample response</h4>
        <div style={{ minHeight: 300 }} >
          {chunk.length ? chunk.map((item, index) => <div key={index}><div>{item.id} - {item.first_name}: {item.gender}</div></div>) : 'Not available'}
        </div>
        <div heading="Pagination Demo" className="m-b-20">
          <p>
            <label>
              Page index:
              <input
                className="m-l-20"
                onChange={this.changePageIndex}
                defaultValue={pageIndex}
              />
            </label>
          </p>
          <p>
            <label>
              Total items:
              <input
                className="m-l-20"
                onChange={this.changeTotal}
                defaultValue={total}
              />
            </label>
          </p>
          <p>
            <label>
              Page size:
              <input
                className="m-l-20"
                onChange={this.changePageSize}
                defaultValue={pageSize}
              />
            </label>
          </p>
          <p>
            <label>
              Maximum number of buttons (auto layout disabled):
              <input
                className="m-l-20"
                onChange={this.changePagerButtons}
                defaultValue={maxButtons}
              />
            </label>
          </p>
          <p>
            <label>
              Calculate layout based on width (auto layout enabled):
              <input
                type="checkbox"
                className="m-l-20"
                onChange={this.changeCalculate}
                checked={autoLayout}
              />
            </label>
          </p>
          <p>
            <em>{message}</em>
          </p>
          <Pager
            className="m-t-100 w-100%"
            pageIndex={pageIndex}
            maxButtons={maxButtons}
            autoLayout={autoLayout}
            pageSize={pageSize}
            totalItems={total}
            onPageChanged={this.handlePageChanged}
          />
        </div>
      </div>
    )
  }
}

render(<PagerDemo />, document.querySelector('#demo'))