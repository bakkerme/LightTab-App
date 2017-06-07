import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className='wrapper'>
        <span>{this.props.children}</span>
        <style jsx>{`
        .wrapper {
          padding: 0px 24px;
          display: flex;
          border-bottom: 1px solid rgb(232, 232, 232);
          background-color: #f4f0ff;
        }
        span {
          line-height: 56px;
          font-size: 20px;
          font-family: Roboto, sans-serif;
          color: rgba(0, 0, 0, 0.4);
       }
      `}</style>

      </div>
    );
  }
}

export default Header;
