import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

export default function FeedBack() {
  const { user } = useContext(AuthContext);

  const handleFeedback = (e) => {
    e.preventDefault();

    const feedback = e.target.feedback.value;
    const feedbackInfo = { feedback };

    fetch('https://counselling-eight.vercel.app/feedback', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Added Successfully',
        });
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error submitting your feedback.',
      });
    });

    console.log(feedbackInfo);
  };

  return (
    <div>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Feedback Form</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleFeedback}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Write Feedback</span>
              </label>
              <textarea
                placeholder="Feedback"
                name="feedback"
                required
                className="textarea textarea-bordered" // Changed className to "textarea" to match element type
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
