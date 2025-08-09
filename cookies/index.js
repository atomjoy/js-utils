function getCookie(name) {
	let cookies = new Map(document.cookie.split(/\s*;\s*/).map(e => e.split(/\s*=\s*/)))
	let cookie = cookies.get(name)
	return cookie ? decodeURIComponent(cookie) : null
}

function setCookie(name, value, maxage = 31536000, path = "/", samesite = 'lax', secure = false, httponly = false) {
    let cookie = name + "=" + value + ";max-age" + maxage + ";path=" + path + ";samesite=" + samesite
    if(secure) { cookie = cookie + ";secure" }
    if(httponly) { cookie = cookie + ";httponly" }
    document.cookie = cookie;
}

function allCookies() {
	return new Map(document.cookie.split(/\s*;\s*/).map(e => e.split(/\s*=\s*/)))
}

export {getCookie, setCookie, allCookies}
