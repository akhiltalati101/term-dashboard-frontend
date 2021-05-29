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

const NextDeadline = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            NEXT DEADLINE
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {/* <CountdownTimer dueAt={"2021-06-05 19:30"} /> */}
            7 days
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

export default NextDeadline;
