"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var readline_sync_1 = __importDefault(require("readline-sync"));
var stringify = function (unicode) {
    return String.fromCharCode(unicode);
};
var run = function (code) { return __awaiter(void 0, void 0, void 0, function () {
    var variables, pointer, statements, evaluate, execute, statement, evaluated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                variables = [];
                pointer = 0;
                statements = code.trim().split(code.indexOf('/') >= 0 ? '/' : '\n').map(function (line) { return line.trim(); });
                if (statements[0].slice(0, 6) !== '안녕하세요.' || statements.slice(-1)[0].indexOf('드림.') === -1) {
                    throw new Error('Error: 메일 재작성 부탁드리겠습니다.');
                }
                evaluate = function (x) { return __awaiter(void 0, void 0, void 0, function () {
                    var n, answer;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                n = 0;
                                // 콘솔에서 정수 입력 받기.
                                if (x.indexOf('요청드립니다.') >= 0) {
                                    answer = readline_sync_1.default.question();
                                    x = x.replace('요청드립니다.', '^'.repeat(Number(answer)));
                                }
                                // 변수 사용
                                if (x.indexOf('네') >= 0) {
                                    n += variables[x.split('네').length - 2];
                                }
                                // 연산자
                                if (x.indexOf('^') >= 0)
                                    n += x.split('^').length - 1;
                                if (x.indexOf('~') >= 0)
                                    n -= x.split('~').length - 1;
                                if (!(x.indexOf('@') >= 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, Promise.all(x.split('@').map(evaluate))];
                            case 1: return [2 /*return*/, (_a.sent()).reduce(function (a, b) { return a * b; })];
                            case 2: return [2 /*return*/, n];
                        }
                    });
                }); };
                execute = function (statement) { return __awaiter(void 0, void 0, void 0, function () {
                    var condition, _a, _b, _c, _d, _e, _f, variablePointer, _g, _h;
                    return __generator(this, function (_j) {
                        switch (_j.label) {
                            case 0:
                                if (!(statement.indexOf('넵, ') >= 0 && statement.indexOf(' 확인해보겠습니다. ') >= 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, evaluate(statement.substring(2, statement.lastIndexOf(' 확인해보겠습니다. ') + 1))];
                            case 1:
                                condition = _j.sent();
                                if (condition === 0) {
                                    return [2 /*return*/, execute(statement.substring(statement.lastIndexOf(' 확인해보겠습니다. ') + 11))];
                                }
                                return [2 /*return*/];
                            case 2:
                                if (!(statement.indexOf('넵, ') >= 0 && statement.slice(-7) === ' 알겠습니다.')) return [3 /*break*/, 4];
                                _b = (_a = process.stdout).write;
                                _c = String;
                                return [4 /*yield*/, evaluate(statement.slice(2, -6))];
                            case 3:
                                _b.apply(_a, [_c.apply(void 0, [_j.sent()])]);
                                _j.label = 4;
                            case 4:
                                if (!(statement.indexOf('넵, ') >= 0 && statement.slice(-7) === ' 감사합니다.')) return [3 /*break*/, 6];
                                if (statement === '넵, 감사합니다.')
                                    process.stdout.write('\n');
                                _e = (_d = process.stdout).write;
                                _f = stringify;
                                return [4 /*yield*/, evaluate(statement.slice(2, -6))];
                            case 5:
                                _e.apply(_d, [_f.apply(void 0, [_j.sent()])]);
                                _j.label = 6;
                            case 6:
                                if (!(statement.indexOf('넹') >= 0)) return [3 /*break*/, 8];
                                variablePointer = statement.split('넹')[0].split('네').length - 1;
                                _g = variables;
                                _h = variablePointer;
                                return [4 /*yield*/, evaluate(statement.split('넹')[1])];
                            case 7:
                                _g[_h] = _j.sent();
                                _j.label = 8;
                            case 8:
                                if (!(statement.indexOf('담당자 연결해드리겠습니다. ') >= 0)) return [3 /*break*/, 10];
                                return [4 /*yield*/, evaluate(statement.split('담당자 연결해드리겠습니다. ')[1])];
                            case 9:
                                pointer = (_j.sent()) - 1;
                                _j.label = 10;
                            case 10:
                                if (statement.indexOf('감사합니다. ') === 0) {
                                    return [2 /*return*/, evaluate(statement.split('감사합니다. ')[1])];
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                _a.label = 1;
            case 1:
                if (!(statements[pointer].indexOf('드림.') === -1)) return [3 /*break*/, 3];
                pointer += 1;
                statement = statements[pointer];
                return [4 /*yield*/, execute(statement)];
            case 2:
                evaluated = _a.sent();
                if (evaluated)
                    return [2 /*return*/, evaluated];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}); };
var bootstrap = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    var splitPathData, e_1, _a, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                splitPathData = path.split('.');
                if (splitPathData[splitPathData.length - 1] !== 'mz')
                    throw new Error("Error: \uBA54\uC77C \uD655\uC7A5\uC790 \uB2E4\uC2DC \uC791\uC131 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.");
                return [4 /*yield*/, fs_1.promises.access(path)];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                throw new Error(e_1.message === "Error: \uBA54\uC77C \uD655\uC7A5\uC790 \uB2E4\uC2DC \uC791\uC131 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4." ? e_1.message : "Error: ".concat(path, " \uBA54\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
            case 4:
                _a = run;
                return [4 /*yield*/, fs_1.promises.readFile(path, 'utf-8')];
            case 5: return [4 /*yield*/, _a.apply(void 0, [(_b.sent())])];
            case 6:
                _b.sent();
                return [3 /*break*/, 8];
            case 7:
                e_2 = _b.sent();
                process.stderr.write("".concat(e_2.message, "\n"));
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
if (process.argv[2])
    bootstrap(process.argv[2]);
