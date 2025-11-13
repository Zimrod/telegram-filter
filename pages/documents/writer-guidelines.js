// pages/documents/writer-guidelines.js
import ReactMarkdown from 'react-markdown'

const WRITER_GUIDELINES = `
# Writer Submission Guidelines

At Journey of 18 Miles, we believe every African language holds treasures worth sharing with the next generation. Our mission is to publish children's stories that celebrate culture, preserve identity, and spark imagination.

We welcome submissions from writers of all ages and backgrounds. Before you send us your draft, please read the guidelines below:

## ✅ What We're Looking For

**Audience**: Children aged 3–12 years old.

**Content**: Short stories, fables, or cultural tales with moral lessons, humour, or adventure.

**Languages**:
- Priority languages: Setswana, Swahili, Yoruba, Shona, English (with African language infusions), and French (with African language infusions)
- Other languages: We welcome drafts in any African language, but they may be stored for future expansion if we're not yet publishing in that language

**Length**: 500–1,500 words.

**Originality**: Your story must be your own creation, or an original retelling of a traditional tale. Plagiarism is a very serious offence and is punishable by law.

## ❌ What We Don't Accept

- Stories not suitable for children
- Content with hate speech, stereotypes, or disrespect to cultures
- Submissions copied directly from other published works
- Previously published stories (unless you hold full rights)

## 🎨 Illustration & Creative Development Process

### Creative Rights and Responsibilities
At Journey of 18 Miles, we maintain full creative control over the illustration and visual development of all published works. This approach ensures consistent quality, cultural appropriateness, and brand alignment across our publications.

### Our Illustration Process
1. **Professional Illustration Team**: We work with experienced African illustrators who specialize in children's literature and cultural storytelling
2. **Cultural Authenticity**: Our illustrators research cultural elements, traditional clothing, settings, and visual motifs to ensure authentic representation
3. **Age-Appropriate Design**: Illustrations are developed specifically for our target audience of children aged 3-12

### Writer Involvement Limitations
While we value your creative contribution through writing, please note that:
- **No Consultation Required**: We reserve the right to develop illustrations without writer consultation or approval
- **Creative Interpretation**: Illustrators may interpret your story creatively while maintaining its core message and cultural integrity
- **Final Decisions**: All artistic decisions including color palette, character design, and layout are made by our creative team

### Why This Approach Benefits Everyone
- **Quality Assurance**: Professional standards maintained across all publications
- **Cultural Accuracy**: Expert handling of sensitive cultural visual elements
- **Efficient Production**: Streamlined process allows faster publication timelines
- **Brand Consistency**: Cohesive visual identity across our book series

### Writer's Role in Visual Development
While not involved in the illustration process, writers may:
- Provide cultural context notes if specific visual elements are crucial to the story
- Suggest general mood or atmosphere preferences (though final decisions rest with our team)
- Receive previews of illustrations at our discretion, but without approval rights

We believe this separation of writing and illustration expertise allows each creative professional to excel in their domain, resulting in the highest quality books for our young readers.

## 📝 Writer Benefits

**Commission**: Writers earn 50% of net sales on every book sold.

**Recognition**: Your name will be prominently credited on all published works.

**Impact**: Your words help children connect with their roots and preserve cultural heritage.

**Royalties**: Paid quarterly via bank transfer or mobile money.

## 💰 Revenue Sharing & Financial Terms

### Net Proceeds Calculation
Net proceeds are calculated as:
**Total Revenue** minus **Production Costs** (printing, illustration, editing) minus **Marketing Expenses** minus **Distribution Fees** minus **Payment Processing Fees**

### 50/50 Profit Sharing
- **Book Sales**: 50% of net proceeds from all book formats (print, digital, audio)
- **Merchandise**: 50% of net proceeds from any merchandise featuring story characters or elements
- **Adaptations**: 50% of net proceeds from translations, audiobooks, or other format adaptations
- **Licensing**: 50% of net proceeds from character or story licensing agreements

### Payment Terms
- Royalty statements provided quarterly
- Payments issued within 30 days of statement period end
- Minimum payment threshold: $50 (accumulates until threshold met)
- Payments via bank transfer or mobile money

### Expense Transparency
We provide detailed accounting of all deductions upon request. Typical expenses include:
- Illustration and design costs
- Printing and production fees
- Marketing and advertising expenses
- Platform and distribution fees (Amazon, etc.)
- Payment processing fees (2.5%-5%)

## ⚖️ Terms & Agreement

By submitting your work, you agree that:
- You grant Journey of 18 Miles exclusive publishing rights
- You and Journey of 18 Miles share equal rights (50/50) to all net proceeds from book sales, merchandise, adaptations, and any derivative works created from the submitted story, its characters, or storylines, after deduction of production, marketing, and distribution expenses
- The story has not been previously published elsewhere in any format
- You understand and accept our commission and royalty structure
- We may edit the story for clarity, length, or cultural appropriateness
- We reserve the right to develop derivative works, translations, adaptations, and merchandise based on the story and its characters
- We reserve the right to reject any submission without explanation

## 📤 How to Submit

1. Email your draft as a Word or PDF file to: **submit@journey18miles.com**
2. Subject line: \`Story Submission – [Language] – [Title]\`
3. Include in your email:
   - Your full name (or pen name)
   - Language of the story
   - Short bio (2–3 sentences)
   - Contact information (email and phone number)
   - Optional: translation if the story is in a less widely spoken language

## 📅 Response Time

We aim to respond to all submissions within 4-6 weeks. Due to high volume, we may not be able to provide individual feedback on rejected submissions.

## 🔒 Rights & Copyright

You retain copyright of your story. We request non-exclusive rights to publish, distribute, and market the story in digital and print formats. You are free to publish the story elsewhere after 6 months of our publication date.

## 🌍 Our Vision

We aim to publish in as many African languages as possible. To start, we are focusing on the most widely spoken, then expanding step by step. Every submission helps us build towards a future where every African child can read stories in their own mother tongue.

## 📧 Ready to share your story?

Send your draft today and be part of keeping our culture alive through storytelling!

**Contact**: submit@journey18miles.com  
**Response Time**: 4-6 weeks
`;

export default function WriterGuidelines() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Writer Submission Guidelines
        </h1>
        <p className="text-gray-600 text-sm">
          Share your stories and help preserve African cultural heritage
        </p>
      </div>

      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <ReactMarkdown
          components={{
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
          {WRITER_GUIDELINES}
        </ReactMarkdown>
      </article>
    </div>
  )
}