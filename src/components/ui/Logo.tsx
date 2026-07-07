interface Props {
  withText: boolean;
}

const Logo = ({ withText = false }: Props) => {
  return <div>{withText && <span>Muscula</span>}</div>;
};

export default Logo;
