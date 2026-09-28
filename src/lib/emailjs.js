import emailjs from '@emailjs/browser';

// ===== EmailJS Configuration =====
const SERVICE_ID = 'service_zc2236l';
const TEMPLATE_ID = 'template_leli53d';
const PUBLIC_KEY = 'QX6qyRU9tTP6lpBS2';

/**
 * Send an email via EmailJS.
 * @param {Object} params - Template variables
 * @returns {Promise} - Resolves on success, rejects on failure
 */
export async function sendEmail(params) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
    publicKey: PUBLIC_KEY,
  });
}