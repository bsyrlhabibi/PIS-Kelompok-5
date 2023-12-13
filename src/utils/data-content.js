import { videos } from '../utils/videos';

export const courses = [
  {
    id: "xMHCZl",
    category: "python",
    content: [
      {
        title: "Memulai dengan Python",
        videoUrl: videos.forall,
      },
      {
        title: "Dasar-Dasar (Tipe Data)",
        videoUrl: videos.forall,
      },
      {
        title: "The Basics(Data Types)",
        videoUrl: videos.forall,
      },
      {
        title: "Kondisi dan Perulangan",
        videoUrl: videos.forall,
      },
      {
        title: "Fungsi!",
        videoUrl: videos.forall,
      },
      {
        title: "Kelas! (Pemrograman Berbasis Objek)",
        videoUrl: videos.forall,
      },
      {
        title: "Input/Output File",
        videoUrl: videos.forall,
      },
      {
        title: "Menggunakan Modul Python",
        videoUrl: videos.forall,
      },       
    ]
  },
];

export const getContentById = (courseId, contentIdx) => {
  const course = courses.find(course => course.id === courseId);
  return course.content[contentIdx];
};
