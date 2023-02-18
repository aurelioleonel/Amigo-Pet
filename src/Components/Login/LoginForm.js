import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';


function LoginForm() {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);


    // React.useEffect(() => {
    //     const token = window.localStorage.getItem('token');
    //     if (token) {
    //         getUser(token);

    //     }
    // }, []);

    // async function getUser(token) {
    //     const { url, options } = USER_GET(token);
    //     const response = await fetch(url, options);
    //     const json = await response.json();

    // }


    // const [username, setUsername] = React.useState('');
    //const [password, setPassword] = React.useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        //Validando o usuário para o login
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }

        // if (username.validate() && password.validate()) {
        //     const { url, options } = TOKEN_POST({
        //         username: username.value,
        //         password: password.value,
        //     });

        //     const response = await fetch(url, options);
        //     const json = await response.json();
        //     window.localStorage.setItem('token', json.token);
        //     getUser(json.token);
        //}
    }

    return (
        <section className="amineLeft">
            <Head title="Login" />
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <button disabled>Carregando...</button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error && "Dados incorretos"} />


                {/* <input type="text"
                    valeu={username}
                    onChange={({ target }) => setUsername(target.value)} />

                <input type="text"
                    valeu={password}
                    onChange={({ target }) => setPassword(target.value)} /> */}


            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
                Perdeu a senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se bo site.</p>
            </div>
            <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
