import styled from "styled-components/native";

const sizevariant = {
    small:1,
    medium:2,
    large:3,
}
const positionvariant = {
    top:'marginTop',
    left:'marginLeft',
    right:'marginRight',
    bottom:'marginBottom'
}
const getVariant =(position,size) => `${positionvariant[position]}:${sizevariant[size]}`
export const Spacer = styled.View`
    ${({position,size})  =>  getVariant(position,size)}
`;

Spacer.defaultProps ={
    position = 'top',
    size = 'small'
}