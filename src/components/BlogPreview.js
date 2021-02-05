import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const BlogPreview = ({ post }) => (
    <div className="is-parent column is-6" key={post.id}>
    <article
        className={`blog-list-item tile is-child box notification ${
        post.frontmatter.featuredpost ? 'is-featured' : ''
        }`}
    >
        <header>
        {post.frontmatter.featuredimage ? (
            <div className="featured-thumbnail">
            <PreviewCompatibleImage
                imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
            />
            </div>
        ) : null}
        <p className="post-meta">
            <Link
            className="title is-size-4"
            to={post.fields.slug}
            >
            {post.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <span className="subtitle is-size-5 is-block">
            {post.frontmatter.date}
            </span>
        </p>
        </header>
        <p>
            {post.frontmatter.description.substring(0, 200)}
            {post.frontmatter.description.length > 200 && ' ...'}
            <br />
            <br />
            <Link className="button" to={post.fields.slug}>
                Seguí leyendo →
            </Link>
        </p>
    </article>
</div>
);

export default BlogPreview;
