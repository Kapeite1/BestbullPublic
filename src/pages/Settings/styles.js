import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: lightgray;
`;

export const ContainerName = styled.View`
    flex: 0.4;
    background-color: orange;
    justify-content: center;
    align-items: center;
    
`;

export const Name = styled.Text`
    font-size: 25;
`;

export const HomeButton = styled.TouchableOpacity`
    border-radius: 20;
    elevation: 5;
    align-items: center;
    width: 60%;
    position: absolute;
    bottom: -18;
`;

export const ContainerDados = styled.View`
    justify-content: center;
    flex: 0.6;
    padding-left: 10%;
    padding-right: 7%;
`;

export const Info = styled.View`
    margin-bottom: 20;
    border-bottom-width: 1;
    border-color: #aba895;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoTitle = styled.Text`
    font-weight: bold;
    font-size: 17;
`;

export const InfoText = styled.Text`
    margin-left: 10;
    font-size: 15;
`;

export const ButtonEdit = styled.TouchableOpacity`
    flex-direction: row;
`;

InfoEmail
export const InfoEmail = styled.View`
    margin-bottom: 20;
    border-bottom-width: 1;
    border-color: #aba895;
    flex-direction: row;
    align-items: center;
`;

export const ModalView = styled.View`
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    width: 70%;
    align-items: center;
`;

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(52, 52, 52, 0.30)';
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
    background-color: red;
    align-items: center;
    justify-content: center;
    padding: 7px;
    border-radius: 15px;
    width: 40%;
`;