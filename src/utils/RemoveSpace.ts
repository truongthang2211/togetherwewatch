const isElementBased = (str) => {
  // Test to see if the content is wrapped in an element
  let pattern = /^<[\S\s]+?>.+?<\/[\S\s]+?>$/;
  return str.match(pattern);
};

/**
 * This function will remove leading and trailing spaces/token
 * @param str the string to be checked and have replacement action
 * @param tokenOverride optional ability to override the seach token.
 */
const removeFixedSpaces = (str, tokenOverride = undefined) => {
  let token = tokenOverride === undefined ? "&nbsp;" : tokenOverride;
  str = str.trim();
  while (str.startsWith(token)) {
    str = str.substring(token.length);
    str = str.trim();
  }
  while (str.endsWith(token)) {
    str = str.substring(0, str.length - token.length);
    str = str.trim();
  }
  return str;
};

const removeSpace = (str) => {
  let container;
  if (isElementBased(str)) {
    container = document.createElement("div");
    container.innerHTML = str;
    str = container.firstChild.innerHTML;
  }

  str = removeFixedSpaces(str);

  if (container) {
    container.childNodes[0].innerHTML = str;
    str = container.innerHTML;
  }

  return str;
};
export default removeSpace;
