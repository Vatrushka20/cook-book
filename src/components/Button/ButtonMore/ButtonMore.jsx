import '../../Button/Button.scss';
export const ButtonMore = ({onClick}) => {
    return(
        <div className='btn-wrapper'>
            <button onClick={onClick} className="btn">Show more</button>
        </div>
    )
}