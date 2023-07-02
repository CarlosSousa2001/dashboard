import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    input {
        border: none;
        border-radius: 4px;
        background-color: #CCC;
        padding: 4px;
    }

    button {
        padding: 4px;
        border: none;
        border-radius: 4px;

        :hover {
            border: 1px solid black;
        }
    }
`