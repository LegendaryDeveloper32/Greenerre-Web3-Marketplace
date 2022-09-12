import { useEffect } from "react";

import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Create = () => {
  const { activateBrowserWallet, account } = useEthers();

  useEffect(() => {
    activateBrowserWallet();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Create;
