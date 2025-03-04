import { useServiceLang } from "features/i18n/useServiceLang";
import ServiceHeaders from "features/service/components/ServiceHeaders";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PAGES } from "./constans";
const ServicePage = React.lazy(() => import("./ServicePage"));
const ServicesPage = React.lazy(() => import("./ServicesPage"));
const BookingPage = React.lazy(() => import("./BookingPage"));
const BookingConfirmationPage = React.lazy(
  () => import("./BookingConfirmationPage")
);
const TermsPage = React.lazy(() => import("./TermsPage"));
const PrivacyPage = React.lazy(() => import("./PrivacyPage"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));

interface PageSwitcherProps {
  children?: React.ReactNode;
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({ children }) => {
  useServiceLang();
  return (
    <>
      <ServiceHeaders />
      <Suspense fallback={null}>
        {children}
        <Routes>
          <Route path={PAGES.SERVICE} element={<ServicePage />} />
          <Route path={PAGES.SERVICES} element={<ServicesPage />} />
          <Route path={PAGES.BOOKING} element={<BookingPage />} />
          <Route
            path={PAGES.BOOKING_CONFIRMATION}
            element={<BookingConfirmationPage />}
          />
          <Route
            path={`${PAGES.BOOKING_CONFIRMATION}/:token`}
            element={<BookingConfirmationPage />}
          />
          <Route path={PAGES.TERMS} element={<TermsPage />} />
          <Route path={PAGES.PRIVACY} element={<PrivacyPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default PageSwitcher;
