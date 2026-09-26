function createProfile() {

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const school = document.getElementById("school").value;
    const location = document.getElementById("location").value;
    const bio = document.getElementById("bio").value;
    const github = document.getElementById("github").value;
    const social = document.getElementById("social").value;

    document.getElementById("displayName").textContent =
        name || "Your Name";

    document.getElementById("displayCourse").textContent =
        course || "Class / Course";

    document.getElementById("displaySchool").textContent =
        school || "Your School";

    document.getElementById("displayLocation").textContent =
        location || "Your City";

    document.getElementById("displayBio").textContent =
        bio || "Your short introduction will appear here.";

    document.getElementById("githubLink").href =
        github || "#";

    document.getElementById("socialLink").href =
        social || "#";
}
function saveAcademicProfile() {

    const course = document.getElementById("academicCourse").value;
    const school = document.getElementById("academicSchool").value;
    const stream = document.getElementById("stream").value;
    const year = document.getElementById("academicYear").value;

    alert(
        "Academic Profile Saved!\n\n" +
        "Course: " + course + "\n" +
        "School: " + school + "\n" +
        "Stream: " + stream + "\n" +
        "Academic Year: " + year
    );
}