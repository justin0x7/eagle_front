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
class ComponentToPrint extends React.Component<Props> {
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
        {t("The Public Health Service in Vallentuna carries out systematic follow-up of the interventions that have been started after September 1, 2021. The purpose is to ensure the quality of the efforts carried out at the Public Health Service and to find areas for improvement. All families who participate in the outpatient service are asked to participate in the follow-up, and the answers we receive are very important to be able to offer the best possible support to the families we meet.")}
        </Typography>
        <br />
        <Typography variant="h6">
        {t("Confidentiality and processing of personal data")}
        </Typography>
        <Typography>
        {t("All information you provide in the systematic follow-up will be treated confidentially. The answers are de-identified and stored in a locked cabinet to which unauthorized persons do not have access. The processors have confidentiality regarding all collected information about you and your family. In order to follow up the effect of the granted effort, we would like to be able to send you follow-up surveys after six, respectively twelve, months. Based on the EU's data protection regulation, GDPR, we need your consent to save your contact details during these twelve months. All data collected will be aggregated at the group level and your individual responses will be permanently deleted after the data is aggregated.")}
        </Typography>
        <br />
        <Typography variant="h6">
        {t("Consent")}
        </Typography>
        <Typography>
        {t("I agree that the Public Health Service saves my contact details twelve months after starting work at the Public Health Service in order to ask follow-up questions about the work. I can request that my data be deleted at any time.")}
        </Typography>
        <br />
        <Typography variant="h6">
        {t("Name")}:________________________________________________
        </Typography>
        <Typography variant="h6">
        {t("Place and date")}:__________________________________________
        </Typography>
        <Typography variant="h6">
        {t("The consent is valid until")}:_______________________________
        </Typography>
        <Typography variant="h6">
        {t("Address")}:____________________________________________
        </Typography>
        <Typography variant="h6">
        ____________________________________________
        </Typography>
        <Typography variant="h6">
        {t("Phone number")}:______________________________________
        </Typography>

        <Grid container sx={{ justifyContent: "space-between", position: "absolute", bottom: "5px", right: "5px" }}>
          <img src={footerLogo}></img>
          <img src={eagle} height="100px"></img>
        </Grid>
      
      

  </Container>
  </>
    );
  }
}

export default ComponentToPrint;
