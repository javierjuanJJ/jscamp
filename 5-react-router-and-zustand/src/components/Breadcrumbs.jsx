import {useRouter} from '../hooks/useRouter.js'

export function Breadcrumbs(){

    const { currentPath } = useRouter()

    const pages = currentPath.split('/').map(item => item).join(" >");
    return (
        <p>{pages}</p>
    )
}