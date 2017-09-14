import { map } from 'lodash';

export default function titleCase(s) {
  return map(s.split(' '), capitalize).join(' ');
}

function capitalize(s) {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}
