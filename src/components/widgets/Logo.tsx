import logo from '../../assets/logo.png';
const Logo = ({ className }: { className?: string | undefined }) => <a href='/'><img className={className} src={logo} alt="logo" /></a>
export default Logo;