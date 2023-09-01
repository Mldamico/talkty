import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { formatDistanceToNow } from "date-fns";
interface Props {
  activityId: string;
}

export const ActivityDetailedChat = observer(({ activityId }: Props) => {
  const { commentStore } = useStore();

  useEffect(() => {
    if (activityId) {
      commentStore.createHubConnection(activityId);
    }

    return () => {
      commentStore.clearComments();
    };
  }, [activityId, commentStore]);
  return (
    <div className="my-2 bg-white shadow-md">
      <div className="p-2 text-center text-white bg-blue-400">
        <h4 className="text-xl font-semibold">Chat about this event</h4>
      </div>
      <div>
        <div>
          <Formik
            onSubmit={(values, { resetForm }) =>
              commentStore.addComment(values).then(() => resetForm())
            }
            initialValues={{ body: "" }}
            validationSchema={Yup.object({
              body: Yup.string().required(),
            })}
          >
            {({ isValid, handleSubmit }) => (
              <Form className="gap-4 pt-4 ui form">
                <Field name="body">
                  {(props: FieldProps) => (
                    <div className="relative mx-4">
                      <textarea
                        className="w-full "
                        placeholder="Enter your comment (Enter to submit, Shielf + enter for new line)"
                        rows={2}
                        {...props.field}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.shiftKey) {
                            return;
                          }
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            isValid && handleSubmit();
                          }
                        }}
                      />
                    </div>
                  )}
                </Field>
              </Form>
            )}
          </Formik>
          {commentStore.comments.map((comment) => (
            <div className="flex gap-4 m-4" key={comment.id}>
              <img
                className="rounded-full w-14"
                src={comment.image || "/assets/user.png"}
                alt={comment.username || "user"}
              />
              <div>
                <p>
                  <span className="text-lg font-bold">
                    <Link to={`/profiles/${comment.username}`}>
                      {comment.displayName}
                    </Link>
                  </span>
                  <span className="ml-2 text-sm font-light">
                    - {formatDistanceToNow(comment.createdAt)} ago
                  </span>
                </p>

                <p className="font-semibold">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
