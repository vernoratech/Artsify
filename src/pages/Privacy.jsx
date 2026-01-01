import React from 'react'
import { Shield, Eye, Lock, Database, UserCheck, Globe, Mail } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Privacy = () => {
    const sections = [
        {
            icon: Eye,
            title: "Information We Collect",
            content: `We collect information you provide directly to us when using our services:

**Personal Information:**
• Name and contact details (email, phone number)
• Shipping address for physical artwork delivery
• Payment information (processed securely through third-party providers)
• Reference photos for creating custom artwork

**Automatically Collected Information:**
• Browser type and device information
• IP address and general location
• Pages visited and time spent on our website
• Referring website or source

We only collect information necessary to provide our services and improve your experience.`
        },
        {
            icon: Database,
            title: "How We Use Your Information",
            content: `We use the information we collect to:

• Process and fulfill your artwork orders
• Communicate with you about your orders, including updates and delivery
• Send promotional emails (only with your consent)
• Improve our website and services
• Respond to your inquiries and provide customer support
• Comply with legal obligations

**Reference Photos:**
• Photos are used solely for creating your commissioned artwork
• Photos are securely stored during the project and deleted within 30 days after completion
• We never share your photos with third parties without explicit consent`
        },
        {
            icon: Lock,
            title: "Information Security",
            content: `We implement appropriate security measures to protect your personal information:

• Secure HTTPS encryption for all data transmission
• Secure payment processing through trusted providers (no credit card data stored on our servers)
• Limited access to personal information by authorized personnel only
• Regular security reviews and updates

While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.`
        },
        {
            icon: UserCheck,
            title: "Your Rights & Choices",
            content: `You have the following rights regarding your personal information:

**Access & Correction:**
• Request a copy of the personal data we hold about you
• Request correction of inaccurate information

**Deletion:**
• Request deletion of your personal data (subject to legal retention requirements)
• Request deletion of reference photos at any time

**Communication Preferences:**
• Opt-out of promotional emails by clicking "unsubscribe" in any email
• Contact us to update your communication preferences

To exercise any of these rights, please contact us at artsify.official@gmail.com`
        },
        {
            icon: Globe,
            title: "Cookies & Tracking",
            content: `We use cookies and similar technologies to:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Improve our website functionality

**Types of Cookies:**
• Essential cookies: Required for basic website functionality
• Analytics cookies: Help us understand how visitors use our site
• Marketing cookies: Used to deliver relevant advertisements (if enabled)

You can manage cookie preferences through our cookie consent banner or your browser settings. See our Cookie Policy for more details.`
        },
        {
            icon: Shield,
            title: "Third-Party Services",
            content: `We may share information with trusted third parties who assist us in operating our website and providing services:

**Service Providers:**
• Payment processors (Razorpay, PayPal, etc.)
• Shipping carriers (India Post, courier services)
• Email service providers
• Analytics tools (Google Analytics)

These providers are contractually obligated to protect your information and use it only for specified purposes.

**Legal Requirements:**
We may disclose information if required by law or to protect our rights, safety, or property.`
        },
        {
            icon: Database,
            title: "Data Retention",
            content: `We retain your information for as long as necessary to:

• Fulfill the purposes outlined in this policy
• Comply with legal and regulatory requirements
• Resolve disputes and enforce agreements

**Retention Periods:**
• Order information: 7 years (for tax and legal compliance)
• Reference photos: Deleted within 30 days of order completion
• Account information: Until you request deletion
• Analytics data: Aggregated and anonymized after 26 months`
        },
        {
            icon: Globe,
            title: "International Users",
            content: `Artsify is based in India. If you access our services from outside India, please note:

• Your information will be transferred to and stored in India
• By using our services, you consent to this transfer
• We comply with applicable data protection laws

For users in the European Union, we strive to comply with GDPR requirements. Contact us for any data protection inquiries.`
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
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Policy</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Your privacy matters to us. Learn how we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Last updated: December 2024
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Lock className="w-5 h-5 text-green-600" />
                            <span className="text-sm">SSL Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="w-5 h-5 text-sky-600" />
                            <span className="text-sm">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <UserCheck className="w-5 h-5 text-pink-600" />
                            <span className="text-sm">Your Data, Your Control</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <AnimateOnScroll animation="fadeUp">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                At Artsify, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                or use our services. Please read this policy carefully to understand our practices.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 30}>
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-4 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-gradient-to-br from-sky-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <section.icon className="w-5 h-5 text-pink-600" />
                                        </span>
                                        {section.title}
                                    </h2>
                                    <div className="text-gray-600 leading-relaxed whitespace-pre-line pl-13 prose prose-sm max-w-none">
                                        {section.content}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <AnimateOnScroll animation="fadeUp">
                        <div className="mt-12 p-8 bg-gradient-to-r from-sky-50 to-pink-50 rounded-2xl text-center">
                            <Mail className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Questions About Your Privacy?</h3>
                            <p className="text-gray-600 mb-4">
                                If you have any questions or concerns about this Privacy Policy, please contact us.
                            </p>
                            <a
                                href="mailto:artsify98@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                artsify98@gmail.com
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    )
}

export default Privacy
