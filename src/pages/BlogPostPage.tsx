import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import MarkdownContent from '../components/MarkdownContent';

// This would be replaced with actual API calls in production
const fetchBlogPost = async (_slug: string) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock data for demonstration
  return {
    title: 'Ethical Considerations in End-of-Life Care',
    date: 'May 15, 2025',
    category: 'Bioethics',
    content: `
# Ethical Considerations in End-of-Life Care

End-of-life care presents some of the most challenging ethical dilemmas in modern medicine. As a hospice volunteer, I've witnessed firsthand how these issues affect patients, families, and healthcare providers.

## Autonomy vs. Beneficence

One of the central tensions in end-of-life care is balancing patient autonomy with medical beneficence. While we strive to respect patients' wishes, questions arise when those wishes might cause harm or suffering.

### Case Study: Pain Management

In my experience, pain management often exemplifies this dilemma. Some patients may refuse pain medication due to concerns about addiction or mental clarity, even when they're clearly suffering. Healthcare providers must navigate these situations with sensitivity and respect.

## Advance Directives and Their Limitations

Advance directives are valuable tools for preserving patient autonomy, but they come with limitations:

1. They may not anticipate all possible scenarios
2. Patients' wishes might change over time
3. Interpretation can be subjective
4. Family members may disagree about implementation

## Cultural and Religious Considerations

Different cultural and religious backgrounds significantly influence end-of-life preferences and decisions. As healthcare providers, we must approach these differences with cultural humility and openness.

## Conclusion

There are no easy answers to the ethical challenges of end-of-life care. What matters most is maintaining open communication, respecting dignity, and centering compassion in all decisions. As I continue my journey toward becoming a physician, these experiences will inform my approach to patient care and ethical decision-making.
    `,
  };
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ title: string; date: string; category: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        try {
          const postData = await fetchBlogPost(slug);
          setPost(postData);
        } catch (error) {
          console.error('Error loading blog post:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-secondary rounded w-1/4 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="content-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <a 
              href="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
            <h1 className="text-3xl md:text-4xl mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-muted-foreground">
              <span className="inline-flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="inline-flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <MarkdownContent content={post.content} />
          </div>
        </div>
      </section>

      {/* Share and Related Posts */}
      <section className="py-12 bg-secondary">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Share */}
              <div>
                <h3 className="text-xl mb-4">Share This Post</h3>
                <div className="flex space-x-4">
                  <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button className="p-2 bg-card rounded-full text-muted-foreground hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Subscribe */}
              <div>
                <h3 className="text-xl mb-4">Subscribe for Updates</h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-l-md border border-input bg-background"
                  />
                  <button className="px-4 py-2 rounded-r-md bg-accent text-white hover:bg-accent-teal-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
