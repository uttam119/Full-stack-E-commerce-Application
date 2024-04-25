const Heading = ({ type, value, className }) => {
  switch (type) {
    case "h1":
      return <h1 className={`$ {className ? className:""}}`}>{value}</h1>;

    case "h2":
      return <h2 className={`$ {className ? className:""}}`}>{value}</h2>;

    case "h3":
      return <h3 className={`$ {className ? className:""}}`}>{value}</h3>;
    case "h4":
      return <h4 className={`$ {className ? className:""}}`}>{value}</h4>;
    case "h5":
      return <h5 className={`$ {className ? className:""}}`}>{value}</h5>;

    default:
      return <strong className={`${className ? className : ""}`}></strong>;
  }
};
export default Heading;
