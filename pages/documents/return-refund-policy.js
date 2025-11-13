// pages/documents/return-refund-policy.js
import ReactMarkdown from 'react-markdown'

const RETURN_REFUND_POLICY = `
# Return & Refund Policy

**Last Updated: ${new Date().toLocaleDateString()}**

## 1. Digital Products Refund Policy

### 1.1 Instant Download Digital Books
All digital book purchases are **non-refundable** once the download link has been accessed or 24 hours after purchase, whichever comes first. Since digital products cannot be "returned" and are susceptible to duplication, we do not offer refunds for digital book purchases after delivery.

### 1.2 Technical Issues
If you experience technical issues with your digital download:
- Contact us within 24 hours of purchase at **admin@journey18miles.com**
- We will work with you to resolve the issue
- If we cannot resolve the issue within 48 hours, we may issue a refund at our discretion

## 2. Print-on-Demand Physical Books

### 2.1 Return Eligibility
We accept returns of physical books within **14 days** of delivery under the following conditions:
- Book arrived damaged or defective
- Wrong book was sent
- Printing quality is unacceptable

### 2.2 Non-Returnable Items
We cannot accept returns for:
- Books that have been written in, highlighted, or otherwise marked
- Books with damaged spines or covers due to customer handling
- Books that show signs of wear beyond normal inspection

### 2.3 Return Process
To initiate a return:
1. Contact us within 14 days of delivery at **admin@journey18miles.com**
2. Provide your order number and photos of the issue
3. We will provide return instructions if eligible
4. Return shipping costs are the responsibility of the customer

### 2.4 Refunds for Physical Books
Once we receive and inspect the returned book:
- Refunds will be processed within 5-7 business days
- The refund amount will exclude:
  - Original shipping costs
  - Bank processing fees (2.5%-5% transaction fees)
  - Any restocking fees if applicable
- Refunds will be issued to the original payment method

## 3. Bank Processing Fees

### 3.1 Non-Refundable Fees
Please note that bank and payment processing fees (typically 2.5%-5% of the transaction amount) are **non-refundable** in any circumstance. These fees are charged by financial institutions and cannot be recovered by us.

### 3.2 Refund Calculation Example
If you purchased a book for \$20:
- Bank processing fee (approx. 4%): \$0.80
- Maximum refund amount: \$19.20
- This amount may be further reduced by shipping costs if applicable

## 4. How to Request a Refund or Return

### 4.1 Contact Information
Email: **admin@journey18miles.com**  
Phone: **+267 7166 3185**  
Response Time: Within 24-48 business hours

### 4.2 Required Information
When contacting us, please provide:
- Your order number
- Product name(s)
- Reason for return/refund request
- Photos (for physical book issues)

## 5. Exceptional Circumstances

### 5.1 Duplicate Charges
If you believe you were charged twice for the same order:
- Contact us immediately
- We will investigate and refund any duplicate charges within 24 hours

### 5.2 Unauthorized Purchases
If you believe your payment method was used without authorization:
- Contact us immediately
- We will work with you and your financial institution to resolve the issue

## 6. Policy Changes

We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to our website.

## 7. Contact Us

For any questions about this policy:
**Journey of 18 Miles**  
Email: admin@journey18miles.com  
Phone: +267 7166 3185  
Business Hours: Monday-Friday, 8:00 AM - 5:00 PM Botswana Time
`;

export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Return & Refund Policy
        </h1>
        <p className="text-gray-600 text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Policy Content */}
      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <ReactMarkdown
          components={{
            // Custom styling for markdown elements
            h2: ({node, ...props}) => (
              <h2 
                {...props} 
                className="text-xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200 first:mt-0"
              />
            ),
            h3: ({node, ...props}) => (
              <h3 
                {...props} 
                className="text-lg font-medium text-gray-800 mt-6 mb-3"
              />
            ),
            p: ({node, ...props}) => (
              <p 
                {...props} 
                className="text-gray-700 text-sm leading-6 mb-4"
              />
            ),
            ul: ({node, ...props}) => (
              <ul 
                {...props} 
                className="text-gray-700 text-sm list-disc list-inside mb-4 space-y-1"
              />
            ),
            li: ({node, ...props}) => (
              <li 
                {...props} 
                className="text-gray-700 text-sm"
              />
            ),
            strong: ({node, ...props}) => (
              <strong 
                {...props} 
                className="font-semibold text-gray-900"
              />
            ),
          }}
        >
          {RETURN_REFUND_POLICY}
        </ReactMarkdown>

        {/* Section Dividers */}
        <style jsx>{`
          h2 {
            position: relative;
          }
          h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          }
        `}</style>
      </article>
    </div>
  )
}