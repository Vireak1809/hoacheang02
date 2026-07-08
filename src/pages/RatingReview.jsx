// src/pages/RatingReview.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RatingReview = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ['មកលឿន', 'សេវាល្អ', 'តម្លៃសមរម្យ', 'សុភាពរាបសារ', 'ជួសជុលបានល្អ'];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('សូមផ្តល់ផ្កាយវាយតម្លៃជាមុនសិន!');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container-custom py-6 md:py-10 animate-enter max-w-[600px] mx-auto">
        <div className="flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/30 text-center">
          <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-white">check_circle</span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">ការវាយតម្លៃបានជោគជ័យ!</h2>
          <p className="text-base text-on-surface-variant mb-6">អរគុណសម្រាប់ការចែករំលែកមតិយោបល់</p>
          <Link to="/booking/history">
            <button className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition">
              ត្រឡប់ទៅវិញ
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-6 md:py-10 animate-enter max-w-[600px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">វាយតម្លៃសេវាកម្ម</h1>

      <div className="bg-surface-container-lowest rounded-xl shadow-lg p-6 md:p-10 border border-outline-variant/30">
        {/* Tech Info */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface mb-4">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG8295t2R2pK3hGQAzAyTiDqU6pjVUGfr8ZDheW-Mk4TzR9WIvc_ZnDPBDNdLcwBYSBGwxPZTE4LfqvTI0kRAvKZlFAaETVArqelOKRQvVuz2kMOJtsNZwkNQcFFi22z0caobh_8oiq2lHfDK3xnhmEoz-NkIngJcqd4NkqeJ1h41sXGdJfRmSkn2pZtlfRR6an0metLrZKceHITixOqMS2lM11K22QzGqYQ5HqiupvxBMkxMaAIFkjDJUL03hDEkEg-ceoaTJ2YI" alt="Tech" />
          </div>
          <h2 className="text-2xl font-bold text-on-surface">លោក ហេង សុភ័ក្ត្រ</h2>
          <p className="text-base text-on-surface-variant">អ្នកជំនាញជួសជុលម៉ាស៊ីនត្រជាក់</p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="transition hover:scale-110 active:scale-95"
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              <span className={`material-symbols-outlined text-5xl transition-colors ${
                star <= (hoverRating || rating) ? 'text-secondary-container' : 'text-outline-variant'
              }`}>
                star
              </span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Review */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-on-surface-variant mb-2">សរសេរមតិយោបល់</label>
            <textarea
              className="w-full h-32 rounded-lg border-outline-variant bg-surface-container-low focus:ring-primary focus:border-primary p-4 text-base"
              placeholder="តើអ្នកយល់យ៉ាងណាចំពោះសេវាកម្មនេះ?"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <p className="text-sm font-medium text-on-surface-variant mb-3">ជ្រើសរើសពាក្យគន្លឹះ</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    selectedTags.includes(tag)
                      ? 'bg-primary text-white border-primary'
                      : 'border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl text-lg font-bold hover:opacity-90 transition shadow-md">
              ផ្ញើការវាយតម្លៃ
            </button>
            <Link to="/booking/history">
              <button type="button" className="w-full py-3 bg-transparent text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary-container/10 transition">
                រំលង
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatingReview;