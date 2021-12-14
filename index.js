function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42;
    } else if (blocks < 42) {
        return 42 - blocks;
    };
};

function distanceFromHqInFeet(blocks) {
    if (blocks >= 42) {
        return (blocks - 42)*264;
    } else if (blocks < 42) {
        return (42 - blocks)*264;
    };
};

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end)*264;
    } else if (start < end) {
        return (end - start)*264;
    };
    
};

function calculatesFarePrice(start, destination) {
    let feet = (Math.abs(start - destination)*264);
    if (feet <= 400) {
        return 0;
    } else if (feet >= 400 && feet < 2000) {
        return (feet - 400) * .02;
    } else if (feet >= 2000 && feet < 2500) {
        return 25;
    } else if (feet >= 2500) {
        return 'cannot travel that far';
    }
}
