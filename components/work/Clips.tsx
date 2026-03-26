"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export interface Clip {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  imgURL?: string;
  imgurl?: string;
  videoURL?: string;
  videourl?: string;
  categories?: string;
}

interface ClipsProps {
  uploads: Clip[];
  onUpdateClip?: (clip: Clip) => void;
}

const Clips = ({ uploads, onUpdateClip }: ClipsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState<Clip | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedSubtitle, setEditedSubtitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImgUrl, setEditedImgUrl] = useState("");
  const [editedVideoUrl, setEditedVideoUrl] = useState("");
  const [editedCategories, setEditedCategories] = useState("");
  const router = useRouter();

  // const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/(watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/;

  useEffect(() => {
    const isUserLoggedIn = document.cookie.includes("isLoggedin=true");
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  const openModal = (clip: Clip) => {
    // Handle both possible column names
    let videoUrl = clip.videoURL || clip.videourl;

    if (!videoUrl) {
      console.error("No video URL found for clip:", clip);
      return;
    }

    // Regex to match both normal and short YouTube URLs
    const youtubeRegex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(youtubeRegex);

    if (match) {
      const videoId = match[1];
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
      setCurrentClip({ ...clip, videoURL: videoUrl });
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      window.open(videoUrl, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClip(null);
    document.body.style.overflow = "auto";
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedTitle("");
    setEditedSubtitle("");
    setEditedDescription("");
    setEditedImgUrl("");
    setEditedVideoUrl("");
    setEditedCategories("");
  };

  const openEditModal = (clip: Clip) => {
    setCurrentClip(clip);
    setEditedTitle(clip.title || "");
    setEditedSubtitle(clip.subtitle || "");
    setEditedDescription(clip.description || "");
    setEditedImgUrl(clip.imgURL || clip.imgurl || "");
    setEditedVideoUrl(clip.videoURL || clip.videourl || "");
    setEditedCategories(clip.categories || "");
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentClip) return;
    try {
      const response = await fetch("/api/videos/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentClip.id,
          title: editedTitle,
          subtitle: editedSubtitle,
          description: editedDescription,
          imgURL: editedImgUrl,
          videoURL: editedVideoUrl,
          categories: editedCategories,
        }),
      });

      if (!response.ok) throw new Error("Failed to update clip.");
      alert("Clip updated successfully!");
      closeEditModal();
      // Refresh the page to show updated content
      router.refresh();
    } catch (error) {
      console.error("Error updating clip:", error);
      alert("Error updating clip.");
    }
  };

  const handleDelete = async (clipId: number) => {
    if (!confirm("Are you sure you want to delete this clip?")) return;
    try {
      const response = await fetch(`/api/videos/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: clipId,
        }),
      });

      if (!response.ok) throw new Error("Failed to delete clip.");
      alert("Clip deleted successfully!");
      closeEditModal(); // Close the edit modal after deletion
      // Refresh the page to show updated content
      router.refresh();
    } catch (error) {
      console.error("Error deleting clip:", error);
    }
  };

  const filteredUploads = uploads
    .filter(
      (upload) =>
        selectedCategory === "All" || upload.categories === selectedCategory,
    )
    .sort((a, b) => {
      // Prioritize IDs 1 to 6
      const isAInPriority = a.id >= 1 && a.id <= 6;
      const isBInPriority = b.id >= 1 && b.id <= 6;

      if (isAInPriority && isBInPriority) return a.id - b.id; // Sort priority items by ID ascending
      if (isAInPriority) return -1; // a comes first
      if (isBInPriority) return 1; // b comes first

      // For other items, sort by ID descending
      return b.id - a.id;
    });

  const categories = [
    { label: "All", value: "All" },
    { label: "Documentary", value: "docummentary" },
    { label: "Music Video", value: "MusicVideo" },
    { label: "Branded And Corporate", value: "Branded And corporate" },
    { label: "News and Podcast", value: "news and podcast" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col justify-center w-screen md:w-full overflow-x-hidden items-center md:pt-4 pt-40 "
    >
      <h1 className="text-4xl md:text-7xl text-center uppercase font-black font-mono py-4">
        Check out <br className="block md:hidden" />
        <span className="text-blue-600">Our Work</span>
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex  justify-center py-4 gap-2 md:gap-3 mb-10 md:mb-12 max-w-9xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
          },
        }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.value;
          return (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2.5 md:px-6 md:py-3 min-w-full md:min-w-40 rounded-full font-mono text-sm md:text-base uppercase tracking-wider transition-colors duration-300 ${
                isSelected
                  ? "text-black"
                  : "bg-white/5 text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center lg:mx-10">
        {filteredUploads.map((upload) => {
          const imageUrl = upload.imgURL || upload.imgurl;
          const videoUrl = upload.videoURL || upload.videourl;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={upload.id}
              className="cursor-pointer relative overflow-hidden relative group w-screen h-auto max-h-60 md:max-w-100 lg:max-w-108 2xl:max-w-124 md:h-[13.5rem] lg:h-[15rem]  2xl:h-[16.5rem]"
              onClick={() => openModal(upload)}
            >
              <img
                src={imageUrl}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-[.25] group-hover:scale-110"
              />
              <div className="absolute z-50 bg-black/50 inset-0 flex flex-col justify-center items-center size-full px-5 text-center text-white group-hover:opacity-100 opacity-100 md:opacity-0 duration-300 ease-in-out transition-opacity">
                <h1 className="block md:hidden group-hover:block text-3xl mb-2 font-bold">
                  {upload.title}
                </h1>
                <h3 className="block md:hidden bg-blue-500/50 group-hover:block text-2xl mb-2 px-4 font-thin w-[24rem]">
                  {upload.subtitle}
                </h3>
                <p className="block md:hidden group-hover:block text-blue-500 font-bold ">
                  {`/ `}
                  {upload.description}
                  {` /`}
                </p>
              </div>

              {isLoggedIn && (
                <div>
                  <button
                    className="absolute top-4 left-4 text-white bg-blue-800 p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(upload);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(upload.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-blu flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-blue-500/50  overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-screen md:w-240 h-140"
              allow="autoplay"
              src={currentClip?.videoURL ?? ""}
              title="Video player"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-200 text-black ">
            <h2 className="text-2xl font-bold mb-4">Edit Clip</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subtitle
                </label>
                <input
                  type="text"
                  id="subtitle"
                  value={editedSubtitle}
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="imgurl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgurl"
                  value={editedImgUrl}
                  onChange={(e) => setEditedImgUrl(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="videourl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Video URL
                </label>
                <input
                  type="text"
                  id="videourl"
                  value={editedVideoUrl}
                  onChange={(e) => setEditedVideoUrl(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="categories"
                  value={editedCategories}
                  onChange={(e) => setEditedCategories(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                >
                  <option value="">Select a category</option>
                  {categories
                    .filter((cat) => cat.value !== "All")
                    .map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Clips;
