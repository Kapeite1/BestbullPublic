import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 0px 8px 20px 8px;
    background-color: white;
    border-radius: 15px;
    elevation: 5px;
    padding: 15px;
`;

export const ContainerText = styled.Text`
    color: #757575;
    text-transform: capitalize;
    font-size: 16px;
`;













export const ContainerProduto = styled.View`
    flex: 1;
    flex-direction: row;
    padding-left: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: white;
`;

export const ContainerProdutoNome = styled.View`
    flex: 0.30;
    justify-content: center;
`;

export const ContainerProdutoInformacao = styled.View`
    flex: 0.70;
    justify-content: center;
`;

export const ContainerDadosEstado = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #71E57D;
    flex-direction: row;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const ContainerDadosInformacao = styled.View`
    flex: 1;
    justify-content: space-around;
    background-color: #dcdcdc;
    flex-direction: row;
`;
