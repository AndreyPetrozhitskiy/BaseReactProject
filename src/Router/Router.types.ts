export interface HashParams {
	[key: string]: string
}

export interface RouterProps {
	routes: { page?: string; component: React.FC<{ hash: HashParams; reportId?: string }> }[]
}
export interface HashLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string
}
