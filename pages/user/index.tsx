import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../core/components/Loading";
import PageContent from "../../core/components/PageContent";
import withAuth from "../../core/components/WithAuth";
import { fetchUsers } from "../../modules/user/shared/state/userThunk";
import UserList from "../../modules/user/UserList";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.users);
  const loading = useSelector((state) => state?.user?.loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUsers());
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container w-full">
      <PageContent
        title="Users"
        description="A list of all the users in your account including their name, title, email and role."
        linkTo="/user/create"
        linkText="Create User"
      />
      {loading ? <Loading /> : users && <UserList users={users} />}
    </div>
  );
};

export default withAuth(UsersPage);
