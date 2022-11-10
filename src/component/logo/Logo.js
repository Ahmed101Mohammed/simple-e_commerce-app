import style from './logo.css';

const Logo = ()=>
{
    return(
        <div className={style.logo-container}>
            <img className={style.logo} src={props.link} alt="logo"/>
        </div>
    )
}

export default Logo;