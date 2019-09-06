/**
 * @file Barion Payment/Start request builder
 * @author Rishat Habushev <topdev333@gmail.com>
 * @version 1.0 
 */

/**
 * @typedef {Object} BarionPaymentStartRequest
 * @see https://docs.barion.com/Payment-Start-v2
 * @property {String} POSKey - The secret API key of the shop, generated by Barion.
 * @property {String} PaymentType - The type of the payment, which can be either immediate or a money reservation. 
 * @property {String} ReservationPeriod - Only makes sense at reservation payments. This is the time window that allows the shop to finish (finalize) the payment.
 * @property {String} PaymentWindow - Time window for the payment to be completed. 
 * @property {boolean} GuestCheckOut - Flag indicating wether the payment can be completed without a registered Barion wallet. 
 * @property {boolean} InitiateRecurrence - This flag indicates that the shop would like to initialize a token payment.
 * @property {String} RecurrenceId - A string used to identify a given authorized payment. 
 * @property {String[]} FundingSources - An array of strings containing the allowed funding sources that can be used to complete the payment.
 * @property {String} PaymentRequestId - The unique identifier for the payment generated by the shop.
 * @property {String} PayerHint - The shop can optionally supply an e-mail address as a hint on who should complete the payment.
 * @property {String} RedirectUrl - The URL where the payer should be redirected after the payment is completed or cancelled.
 * @property {String} CallbackUrl - The URL where the Barion system sends a request whenever there is a change in the state of the payment.
 * @property {BarionPaymentTransaction[]} Transactions - An array of payment transactions contained in the payment.
 * @property {String} OrderNumber - The order number generated by the shop. 
 * @property {BarionShippingAddress} ShippingAddress - The shipping address associated with the payment, if applicable.
 * @property {String} Locale - This indicates in which language the Barion Smart Gateway should display for the payer upon redirect.
 * @property {String} Currency - The currency of the payment. Must be supplied in ISO 4217 format.
 */

/**
 * Creates an empty Barion Payment/Start request
 * @constructor
 * @see https://docs.barion.com/Payment-Start-v2
 */
