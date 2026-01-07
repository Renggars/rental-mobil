"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import HeroAbout from "@/app/components/HeroAbout";
import { BLOG_POSTS } from "../../../../constants/blog";
import { notFound } from "next/navigation";
import { use } from "react";

const BlogDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) notFound();

  return (
    <main className="bg-white pb-20">
      <HeroAbout />

      <section className="max-w-360 mx-auto px-6 sm:px-16 -mt-24 relative z-30">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-50">
              {/* Back & Meta */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft size={20} />
                Kembali ke Blog
              </Link>

              <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-12 max-w-97.5 mx-auto justify-start">
                {" "}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />{" "}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-p:leading-relaxed prose-h3:text-2xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <Share2 size={20} className="text-blue-600" />
                  Bagikan artikel ini:
                </p>
                <div className="flex items-center gap-3">
                  <ShareButton
                    icon={<Facebook size={18} />}
                    color="bg-[#1877F2]"
                  />
                  <ShareButton
                    icon={<Twitter size={18} />}
                    color="bg-[#1DA1F2]"
                  />
                  <ShareButton
                    icon={<MessageCircle size={18} />}
                    color="bg-[#25D366]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3 space-y-8">
            {/* Promo Card */}
            <div className="bg-blue-600 rounded-4xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">
                  Butuh Sewa Mobil Sekarang?
                </h4>
                <p className="text-blue-100 mb-6">
                  Dapatkan harga spesial untuk sewa harian mulai dari Rp
                  300rb-an!
                </p>
                <Link
                  href="/armada"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  Cek Armada
                </Link>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Recent Posts Sidebar */}
            <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6">
                Artikel Terkait
              </h4>
              <div className="space-y-6">
                {BLOG_POSTS.filter(
                  async (p) => p.slug !== (await params).slug
                ).map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {p.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-1">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShareButton = ({ icon, color }: { icon: any; color: string }) => (
  <button
    className={`${color} text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all`}
  >
    {icon}
  </button>
);

export default BlogDetail;
