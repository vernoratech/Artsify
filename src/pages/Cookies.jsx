import React, { useState } from 'react'
import { Cookie, Settings, Shield, BarChart3, Megaphone, CheckCircle, X, Info } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Cookies = () => {
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    })

    const handleSavePreferences = () => {
        const consentData = {
            ...preferences,
            timestamp: new Date().toISOString()
        }
        localStorage.setItem('artsifyCookieConsent', JSON.stringify(consentData))
        alert('Cookie preferences saved!')
    }

    const cookieTypes = [
        {
            id: 'necessary',
            icon: Shield,
            name: "Essential Cookies",
            required: true,
            description: "These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure areas access, and remembering your preferences. The website cannot function properly without these cookies.",
            examples: [
                "Session cookies for maintaining your login state",
                "Security cookies for preventing fraud",
                "Load balancing cookies for website performance",
                "User preference cookies (language, theme)"
            ],
            duration: "Session to 1 year"
        },
        {
            id: 'analytics',
            icon: BarChart3,
            name: "Analytics Cookies",
            required: false,
            description: "These cookies help us understand how visitors interact with our website. They collect information anonymously and help us improve our services by understanding which pages are most popular and how visitors navigate the site.",
            examples: [
                "Google Analytics (_ga, _gid)",
                "Page view tracking",
                "User journey analysis",
                "Performance monitoring"
            ],
            duration: "Up to 2 years"
        },
        {
            id: 'marketing',
            icon: Megaphone,
            name: "Marketing Cookies",
            required: false,
            description: "These cookies are used to track visitors across websites to display relevant advertisements. They help us and our advertising partners deliver more personalized content and measure the effectiveness of advertising campaigns.",
            examples: [
                "Social media tracking pixels",
                "Retargeting cookies",
                "Advertising preference cookies",
                "Conversion tracking"
            ],
            duration: "Up to 2 years"
        }
    ]

    const additionalInfo = [
        {
            title: "What Are Cookies?",
            content: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
        },
        {
            title: "How to Control Cookies",
            content: "You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Note that disabling cookies may affect website functionality."
        },
        {
            title: "Third-Party Cookies",
            content: "Some cookies are placed by third-party services that appear on our pages. We do not control the use of these cookies and you should check the third party's website for more information about how they use cookies."
        },
        {
            title: "Cookie Duration",
            content: "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. The duration varies by cookie type and purpose."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateOnScroll animation="fadeUp">
                        <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Cookie className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Policy</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Learn about the cookies we use and manage your preferences.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Last updated: December 2024
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Cookie Preference Manager */}
            <section className="py-8 -mt-8 relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <AnimateOnScroll animation="fadeUp">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Settings className="w-6 h-6 text-pink-600" />
                                <h2 className="text-xl font-serif text-gray-900">Manage Cookie Preferences</h2>
                            </div>

                            <div className="space-y-4 mb-6">
                                {cookieTypes.map((cookie) => (
                                    <div
                                        key={cookie.id}
                                        className={`p-4 rounded-xl border-2 transition-colors ${preferences[cookie.id] ? 'border-pink-200 bg-pink-50/50' : 'border-gray-100 bg-gray-50'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${preferences[cookie.id] ? 'bg-pink-100' : 'bg-gray-200'}`}>
                                                    <cookie.icon className={`w-5 h-5 ${preferences[cookie.id] ? 'text-pink-600' : 'text-gray-500'}`} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{cookie.name}</h3>
                                                    <p className="text-xs text-gray-500">{cookie.required ? 'Always active' : 'Optional'}</p>
                                                </div>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences[cookie.id]}
                                                    onChange={(e) => !cookie.required && setPreferences(p => ({ ...p, [cookie.id]: e.target.checked }))}
                                                    disabled={cookie.required}
                                                    className="sr-only peer"
                                                />
                                                <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${cookie.required ? 'bg-green-500' : preferences[cookie.id] ? 'bg-pink-500' : 'bg-gray-300'}`}></div>
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setPreferences({ necessary: true, analytics: true, marketing: true })}
                                    className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleSavePreferences}
                                    className="flex-1 py-3 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                                >
                                    Save Preferences
                                </button>
                                <button
                                    onClick={() => setPreferences({ necessary: true, analytics: false, marketing: false })}
                                    className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Reject Optional
                                </button>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Cookie Details */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 text-center">
                            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Details</span>
                        </h2>
                    </AnimateOnScroll>

                    <div className="space-y-6">
                        {cookieTypes.map((cookie, index) => (
                            <AnimateOnScroll key={cookie.id} animation="fadeUp" delay={index * 50}>
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <cookie.icon className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-xl font-serif text-gray-900">{cookie.name}</h3>
                                                {cookie.required && (
                                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Required</span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500">Duration: {cookie.duration}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4">{cookie.description}</p>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Examples:</h4>
                                        <ul className="space-y-1">
                                            {cookie.examples.map((example, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    {example}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 text-center">
                            Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Information</span>
                        </h2>
                    </AnimateOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {additionalInfo.map((info, index) => (
                            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 50}>
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Info className="w-5 h-5 text-sky-600" />
                                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browser Settings Guide */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fadeUp">
                        <div className="bg-gradient-to-r from-sky-50 to-pink-50 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-serif text-gray-900 mb-4">Managing Cookies in Your Browser</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Most browsers allow you to control cookies through their settings. Here are links to instructions for popular browsers:
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser) => (
                                    <a
                                        key={browser}
                                        href={`https://support.${browser.toLowerCase()}.com/cookies`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm"
                                    >
                                        {browser}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    )
}

export default Cookies
