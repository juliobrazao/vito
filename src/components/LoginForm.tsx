import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const LoginSchema = z.object({
  username: z.string().min(9).max(30),
  password: z.string().min(6).max(10),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const { handleToggleModal } = useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = (data: LoginSchemaType) => {
    alert("logou: " + JSON.stringify(data));
    handleToggleModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${
              errors.username?.message ? "border-danger" : ""
            }`}
            {...register("username")}
          />
          <small id="emailHelpId" className="form-text text-danger">
            {errors && errors.username?.message}
          </small>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.password?.message ? "border-danger" : ""
            }`}
            {...register("password")}
          />
          <small id="emailHelpId" className="form-text text-danger">
            {errors && errors.password?.message}
          </small>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col-sm-6">
              <Button
                className="w-100"
                variant="outline-primary"
                type="button"
                onClick={handleToggleModal}
              >
                Create Account
              </Button>
            </div>
            <div className="col-sm-6">
              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
