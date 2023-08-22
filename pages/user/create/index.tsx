// pages/user/create.js
import { useRouter } from "next/router";
import UserDetailsForm from "../../../modules/user/UserDetailsForm";

const CreateUserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Se o id estiver presente, é uma edição, caso contrário, é criação
  const isEditing = !!id;

  return <UserDetailsForm isEditing={isEditing} userId={id} />;
};

export default CreateUserPage;
