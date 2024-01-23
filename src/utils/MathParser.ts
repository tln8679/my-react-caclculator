interface TreeNode {
  type?: string,
  value?: string,
  left?: TreeNode
  right?: TreeNode
}

const getClearDisplay = () => {
  return '0';
};

function createTree(fullString: string) {
  const strArray = fullString.split(" ");
  let pos = 0;

  function checkPos() {
    return strArray[pos];
  }

  function isNumber(e: string | undefined) {
    return e !== undefined && !['+', '-', '/', 'x'].includes(e);
  }

  function jumpNext() {
    pos++;
  }

  function parseNumber(): TreeNode {
    const k = checkPos();
    if (isNumber(k)) {
      jumpNext();
      return { type: "number", value: k };
    } else {
      throw SyntaxError("Invalid Format");
    }
  }

  function parseMulDiv() {
    let expr = parseNumber();
    let k = checkPos();
    while (k === "x" || k === "/") {
      jumpNext();
      const rhs = parseNumber();
      expr = { type: k, left: expr, right: rhs };
      k = checkPos();
    }
    return expr;
  }

  function parseAddSub() {
    let expr = parseMulDiv();
    let k = checkPos();
    while (k === "-" || k === "+") {
      jumpNext();
      const rhs = parseMulDiv();
      expr = { type: k, left: expr, right: rhs };
      k = checkPos();
    }
    return expr;
  }

  const output = parseAddSub();
  return output;
}

/**
 * 
 * Implementation is based on Abstact Syntax Tree from https://gist.github.com/kermit-klein/ee4d5ced1d389b714e055ac6c39b5ac8
 * 
 * @param fullString string input of operands and operators
 * @returns new display value for the user
 */
function calculate(fullString: string) {
  function parseFromTree(obj: TreeNode): number {
    switch (obj.type) {
      case "number":
        return parseFloat(obj.value!);
      case "^":
        return parseFromTree(obj.left!) ** parseFromTree(obj.right!);
      case "+":
        return parseFromTree(obj.left!) + parseFromTree(obj.right!);
      case "-":
        return parseFromTree(obj.left!) - parseFromTree(obj.right!);
      case "x":
        return parseFromTree(obj.left!) * parseFromTree(obj.right!);
      case "/":
        return parseFromTree(obj.left!) / parseFromTree(obj.right!);
      default:
        return 0;
    }
  }
  // Create an AST from the display string
  const tree = createTree(fullString);
  return parseFromTree(tree).toString();
}

export {
  getClearDisplay,
  calculate
};