// mostly code from reactjs.org/docs/error-boundaries.html

import React from 'react';
import {Link} from '@reach/router';

export default class ErrorBoundary extends React.Component {
  state = {hasError: false}
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary has error", error, info);
  }

  render() {
    if(this.state.hasError) {
      return (
        <h1>
          There was some error with this listing.  <Link to="/">Click here</Link> to go
          back to homepage or wait for five seconds.
        </h1>
      )
    }
    return this.props.children;
  }
}