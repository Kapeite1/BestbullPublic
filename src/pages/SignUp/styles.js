import styled from 'styled-components/native'

export const Background = styled.ImageBackground`
    flex: 1;
    background-color: #494949;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    flex-direction: row;
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const BrandImg = styled.Image`
    margin-right: 40px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 45px;
    font-weight: bold;
`;

export const Formulario = styled.ScrollView `
    width: 100%;
    padding: 0 15px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'gray',
    multiline: true
})`
    background-color: white;
    width: 100%;
    margin-bottom: 13px;
    border-radius: 10px;    
`;

export const InputHalf = styled.TextInput.attrs({
    placeholderTextColor: 'gray'
})`
    flex-direction: row;
    background-color: white;
    width: 47%;
    margin-bottom: 13px;
    border-radius: 10px;
    
`;

export const ButtonRegister = styled.TouchableOpacity`
    background-color: orange;
    border-radius: 8px;
    width: 70%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const ButtonRegisterText = styled.Text`
    color: white;
    font-size: 23px;
    font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    
`;

export const LinkText = styled.Text`
    color: white;
    text-decoration: underline;
    font-weight: bold;
    font-size: 18px;
`;