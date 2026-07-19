import { readdirSync, statSync } from "node:fs";
import { basename, join, relative, sep } from "node:path";

const pdfRoot = join(process.cwd(), "public/pdf");

function collectPdfs(directory) {
  return readdirSync(directory)
    .flatMap((entry) => {
      const fullPath = join(directory, entry);
      const stats = statSync(fullPath);

      if (stats.isDirectory()) {
        return collectPdfs(fullPath);
      }

      return entry.toLowerCase().endsWith(".pdf") ? [fullPath] : [];
    })
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
}

function cleanTitle(file) {
  return basename(file, ".pdf").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}

function classify(file) {
  if (file.startsWith("BBMerlion Notes/Math/")) {
    return { track: "notes", subject: "Matematika", collection: "BBMerlion Notes" };
  }
  if (file.startsWith("BBMerlion Notes/Physics/")) {
    return { track: "notes", subject: "Fisika", collection: "BBMerlion Notes" };
  }
  if (file.startsWith("BBMerlion Tryouts/")) {
    return {
      track: "quizzes",
      subject: file.includes("Physics") ? "Fisika" : "Matematika",
      collection: "Kuis & Tryout"
    };
  }
  if (file.startsWith("Mathematics/Lecture Notes/")) {
    return { track: "lectures", subject: "Matematika", collection: "Lecture Notes" };
  }
  if (file.startsWith("Mathematics/Tutorials/")) {
    return { track: "tutorials", subject: "Matematika", collection: "Tutorial" };
  }
  if (file.startsWith("NTU Past Exam Papers/")) {
    return {
      track: "papers",
      subject: file.includes("Physics") ? "Fisika" : "Matematika",
      collection: "Soal Tahun Lalu NTU"
    };
  }
  return { track: "all", subject: "Arsip", collection: "Arsip" };
}

export const resources = collectPdfs(pdfRoot).map((fullPath) => {
  const file = relative(pdfRoot, fullPath).split(sep).join("/");
  const info = classify(file);
  return {
    ...info,
    file,
    title: cleanTitle(file)
  };
});

export const tracks = [
  { key: "all", label: "Semua" },
  { key: "notes", label: "BBMerlion Notes" },
  { key: "quizzes", label: "Kuis & Tryout" },
  { key: "lectures", label: "Lecture Notes" },
  { key: "tutorials", label: "Tutorial" },
  { key: "papers", label: "Soal NTU" }
];

export const collections = [...new Set(resources.map((item) => item.collection))].map(
  (name) => ({
    name,
    track: resources.find((item) => item.collection === name)?.track ?? "all",
    items: resources.filter((item) => item.collection === name)
  })
);
