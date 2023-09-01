import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { TextArea } from "../../../app/common/form/TextArea";

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
                    - {comment.createdAt.toString()}
                  </span>
                </p>

                <p className="font-semibold">{comment.body}</p>
              </div>
            </div>
          ))}
          <Formik
            onSubmit={(values, { resetForm }) =>
              commentStore.addComment(values).then(() => resetForm())
            }
            initialValues={{ body: "" }}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="flex flex-col items-center justify-center gap-4 pb-4 ui form">
                <TextArea placeholder="Add Comment" name="body" rows={2} />
                <button
                  className="px-3 py-2 text-white bg-blue-400 rounded-md"
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Add Reply
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});
