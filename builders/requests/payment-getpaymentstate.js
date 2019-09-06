/**
 * @file Barion Payment/GetPaymentState request builder
 * @author Rishat Habushev <topdev333@gmail.com>
 * @version 1.0 
 */

/**
 * @typedef {Object} BarionGetPaymentStateRequest
 * @property {String} posKey - The secret API key of the shop, generated by Barion.
 * @property {String} paymentId - The identifier of the payment in the Barion system.
 */ 

/**
 * Creates an empty Barion Payment/GetPaymentState request
 * @constructor
 * @see https://docs.barion.com/Payment-GetPaymentState-v2
 */
function BarionGetPaymentStateRequestBuilder() {

	this.request = {};

	/**
	 * Sets the POSKey field for the request.
	 * @param posKey {String} The secret API key of the shop, generated by Barion.
	 * @returns {BarionGetPaymentStateRequestBuilder} The BarionGetPaymentStateRequestBuilder object
	 */
	this.setPOSKey = function(posKey) {
		this.request.POSKey = posKey;
		return this;
	};

	/**
	 * Sets the PaymentId field for the request.
	 * @param paymentId {String} The identifier of the payment in the Barion system.
	 * @returns {BarionGetPaymentStateRequestBuilder} The BarionGetPaymentStateRequestBuilder object
	 */
	this.setPaymentId = function(paymentId) {
		this.request.PaymentId = paymentId;
		return this;
	};

	/**
    * Build and returns the request for the Payment/GetPaymentState API call.
    * @returns {BarionGetPaymentStateRequest} The request object
    */
	this.build = function() {
		return this.request;
	};

}

module.exports = BarionGetPaymentStateRequestBuilder;