import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 4rem - 40px);

`;

export const Image = styled.img``;

export const Card = styled.div`
    background: #8bbe8a;
    border: 4px solid #62b957;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 20px;
    padding: 50px;

&.type--bug {
  background-color: #8bd674;
  border-color: #8cb230;
}
&.type--dark {
  background-color: #6f6e78;
  border-color: #58575f;
}
&.type--dragon {
  background-color: #7383b9;
  border-color: #0f6ac0;
}
&.type--electric {
  background-color: #f2cb55;
  border-color: #eed535;
}
&.type--fairy {
  background-color: #eba8c3;
  border-color: #ed6ec7;
}
&.type--fighting {
  background-color: #eb4971;
  border-color: #d04164;
}
&.type--fire {
  background-color: #ffa756;
  border-color: #fd7d24;
}
&.type--flying {
  background-color: #83a2e3;
  border-color: #748fc9;
}
&.type--ghost {
  background-color: #8571be;
  border-color: #556aae;
}
&.type--grass {
  background-color: #8bbe8a;
  border-color: #62b957;
}
&.type--ground {
  background-color: #f78551;
  border-color: #dd7748;
}
&.type--ice {
  background-color: #91d8df;
  border-color: #61cec0;
}
&.type--noemal {
  background-color: #b5b9c4;
  border-color: #9da0aa;
}
&.type--poison {
  background-color: #9f6e97;
  border-color: #a552cc;
}
&.type--psychic {
  background-color: #ff6568;
  border-color: #a552cc;
}
&.type--rock {
  background-color: #d4c294;
  border-color: #baab82;
}
&.type--steel {
  background-color: #4c91b2;
  border-color: #4a90da;
}
&.type--water {
  background-color: #58abf6;
  border-color: #4a90da;
}

`;

export const Number = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: rgba(23, 23, 27, 0.6);
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 64px;
    line-height: 83px;
    color: #ffffff;
`;