import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Form = () => {
  const [state, handleSubmit] = useForm('mbgrbnjn')

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-cyan-400 bg-gray-950 p-6 text-center sm:p-10 md:mt-30 md:p-16">
        <h2 className="text-3xl font-bold text-cyan-400">
          Thank you!
        </h2>

        <p className="mt-4 text-gray-400">
          Your message has been sent successfully.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-16 flex w-full max-w-5xl flex-col items-center gap-6 rounded-xl border border-gray-700 bg-gray-950 p-4 sm:gap-8 sm:p-8 md:mt-30 md:p-16"
    >

      {/* Name + Email */}
      <div className="flex w-full flex-col gap-6 md:flex-row">

        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded border border-gray-600 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded border border-gray-600 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

      </div>

      {/* Purpose */}
      <select
        name="purpose"
        required
        className="w-full rounded border border-gray-600 bg-black px-4 py-3 text-gray-400 outline-none focus:border-cyan-400"
      >
        <option value="">Select Purpose</option>
        <option value="internship">Internship</option>
        <option value="projects">Projects</option>
        <option value="freelance">Freelance</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows={8}
        required
        className="w-full resize-none rounded border border-gray-600 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      {/* General error */}
      <ValidationError errors={state.errors} />

      {/* Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded border border-cyan-400 bg-cyan-400 px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        {state.submitting ? 'Sending...' : 'Send Me'}
      </button>

    </form>
  )
}

export default Form