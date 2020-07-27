import styled from 'styled-components/native';

export const Container = styled.View`
    height: 120px;
    padding: 6px;
    background-color: white;
    flex-direction: row;
    border-radius: 10px;
    margin: 0 8px 15px 8px;
    align-items: center;
    elevation: 5px;

`;

export const Foto = styled.View`
    height: 80%;
    width: 25%;
    background-color: black;
    margin-left: 10px;
    border-radius: 5px;
`;

export const Informações = styled.View`
    flex: 1;
    margin-left: 5px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Ingredientes = styled.Text`
    
    
`;

export const Preco = styled.TouchableOpacity`
    align-items: center;
    width: 70px;
`;

export const Valor = styled.Text`
    margin-bottom: 7px;
    font-size: 19px;
    font-weight: bold;
`;

export const Comprar = styled.Text`
    
`;
