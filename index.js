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

/**
 * Recherche une valeur cible dans un arbre binaire en utilisant un parcours en largeur (Breadth-First Search).
 * Cette méthode itérative utilise une file d'attente pour parcourir l'arbre niveau par niveau,
 * en commençant par la racine et en poursuivant avec les nœuds enfant de gauche à droite.
 *
 * @param {Node} root - La racine de l'arbre binaire à parcourir.
 * @param {*} target - La valeur cible à rechercher dans l'arbre.
 * @returns {boolean} Retourne true si la valeur cible est trouvée, false autrement.
 */
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

/**
 * Recherche une valeur cible dans un arbre binaire en utilisant un parcours en profondeur récursif.
 * Cette méthode examine chaque nœud en commençant par la racine, puis parcourt récursivement
 * les sous-arbres gauche et droit, en cherchant la valeur cible.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire ou d'un sous-arbre actuel.
 * @param {*} target - La valeur cible à rechercher dans l'arbre.
 * @returns {boolean} Retourne true si la valeur cible est trouvée dans l'arbre, false sinon.
 */
const treeIncludes2 = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  return treeIncludes2(root.left, target) || treeIncludes2(root.right, target);
};

/**
 * Calcule la somme des valeurs de tous les nœuds d'un arbre binaire en utilisant la récursivité.
 * Cette fonction parcourt l'arbre en profondeur (DFS) et ajoute la valeur de chaque nœud rencontré.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire.
 * @returns {number} La somme des valeurs de tous les nœuds de l'arbre.
 */
const treeSumm = (root) => {
  if (root === null) return 0;
  return root.value + treeSumm(root.left) + treeSumm(root.right);
};

/**
 * Calcule la somme des valeurs de tous les nœuds d'un arbre binaire en utilisant une file d'attente.
 * Cette fonction parcourt l'arbre en largeur (BFS - Breadth-First Search) et additionne les valeurs
 * de chaque nœud visité.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire.
 * @returns {number} La somme des valeurs de tous les nœuds de l'arbre.
 */
const treeSumm2 = (root) => {
  if (root === null) return 0;
  let summ = 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    summ += current.value;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return summ;
};

/**
 * Trouve la plus petite valeur dans un arbre binaire en utilisant un parcours en profondeur (DFS).
 * Cette fonction itérative utilise une pile pour parcourir l'arbre et trouver le minimum.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire.
 * @returns {number} La plus petite valeur trouvée dans l'arbre.
 */
const treeMinValue = (root) => {
  let smallest = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value < smallest) smallest = current.value;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
};

/**
 * Trouve la plus petite valeur dans un arbre binaire en utilisant un parcours en largeur (BFS).
 * Cette fonction itérative utilise une file d'attente pour parcourir l'arbre niveau par niveau.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire.
 * @returns {number} La plus petite valeur trouvée dans l'arbre.
 */
const treeMinValue2 = (root) => {
  let smallest = Infinity;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value < smallest) smallest = current.value;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
};

/**
 * Trouve la plus petite valeur dans un arbre binaire en utilisant la récursivité.
 * Cette fonction parcourt l'arbre en profondeur et compare les valeurs des nœuds de manière récursive.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire ou d'un sous-arbre actuel.
 * @returns {number} La plus petite valeur trouvée dans l'arbre ou sous-arbre.
 */
const treeMinValue3 = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMinValue3(root.left);
  const rightMin = treeMinValue3(root.right);
  return Math.min(root.value, leftMin, rightMin);
};

/**
 * Calcule la somme maximale d'un chemin de la racine vers une feuille dans un arbre binaire.
 * Cette fonction utilise la récursivité pour parcourir l'arbre et trouver la somme maximale.
 *
 * Un chemin est défini comme une séquence de nœuds allant de la racine de l'arbre à n'importe quelle feuille,
 * et la somme du chemin est la somme de toutes les valeurs des nœuds dans ce chemin.
 *
 * @param {Node} root - Le nœud racine de l'arbre binaire ou d'un sous-arbre actuel.
 * @returns {number} La somme maximale d'un chemin de la racine à une feuille.
 */
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return (root.value = maxChildPathSum);
};

// Appels de fonctions pour tester les implémentations des parcours
depthFirstValues(A);
console.log(depthFirstValues2(A));
console.log(depthFirstValues3(A));
console.log(breadthFirstValues(A));
console.log(treeIncludes(A, "B"));
console.log(treeIncludes2(A, "B"));
