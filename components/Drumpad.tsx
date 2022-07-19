import styled from 'styled-components'

// TODO - finish styling mobile
const SingleDrumPad = styled.div`
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
        width: 87px;
        height: 87px
    }

`

type Props = {
    onClick: () => void;
}

const Drumpad: React.FC<Props> = ({ onClick }) => (
    <SingleDrumPad onClick={onClick}></SingleDrumPad>
)

export default Drumpad