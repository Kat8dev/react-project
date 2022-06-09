import { WelcomeDiv, WelcomeBtn, WelcomeP } from "../styled"

export default function Welcome(props) {
    
    return (
            <WelcomeDiv>
              <WelcomeBtn onClick={props.welcomeBtn}>Press here & have a fun!</WelcomeBtn>
              <WelcomeP>Apretant els botons Anterior o Següent es destaquen les línies.</WelcomeP>
            </WelcomeDiv>
    )
}

