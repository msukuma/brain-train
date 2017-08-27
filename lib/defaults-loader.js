import { forEach } from 'lodash';

export {loadDefaults, mergeDefaults};

function loadDefaults(args, defaults, exclude) {
  forEach(defaults, (v, k) => {
    if (!args.hasOwnProperty(k) && !(exclude && exclude[k])) {
      args[k] = v.default;
    }
  });
};

function mergeDefaults(org, newD) {
  forEach(newD, (v, k) => {
    if (!org.hasOwnProperty(k)) {
      org[k] = v;
    }
  });
}
