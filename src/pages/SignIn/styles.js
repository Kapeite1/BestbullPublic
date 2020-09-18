import styled from 'styled-components/native'

export const Background = styled.ImageBackground`
    flex: 1;    
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const BrandImg = styled.Image`
    

`;

export const BrandText = styled.Text`
    color: white;
    font-size: 35px;
    margin-top: 20px;
`;



export const AreaInput = styled.View`
    background-color: white;
    width: 100%;
    padding-top: 45px;
    margin-top: 50px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 285px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'black'
})`
    background: orange;
    width: 90%;
    font-size: 17px;
    color: black;
    margin-bottom: 15px;

    border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #494949;
    width: 60%;
    height: 45px;
    border-radius: 7px;
    margin-bottom: 15px;
`;

export const SubmitText = styled.Text`
    color: white;
    font-size: 20px;
    
`;

export const Link = styled.TouchableOpacity`
    
    margin-bottom: 15px;
    
`;

export const LinkText = styled.Text`
    color: black;
    text-decoration: underline;
    
`;