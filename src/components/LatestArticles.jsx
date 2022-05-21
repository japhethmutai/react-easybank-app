import React from 'react';
import ArticlePreview from './ArticlePreview';
import currencyImage from '../assets/img/image-currency.jpg';
import restaurantImage from '../assets/img/image-restaurant.jpg';
import planeImage from '../assets/img/image-plane.jpg';
import confettiImage from '../assets/img/image-confetti.jpg';

const articles = [
    {
        title: 'Receive money in any currency with no fees',
        author: 'By Claire Robinson',
        image: currencyImage,
        excerpt: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...',
    },
    {
        title: 'Treat yourself without worrying about money',
        author: 'By Wilson Hutton',
        image: restaurantImage,
        excerpt: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you',
    },
    {
        title: 'Take your Easybank card wherever you go',
        author: 'By Wilson Hutton',
        image: planeImage,
        excerpt: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you',
    },
    {
        title: 'Our invite-only Beta accounts are now live!',
        author: 'By Claire Robinson',
        image: confettiImage,
        excerpt: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site',
    },
]

const LatestArticles = () => {
  return (
    <div className="w-full">
        <div className="lg:container px-6 lg:px-16 mx-auto my-4">
            <h1 className="text-5xl py-6">Latest Articles</h1>
            <div className="flex flex-col md:flex-row justify-between my-8 gap-x-8 gap-y-8 md:gap-y-0">
                {articles.map((article, key) => <ArticlePreview article={article} key={key} />)}
            </div>
        </div>
    </div>
  )
}

export default LatestArticles;