import React from 'react';
import PrintImg from "../../../assets/pdfprint.png"
import { Container, Typography, Divider, Grid, TextField, Autocomplete, Stack, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Button } from '@mui/material';
import { t } from 'i18next';
import { ButtonPrimary } from '../button/Button';
import dayjs from 'dayjs';
import eagle from "../../../assets/eagle.png";
import footerLogo from "../../../assets/footerLogo.png";
import leafImage from "../../../assets/pageLogo.png";
import QRCode from 'react-qr-code';

interface Props {
  uri: string;
}
class ComponentToPrint1 extends React.Component<Props> {
  render() {
    const strDate = dayjs().format("YYYY-MM-DD");
    return (
      // <>
      //   <img src={PrintImg} height={"1000px"} width={"100%"} ></img>
      // </>
      <>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: "space-between" }}>
            <img src={leafImage} width={200}></img>
            {strDate}
          </Grid>
          <Typography variant="h5" align="center">{t("Information about participation in systematic follow-up")}</Typography>
          <br />
          {/* <Stack direction="row" alignItems="center" gap={20}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "25%", width: "25%" }}
          level="M"
          value={this.props.uri}
          viewBox={`0 0 256 256`}
        />
        <Stack>
          <Typography>
          {t("QR code for parent")} 1.
          </Typography>
          <Typography>
          {t("The parent to answer")}: __________
          </Typography>
          <Typography>
          {t("Reply latest - Date")}: __________
          </Typography>
        </Stack>
      </Stack> */}
          <br />
          <Typography>
            {t("Open care Vuksen i Vallentuna carries out systematic follow-up of assistance-assessed interventions. The purpose is to ensure the quality of the assistance-assessed interventions carried out at Adult Public Services. Participation is voluntary and everyone who participates in outpatient interventions is asked to participate in the follow-up. The answers we receive are used to evaluate and improve our working methods and efforts. All data collected will be aggregated at group level.")}
          </Typography>
          <br />
          <Typography variant="h6">
            {t("Confidentiality and consent to the processing of personal data")}
          </Typography>
          <Typography>
            {t("I agree to my personal data in the form of contact details being processed to enable a systematic follow-up in the form of sending out questionnaires after six and twelve months respectively after starting the effort. I also agree that my personal data, together with the answers provided in the survey, are processed for the purpose of evaluating and improving Adult Public Care's work methods and efforts.")}
          </Typography>
          <br />
          <Typography>
            {t("All information that I provide in the systematic follow-up will be treated confidentially. This consent form will be kept in a locked cabinet by Open Care Adults to which unauthorized persons have no access.")}
          </Typography>
          <br />
          <Typography>
            {t("Consented personal data will be processed at the latest from the date of signing this consent for 13 months after the start of the effort, or until you withdraw your consent. Then, when the processing of the personal data is finished, the answers are stored de-identified on a digital platform within the Nordic region.")}
          </Typography>
          <br />
          <Typography>
            {t("Vallentuna municipality is the personal data controller for the processing of personal data as above. The personal data is only processed for the purpose stated in the consent sentence above. The legal basis for the processing is consent. The categories of personal data that are processed are only those specified in the consent sentence.")}
          </Typography>
          <br />
          <Typography sx={{ marginBottom: "300px" }}>
            {t("You can reach the Data Protection Officer via our Contact Center, telephone: 08-587 850 00.")}
          </Typography>
          <br />
          <Grid container sx={{ justifyContent: "space-between" }}>
            <img src={leafImage} width={200}></img>
            {strDate}
          </Grid>
          <Stack direction="row" gap={6} justifyContent="center">
            <Stack>
              <Typography>
                {t("Singnature of name:")}
              </Typography>
              <br />
              <Typography>
                __________________
              </Typography>
            </Stack>
            <Stack>
              <Typography>
                {t("Clarification of name:")}
              </Typography>
              <br />
              <Typography>
                __________________
              </Typography>
            </Stack>
            <Stack>
              <Typography>
                {t("Date of name:")}
              </Typography>
              <br />
              <Typography>
                __________________
              </Typography>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" justifyContent="center">
            <Typography>
              {t("Address of name:")}
            </Typography>
            <Stack>
              <Typography>
                ___________________________________________________________
              </Typography>
              <br />
              <Typography>
                ___________________________________________________________
              </Typography>
            </Stack>
          </Stack>
          <br />
          <Typography variant="h6">
            {t("Information about the data protection regulation (EU) 2016/679")}
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>
            {t("Personal data is processed according to the rules contained in the data protection regulation or with the support of other legislation relating to personal data. According to Article 15 of the data protection regulation, you have the right to receive information about which personal data about you we process and how we process it, free of charge, once per calendar year, after a written and signed application has been sent to us. You also have the right to request correction according to Article 16 of the same regulation.")}
          </Typography>
          <br />
          <Typography sx={{ fontSize: "10px" }}>
            {t("More about Vallentuna municipality's handling of personal data can be found at www.vallentuna.se/personpädtning.")}
          </Typography>
          <br />
          <Grid container sx={{ justifyContent: "space-between", position: "absolute", bottom: "5px", right: "5px" }}>
            <img src={footerLogo}></img>
            <img src={eagle} height="100px"></img>
          </Grid>



        </Container>
      </>
    );
  }
}

export default ComponentToPrint1;
