import styled from 'styled-components'

const StyledDrum = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 6px;
    background-color: black;
    filter: drop-shadow(2px 2px 2px black);
    cursor: pointer;
    border: 4px solid red;
    transition: all 0.1s;
    display: flex;

    :active {
        transform: scale(0.9);
    }

    @media (max-width: 700px) {
        width: 6rem;
        height: 6rem
    }

`

type Props = {
    drumType: string;
    onClick: () => void
}

const Drumpad: React.FC<Props> = ({ drumType, onClick }) => (
    <StyledDrum onClick={onClick}></StyledDrum>
)

export default Drumpad