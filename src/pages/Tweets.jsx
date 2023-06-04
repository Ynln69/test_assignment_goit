import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useGetUsersQuery } from "redux/userApi";
import UserCard from "components/User/UserCard";
import UserList from "components/UserList/UserList";
import BackLink from "components/BackLink/BackLink";

import { TweetsSection, LoadMore, TweetsBoxFilter } from "./Tweets.styled";

const TweetsPage = () => {
  const { data } = useGetUsersQuery();
  const [visibleCards, setVisibleCards] = useState(3);

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    if (data && visibleCards >= data.length) {
      Notiflix.Notify.info("This is the end of the card list.");
    }
  }, [data, visibleCards]);

  return (
    <TweetsSection>
      <TweetsBoxFilter>
        <BackLink />
      </TweetsBoxFilter>
      <UserList>
        {data &&
          data
            .slice(0, visibleCards)
            .map((user) => <UserCard key={user.id} {...user} />)}
      </UserList>
      {data && visibleCards < data.length && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </TweetsSection>
  );
};

export default TweetsPage;
