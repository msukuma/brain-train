import { keys } from 'lodash';

export const gameNames = {
  MentalMath: 'MentalMath',
};

export const gamesByCategory = {
  attention: [],
  memory: [],
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
  rowTextCenter: 'row text-center',
  colTextCenter: 'col text-center',
  listUnstyled: 'list-unstyled',
  listGroup: 'list-group',
  listGroupItem: 'list-group-item',
};
