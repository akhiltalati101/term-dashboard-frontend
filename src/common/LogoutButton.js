import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/token";
import PropTypes from "prop-types";
import { Button, ListItem } from "@material-ui/core";

const LogoutButton = ({ href, icon: Icon, title, ...rest }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToLogin = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
      {...rest}
    >
      <Button
        sx={{
          color: "text.secondary",
          fontWeight: "medium",
          justifyContent: "flex-start",
          letterSpacing: 0,
          py: 1.25,
          textTransform: "none",
          width: "100%",
        }}
        onClick={redirectToLogin}
      >
        {Icon && <Icon size="20" />}
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

LogoutButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default LogoutButton;
