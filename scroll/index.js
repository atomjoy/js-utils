export function scrollTo(id = '.page_contact') {
	const el = document.querySelector(id);
	const rect = el.getBoundingClientRect();
	window.scrollTo({ top: rect.top + window.scrollY - 50, behavior: 'smooth' });
}

export function scrollTop() {
	window.scrollTo({ top: 1, behavior: 'smooth' });
}

export function getAbsolutePosition(id = 'page_contact') {
    const el = document.querySelector(id)
	const rect = el.getBoundingClientRect();

	return {
		top: rect.top + window.scrollY,
		left: rect.left + window.scrollX,
		bottom: rect.bottom + window.scrollY,
		right: rect.right + window.scrollX,
	};
}
