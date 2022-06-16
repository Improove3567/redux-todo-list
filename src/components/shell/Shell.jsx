import React from 'react';
import css from '../shell/Shell.module.css'
const Shell = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.input}>
            <input type="text" placeholder='Add ToDo' />
            </div>
            <div className={css.content}>
               
            </div>
            <div className={css.addBtn}>
                <button>+</button>
                </div>
            </div>
        
    );
}

export default Shell;
