import { Heart } from "lucide-react";

const EmptyState = ({
  message = "No Favorite Movies Yet",
  subMessage = "Start adding movies to your favorites by clicking the heart icon on any movie card",
}) => (
  <div
    className="min-h-screen flex flex-col bg-[#0d0d0f] "
    style={{
      background:
        "linear-gradient(135deg, #0d0d0f 0%, #1a0a1a 50%, #0d0d0f 100%)",
    }}
  >
    <div className="flex-1 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-sm mx-auto -mt-35 bg-white/4 border border-white/8 rounded-2xl px-8 py-12 flex flex-col items-center text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-2xl bg-[#2a1010]"
          style={{ background: "linear-gradient(135deg, #3d1a1a, #2a1010)" }}
        >
          <Heart size={30} color="#e05555" strokeWidth={1.5} />
        </div>

        <h2 className="text-white text-lg font-semibold mb-2.5 m-0">
          {message}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-60 m-0">
          {subMessage}
        </p>
      </div>
    </div>
  </div>
);

export default EmptyState;
