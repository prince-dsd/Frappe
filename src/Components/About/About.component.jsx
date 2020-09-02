import React from "react";
import {
  AboutWrapper,
  Container,
  Row,
  ColumnLarge,
  AboutImage,
  AboutText,
  AboutTitle,
} from "./About.styles";
const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <Row>
          <ColumnLarge>
            <AboutImage />
            <AboutTitle>FRAPPé-We love binging</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus consequuntur at non illum possimus nesciunt eligendi
              sint corrupti aliquid excepturi quae saepe alias rerum, tenetur
              placeat quia sapiente sequi, praesentium veniam perspiciatis quos
              cupiditate soluta ducimus maiores! Cumque, maiores labore facilis
              quod tempore reprehenderit voluptatem nostrum odio praesentium
              reiciendis omnis dolores sunt expedita aperiam provident non
              rerum. Sed, ad id! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Autem adipisci facere dicta, recusandae quo
              praesentium aspernatur iusto in voluptatem dolorem quasi fuga modi
              quos esse soluta molestias perspiciatis temporibus doloribus. Quos
              hic magnam reprehenderit magni repellendus libero autem, esse
              similique sint eligendi nam amet iste mollitia eaque ex.
              Consectetur, quod. Placeat dignissimos ab consectetur possimus hic
              explicabo sapiente tempora commodi earum quos repellat minima
              consequuntur voluptatum quia, quaerat eligendi suscipit qui culpa
              dolor totam unde? Optio aperiam voluptatem nihil et cum facilis,
              accusamus beatae itaque tenetur dicta odit, esse ad?
            </AboutText>
          </ColumnLarge>
        </Row>
      </Container>
    </AboutWrapper>
  );
};

export default About;
