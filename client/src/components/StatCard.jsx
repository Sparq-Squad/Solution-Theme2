function StatCard({ title, value, change }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="text-sm text-gray-600">{title}</h3>
            <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
            <p className="mt-1 text-xs text-green-500">{change}</p>
        </div>
    );
}

export default StatCard;