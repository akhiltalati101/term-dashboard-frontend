import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import WorkIcon from '@material-ui/icons/Work';

const TotalDeadlinesCard = (props) => (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL DEADLINES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              4
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: blue[600],
                height: 56,
                width: 56
              }}
            >
              <WorkIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default TotalDeadlinesCard;