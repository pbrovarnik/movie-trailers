const Footer = () => (
	<footer className="footer">
		<p className="footer__text">
			© {new Date().getFullYear()} -{' '}
			<a href="pbrovarnik.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
				Pasha Brovarnik
			</a>
		</p>
	</footer>
);

export default Footer;