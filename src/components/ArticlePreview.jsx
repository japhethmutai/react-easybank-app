import React from 'react';

const ArticlePreview = ({ article }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <img className="rounded-t-lg w-full h-48 object-cover" src={article.image} alt="" />
            <div className="p-6">
              <p className="text-xs text-grayishBlue">{article.author}</p>
              <h3 className="text-lg py-4 hover:text-limeGreen hover:cursor-pointer">{article.title}</h3>
              <p className="text-sm text-grayishBlue">{article.excerpt}</p>
            </div>
        </div>
    )
}

export default ArticlePreview;