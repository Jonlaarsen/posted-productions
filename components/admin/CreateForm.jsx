// app/components/CreateForm.tsx
import { create } from "@/lib/create";

const CreateForm = () => {
  return (
    <div className="w-screen">
      <form
        action={create}
        style={{ maxWidth: "600px", margin: "auto", marginTop: "5rem" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="title">Client name</label>
          <input
            id="title"
            name="title"
            type="text"
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="Company, brand name etc"
            required
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="subtitle">Title</label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="Title of video"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="description">Role</label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Remember commas between roles"
            className="text-black bg-white text-xl pl-3"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="imgURL">Image URL</label>
          <input
            id="imgURL"
            name="imgURL"
            type="url"
            required
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="Image URL (clicked so not pixelated)"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="videoURL">
            Video URL{" "}
            <span className="text-green-600">www.youtube.com/watch</span> NOT{" "}
            <span className="text-red-600">https://youtu.be/</span>
          </label>
          <input
            id="videoURL"
            name="videoURL"
            type="url"
            required
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="YouTube video URL"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            style={{ display: "block", width: "100%" }}
            required
          >
            <option value="">Select a category</option>
            <option value="All">All</option>
            <option value="docummentary">Documentary</option>
            <option value="MusicVideo">Music Video</option>
            <option value="Branded And corporate">Branded and Corporate</option>
            <option value="news and podcast">News and Podcast</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-10 text-2xl border-2 w-full"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
