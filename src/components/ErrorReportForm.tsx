import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MainContext } from "../contexts/MainContext";

const ErrorReportSchema = z.object({
  detail: z
    .string()
    .min(30, "Your remark must have at least 30 characters")
    .max(500, "Your remark must have maximum of 500 characters"),
});

type ErrorReportType = z.infer<typeof ErrorReportSchema>;

export default function ErrorReportForm() {
  const { handleToggleModal } = useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ErrorReportType>({
    resolver: zodResolver(ErrorReportSchema),
  });

  const handleSendErrorReport = () => {
    alert("Report Sent!");
    reset();
    handleToggleModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSendErrorReport)}>
        <label className="form-label">Please, describe some detail:</label>
        <textarea {...register("detail")} rows={3} className="form-control" />
        <small id="emailHelpId" className="form-text text-danger">
          {errors && errors.detail?.message}
        </small>

        <div className="row">
          <div className="col-sm-6">
            <div className="mt-3">
              <Button
                variant="outline-danger"
                className="w-100"
                onClick={handleToggleModal}
              >
                Do not want to report!
              </Button>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mt-3">
              <Button variant="danger" className="w-100" type="submit">
                Send Report
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
