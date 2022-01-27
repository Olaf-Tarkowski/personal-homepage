import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoading,
  selectPersonalHomepageData,
  selectPersonalHomepageStatus,
} from "../personalHomepageSlice";
import { Content } from "./content";
import { Section } from "./styled";

function LoadingPortfolio() {
  const dispatch = useDispatch();
  const personalHomepageData = useSelector(selectPersonalHomepageData);
  const personalHomepageStatus = useSelector(selectPersonalHomepageStatus);

  useEffect(() => {
    dispatch(fetchLoading());
  }, [dispatch]);

  return (
    <Section>
      <Content
        personalHomepageData={personalHomepageData}
        personalHomepageStatus={personalHomepageStatus}
      />
    </Section>
  );
}

export default LoadingPortfolio;
