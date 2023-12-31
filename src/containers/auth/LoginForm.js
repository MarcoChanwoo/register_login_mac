import { useEffect, useState } from 'react';
// import {
//     useDispatch,
//     useSelector,
// } from '../../../node_modules/react-redux/es/exports';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from '../../../../../../node_modules/react-router-dom/dist/index'; // 원본
// import { useNavigate } from 'react-router-dom';

const LoginForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const navigate = useNavigate(); // 책에는 이게 빠져있음(트러블 슈팅)

    // 인풋 변경 이벤트 핸들러
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            }),
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 시 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if (auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            navigate('/');
            try {
                // 로그인 상태 유지하기
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [navigate, user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default LoginForm;
