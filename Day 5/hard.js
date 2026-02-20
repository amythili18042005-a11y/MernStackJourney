function longestConsecutiveSequence(nums) {
    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num;
            let len = 1;
            while (set.has(curr + 1)) {
                curr++;
                len++;
            }
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));