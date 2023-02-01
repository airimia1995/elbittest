import React from "react";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import Layout from "../../atoms/Layout";
import List from "../../components/List";
import { isConditionVerified } from "../../utils";
const MainPage = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isConditionVerified(count)) {
      document.title = "Boom!";
    } else {
      document.title = "Counting";
    }
  }, [count]);
  return (
    <Layout>
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        testId="increment"
      >
        Increase
      </Button>
      <Label testId="counter" isBoom={isConditionVerified(count)}>{count}</Label>
      <List numbOfElements={count} />
    </Layout>
  );
};

export default MainPage;
