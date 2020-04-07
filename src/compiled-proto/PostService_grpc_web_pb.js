/**
 * @fileoverview gRPC-Web generated client stub for org.gravel.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.org = {};
proto.org.gravel = {};
proto.org.gravel.grpc = require('./PostService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.org.gravel.grpc.PostServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.org.gravel.grpc.PostServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.gravel.grpc.PostId,
 *   !proto.org.gravel.grpc.Post>}
 */
const methodDescriptor_PostService_getPost = new grpc.web.MethodDescriptor(
  '/org.gravel.grpc.PostService/getPost',
  grpc.web.MethodType.UNARY,
  proto.org.gravel.grpc.PostId,
  proto.org.gravel.grpc.Post,
  /**
   * @param {!proto.org.gravel.grpc.PostId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Post.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.org.gravel.grpc.PostId,
 *   !proto.org.gravel.grpc.Post>}
 */
const methodInfo_PostService_getPost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.org.gravel.grpc.Post,
  /**
   * @param {!proto.org.gravel.grpc.PostId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Post.deserializeBinary
);


/**
 * @param {!proto.org.gravel.grpc.PostId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.org.gravel.grpc.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.gravel.grpc.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.gravel.grpc.PostServiceClient.prototype.getPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getPost',
      request,
      metadata || {},
      methodDescriptor_PostService_getPost,
      callback);
};


/**
 * @param {!proto.org.gravel.grpc.PostId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.gravel.grpc.Post>}
 *     A native promise that resolves to the response
 */
proto.org.gravel.grpc.PostServicePromiseClient.prototype.getPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getPost',
      request,
      metadata || {},
      methodDescriptor_PostService_getPost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.gravel.grpc.Get,
 *   !proto.org.gravel.grpc.Posts>}
 */
const methodDescriptor_PostService_getAllPosts = new grpc.web.MethodDescriptor(
  '/org.gravel.grpc.PostService/getAllPosts',
  grpc.web.MethodType.UNARY,
  proto.org.gravel.grpc.Get,
  proto.org.gravel.grpc.Posts,
  /**
   * @param {!proto.org.gravel.grpc.Get} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Posts.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.org.gravel.grpc.Get,
 *   !proto.org.gravel.grpc.Posts>}
 */
const methodInfo_PostService_getAllPosts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.org.gravel.grpc.Posts,
  /**
   * @param {!proto.org.gravel.grpc.Get} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Posts.deserializeBinary
);


/**
 * @param {!proto.org.gravel.grpc.Get} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.org.gravel.grpc.Posts)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.gravel.grpc.Posts>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.gravel.grpc.PostServiceClient.prototype.getAllPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAllPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_getAllPosts,
      callback);
};


/**
 * @param {!proto.org.gravel.grpc.Get} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.gravel.grpc.Posts>}
 *     A native promise that resolves to the response
 */
proto.org.gravel.grpc.PostServicePromiseClient.prototype.getAllPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAllPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_getAllPosts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.gravel.grpc.Get,
 *   !proto.org.gravel.grpc.Authors>}
 */
const methodDescriptor_PostService_getAuthors = new grpc.web.MethodDescriptor(
  '/org.gravel.grpc.PostService/getAuthors',
  grpc.web.MethodType.UNARY,
  proto.org.gravel.grpc.Get,
  proto.org.gravel.grpc.Authors,
  /**
   * @param {!proto.org.gravel.grpc.Get} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Authors.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.org.gravel.grpc.Get,
 *   !proto.org.gravel.grpc.Authors>}
 */
const methodInfo_PostService_getAuthors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.org.gravel.grpc.Authors,
  /**
   * @param {!proto.org.gravel.grpc.Get} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Authors.deserializeBinary
);


/**
 * @param {!proto.org.gravel.grpc.Get} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.org.gravel.grpc.Authors)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.gravel.grpc.Authors>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.gravel.grpc.PostServiceClient.prototype.getAuthors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAuthors',
      request,
      metadata || {},
      methodDescriptor_PostService_getAuthors,
      callback);
};


/**
 * @param {!proto.org.gravel.grpc.Get} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.gravel.grpc.Authors>}
 *     A native promise that resolves to the response
 */
proto.org.gravel.grpc.PostServicePromiseClient.prototype.getAuthors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAuthors',
      request,
      metadata || {},
      methodDescriptor_PostService_getAuthors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.gravel.grpc.AuthorId,
 *   !proto.org.gravel.grpc.Posts>}
 */
const methodDescriptor_PostService_getAuthorPosts = new grpc.web.MethodDescriptor(
  '/org.gravel.grpc.PostService/getAuthorPosts',
  grpc.web.MethodType.UNARY,
  proto.org.gravel.grpc.AuthorId,
  proto.org.gravel.grpc.Posts,
  /**
   * @param {!proto.org.gravel.grpc.AuthorId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Posts.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.org.gravel.grpc.AuthorId,
 *   !proto.org.gravel.grpc.Posts>}
 */
const methodInfo_PostService_getAuthorPosts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.org.gravel.grpc.Posts,
  /**
   * @param {!proto.org.gravel.grpc.AuthorId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.gravel.grpc.Posts.deserializeBinary
);


/**
 * @param {!proto.org.gravel.grpc.AuthorId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.org.gravel.grpc.Posts)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.gravel.grpc.Posts>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.gravel.grpc.PostServiceClient.prototype.getAuthorPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAuthorPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_getAuthorPosts,
      callback);
};


/**
 * @param {!proto.org.gravel.grpc.AuthorId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.gravel.grpc.Posts>}
 *     A native promise that resolves to the response
 */
proto.org.gravel.grpc.PostServicePromiseClient.prototype.getAuthorPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.gravel.grpc.PostService/getAuthorPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_getAuthorPosts);
};


module.exports = proto.org.gravel.grpc;

