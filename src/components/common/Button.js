// import styled from '../../../node_modules/styled-components/dist/index'; 원래 이렇게 형성되어 아래로 수정함
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
