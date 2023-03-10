import React from 'react'
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className='container mainContainer'>
            <h1 className='title'>Erro: 404</h1>
            <p>Página não encontrada.</p>
            <div className={styles.notfound} ></div>
        </div>
    )
}

export default NotFound
