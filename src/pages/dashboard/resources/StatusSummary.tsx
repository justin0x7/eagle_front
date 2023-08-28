import { Stack } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import StatusCircle from "../../../core/components/status/StatusCircle";
import { ComingIconImage, DoneIconImage, LossIconImage, TodoIconImage } from "../../../assets/AppImages";
import { EstimatesDto } from "../../../core/model/estimates.model";

const StatusSummary = React.memo((props: { data: EstimatesDto['status']; }) => {
  const { data: status } = props;
  return (
    <Stack>
        {/* <StatusCircle status={zeroMonth.statusInDetail.child} variant="small" /> */}
        {status} ? (
            <ComingIconImage />
        ) : (
            <DoneIconImage />
        )
    </Stack>
  );
});

export default StatusSummary;