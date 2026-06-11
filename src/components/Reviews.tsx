import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data';
import { Review } from '../types';
import { 
  Star, 
  PenTool, 
  X, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    text: ''
  });

  const handleWriteReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.text) {
      alert('Please fill in your name and review details.');
      return;
    }

    const addedReview: Review = {
      id: `review-custom-${Date.now()}`,
      author: newReview.author,
      rating: newReview.rating,
      date: 'Just now',
      text: newReview.text,
      verified: true,
      avatarBlur: newReview.author.charAt(0).toUpperCase() || 'U'
    };

    setReviews([addedReview, ...reviews]);
    setShowReviewModal(false);
    setNewReview({ author: '', rating: 5, text: '' });
  };

  return (
    <section id="reviews" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Live Google Counter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-red-650 uppercase tracking-widest font-black text-xs font-mono bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              Nolan County Customer Voices
            </span>
            <h2 id="reviews-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Real Feedback from Local Drivers
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-medium">
              Grave Enterprise runs on community trust. We are honored to hold an outstanding 4.8-star feedback rating in Sweetwater, TX. Read through what fellow Texas ranchers, commercial truckers, and commuters think.
            </p>
          </div>

          {/* Google Star Badge Card */}
          <div className="lg:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="flex items-center space-x-1.5 mb-2">
              <span className="text-neutral-900 font-mono font-black text-4xl">4.8</span>
              <span className="text-neutral-500 text-lg font-bold">/ 5.0</span>
            </div>
            
            <div className="flex space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-red-600 fill-red-600" />
              ))}
            </div>
            
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-black mb-4 font-mono">
              Based on Google Business Ratings
            </p>

            <button
              onClick={() => setShowReviewModal(true)}
              className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase py-3 px-4 rounded-lg border border-red-500 transition-all font-mono shadow-sm"
              id="write-review-btn"
            >
              <PenTool className="h-4 w-4" />
              <span>Write a Google Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Horizontal scroll / Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 flex flex-col justify-between group hover:border-red-500/25 transition-all shadow-sm hover:shadow"
              id={`review-card-${review.id}`}
            >
              <div className="space-y-4">
                
                {/* Score and verification */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-red-600 fill-red-600' : 'text-neutral-200'
                        }`}
                      />
                    ))}
                  </div>

                  {review.verified && (
                    <span className="inline-flex items-center space-x-1 bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded border border-red-100 uppercase tracking-wider font-mono">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Review Message Text block */}
                <p className="text-neutral-700 text-sm italic leading-relaxed font-medium">
                  "{review.text}"
                </p>

              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3.5 pt-5 mt-6 border-t border-neutral-200">
                <div className="h-10 w-10 rounded-full bg-white text-red-600 font-extrabold flex items-center justify-center text-sm border border-neutral-200 uppercase font-mono shadow-sm flex-shrink-0">
                  {review.avatarBlur}
                </div>
                <div>
                  <h4 className="text-neutral-900 font-extrabold text-sm leading-none">{review.author}</h4>
                  <span className="text-[10px] text-neutral-500 font-mono inline-block mt-1 font-bold">
                    Posted {review.date} • Sweetwater, TX
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Testimonial/Review modal dialog Overlay */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReviewModal(false)}
              className="absolute inset-0 bg-neutral-900"
            />

            {/* Modal Card content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-2xl border border-neutral-200 p-6 shadow-2xl z-20 text-neutral-800"
            >
              {/* Close pin */}
              <button
                onClick={() => setShowReviewModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                aria-label="Close review modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 space-y-2">
                <div className="bg-red-550/10 p-2 rounded w-fit border border-red-500/10">
                  <MessageSquare className="h-6 w-6 text-red-650" />
                </div>
                <h3 className="text-xl font-black text-neutral-900 uppercase font-mono">
                  Share Your Experience
                </h3>
                <p className="text-neutral-500 text-xs font-medium">
                  Your feedback helps Grave Enterprise keep Sweetwater and Nolan county drivers safely outfitted on the road.
                </p>
              </div>

              <form onSubmit={handleWriteReview} className="space-y-4 font-medium">
                <div>
                  <label htmlFor="reviewAuthor" className="block text-xs font-black uppercase text-neutral-600 mb-2 font-mono">Your Name</label>
                  <input
                    type="text"
                    id="reviewAuthor"
                    value={newReview.author}
                    onChange={(e) => setNewReview(prev => ({ ...prev, author: e.target.value }))}
                    placeholder="e.g. Luke S."
                    className="w-full bg-white border border-neutral-300 focus:border-red-500 rounded-lg py-2.5 px-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-neutral-600 mb-2 font-mono font-bold">Your Rating</label>
                  <div className="flex space-x-1 bg-neutral-50 w-fit p-2 rounded-lg border border-neutral-200">
                    {[1, 2, 3, 4, 5].map((starIdx) => (
                      <Star
                        key={starIdx}
                        onClick={() => setNewReview(prev => ({ ...prev, rating: starIdx }))}
                        className={`h-6 w-6 cursor-pointer transition-colors ${
                          starIdx <= newReview.rating ? 'text-red-600 fill-red-600' : 'text-neutral-300 hover:text-red-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="reviewText" className="block text-xs font-black uppercase text-neutral-600 mb-2 font-mono">Review Details</label>
                  <textarea
                    id="reviewText"
                    value={newReview.text}
                    onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                    rows={4}
                    placeholder="Tell Sweetwater about your experience with our auto repairs, spray liners, or truck installations..."
                    className="w-full bg-white border border-neutral-300 focus:border-red-500 rounded-lg p-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase py-3 rounded-lg border border-red-500 shadow shadow-red-200 transition-all font-mono"
                  >
                    Post Review Live
                  </button>
                </div>
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
