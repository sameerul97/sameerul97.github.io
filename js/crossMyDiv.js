/*!
 * Slant My Div v1.5
 * slantmydiv.io
 * by Sameerul
 *
 * More info:
 * https://github.com/sameerul97/crossmydiv.io
 *
 * Released under the MIT license
 */

function crossDivUpToLow(context) {
    // console.log("sa " + context.color)
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function crossDivLowToUp(context) {
    userStyles = context;
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function slantedRightToLeft(context) {
    userStyles = context;
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function slantedLeftToRight(context) {
    userStyles = context;
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function slantedBottomRight(context) {
    userStyles = context;
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function slantedBottomLeft(context) {
    userStyles = context;
    this.setBg = function (divClassName) {
        className = divClassName;
        userStyles = context;
        setBackgroundByClass(className, userStyles);
    }
    this.setBgById = function (yourId) {
        userStyles = context;
        classId = yourId;
        setBackgroundById(classId, userStyles);
    }
}

function setBackgroundByClass(className, userStyles) {
    // Loop through each class and apply the styling if provided
    for (let index = 0; index < document.getElementsByClassName(className).length; index++) {
        // console.log(context.imageUrl)
        // If image and background are set 
        if (userStyles.imageUrl && userStyles.background) {
            document.getElementsByClassName(className)[index].style.background = userStyles.background + ",url('" + context.imageUrl + "')";
        }
        if (userStyles.background) {
            document.getElementsByClassName(className)[index].style.background = userStyles.background;
        }
        if (userStyles.imageUrl) {
            document.getElementsByClassName(className)[index].style.backgroundImage = "url('" + userStyles.imageUrl + "')";
        }
        if (userStyles.color) {
            document.getElementsByClassName(className)[index].style.backgroundColor = userStyles.color;
        }
        if (userStyles.repeat) {
            document.getElementsByClassName(className)[index].style.backgroundRepeat = userStyles.repeat;
        }
        if (userStyles.backgroundSize) {
            document.getElementsByClassName(className)[index].style.backgroundSize = userStyles.backgroundSize;
        }
        if (userStyles.backgroundOrigin) {
            document.getElementsByClassName(className)[index].style.backgroundOrigin = userStyles.backgroundOrigin;
        }
        if (userStyles.backgroundAttachment) {
            document.getElementsByClassName(className)[index].style.backgroundAttachment = userStyles.backgroundAttachment;
        }
        if (userStyles.position) {
            document.getElementsByClassName(className)[index].style.backgroundPosition = userStyles.position;
        }
    }
}

function setBackgroundById(classId, userStyles) {
    if (userStyles.imageUrl && userStyles.background) {
        document.getElementById(classId).style.backgroundPosition.style.background = userStyles.background + ",url('" + userStyles.imageUrl + "')";
    }
    if (userStyles.background) {
        document.getElementById(classId).style.background = userStyles.background;
    }
    // Background image
    if (userStyles.imageUrl) {
        document.getElementById(classId).style.backgroundImage = "url(" + userStyles.imageUrl + ");";
    }
    if (userStyles.color) {
        document.getElementById(classId).style.backgroundColor = userStyles.color;
    }
    if (userStyles.repeat) {
        document.getElementById(classId).style.backgroundRepeat = userStyles.repeat;
    }
    if (userStyles.backgroundSize) {
        document.getElementById(classId).style.backgroundSize = userStyles.backgroundSize;
    }
    if (userStyles.backgroundOrigin) {
        document.getElementById(classId).style.backgroundOrigin = userStyles.backgroundOrigin;
    }
    if (userStyles.backgroundAttachment) {
        document.getElementById(classId).style.backgroundAttachment = userStyles.backgroundAttachment;
    }
    if (userStyles.position) {
        document.getElementById(classId).style.backgroundPosition = userStyles.position;
    }
}


