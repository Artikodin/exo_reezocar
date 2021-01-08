export const getPadding = (width, offset, defaultWidth = 22) => {
  const isClientTaller = width - offset > 0;
  return isClientTaller ? (width - offset) / 2 : defaultWidth;
};

// https://gist.github.com/desandro/8559356
export function debounce(fn, threshold) {
  var timeout;

  return function debounced() {
    var _this = this;
    var args = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function delayed() {
      fn.apply(_this, args);
      timeout = null;
    }, threshold || 100);
  };
}
