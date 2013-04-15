Mobilise
=====

A jQuery extension for phone numbers...watch this space. I'm still making it... =)

What is it?
-

Mobilise is an extension to jQuery that converts an element to a telephone link when the webpage is accessed on a mobile browser. If the page is accessed on a standard browser, the page instead shows normal text.

Why should I use it?
-

If your website has a phone number on it, then that could prove to be an easy and accessible way for a potential customer/client/friend/enemy to get in contact with you when they are browsing on a mobile. Normally you could make phone numbers clickable by adding a "tel:" tag. However this will make the link clickable on standard browsers as well, which is cumbersome and a little bit silly.

Mobilise uses the open source [detect mobile browsers](http://www.detectmobilebrowsers.com/ "Detect Mobile Browsers") library to detect what device the client is using, and then will automatically convert text into "tel:" tags for you if it's a mobile! And as it's an extension to jQuery, it's quick and easy to set up!

How do I use it?
-
```javascript
$('#yourElement').mobilise();
$('.yourClass').mobilise();
```
Boom. Done.



