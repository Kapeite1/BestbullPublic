import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Container1 = styled.ScrollView`
   height: 75%;
   
`;

export const Container2 = styled.View`
    margin: 0 8px;
    background-color: white;
    border-radius: 8px;
    elevation: 5px;
    margin-bottom: 15px;
    padding: 10px 15px;
    
`;

export const Opcoes = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
`;

export const AreaButton = styled.View`
    
    justify-content: flex-end;
`;

export const Finalizar = styled.TouchableOpacity`
    background-color: green;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(52, 52, 52, 0.30)';
`;

export const ModalView = styled.View`
    flex: 0.2;
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    elevation: 5px;
    align-items: center;
    justify-content: center;
`;

export const TextModal = styled.Text`
    font-weight: bold;
    margin-bottom: 10px;
`;
export const ModalConfirmar = styled.TouchableOpacity`
    background-color: rgb(0, 213, 117);
    align-items: center;
    justify-content: center;
    padding: 7px;
    border-radius: 15px;
    width: 40%;
`;
export const ModalCancelar = styled.TouchableOpacity`
    background-color: rgb(255, 5, 64);
    align-items: center;
    justify-content: center;
    padding: 7px;
    border-radius: 15px;
    width: 40%;

`;
