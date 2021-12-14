import React from 'react';

import {
  faHome,
  faEllipsisV,
  faAngleDown,
  faClipboard,
  faMoneyCheckAlt,
  faPaw,
  faListOl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SiHappycow } from 'react-icons/si';

export const faIcon = {
  home: <FontAwesomeIcon icon={faHome} />,
  ellipsisV: <FontAwesomeIcon icon={faEllipsisV} />,
  angleDown: <FontAwesomeIcon icon={faAngleDown} />,
  clipboard: <FontAwesomeIcon icon={faClipboard} />,
  moneyCheckAlt: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
  paw: <FontAwesomeIcon icon={faPaw} />,
  cow: <SiHappycow />,
  listOl: <FontAwesomeIcon icon={faListOl} />,
};
