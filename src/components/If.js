const If = ({ teste, children }) => {
  if (teste) {
    return children
  } else {
    return false;
  }
}

export default If;