//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./ecc_types');
//HELPER FUNCTIONS AND STRUCTURES

var setup_init_args = function(args) {
  this.initParame = null;
  if (args) {
    if (args.initParame !== undefined && args.initParame !== null) {
      this.initParame = new ttypes.InitParame(args.initParame);
    }
  }
};
setup_init_args.prototype = {};
setup_init_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.initParame = new ttypes.InitParame();
        this.initParame.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_init_args.prototype.write = function(output) {
  output.writeStructBegin('setup_init_args');
  if (this.initParame !== null && this.initParame !== undefined) {
    output.writeFieldBegin('initParame', Thrift.Type.STRUCT, 1);
    this.initParame.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_init_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.PublicParame(args.success);
    }
  }
};
setup_init_result.prototype = {};
setup_init_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.PublicParame();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_init_result.prototype.write = function(output) {
  output.writeStructBegin('setup_init_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_issue_args = function(args) {
  this.issueParame = null;
  if (args) {
    if (args.issueParame !== undefined && args.issueParame !== null) {
      this.issueParame = new ttypes.IssueParame(args.issueParame);
    }
  }
};
setup_issue_args.prototype = {};
setup_issue_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.issueParame = new ttypes.IssueParame();
        this.issueParame.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_issue_args.prototype.write = function(output) {
  output.writeStructBegin('setup_issue_args');
  if (this.issueParame !== null && this.issueParame !== undefined) {
    output.writeFieldBegin('issueParame', Thrift.Type.STRUCT, 1);
    this.issueParame.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_issue_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.RetIssue(args.success);
    }
  }
};
setup_issue_result.prototype = {};
setup_issue_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RetIssue();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_issue_result.prototype.write = function(output) {
  output.writeStructBegin('setup_issue_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_execOne_args = function(args) {
  this.protocolone = null;
  if (args) {
    if (args.protocolone !== undefined && args.protocolone !== null) {
      this.protocolone = new ttypes.ProtocolOne(args.protocolone);
    }
  }
};
setup_execOne_args.prototype = {};
setup_execOne_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.protocolone = new ttypes.ProtocolOne();
        this.protocolone.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_execOne_args.prototype.write = function(output) {
  output.writeStructBegin('setup_execOne_args');
  if (this.protocolone !== null && this.protocolone !== undefined) {
    output.writeFieldBegin('protocolone', Thrift.Type.STRUCT, 1);
    this.protocolone.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_execOne_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ReturnOne(args.success);
    }
  }
};
setup_execOne_result.prototype = {};
setup_execOne_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ReturnOne();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_execOne_result.prototype.write = function(output) {
  output.writeStructBegin('setup_execOne_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_execTwo_args = function(args) {
  this.protocoltwo = null;
  if (args) {
    if (args.protocoltwo !== undefined && args.protocoltwo !== null) {
      this.protocoltwo = new ttypes.ProtocolTwo(args.protocoltwo);
    }
  }
};
setup_execTwo_args.prototype = {};
setup_execTwo_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.protocoltwo = new ttypes.ProtocolTwo();
        this.protocoltwo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_execTwo_args.prototype.write = function(output) {
  output.writeStructBegin('setup_execTwo_args');
  if (this.protocoltwo !== null && this.protocoltwo !== undefined) {
    output.writeFieldBegin('protocoltwo', Thrift.Type.STRUCT, 1);
    this.protocoltwo.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setup_execTwo_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ReturnTwo(args.success);
    }
  }
};
setup_execTwo_result.prototype = {};
setup_execTwo_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ReturnTwo();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

setup_execTwo_result.prototype.write = function(output) {
  output.writeStructBegin('setup_execTwo_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var setupClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
setupClient.prototype = {};
setupClient.prototype.seqid = function() { return this._seqid; };
setupClient.prototype.new_seqid = function() { return this._seqid += 1; };

setupClient.prototype.init = function(initParame, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_init(initParame);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_init(initParame);
  }
};

setupClient.prototype.send_init = function(initParame) {
  var output = new this.pClass(this.output);
  var params = {
    initParame: initParame
  };
  var args = new setup_init_args(params);
  try {
    output.writeMessageBegin('init', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

setupClient.prototype.recv_init = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new setup_init_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('init failed: unknown result');
};

setupClient.prototype.issue = function(issueParame, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_issue(issueParame);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_issue(issueParame);
  }
};

setupClient.prototype.send_issue = function(issueParame) {
  var output = new this.pClass(this.output);
  var params = {
    issueParame: issueParame
  };
  var args = new setup_issue_args(params);
  try {
    output.writeMessageBegin('issue', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

setupClient.prototype.recv_issue = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new setup_issue_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('issue failed: unknown result');
};

setupClient.prototype.execOne = function(protocolone, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_execOne(protocolone);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_execOne(protocolone);
  }
};

setupClient.prototype.send_execOne = function(protocolone) {
  var output = new this.pClass(this.output);
  var params = {
    protocolone: protocolone
  };
  var args = new setup_execOne_args(params);
  try {
    output.writeMessageBegin('execOne', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

setupClient.prototype.recv_execOne = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new setup_execOne_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('execOne failed: unknown result');
};

setupClient.prototype.execTwo = function(protocoltwo, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_execTwo(protocoltwo);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_execTwo(protocoltwo);
  }
};

setupClient.prototype.send_execTwo = function(protocoltwo) {
  var output = new this.pClass(this.output);
  var params = {
    protocoltwo: protocoltwo
  };
  var args = new setup_execTwo_args(params);
  try {
    output.writeMessageBegin('execTwo', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

setupClient.prototype.recv_execTwo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new setup_execTwo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('execTwo failed: unknown result');
};
var setupProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
setupProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
setupProcessor.prototype.process_init = function(seqid, input, output) {
  var args = new setup_init_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.init.length === 1) {
    Q.fcall(this._handler.init.bind(this._handler),
      args.initParame
    ).then(function(result) {
      var result_obj = new setup_init_result({success: result});
      output.writeMessageBegin("init", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("init", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.init(args.initParame, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new setup_init_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("init", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("init", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
setupProcessor.prototype.process_issue = function(seqid, input, output) {
  var args = new setup_issue_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.issue.length === 1) {
    Q.fcall(this._handler.issue.bind(this._handler),
      args.issueParame
    ).then(function(result) {
      var result_obj = new setup_issue_result({success: result});
      output.writeMessageBegin("issue", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("issue", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.issue(args.issueParame, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new setup_issue_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("issue", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("issue", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
setupProcessor.prototype.process_execOne = function(seqid, input, output) {
  var args = new setup_execOne_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.execOne.length === 1) {
    Q.fcall(this._handler.execOne.bind(this._handler),
      args.protocolone
    ).then(function(result) {
      var result_obj = new setup_execOne_result({success: result});
      output.writeMessageBegin("execOne", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("execOne", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.execOne(args.protocolone, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new setup_execOne_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("execOne", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("execOne", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
setupProcessor.prototype.process_execTwo = function(seqid, input, output) {
  var args = new setup_execTwo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.execTwo.length === 1) {
    Q.fcall(this._handler.execTwo.bind(this._handler),
      args.protocoltwo
    ).then(function(result) {
      var result_obj = new setup_execTwo_result({success: result});
      output.writeMessageBegin("execTwo", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("execTwo", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.execTwo(args.protocoltwo, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new setup_execTwo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("execTwo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("execTwo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
