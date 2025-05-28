import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the content types
type ContentType = 'blog' | 'mcat-resources' | 'study-guides';

// Define the metadata interface
export interface ContentMeta {
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  subject?: string;
  level?: string;
  difficulty?: string;
  type?: string;
  downloadable?: boolean;
  slug: string;
}

// Function to get all content files of a specific type
export function getContentFiles(type: ContentType): string[] {
  const contentDirectory = path.join(process.cwd(), 'src', 'content', type);
  try {
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading ${type} directory:`, error);
    return [];
  }
}

// Function to get content metadata for a specific file
export function getContentMeta(type: ContentType, filename: string): ContentMeta | null {
  const filePath = path.join(process.cwd(), 'src', 'content', type, filename);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      subject: data.subject,
      level: data.level,
      difficulty: data.difficulty,
      type: data.type,
      downloadable: data.downloadable,
      slug: filename.replace(/\.md$/, '')
    };
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

// Function to get all content metadata of a specific type
export function getAllContentMeta(type: ContentType): ContentMeta[] {
  const files = getContentFiles(type);
  const allContentMeta = files
    .map(filename => getContentMeta(type, filename))
    .filter((meta): meta is ContentMeta => meta !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return allContentMeta;
}

// Function to get content by slug
export function getContentBySlug(type: ContentType, slug: string): { meta: ContentMeta; content: string } | null {
  const filePath = path.join(process.cwd(), 'src', 'content', type, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const meta: ContentMeta = {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      subject: data.subject,
      level: data.level,
      difficulty: data.difficulty,
      type: data.type,
      downloadable: data.downloadable,
      slug
    };
    
    return { meta, content };
  } catch (error) {
    console.error(`Error reading ${slug}.md:`, error);
    return null;
  }
}

// Function to create a new content file
export function createContentFile(
  type: ContentType, 
  slug: string, 
  meta: Omit<ContentMeta, 'slug'>, 
  content: string
): boolean {
  const filePath = path.join(process.cwd(), 'src', 'content', type, `${slug}.md`);
  
  try {
    const fileContent = matter.stringify(content, meta);
    fs.writeFileSync(filePath, fileContent);
    return true;
  } catch (error) {
    console.error(`Error creating ${slug}.md:`, error);
    return false;
  }
}

// Function to update an existing content file
export function updateContentFile(
  type: ContentType, 
  slug: string, 
  meta: Omit<ContentMeta, 'slug'>, 
  content: string
): boolean {
  const filePath = path.join(process.cwd(), 'src', 'content', type, `${slug}.md`);
  
  try {
    const fileContent = matter.stringify(content, meta);
    fs.writeFileSync(filePath, fileContent);
    return true;
  } catch (error) {
    console.error(`Error updating ${slug}.md:`, error);
    return false;
  }
}

// Function to delete a content file
export function deleteContentFile(type: ContentType, slug: string): boolean {
  const filePath = path.join(process.cwd(), 'src', 'content', type, `${slug}.md`);
  
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    console.error(`Error deleting ${slug}.md:`, error);
    return false;
  }
}
