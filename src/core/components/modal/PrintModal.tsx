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
        <Typography variant="h4" align="center">{t("Thanks for helping us get better!")}</Typography>
        <br />
        <Stack direction="row" alignItems="center" gap={20}>
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
        </Stack>
        <br />
        <Typography>
        {t("The public service in Vallentuna carries out follow-up of interventions with the aim of quality assurance of the interventions offered and to find areas for improvement.")}
        </Typography>
        <Typography>
        {t("All families participating in the outpatient intervention are asked to participate in the follow-up and you/you have given your consent to participate in the follow-up at the beginning of the intervention.")}
        </Typography>
        <Typography>
        {t("The follow-up takes place on 2 occasions. The first occasion is six months after the start of the effort and the second occasion is one year after the start of the effort. The follow-up is carried out even if the intervention has already been completed. All data collected will be aggregated at the group level and your individual responses will be permanently deleted after the data is aggregated. The code on the form is for being able to pair the answers with your/your previous answers and thus be able to measure the results of the effort.")}
        </Typography>
        <Typography>
        {t("Do this:")}
        </Typography>
        <Typography>
        {t("Fill in your form(s) via the QR code. Each QR code is unique for the respective person who must answer the follow-up. It appears on the page with the QR code who is to read each QR code.")}
        </Typography>
        <Typography>
        {t("Scan your QR code with the mobile phone's camera and click on the link that appears on the screen to then answer the form you have been assigned. Then click save when you're done.")}
        </Typography>
        <Typography>
        {t("The answers we receive are very important to be able to offer the best possible support to the families we meet. Thanks in advance!")}
        </Typography>
        <Typography>
        {t("If you have any questions about the follow-up, please contact your therapist or unit manager Elin Hall.")}
        </Typography>
        <Typography>
        {t("Sincerely")}
        </Typography>
        <Typography>
        {t("Public services Child and family, Vallentuna municipality")}
        </Typography>

        <Grid container sx={{ justifyContent: "space-between" }}>
          <img src={footerLogo}></img>
          <img src={eagle} height="100px"></img>
        </Grid>
      
      
      <Grid container sx={{ justifyContent: "space-between" }}>
        <img src={leafImage} width={200}></img>
        {strDate}
      </Grid>
      <Typography variant="h4" align="center">{t("Thanks for helping us get better!")}</Typography>
      <br />
      <Stack direction="row" alignItems="center" gap={20}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "25%", width: "25%" }}
          level="M"
          value={this.props.uri}
          viewBox={`0 0 256 256`}
        />
        <Stack>
          <Typography>
          {t("QR code for parent ")} 2.
          </Typography>
          <Typography>
          {t("The parent to answer")}: __________
          </Typography>
          <Typography>
          {t("Reply latest - Date")}: __________
          </Typography>
        </Stack>
      </Stack>
      <br />
      <Typography>
      {t("The public service in Vallentuna carries out follow-up of interventions with the aim of quality assurance of the interventions offered and to find areas for improvement.")}
      </Typography>
      <Typography>
      {t("All families participating in the outpatient intervention are asked to participate in the follow-up and you/you have given your consent to participate in the follow-up at the beginning of the intervention.")}
      </Typography>
      <Typography>
      {t("The follow-up takes place on 2 occasions. The first occasion is six months after the start of the effort and the second occasion is one year after the start of the effort. The follow-up is carried out even if the intervention has already been completed. All data collected will be aggregated at the group level and your individual responses will be permanently deleted after the data is aggregated. The code on the form is for being able to pair the answers with your/your previous answers and thus be able to measure the results of the effort.")}
      </Typography>
      <Typography>
      {t("Do this:")}
      </Typography>
      <Typography>
      {t("Fill in your form(s) via the QR code. Each QR code is unique for the respective person who must answer the follow-up. It appears on the page with the QR code who is to read each QR code.")}
      </Typography>
      <Typography>
      {t("Scan your QR code with the mobile phone's camera and click on the link that appears on the screen to then answer the form you have been assigned. Then click save when you're done.")}
      </Typography>
      <Typography>
      {t("The answers we receive are very important to be able to offer the best possible support to the families we meet. Thanks in advance!")}
      </Typography>
      <Typography>
      {t("If you have any questions about the follow-up, please contact your therapist or unit manager Elin Hall.")}
      </Typography>
      <Typography>
      {t("Sincerely")}
      </Typography>
      <Typography>
      {t("Public services Child and family, Vallentuna municipality")}
      </Typography>

      <Grid container sx={{ justifyContent: "space-between" }}>
        <img src={footerLogo}></img>
        <img src={eagle} height="100px"></img>
      </Grid>
    
    <Grid container sx={{ justifyContent: "space-between" }}>
      <img src={leafImage} width={200}></img>
      {strDate}
    </Grid>
    <Typography variant="h4" align="center">{t("Thanks for helping us get better!")}</Typography>
    <br />
    <Stack direction="row" alignItems="center" gap={20}>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "25%", width: "25%" }}
        level="M"
        value={this.props.uri}
        viewBox={`0 0 256 256`}
      />
      <Stack>
        <Typography>
        {t("QR code for child.")}
        </Typography>
        <Typography>
        {t("The parent to answer")}: __________
        </Typography>
        <Typography>
        {t("Reply latest - Date")}: __________
        </Typography>
      </Stack>
    </Stack>
    <br />
    <Typography>
    {t("The public service in Vallentuna carries out follow-up of interventions with the aim of quality assurance of the interventions offered and to find areas for improvement.")}
    </Typography>
    <Typography>
    {t("All families participating in the outpatient intervention are asked to participate in the follow-up and you/you have given your consent to participate in the follow-up at the beginning of the intervention.")}
    </Typography>
    <Typography>
    {t("The follow-up takes place on 2 occasions. The first occasion is six months after the start of the effort and the second occasion is one year after the start of the effort. The follow-up is carried out even if the intervention has already been completed. All data collected will be aggregated at the group level and your individual responses will be permanently deleted after the data is aggregated. The code on the form is for being able to pair the answers with your/your previous answers and thus be able to measure the results of the effort.")}
    </Typography>
    <Typography>
    {t("Do this:")}
    </Typography>
    <Typography>
    {t("Fill in your form(s) via the QR code. Each QR code is unique for the respective person who must answer the follow-up. It appears on the page with the QR code who is to read each QR code.")}
    </Typography>
    <Typography>
    {t("Scan your QR code with the mobile phone's camera and click on the link that appears on the screen to then answer the form you have been assigned. Then click save when you're done.")}
    </Typography>
    <Typography>
    {t("The answers we receive are very important to be able to offer the best possible support to the families we meet. Thanks in advance!")}
    </Typography>
    <Typography>
    {t("If you have any questions about the follow-up, please contact your therapist or unit manager Elin Hall.")}
    </Typography>
    <Typography>
    {t("Sincerely")}
    </Typography>
    <Typography>
    {t("Public services Child and family, Vallentuna municipality")}
    </Typography>

    <Grid container sx={{ justifyContent: "space-between" }}>
      <img src={footerLogo}></img>
      <img src={eagle} height="100px"></img>
    </Grid>
  </Container>
  </>
    );
  }
}

export default ComponentToPrint;
