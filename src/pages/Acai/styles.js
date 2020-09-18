import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #e9e9e9;
`;

export const ContainerTamanho = styled.View`
    background-color: white;
    border-radius: 8px;
    margin: 0 8px 15px 8px;
    padding-top: 8px;
    elevation: 5px;
    height: 20%;

`;

export const ContainerOpcao = styled.View`
    background-color: white;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 8px 0 8px 0;
    margin-bottom: 5px;
    

`;

export const Opcoes = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
    
    
`;

export const Botoes = styled.View`
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    align-items: center;
`;

export const Confirmar = styled.TouchableOpacity`
    background-color: white;
    border: 2px;
    border-color: green;
    border-radius: 15px;
    elevation: 5;
    margin-bottom: 10px;
    width: 140px;
    align-items: center;
    height: 35px;
    
`;

export const Cancelar = styled.TouchableOpacity`
    background-color: white;
    border: 2px;
    border-color: red;
    border-radius: 15px;
    elevation: 5;
    margin-bottom: 10px;
    width: 140px;
    align-items: center;
    height: 35px;
`;