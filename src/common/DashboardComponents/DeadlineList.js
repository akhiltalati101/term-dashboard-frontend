import { v4 as uuid } from "uuid";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CountdownTimer from './CountdownTimer';

const deadlines = [
  {
    id: uuid(),
    name: "CS490 Assignment 1",
    type: "Assignment",
    imageUrl: "/deadlineIcons/Assignment.png",
    dueAt: "2021-05-26 19:30",
  },
  {
    id: uuid(),
    name: "CS456 Lecture 1",
    type: "Lecture",
    imageUrl: "/deadlineIcons/Lecture.png",
    dueAt: "2021-06-05 19:30",
  },
  {
    id: uuid(),
    name: "CS456 Quiz",
    imageUrl: "/deadlineIcons/Exam.png",
    type: "Exam",
    dueAt: "2021-06-05 19:30",
  },
  {
    id: uuid(),
    name: "BU442 Reading",
    imageUrl: "/deadlineIcons/Reading.png",
    type: "Reading",
    dueAt: "2021-06-05 19:30",
  },
];

const DeadlineList = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${deadlines.length} in total`}
      title="Deadlines List"
    />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Due At
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Time Remaining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deadlines.map((deadline, i) => (
              <TableRow hover key={deadline.id}>
                <TableCell>
                  <ListItem key={deadline.id}>
                    <ListItemAvatar>
                      <img
                        alt={deadline.name}
                        src={deadline.imageUrl}
                        style={{
                          height: 48,
                          width: 48,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={deadline.name}
                      // secondary={`Updated ${deadline.dueAt.fromNow()}`}
                    />
                  </ListItem>
                </TableCell>
                <TableCell>
                  {moment(deadline.dueAt).format("MMMM Do YYYY, h:mm a")}
                </TableCell>
                <TableCell>
                  <CountdownTimer dueAt={deadline.dueAt} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default DeadlineList;
