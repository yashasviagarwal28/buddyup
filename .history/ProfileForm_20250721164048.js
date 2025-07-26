import React, { useState } from "react";

const SUBJECT_OPTIONS = ["Math", "CS", "Physics", "Chemistry"];
const AVAILABILITY_OPTIONS = ["Morning", "Afternoon", "Evening"];

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [studyStyle, setStudyStyle] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubjectsChange = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSubjects(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, subjects, studyStyle, availability };
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Subjects</label>
        <select
          multiple
          className="w-full border rounded px-3 py-2"
          value={subjects}
          onChange={handleSubjectsChange}
          required
        >
          {SUBJECT_OPTIONS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <small className="text-gray-500">Hold Cmd (⌘) to select multiple</small>
      </div>

      <div>
        <label className="block mb-1 font-medium">Study Style</label>
        <textarea
          className="w-full border rounded px-3 py-2"
          value={studyStyle}
          onChange={(e) => setStudyStyle(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Availability</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        >
          <option value="" disabled>
            Select availability
          </option>
          {AVAILABILITY_OPTIONS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}