import Video from "../models/Video";

/*
export const home = (req, res) => {
  Video.find({})
    .then((videos) => {
      console.log("videos", videos);
      return res.render("home", { pageTitle: "Home", videos: videos });
    })
    .catch((error) => {
      console.log("errors", error);
    });
};
*/

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      view: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};
