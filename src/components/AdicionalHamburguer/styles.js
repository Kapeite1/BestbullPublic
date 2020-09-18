import styled from 'styled-components/native'

export const Container = styled.View`
    
    background-color: white;
    margin: 10px;
    border-radius: 5px;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
    flex-direction: row;
    elevation: 5px;
    
`;

export const Botao = styled.TouchableOpacity`
    
  
`;

export const Texto = styled.Text`
    font-size: 18px;    
`;

export const Item = styled.Text`
    font-size: 18px;
    width: 120px;
`;

export const AreaQuantidade = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;