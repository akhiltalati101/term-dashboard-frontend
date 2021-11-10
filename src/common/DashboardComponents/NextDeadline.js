import { useSelector } from "react-redux";
import moment from "moment";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import CountdownTimer from "./CountdownTimer";

const NextDeadline = (props) => {
  const {deadlines} = useSelector((state) => state.deadlines);
  var nextDeadline = null
  if (deadlines && deadlines !== null) {
    nextDeadline = deadlines.length > 0 ? deadlines[0] : null
  }
  return (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            NEXT DEADLINE
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {nextDeadline !== null? <CountdownTimer dueAt={moment(nextDeadline.dueAt)} /> : "NA"}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56,
            }}
          >
            <AccessAlarmIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
          }

export default NextDeadline;