function BarionPaymentStartRequestBuilder() {

    this.request = {};

    /**
     * Sets the POSKey field for the request.
     * @param posKey {String} The shop's secret key.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setPOSKey = function(posKey) {
        this.request.POSKey = posKey;
        return this;
    };

    /**
     * Sets the PaymentType field for the request.
     * @param paymentType {String} The type of the payment (Immediate/Reservation)
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setPaymentType = function(paymentType) {
        this.request.PaymentType = paymentType;
        return this;
    };

    /**
     * Sets the ReservationPeriod field for the request.
     * @param reservationPeriod {String} Only makes sense at reservation payments. This is the time window that allows the shop to finish (finalize) the payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setReservationPeriod = function(reservationPeriod) {
        this.request.ReservationPeriod = reservationPeriod;
        return this;
    };

    /**
     * Sets the PaymentWindow field for the request.
     * @param paymentWindow {String} Time window for the payment to be completed.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setPaymentWindow = function(paymentWindow) {
        this.request.PaymentWindow = paymentWindow;
        return this;
    };

    /**
     * Sets the GuestCheckout field for the request.
     * @param guestCheckout {boolean} Flag indicating wether the payment can be completed without a registered Barion wallet.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setGuestCheckout = function(guestCheckout) {
        this.request.GuestCheckout = guestCheckout;
        return this;
    };

    /**
     * Sets the InitiateRecurrence field for the request.
     * @param initiateRecurrence {boolean} This flag indicates that the shop would like to initialize a token payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setInitiateRecurrence = function(initiateRecurrence) {
        this.request.InitiateRecurrence = initiateRecurrence;
        return this;
    };

    /**
     * Sets the RecurrenceId field for the request.
     * @param recurrenceId {String} A string used to identify a given authorized payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setRecurrenceId = function(recurrenceId) {
        this.request.RecurrenceId = recurrenceId;
        return this;
    };

    /**
     * Sets the FoundingSources field for the request.
     * @param fundingSources {String[]} An array of strings containing the allowed funding sources that can be used to complete the payment. 
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setFundingSources = function(fundingSources) {
        this.request.FundingSources = fundingSources;
        return this;
    };

    /**
     * Sets the PaymentRequestId field for the request.
     * @param paymentRequestId {String} The unique identifier for the payment generated by the shop.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setPaymentRequestId = function(paymentRequestId) {
        this.request.PaymentRequestId = paymentRequestId;
        return this;
    };

    /**
     * Sets the PayerHint field for the request.
     * @param payerHint {String} The shop can optionally supply an e-mail address as a hint on who should complete the payment. 
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setPayerHint = function(payerHint) {
        this.request.PayerHint = payerHint;
        return this;
    };

    /**
     * Sets the RedirectUrl field for the request.
     * @param redirectUrl {String} The URL where the payer should be redirected after the payment is completed or cancelled. 
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setRedirectUrl = function(redirectUrl) {
        this.request.RedirectUrl = redirectUrl;
        return this;
    };

    /**
     * Sets the CallbackUrl field for the request.
     * @param callbackUrl {String} The URL where the Barion system sends a request whenever there is a change in the state of the payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setCallbackUrl = function(callbackUrl) {
        this.request.CallbackUrl = callbackUrl;
        return this;
    };

    /**
     * Sets the Transactions field for the request.
     * @param transactions {BarionPaymentTransaction[]} An array of payment transactions contained in the payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setTransactions = function(transactions) {
        this.request.Transactions = transactions;
        return this;
    };

    /**
     * Adds a transaction to the Transactions field for the request.
     * @param transaction {BarionPaymentTransaction} A payment transaction contained in the payment.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.addTransaction = function(transaction) {
        if(this.request.Transactions === undefined) {
            this.request.Transactions = [];
        }
        this.request.Transactions.push(transaction);
        return this;
    };

    /**
     * Sets the OrderNumber field for the request.
     * @param orderNumber {String} The order number generated by the shop.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setOrderNumber = function(orderNumber) {
        this.request.OrderNumber = orderNumber;
        return this;
    };

    /**
     * Sets the ShippingAddress field for the request.
     * @param shippingAddress {BarionShippingAddress} The shipping address associated with the payment, if applicable.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setShippingAddress = function(shippingAddress) {
        this.request.ShippingAddress = shippingAddress;
        return this;
    };

    /**
     * Sets the Locale field for the request.
     * @param locale {String} This indicates in which language the Barion Smart Gateway should display for the payer upon redirect.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setLocale = function(locale) {
        this.request.Locale = locale;
        return this;
    };

    /**
     * Sets the Currency field for the request.
     * @param currency {String} The currency of the payment. Must be supplied in ISO 4217 format.
     * @returns {BarionPaymentStartRequestBuilder} The BarionPaymentStartRequestBuilder object
     */
    this.setCurrency = function(currency) {
        this.request.Currency = currency;
        return this;
    };

    /**
    * Build and returns the request for the Payment/Start API call.
    * @returns {BarionPaymentStartRequest} The request object
    */
    this.build = function() {
        return this.request;
    };
}



BarionPaymentStartRequestBuilder.prototype.BarionPaymentTransactionBuilder  = require('../objects/payment-transaction.js');
BarionPaymentStartRequestBuilder.prototype.BarionPayeeTransactionBuilder    = require('../objects/payment-payeetransaction.js');
BarionPaymentStartRequestBuilder.prototype.BarionItemBuilder                = require('../objects/payment-item.js');
BarionPaymentStartRequestBuilder.prototype.BarionShippingAddressBuilder     = require('../objects/payment-shippingaddress.js');

module.exports = BarionPaymentStartRequestBuilder;