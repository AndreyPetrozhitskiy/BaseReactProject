// Функция для сброса глобального поиска через iframe
export function resetGlobalSearch(): Promise<void> {
	return new Promise((resolve, reject) => {
		const iframe = document.createElement('iframe')
		iframe.src = 'fields.php?table=1970&search_reset=on'
		iframe.style.display = 'none'
		iframe.onload = () => {
			console.log('Глобальный поиск сброшен через iframe.')
			document.body.removeChild(iframe)
			resolve()
		}
		iframe.onerror = () => {
			document.body.removeChild(iframe)
			reject(new Error('Ошибка загрузки iframe для сброса поиска.'))
		}
		document.body.appendChild(iframe)
	})
}