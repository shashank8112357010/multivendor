import React from "react";

const SideBar = ({ filters, handleFilterChange }) => {
    const handleCheckboxChange = (filterType, value) => {
        handleFilterChange(filterType, value);
    };

    const renderFilterOptions = (options, filterType) => {
        return options.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={filters[filterType].includes(option)}
                    onChange={() => handleCheckboxChange(filterType, option)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span>{option}</span>
            </label>
        ));
    };

    return (
        <div className="w-full md:w-1/4 p-4 bg-gray-50 border-r">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <ul className="space-y-4">
                {/* Size Filter */}
                <li>
                    <details className="group">
                        <summary className="text-gray-700 font-medium group-open:text-blue-500">
                            Sizes
                        </summary>
                        <div className="pl-4 mt-2 text-gray-600 space-y-1">
                            {renderFilterOptions(["S", "M", "L"], "size")}
                        </div>
                    </details>
                </li>

                {/* Brand Filter */}
                <li>
                    <details className="group">
                        <summary className="text-gray-700 font-medium group-open:text-blue-500">
                            Brand
                        </summary>
                        <div className="pl-4 mt-2 text-gray-600 space-y-1">
                            {renderFilterOptions(["Marvel", "DC"], "brand")}
                        </div>
                    </details>
                </li>

                {/* Color Filter */}
                <li>
                    <details className="group">
                        <summary className="text-gray-700 font-medium group-open:text-blue-500">
                            Color
                        </summary>
                        <div className="pl-4 mt-2 text-gray-600 space-y-1">
                            {renderFilterOptions(["Black", "Red", "Purple"], "color")}
                        </div>
                    </details>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
