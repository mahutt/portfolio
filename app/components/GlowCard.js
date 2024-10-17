export default function GlowCard({ children }) {
    return (
        <div className="border border-gray-800 rounded-lg p-4 hover:shadow-glow transition-shadow duration-200 linear">
            {children}
        </div>
    );
}
