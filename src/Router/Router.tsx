import React, { useEffect, useState } from 'react'
import { HashLinkProps, HashParams, RouterProps } from './Router.types'
const HashRouter: React.FC<RouterProps> = ({ routes }) => {
	// Парсим hash-часть (убираем символ '#' и превращаем в параметры)
	const parseHash = (): HashParams => {
		const hashString = window.location.hash.substring(1) // убираем #
		const params = new URLSearchParams(hashString)
		const hashParams: HashParams = {}
		params.forEach((value, key) => {
			hashParams[key] = value
		})
		return hashParams
	}

	const [hash, setHash] = useState<HashParams>(parseHash())

	useEffect(() => {
		const onHashChange = () => {
			setHash(parseHash())
		}

		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	// Извлекаем report id из search-параметров URL
	const searchParams = new URLSearchParams(window.location.search)
	const reportId = searchParams.get('id') || ''

	// Определяем текущую страницу по hash-параметру "page"
	const currentPage = hash.page

	// Если для маршрута не указан page (undefined) – считаем его главной страницей
	const route =
		routes.find(r => r.page === currentPage) || routes.find(r => r.page === undefined)

	if (route) {
		const Component = route.component
		return <Component hash={hash} reportId={reportId} />
	}
	return <div>Страница не найдена</div>
}

export default HashRouter


export const HashLink: React.FC<HashLinkProps> = ({ to, children, ...props }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		// Устанавливаем hash. В данном случае to — это строка вида "page=agent&id=228"
		window.location.hash = to
	}

	return (
		<a href={`#${to}`} onClick={handleClick} {...props}>
			{children}
		</a>
	)
}
