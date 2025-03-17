import AppointmentBookingForm from "@/components/forms/AppointmentBookingForm";
import CheckoutForm from "@/components/forms/CheckoutForm";
import ContactForm from "@/components/forms/ContactForm";
import CustomerFeedbackForm from "@/components/forms/CustomerFeedbackForm";
import SurveyForm from "@/components/forms/CustomerSurveryForm";
import EventRegistrationForm from "@/components/forms/EventRegistrationForm";
import JobApplicationForm from "@/components/forms/JobApplicationForm";
import LoanApplicationForm from "@/components/forms/LoanApplicationForm";
import LoginForm from "@/components/forms/LoginForm";
import NewsletterSignupForm from "@/components/forms/NewsLetterSignUpForm";
import CourseEnrollmentForm from "@/components/forms/OnlineCourseEnrollmentForm";
import ProductInquiryForm from "@/components/forms/ProductInquiryForm";
import ProductReviewForm from "@/components/forms/ProductReviewForm";
import PropertyListingForm from "@/components/forms/PropertyListingForm";
import RestaurantReservationForm from "@/components/forms/RestaurantReservationForm";
import SignupForm from "@/components/forms/SignupForm";
import SubscriptionForm from "@/components/forms/SubscriptionForm";
import SupportTicketForm from "@/components/forms/SupportTicketsForm";
import ProfileSettingsForm from "@/components/forms/UserProfileSettings";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <LoginForm />
      <SignupForm />
      <ContactForm />
      <NewsletterSignupForm />
      <EventRegistrationForm />
      <JobApplicationForm />
      <AppointmentBookingForm />
      <CheckoutForm />
      <SurveyForm />
      <SubscriptionForm />
      <ProfileSettingsForm />
      <CustomerFeedbackForm />
      <ProductInquiryForm />
      <SupportTicketForm />
      <PropertyListingForm />
      <CourseEnrollmentForm />
      <RestaurantReservationForm />
      <LoanApplicationForm />
      <ProductReviewForm />
    </div>
  );
}
