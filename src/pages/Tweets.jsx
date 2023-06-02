import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import UserCard from "components/User/UserCard";
import UserList from "components/UserList/UserList";
import { useGetUsersQuery } from "redux/userApi";

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
    <section>
      <h1>Tweets</h1>
      <UserList>
        {data &&
          data
            .slice(0, visibleCards)
            .map((user) => <UserCard key={user.id} {...user} />)}
      </UserList>
      {data && visibleCards < data.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </section>
  );
};

export default TweetsPage;
