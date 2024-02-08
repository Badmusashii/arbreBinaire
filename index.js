// Arbre Binaire

// Classe Node pour représenter chaque nœud de l'arbre binaire
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Création de l'arbre binaire pour les tests
const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

/**
 * Parcours en profondeur d'un arbre binaire à l'aide d'une pile (Depth-First Search).
 * Cette méthode utilise une approche itérative et visite les nœuds en LIFO (Last In, First Out).
 * Elle imprime la valeur de chaque nœud lors de la visite.
 *
 * @param {Node} root - La racine de l'arbre binaire.
 */
const depthFirstValues = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
};

/**
 * Parcours en profondeur d'un arbre binaire avec stockage des valeurs.
 * Cette version retourne un tableau contenant les valeurs de tous les nœuds visités.
 *
 * @param {Node} root - La racine de l'arbre binaire.
 * @returns {Array} Un tableau des valeurs des nœuds.
 */
const depthFirstValues2 = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return result;
};

/**
 * Parcours en profondeur d'un arbre binaire utilisant la récursivité.
 * Cette fonction visite d'abord la branche gauche, puis la racine, et enfin la branche droite.
 * Cela correspond à un parcours 'in-order' pour les arbres binaires de recherche.
 *
 * @param {Node} root - La racine de l'arbre binaire.
 * @returns {Array} Un tableau des valeurs des nœuds dans l'ordre du parcours.
 */
const depthFirstValues3 = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues3(root.left);
  const rightValues = depthFirstValues3(root.right);

  return [root.value, ...leftValues, ...rightValues];
};

/**
 * Parcours en largeur d'un arbre binaire à l'aide d'une file d'attente (Breadth-First Search).
 * Cette méthode utilise une approche itérative et visite les nœuds en FIFO (First In, First Out).
 * Elle retourne un tableau des valeurs des nœuds suivant l'ordre du parcours en largeur.
 *
 * @param {Node} root - La racine de l'arbre binaire.
 * @returns {Array} Un tableau des valeurs des nœuds.
 */
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    values.push(current.value);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values;
};

// Appels de fonctions pour tester les implémentations des parcours
depthFirstValues(A);
console.log(depthFirstValues2(A));
console.log(depthFirstValues3(A));
console.log(breadthFirstValues(A));
