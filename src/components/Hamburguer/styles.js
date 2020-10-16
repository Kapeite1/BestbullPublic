import styled from 'styled-components/native';

export const Container = styled.View`    
    background-color: white;
    border-radius: 10px;
    margin: 0 8px 15px 8px;
    elevation: 5px;
`;

export const Foto = styled.View`
    height: 80%;
    width: 25%;
    margin-left: 10px;
    border-radius: 5px;
`;
export const Imagem = styled.Image`
    height: 100%;
    width: 100%;
`;

export const Informações = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Ingredientes = styled.Text`
    
    
`;

export const Preco = styled.View`
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
