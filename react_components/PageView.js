'use strict';

import React from 'react';

const PageView = (props) => {
  let cssClassName = props.pageClassName;
  const linkClassName = props.pageLinkClassName;
  const onClick = props.onClick;
  const href = props.href;
  let ariaLabel = 'Page ' + props.page +
    (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = 'Page ' + props.page + ' is your current page';
    if (typeof(cssClassName) !== 'undefined') {
      cssClassName = cssClassName + ' ' + props.activeClassName;
    } else {
      cssClassName = props.activeClassName;
    }
  }

  const linkProps = {
    onClick: onClick,
    role: "button",
    className: linkClassName,
    href: href,
    tabIndex: "0",
    'aria-label': ariaLabel,
    'aria-current': ariaCurrent,
    onKeyPress: onClick,
  };

  return (
      <li className={cssClassName}>
        {React.cloneElement(props.component || <a/>, linkProps, props.page)}
      </li>
  )
}

export default PageView;
