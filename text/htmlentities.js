export const sampleCode = `
<span style="color: red;">Hello</span>
<?php
    echo "hello from js";

    function hello() {
        echo "Boo";
    }
?>
`;

export const sampleHtml = '<h1 style="color: red">Hello</h1><pre><code>' + sampleCode + '</code></pre><p>Works .....</p><pre><code>' + sampleCode + '</code></pre><p>Works .....</p>';

export function decodeHTMLEntities(text) {
	var textArea = document.createElement('textarea');
	textArea.innerHTML = text;
	return textArea.value;
}

export function encodeHTMLEntities(text) {
	var textArea = document.createElement('textarea');
	textArea.innerText = text;
	return textArea.innerHTML;
}

export function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function htmlEntitiesCode(code) {
    // Show php code in
	return code.replace(/[\u00A0-\u9999<>\&]/gim, (i) => '&#' + i.charCodeAt(0) + ';');
}

export function toHtmlEntities() {
	return this.replace(/./gm, function (s) {
		// return "&#" + s.charCodeAt(0) + ";";
		return s.match(/[a-z0-9\s]+/i) ? s : '&#' + s.charCodeAt(0) + ';';
	});
};

export function fromHtmlEntities(str) {
	return (str + '').replace(/&#\d+;/gm, function (s) {
		return String.fromCharCode(s.match(/\d+/gm)[0]);
	});
};


export function replaceAllCode(html) {
    return html.replaceAll(/<code>([\s\S]*?)<\/code>/g, function (match, $1, offset, string, groups) {
	    return match.replace($1, htmlEntities($1));
    });
}

export function findAllCode(html) {
    const regexp = new RegExp(/<code>([\s\S]*?)<\/code>/g);
    return [...html.matchAll(regexp)];
}
