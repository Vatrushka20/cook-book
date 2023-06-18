import '../../Button/Button.scss';
export const ButtonLess = ({onClick}) => {
    return(
        <div className='btn-wrapper'>
            <button onClick={onClick} className="btn">Show less</button>
        </div>
    )
}