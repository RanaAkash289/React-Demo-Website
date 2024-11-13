export default function TabButtos({children, onSelect}){
    return <li><button onClick={onSelect}>{children}</button></li>
}