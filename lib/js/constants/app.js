import { keys } from 'lodash';

export const gameNames = {
  MentalMath: 'Mental Math',
  Pinball: 'Pinball',
  TextTwist: 'Text Twist',
};

export const gamesByCategory = {
  attention: [],
  memory: [
    gameNames.Pinball,
    gameNames.TextTwist,
  ],
  'problem solving': [
    gameNames.MentalMath,
  ],
  speed: [],
};

export const categoriesArray = keys(gamesByCategory);

export const styles = {
  container: 'container',
  btnDefault: 'btn bg-dark',
  btnSuccess: 'btn btn-success',
  btnDanger: 'btn btn-danger',
  jumbotron: 'jumbotron',
  row: 'row',
  col: 'col',
  textCenter: 'text-center',
  textRight: 'text-right',
  rowTextCenter: 'row text-center',
  colTextCenter: 'col text-center',
  colTextLeft: 'col text-left',
  colTextRight: 'col text-right',
  listUnstyled: 'list-unstyled',
  listGroup: 'list-group',
  listGroupItem: 'list-group-item',
};
