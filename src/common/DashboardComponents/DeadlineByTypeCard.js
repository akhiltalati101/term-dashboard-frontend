import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LaptopIcon from '@material-ui/icons/Laptop';
import BookIcon from '@material-ui/icons/Book';
import CreateIcon from '@material-ui/icons/Create';

const DeadlineByType = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [33, 15, 22, 30],
        backgroundColor: [
          colors.blue[600],
          colors.red[600],
          colors.orange[600],
          colors.lightGreen[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Assignment', 'Exam', 'Lecture', 'Reading']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Assignment',
      value: 33,
      icon: AssignmentIcon,
      color: colors.blue[600]
    },
    {
      title: 'Exam',
      value: 15,
      icon: CreateIcon,
      color: colors.red[600]
    },
    {
      title: 'Lecture',
      value: 23,
      icon: LaptopIcon,
      color: colors.orange[600]
    },
    {
      title: 'Reading',
      value: 30,
      icon: BookIcon,
      color: colors.lightGreen[600]
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Deadline By Type" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeadlineByType;
