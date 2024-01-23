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
    return e !== undefined && e.match(/^-?([1-9][0-9]*|([0]))$/) !== null;
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

function calculate(fullString: string) {
  function parseFromTree(obj: TreeNode): number {
    switch (obj.type) {
      case "number":
        return parseInt(obj.value!);
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