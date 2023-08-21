import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import withAuth from "../../core/components/WithAuth";
import { fetchUsers } from "../../modules/user/shared/state/userThunk";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUsers());
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return <div>{users.length}</div>;
};

export default withAuth(UsersPage);
