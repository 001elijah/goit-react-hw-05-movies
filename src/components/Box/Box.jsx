import s from './Box.module.scss';

const Box = ({ children }) => {
    return (
        <div className={s.Box}>
            { children }
        </div>
    );
};

export default Box;