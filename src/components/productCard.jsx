import styled from 'styled-components'

const Card = styled.div`
  background-color: grey;
  height: 100px;
  width: 100px;
`;

export default function ProductCard() {
    return (
        <Card>
            <h3>Product</h3>
        </Card>
    )
}