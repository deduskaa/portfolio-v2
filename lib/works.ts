import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

interface MetaData {
  description: string;
  title: string;
  preview: string;
  order: number;
}

const worksDirectory = path.join(process.cwd(), 'works');

export function getWorks() {
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return { id, ...(matterResult.data as MetaData) };
  });

  return allWorksData.sort((a, b) => (a.order < b.order ? -1 : 1));
}

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => ({
    params: {
      work: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getWork(id: string) {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { id, contentHtml, ...(matterResult.data as MetaData) };
}
