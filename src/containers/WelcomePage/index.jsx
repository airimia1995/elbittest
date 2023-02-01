import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import Layout from "../../atoms/Layout";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Label>Welcome</Label>{" "}
      <Button
        onClick={() => {
          navigation.navigate(routes.MainPage);
        }}
      >
        Insert
      </Button>
    </Layout>
  );
};

export default WelcomePage;
