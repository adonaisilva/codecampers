function alphabetPosition(text) {
  let upperFilteder = text.toUpperCase().match(/[A-Z]/g);
  return !!upperFilteder //avoid to return null when no letters present in string
    ? upperFilteder.map((character) => character.codePointAt(0) - 64).join(" ")
    : "";
}
