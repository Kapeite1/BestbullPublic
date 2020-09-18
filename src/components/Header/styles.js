import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    height: 50px;
    margin-bottom: 15px;
    justify-content: space-between;
    elevation: 5px;
    align-items: center;
    padding: 0 15px 0 15px;
    background-color: orange;
`;

export const Logo = styled.Image`
    height: 50px;
    width: 50px;
`;

export const Tittle = styled.Text`
    color: black;
    font-size: 25px;
    font-weight: bold;
    
`;