export default function GlowCard({ children }) {
    return (
        <div className="border border-gray-800 rounded-xl p-5 hover:shadow-glow transition-shadow duration-200 linear">
            {children}
        </div>
    );
}
