export default function Menuitem(props){
    const { manzil , nomi} = props;
    return(
        <li>
            <a className="active" href={manzil}>
                {nomi}
            </a>
        </li>
    )
}