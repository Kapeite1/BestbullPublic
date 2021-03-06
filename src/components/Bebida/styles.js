import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
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
    margin-left: 10px;
    border-radius: 5px;
`;
export const Imagem = styled.Image.attrs({
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
})`
  
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

export const Preco = styled.TouchableOpacity`
    align-items: center;
    width: 30%;
    
`;

export const Valor = styled.Text`
    margin-bottom: 7px;
    font-size: 17px;
    font-weight: bold;
`;

export const Comprar = styled.Text`
    
`;
