// components/SubscriptionPricing.jshandlePlanSelect
import { useState } from 'react';

export default function SubscriptionPricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlanSelect = (planName) => {
    const plan = currentPlans.find((p) => p.name === planName);
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleProceedToPayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan_name: selectedPlan.name,
          price: selectedPlan.price,
          billing_period: billingPeriod,
          owner_id: 'owner_123',
        }),
      });

      const data = await response.json();
      console.log("What's the plan here: ", data);

      
    if (data.success) {
        console.log('Subscription created:', data);
        if (data.verification_token) {
            // Store token and proceed to Telegram verification
            setVerificationToken(data.verification_token);
            setShowVerificationStep(true);
        }
    } else {
        console.error('Payment initiation failed:', data);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const plans = {
    monthly: [
      {
        name: 'Free',
        price: '$0',
        description: 'Perfect for trying out the service',
        features: [
          '1 Telegram group',
          'Up to 10 group members',
          '20 messages per day',
          'Basic analytics',
          'Email support'
        ],
        cta: 'Get Started',
        popular: false
      },
      {
        name: 'Starter',
        price: '$5',
        description: 'Great for small businesses',
        features: [
          '1 Telegram group',
          'Up to 100 group members',
          '100 messages per day',
          'Advanced analytics',
          'Priority email support',
          'Custom preferences'
        ],
        cta: 'Choose Plan',
        popular: false
      },
      {
        name: 'Professional',
        price: '$20',
        description: 'Ideal for growing businesses',
        features: [
          '3 Telegram groups',
          'Up to 200 members per group',
          '500 messages per day total',
          'Real-time analytics dashboard',
          'Priority support',
          'API access',
          'Custom integrations'
        ],
        cta: 'Choose Plan',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$60',
        description: 'For high-volume operations',
        features: [
          'Unlimited Telegram groups',
          'Unlimited group members',
          '2000 messages per day',
          'Advanced analytics & reporting',
          '24/7 dedicated support',
          'Full API access',
          'White-label options',
          'Custom development'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ],
    yearly: [
      {
        name: 'Free',
        price: '$0',
        description: 'Perfect for trying out the service',
        features: [
          '1 Telegram group',
          'Up to 10 group members',
          '20 messages per day',
          'Basic analytics',
          'Email support'
        ],
        cta: 'Get Started',
        popular: false
      },
      {
        name: 'Starter',
        price: '$50',
        description: 'Great for small businesses',
        originalPrice: '$60',
        features: [
          '1 Telegram group',
          'Up to 100 group members',
          '100 messages per day',
          'Advanced analytics',
          'Priority email support',
          'Custom preferences'
        ],
        cta: 'Choose Plan',
        popular: false
      },
      {
        name: 'Professional',
        price: '$200',
        description: 'Ideal for growing businesses',
        originalPrice: '$240',
        features: [
          '3 Telegram groups',
          'Up to 200 members per group',
          '500 messages per day total',
          'Real-time analytics dashboard',
          'Priority support',
          'API access',
          'Custom integrations'
        ],
        cta: 'Choose Plan',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$600',
        description: 'For high-volume operations',
        originalPrice: '$720',
        features: [
          'Unlimited Telegram groups',
          'Unlimited group members',
          '2000 messages per day',
          'Advanced analytics & reporting',
          '24/7 dedicated support',
          'Full API access',
          'White-label options',
          'Custom development'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ]
  };

  const currentPlans = plans[billingPeriod];

  return (
    <section id="pricing" className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Scale your Telegram group management with our flexible pricing plans. 
            Save up to 28% with annual billing.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Save 28%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-purple-500 scale-105 shadow-xl' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {billingPeriod === 'monthly' ? (
                    <span className="text-gray-500 ml-2">/month</span>
                  ) : (
                    <span className="text-gray-500 ml-2">/year</span>
                  )}
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    {plan.originalPrice}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : plan.name === 'Free'
                    ? 'bg-green-100 text-gray-900 hover:bg-green-200'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>        

      {/* Confirmation Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">Confirm Your Plan</h2>
            <p className="text-gray-700 mb-4">
              You're about to subscribe to the <strong>{selectedPlan.name}</strong> plan for{' '}
              {selectedPlan.price} per {billingPeriod}.
            </p>
            <button
              onClick={handleProceedToPayment}
              disabled={loading}
              className={`w-full bg-gray-700 text-white py-2 rounded-lg transition ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
              }`}
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      )}

        {/* Recommendation Note */}
        <div className="mt-12 text-center">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-purple-900 mb-2">
              💡 Smart Choice
            </h4>
            <p className="text-purple-800">
              The <strong>Professional plan</strong> offers the best value for growing businesses, 
              providing the perfect balance of features and affordability. Start with Free to test 
              the waters, then upgrade when you're ready to scale.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}