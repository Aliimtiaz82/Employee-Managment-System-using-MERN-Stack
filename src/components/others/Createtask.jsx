
const CreateTask = () => {

  const submitHandler = () =>{
    e.preventDefault()
    console.log('Task Created')
  }

  return (
    <div className="lg:px-10">
      <form
      onSubmit={(e) => {
        submitHandler(e)
      }}
        className="w-full space-y-6 rounded-3xl bg-white shadow-xl/30 ring-1 ring-indigo-100 p-10
                   transition-transform duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-bold tracking-wide text-indigo-600 text-center mb-4">
          New Task
        </h2>

        {/* Task Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            id="title"
            type="text"
            required
            placeholder="e.g., Finish dashboard UI"
            className="w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500
                       text-sm py-3 px-4 shadow-sm placeholder-gray-400"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="desc"
            rows="4"
            placeholder="Briefly describe the task..."
            className="w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500
                       text-sm py-3 px-4 shadow-sm placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        {/* Date & Assign To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              required
              className="w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500
                         text-sm py-3 px-4 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="assign" className="block text-sm font-medium text-gray-700 mb-1">
              Assign&nbsp;to
            </label>
            <input
              id="assign"
              type="text"
              placeholder="Ali Imtiaz"
              className="w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500
                         text-sm py-3 px-4 shadow-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500
                       text-sm py-3 px-4 shadow-sm bg-white"
          >
            <option value="">Choose…</option>
            <option>Bug Fix</option>
            <option>Feature</option>
            <option>Research</option>
            <option>Documentation</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600
                      px-6 py-3 font-semibold text-white tracking-wide shadow-lg shadow-indigo-600/40
                    hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300
                      active:scale-95 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
