import {promises as fs} from 'fs'
import readline from 'readline-sync'

const stringify = (unicode: number) =>  {
    return String.fromCharCode(unicode)
}

const run = async (code: string) => {
    const variables: number[] = []
    let pointer = 0

    const statements = code.trim().split(code.indexOf('/')>=0 ? '/' : '\n').map(line => line.trim());
    if(statements[0].slice(0,6) !== '안녕하세요.' || statements.slice(-1)[0].indexOf('드림.')===-1) {
        throw new Error('Error: 메일 재작성 부탁드리겠습니다.')
    }

    const evaluate = async (x: string): Promise<number> => {
        let n = 0

        // 콘솔에서 정수 입력 받기.
        if(x.indexOf('요청드립니다.')>=0) {
            const answer= readline.question();
            x = x.replace('요청드립니다.', '^'.repeat(Number(answer)))
        }

        // 변수 사용

        if(x.indexOf('네')>=0){
            n += variables[x.split('네').length - 2]
        }

        // 연산자
        if(x.indexOf('^')>=0) n += x.split('^').length - 1
        if(x.indexOf('~')>=0) n -= x.split('~').length - 1
        if(x.indexOf('@')>=0) return (await Promise.all(x.split('@').map(evaluate))).reduce((a, b) => a * b)
        return n
    }

    const execute = async (statement: string): Promise<number | undefined> => {
        // 확인해보겠습니다 [0]일때 . 뒤의 state 실행
        if (statement.indexOf('넵, ')>=0 && statement.indexOf(' 확인해보겠습니다. ')>=0) {
            const condition = await evaluate(statement.substring(2, statement.lastIndexOf(' 확인해보겠습니다. ') + 1))
            if (condition === 0) {
                return execute(statement.substring(statement.lastIndexOf(' 확인해보겠습니다. ') + 11));
            }
            return
        }

        if (statement.indexOf('넵, ') >= 0 && statement.slice(-7) === ' 알겠습니다.') {
            process.stdout.write(String(await evaluate(statement.slice(2, -6))));
        }

        if (statement.indexOf('넵, ') >= 0 && statement.slice(-7) === ' 감사합니다.') {
            if (statement === '넵, 감사합니다.') process.stdout.write('\n');
            process.stdout.write(stringify(await evaluate(statement.slice(2, -6))));
        }

        if(statement.indexOf('넹')>=0) {
            // 변수 위치 반환
            const variablePointer = statement.split('넹')[0].split('네').length-1;
            variables[variablePointer] = await evaluate(statement.split('넹')[1]);
        }

        if(statement.indexOf('담당자 연결해드리겠습니다. ')>=0) {
            pointer = await evaluate(statement.split('담당자 연결해드리겠습니다. ')[1]) - 1
        }

        if (statement.indexOf('감사합니다. ') === 0) {
            return evaluate(statement.split('감사합니다. ')[1])
        }
    }

    while(statements[pointer].indexOf('드림.') === -1) {
        pointer+=1;
        const statement = statements[pointer]
        const evaluated = await execute(statement)
        if(evaluated) return evaluated
    }
}

const bootstrap = async (path: string) => {
    try {
        try {
            const splitPathData = path.split('.');
            if(splitPathData[splitPathData.length-1]!=='mz') throw new Error(`Error: 메일 확장자 다시 작성 부탁드립니다.`);
            await fs.access(path)
        } catch(e) {
            throw new Error(e.message === `Error: 메일 확장자 다시 작성 부탁드립니다.` ? e.message :`Error: ${path} 메일을 찾을 수 없습니다.`);
        }

        await run((await fs.readFile(path, 'utf-8')))
    } catch(e) {
        process.stderr.write(`${e.message}\n`)
    }
}

if(process.argv[2]) bootstrap(process.argv[2])