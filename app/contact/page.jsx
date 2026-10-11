import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Tushar Sharma in Delhi for performance marketing and Meta ads. Email tusharsharma5510@gmail.com or use the enquiry form, which opens an email draft.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send the offer, the budget, and the metric you care about."
        description="Email, phone, and LinkedIn are listed here. The form checks the fields, then opens a draft in your email app. It does not store the message."
      />
      <section className="py-14 sm:py-16" aria-labelledby="contact-form-heading">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="contact-form-heading" className="font-display text-2xl font-semibold">
              Direct
            </h2>
            <div className="mt-5">
              <ContactDetails />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
