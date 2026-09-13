import test from 'node:test';
import assert from 'node:assert/strict';
import { business, whatsappUrl, mapsUrl, reviews, serviceCategories } from '../src/content.js';

test('every WhatsApp link reaches the owner-confirmed number with a readable message', () => {
  for (const intent of ['booking', 'plans', ...serviceCategories.map(({ name }) => name)]) {
    const url = new URL(whatsappUrl(intent));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/5511925850201');
    assert.ok(url.searchParams.get('text').includes('Tia Bia'));
  }
  assert.equal(new URL(whatsappUrl('booking')).searchParams.get('text'), 'Oi, Tia Bia! Gostaria de agendar um horário pro meu pet.');
  assert.equal(new URL(whatsappUrl('plans')).searchParams.get('text'), 'Oi, Tia Bia! Gostaria de conhecer melhor os Planos de cuidados da Doggie.');
});
test('directions use the confirmed complete address', () => {
  const url = new URL(mapsUrl);
  for (const value of [business.street, business.city, business.postalCode]) assert.ok(url.searchParams.get('destination').includes(value));
});
test('published reviews require attribution, source and a valid rating', () => {
  for (const review of reviews) {
    assert.ok(review.name && review.text && review.date);
    assert.equal(new URL(review.url).protocol, 'https:');
    assert.ok(Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5);
  }
});
