// import node module libraries
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Highlight, themes } from "prism-react-renderer"

const HighlightCode = ({ code }) => {
	const copyAction = (event) => {
		event.target.innerHTML = 'Copied';
		setTimeout(() => {
			event.target.innerHTML = 'Copy';
		}, 3000);
	};

	return (
		<div className='position-relative code-highlight-box'>
			<CopyToClipboard text={code}>
				<button className="copy-button" onClick={copyAction}>
					Copy
				</button>
			</CopyToClipboard>
			<Highlight
				theme={themes.nightOwl}
				code={code} language="jsx" >
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};
export default HighlightCode;
