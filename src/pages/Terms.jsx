import React from 'react'
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Terms = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: `By accessing and using the Artsify website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and customers who access or use our services. We reserve the right to update or modify these terms at any time without prior notice.`
        },
        {
            title: "2. Services Description",
            content: `Artsify provides custom portrait and artwork creation services, including but not limited to:
      
• Single portraits (pencil, charcoal, digital)
• Couple portraits
• Family portraits
• Pet portraits
• Custom phone cases
• Fan art and commissioned artwork

All artwork is created by hand or digitally by our artists based on reference photos provided by customers.`
        },
        {
            title: "3. Ordering Process",
            content: `To place an order:

1. Contact us via WhatsApp, email, or our contact form with your reference photo(s)
2. Receive a quote and estimated timeline
3. Confirm your order with 50% advance payment
4. Receive progress updates during creation
5. Approve final artwork and pay remaining balance
6. Receive your artwork via shipping or digital delivery

Orders are considered confirmed only after receipt of the advance payment.`
        },
        {
            title: "4. Pricing & Payment",
            content: `All prices are listed in Indian Rupees (₹) and are subject to change without notice. Prices vary based on:

• Size of artwork (A5, A4, A3, A2, custom)
• Medium (pencil, charcoal, digital, mixed media)
• Complexity and number of subjects
• Rush order fees (if applicable)

We accept payments via UPI (GPay, PhonePe, Paytm), bank transfer, and major credit/debit cards. A 50% advance is required before work begins.`
        },
        {
            title: "5. Revisions & Modifications",
            content: `We offer up to 2 rounds of free revisions to ensure customer satisfaction. Revisions include:

• Minor adjustments to shading, proportions, or details
• Small corrections based on customer feedback

Additional revisions beyond the included rounds may incur extra charges. Major changes to the artwork concept after work has begun may require additional fees or a new order.`
        },
        {
            title: "6. Refund & Cancellation Policy",
            content: `Due to the custom nature of our artwork:

• Orders cancelled before work begins: 100% refund of advance payment
• Orders cancelled after work begins: Partial refund based on completion percentage
• Completed orders: No refunds once artwork is approved and delivered

We are committed to working with customers to ensure satisfaction. If you have concerns about your artwork, please contact us before the final approval.`
        },
        {
            title: "7. Intellectual Property",
            content: `Upon full payment:

• Customers receive the physical or digital artwork for personal use
• Artsify retains the right to display artwork in portfolios and marketing materials
• Commercial use of artwork requires separate licensing agreement
• Reference photos remain the property of the original copyright holder

Customers may not resell, reproduce, or commercially distribute artwork without written permission.`
        },
        {
            title: "8. Shipping & Delivery",
            content: `Physical artwork shipping:

• Domestic (India): 3-5 business days
• International: 10-15 business days
• All shipments include tracking information
• Artwork is securely packaged with protective materials

We are not responsible for delays caused by customs, postal services, or events beyond our control. Risk of loss transfers to customer upon delivery to the shipping carrier.`
        },
        {
            title: "9. Limitation of Liability",
            content: `Artsify shall not be liable for:

• Indirect, incidental, or consequential damages
• Loss of data or reference photos after project completion
• Delays due to circumstances beyond our control
• Color variations between digital previews and physical artwork

Our total liability shall not exceed the amount paid for the specific order in question.`
        },
        {
            title: "10. Contact Information",
            content: `For questions about these Terms of Service, please contact us:

Email: artsify.official@gmail.com
WhatsApp: +91 98765 43210
Website: www.artsify.com

We typically respond within 24 hours on business days.`
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
                            <Scale className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Service</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Last updated: December 2024
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Quick Summary */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">50% advance required</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">2 free revisions included</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Secure packaging & shipping</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 30}>
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h2 className="text-xl md:text-2xl font-serif text-gray-900 mb-4 flex items-start gap-3">
                                        <span className="w-8 h-8 bg-gradient-to-br from-sky-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <FileText className="w-4 h-4 text-pink-600" />
                                        </span>
                                        {section.title}
                                    </h2>
                                    <div className="text-gray-600 leading-relaxed whitespace-pre-line pl-11">
                                        {section.content}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    {/* Notice */}
                    <AnimateOnScroll animation="fadeUp">
                        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-amber-900 mb-1">Important Notice</h3>
                                <p className="text-amber-800 text-sm">
                                    By using our services, you agree to these terms. We recommend saving a copy for your records.
                                    If you have any questions or concerns, please contact us before placing an order.
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    )
}

export default Terms
