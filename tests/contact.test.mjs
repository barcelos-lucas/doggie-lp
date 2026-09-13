import test from 'node:test';
import assert from 'node:assert/strict';
import { business, whatsappUrl, mapsUrl, services, reviews } from '../src/content.js';

test('every WhatsApp link reaches the owner-confirmed number with a readable message', () => {
  for (const service of ['', ...services.map(({ name }) => name)]) {
    const url = new URL(whatsappUrl(service));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/5511925850201');
    assert.ok(url.searchParams.get('text').includes('Doggie'));
    if (service) assert.ok(url.searchParams.get('text').includes(service.toLowerCase()));
  }
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
