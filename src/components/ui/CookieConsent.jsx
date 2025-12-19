import React, { useState, useEffect } from 'react'
import { Cookie, X, Shield, Settings, CheckCircle } from 'lucide-react'

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [showPreferences, setShowPreferences] = useState(false)
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    })

    useEffect(() => {
        // Check if consent was already given and not expired
        const consent = localStorage.getItem('artsifyCookieConsent')

        if (consent) {
            try {
                const consentData = JSON.parse(consent)
                const consentTime = new Date(consentData.timestamp).getTime()
                const now = new Date().getTime()
                const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

                // Check if consent has expired (older than 24 hours)
                if (now - consentTime > twentyFourHours) {
                    localStorage.removeItem('artsifyCookieConsent')
                    const timer = setTimeout(() => setIsVisible(true), 1500)
                    return () => clearTimeout(timer)
                }
                // Consent is still valid, don't show popup
                return
            } catch (e) {
                // Invalid JSON, remove and show popup
                localStorage.removeItem('artsifyCookieConsent')
            }
        }

        // No consent or expired, show popup after delay
        const timer = setTimeout(() => setIsVisible(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    // Lock body scroll when popup is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    const handleAcceptAll = () => {
        const consentData = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        }
        localStorage.setItem('artsifyCookieConsent', JSON.stringify(consentData))
        closePopup()
    }

    const handleAcceptSelected = () => {
        const consentData = {
            ...preferences,
            timestamp: new Date().toISOString()
        }
        localStorage.setItem('artsifyCookieConsent', JSON.stringify(consentData))
        closePopup()
    }

    const handleRejectAll = () => {
        const consentData = {
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString()
        }
        localStorage.setItem('artsifyCookieConsent', JSON.stringify(consentData))
        closePopup()
    }

    const closePopup = () => {
        setIsClosing(true)
        setTimeout(() => setIsVisible(false), 300)
    }

    if (!isVisible) return null

    return (
        <div className={`fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={handleRejectAll}
            />

            {/* Cookie Popup */}
            <div className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isClosing ? 'translate-y-4 scale-95' : 'translate-y-0 scale-100'}`}>
                {/* Header with gradient */}
                <div className="relative bg-gradient-to-r from-sky-50 to-pink-50 p-6 pb-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl -mr-10 -mt-10" />

                    <div className="relative flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                                <Cookie className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Cookie Settings</h3>
                                <p className="text-sm text-gray-500">We value your privacy</p>
                            </div>
                        </div>
                        <button
                            onClick={handleRejectAll}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                        By clicking "Accept All", you consent to our use of cookies.
                    </p>

                    {/* Trust badges */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <Shield size={14} className="text-green-500" />
                            Secure & Private
                        </span>
                        <span className="flex items-center gap-1">
                            <CheckCircle size={14} className="text-green-500" />
                            GDPR Compliant
                        </span>
                    </div>

                    {/* Preferences Panel */}
                    {showPreferences && (
                        <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-3">
                            <label className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <Shield size={16} className="text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Necessary</p>
                                        <p className="text-xs text-gray-500">Required for site functionality</p>
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences.necessary}
                                    disabled
                                    className="w-5 h-5 rounded accent-pink-500"
                                />
                            </label>

                            <label className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Analytics</p>
                                        <p className="text-xs text-gray-500">Help us improve our website</p>
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                                    className="w-5 h-5 rounded accent-pink-500 cursor-pointer"
                                />
                            </label>

                            <label className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Marketing</p>
                                        <p className="text-xs text-gray-500">Personalized recommendations</p>
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                                    className="w-5 h-5 rounded accent-pink-500 cursor-pointer"
                                />
                            </label>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleRejectAll}
                            className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Accept All
                        </button>
                    </div>

                    {/* Customize link */}
                    <button
                        onClick={() => setShowPreferences(!showPreferences)}
                        className="w-full mt-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-gray-50"
                    >
                        <Settings size={14} className={`transition-transform duration-300 ${showPreferences ? 'rotate-90' : ''}`} />
                        {showPreferences ? 'Hide preferences' : 'Customize preferences'}
                    </button>

                    {/* Save Preferences (shown when preferences expanded) */}
                    {showPreferences && (
                        <button
                            onClick={handleAcceptSelected}
                            className="w-full mt-2 py-3 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                        >
                            Save My Preferences
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CookieConsent
