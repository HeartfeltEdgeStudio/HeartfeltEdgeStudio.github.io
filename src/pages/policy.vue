<script setup>
import { useAppStore } from '../stores/app';
import { storeToRefs } from 'pinia';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Heartfelt Edge Studio - Privacy Policy',
});
const appStore = useAppStore();
const { team } = storeToRefs(appStore);
</script>

<template>
  <v-sheet border="b-md"color="secondary-2">
    <div class="bg-primary d-flex justify-center px-6 px-sm-16 py-16">
      <div>
        <div class="text-nowrap text-secondary-1 text-h3 font-weight-bold">Privacy Policy</div>
        <p class="text-secondary-2 text-h6">
          Effective Date: <span class="font-weight-black text-decoration-underline">April 14, 2025</span>
          <br />
          Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your personal data
          in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR).
          <br /><br />
        <h2 class="text-h4 font-weight-bold mb-6">Interpretation and Definitions</h2>
        <p><strong>Interpretation:</strong> Words beginning with capital letters have specific meanings as defined
          below. These definitions apply whether the terms are used in singular or plural form.</p>

        <h3 class="text-h6 font-weight-bold mt-6">Definitions</h3>
        <ul class="ml-4">
          <li><strong>Company:</strong> Heartfelt Edge Studio, referred to as "we", "us", or "our" in this policy.
          </li>
          <li><strong>Cookies:</strong> Small files placed on your device to store preferences and track activity.
          </li>
          <li><strong>Device:</strong> Any device capable of accessing the Service, such as a computer, smartphone,
            or tablet.</li>
          <li><strong>Personal Data:</strong> Any information that identifies or can be used to identify an
            individual.</li>
          <li><strong>Service:</strong> The website and all related offerings provided by Heartfelt Edge Studio.
          </li>
          <li><strong>Service Provider:</strong> Any third party who processes data on our behalf (e.g., Mailchimp).
          </li>
          <li><strong>Usage Data:</strong> Information collected automatically about how the Service is accessed and
            used.</li>
          <li><strong>You:</strong> The individual or entity accessing or using the Service.</li>
        </ul>
        </p>
      </div>
    </div>
  </v-sheet>

  <div class="bg-secondary align-center" style="min-height: auto;">
    <div class="d-flex justify-center px-6 px-sm-16">
        <div class="d-flex flex-column justify-center my-8 py-12">
          <p class="text-secondary-2 text-h6">
          <h2 class="text-h4 font-weight-bold mb-6">1. Who We Are</h2>
          <p class="mb-4">
            We are <strong>Heartfelt Edge Studio</strong>, a creative collective based in Forlì, Italy. While not yet
            a
            registered company, we are committed to handling your data responsibly and in compliance with GDPR.
          </p>
          <p class="mb-4">
            <strong>Address:</strong><br />
            Ufficio Forlì 7<br />
            Casella Postale 5<br />
            47122 Forlì FC, Italy
          </p>
          <p><strong>Website:</strong> <a href="https://heartfeltedgestudio.eu"
              target="_blank">heartfeltedgestudio.eu</a></p>
          <p><strong>Contact:</strong> <a href="https://heartfeltedgestudio.eu/#/contact" target="_blank">contact
              page</a></p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">2. What Data We Collect</h2>
          <p>When you sign up for our newsletter, we collect:</p>
          <ul class="ml-4">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Email Address</li>
            <li>Date of Birth</li>
            <li>Country</li>
          </ul>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">3. How We Use Your Data</h2>
          <p>Your data is used only to:</p>
          <ul class="ml-4">
            <li>Send our newsletter and updates</li>
            <li>Understand general audience demographics</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> use your data for profiling, ads, or automated decision-making.</p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">4. Legal Basis for Processing</h2>
          <p>
            Our legal basis is <strong>consent</strong>. You provide it when signing up. You may withdraw it anytime
            by clicking
            “unsubscribe” in any email or contacting us directly.
          </p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">5. How Your Data Is Stored</h2>
          <p>
            We use <strong>Mailchimp</strong> to manage and send our emails. They securely store your data and are
            GDPR-compliant.
            Read their privacy policy
            <a href="https://mailchimp.com/legal/privacy/" target="_blank">here</a>.
          </p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">6. Data Sharing</h2>
          <p>Your data is only accessible to:</p>
          <ul class="ml-4">
            <li>The Heartfelt Edge Studio team</li>
            <li>Mailchimp (for newsletter delivery)</li>
          </ul>
          <p>We do <strong>not</strong> sell or share your data with any other third parties.</p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">7. Data Retention And Security</h2>
          <p>
            We retain your data while you're subscribed. If you unsubscribe, we delete your data within 30 days. Usage
            data may be stored longer for analytical purposes. We use commercially acceptable means to protect your
            data, but no system is 100% secure.
          </p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">8. Your Rights Under GDPR</h2>
          <p>You have the right to:</p>
          <ul class="ml-4">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Restrict or object to processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p>Contact us using our contact form on our <a href="https://heartfeltedgestudio.eu/#/contact"
              target="_blank">contact page</a> to exercise these rights.</p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted here with an updated
            effective date.
          </p>
          </p>
          <h2 class="text-h4 font-weight-bold mt-10 mb-6">10. Children's Privacy</h2>
          <p>
            We do not knowingly collect data from children under 13. If you're a parent aware of this, please contact
            us.
          </p>

          <h2 class="text-h4 font-weight-bold mt-10 mb-6">11. Third-Party Links</h2>
          <p>
            Our Service may link to third-party websites. We are not responsible for their content or privacy
            practices.
          </p>
        </div>
      </div>
  </div>
</template>
