
import { useForm } from '@inertiajs/react';

export default function Create() {

    //create constants for the form
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    })

    /**
     * function to submit form
     */
    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/posts');
    }

    console.log(errors);

    return (
        <>
            <h1>
                Create page
            </h1>
            {data.body}
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows={10}
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && '!ring-1 ring-red-500'}
                    >

                    </textarea>
                    {errors.body && <p className="error text-base">{errors.body}</p>}
                    <button
                        className="primary-btn mt-4"
                        disabled={processing}
                    >
                        Create Post
                    </button>
                </form>
            </div >
        </>
    )
}