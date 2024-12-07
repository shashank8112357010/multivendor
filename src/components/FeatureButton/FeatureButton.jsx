import React from 'react'

const FeatureButton = ({ tabs, activeTab, setActiveTab }) => {

    return (
        <div>
            <div className="w-full flex justify-center space-x-4 p-8 mt-4">
                <div className="container flex justify-around  h-20 ">
                    {tabs.map((tab) => (
                        <div className="featuredbtn flex justify-center align-middle" key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={activeTab === tab.id ? 'active' : ' '}
                            >
                                {tab.label}
                            </button>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default FeatureButton
