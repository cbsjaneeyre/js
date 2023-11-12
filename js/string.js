const path = "/users/download/index.html";

const isHtml = function(path2) {
  const neededPath = "html";
  const slicedPath = path.slice(-4);

  if (neededPath == slicedPath) {
    return true;
  } else {
    return false;
  }
};

console.log(isHtml(path));