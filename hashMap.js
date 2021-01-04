class HashMap {
  constructor(initialCapacity=8) {
    this.length = 0;
    this.hashTable = [];
    this.capacity = initialCapacity;
    this.deleted = 0;
  }

  static hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
  set(key, value){
    const loadRatio = (this.length + this.deleted + 1) / this.capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this.resize(this.capacity * HashMap.SIZE_RATIO);
    }
    const index = this.findSlot(key);
    if(!this.hashTable[index]) {
      this.length++;
    }
  }
}