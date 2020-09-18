import styled from 'styled-components/native';

export const DismissKeyboard = styled.TouchableWithoutFeedback `
    flex: 1;
    background-color: #e9e9e9;
`;

export const Container = styled.View `
    flex: 1;
    background-color: #e9e9e9;
`;

export const Adicionais = styled.ScrollView`
    background-color: white;
    margin: 0 8px 0 8px;
    border-radius: 8px;
    elevation: 5;
    margin-bottom: 10;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 7px 0 0 7px;
`;

export const List = styled.FlatList`
    

`;

export const Observacoes = styled.View`
    background-color: white;
    margin: 0 8px 0 8px;
    border-radius: 8px;
    elevation: 5;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
    multiline: true
})`
    width: 100%;
    margin: 0 5px 0 5px;
`;

export const Botoes = styled.View`
    margin-bottom: 5px;
    flex-direction: row;
    justify-content: space-around;
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
`;