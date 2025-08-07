import React from 'react';
import { Header } from "@/components/header";
import { PricingBanner } from "@/components/Pricing/PricingBanner";
import { Price } from "@/components/Pricing/Price";
import { IPTVBoxes } from "@/components/IPTVBoxes";
import { HowItWorks } from "@/components/HowItWorks";
import { Client } from "@/components/Client";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <PricingBanner />
            <Price />
            <IPTVBoxes />
            <HowItWorks />
            <Client />
            <FeedbackForm />
            <Footer />

        </main>
    )
}

