function getCookie(name) {
    const value = document.cookie;
    const parts = value.split("; ");
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function recommendCourse(scores) {
    let maxScore = 0;
    let maxScoreSubjects = [];
    let stream = getCookie("stream")
    console.log(stream, (document.cookie.split("; ")[3]).split("=")[1])
    console.log(eval(Object.values(scores[0])[0]))

    // Find the subjects with the highest score
    for (const subject in scores) {
        let score = eval(Object.values(scores[subject])[0]);
        console.log("examining score of: " + Object.keys(scores[subject])[0])
        if (score > maxScore) {
            maxScore = score;
            maxScoreSubjects = [Object.keys(scores[subject])[0]];
            console.log("new maxScore found:" + score);
        } else if (score == maxScore) {
            // If multiple subjects have the same highest score, add them to the array
            maxScoreSubjects.push(Object.keys(scores[subject])[0]);
            console.log("same maxScore found:" + score);
        }
    }
    console.log(maxScoreSubjects)

    // Handle multiple subjects with the same max score
    if (maxScoreSubjects.length == 1) {
        // Only one subject with the max score
        const maxScoreSubject = maxScoreSubjects[0];
        switch (maxScoreSubject) {
            case 'Computer':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering',
                        'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'
                    ];
                }
                if (stream == 'arts') {
                    return ['BA LLB', 'BA in Communication', 'BA in Journalism', 'Bachelor of Journalism & Mass Communication', 'BCA'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'BBA', 'Bachelor of Economics', 'BCOM', 'BBA Hons. in Hospitality and Tourism Management', 'BCA'];
                }
                break;
            case 'English':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in Zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'];
                }
                if (stream == 'arts') {
                    return ['BCA', 'BA in Biology', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Psychology', 'BA in Studio Art', 'BA in Theatre and Drama', 'BA in Music', 'BA LLB', 'Bachelor of Journalism & Mass Communication', 'BA in Humanities and Social Science', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Hotel and Tourism Management', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'BDes in Fashion Designing', 'BDes in Interior Design', 'BDes in Communication Design', 'BDes in Industrial & Product Design'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Company Secretary', 'Cost and Management Accountant', 'Bachelor of Economics', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'BBA Hons in Hospitality and Tourism Management', 'BSc IT', 'BCA'];
                }
                break;
            case 'Mathematics':
                if (stream == 'science') {
                    return ['BSc IT', 'BCA', 'BSc in Biology', 'BSc in Microbiology', 'BSc in Zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'BSc in Genetics', 'BSc in Agrochemical Science', 'BSc in Dairy Farming', 'BSc in Dairy Technology', 'BSc in Audiology', 'BSc in Agriculture', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'];
                }
                if (stream == 'arts') {
                    return ['Bachelor of Economics', 'Media and Communication', 'BA in Economics', 'BA in Education', 'BA LLB', 'Diploma in Education', 'BSc IT', 'BCA'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Cost and Management Accountant', 'BCOM', 'Bachelor of Business Management', 'LLB', 'BSc IT', 'BCA']; // Change this based on your specific logic
                }
                break;
            case 'Logical & Reasoning':
                if (stream == 'science') {
                    return ['BSc IT', 'BCA', 'BSc in Biology', 'BSc in Biotechnology', 'MBBS', 'BSc in Genetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BA in Biology'];
                }
                if (stream == 'arts') {
                    return ['BA in Economics', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Biology', 'Bachelors of Journalism & Mass Communication', 'BA LLB', 'Diploma in Journalism and Mass Communication', 'Diploma in Game Design and Integration', 'Diploma in Nutrition and Dietetics', 'BSc IT', 'BCA'];
                }
                if (stream == 'commerce') {
                    return ['BCOM', 'BBA', 'Integrated MBA', 'BSc IT', 'BCA']; // Change this based on your specific logic
                }
                break;
            case 'Statistics':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Genetics'];
                }
                if (stream == 'arts') {
                    return ['BA in Psychology'];
                }
                if (stream == 'commerce') {
                    return ['B.Com', 'BAF', 'Bachelor of Business Management']; // Change this based on your specific logic
                }
                break;
            case 'Ethical hacking':
                if (stream == 'science') {
                    return ['BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'BCA', 'B.Tech in Aeronautical Engineering', 'B.Tech in Computer Engineering'];
                }
                if (stream == 'arts') {
                    return ['BSc IT', 'BCA'];
                }
                if (stream == 'commerce') {
                    return ['BSc IT', 'BCA']; // Change this based on your specific logic
                }
                break;
            case 'Web Design':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Aeronautical Engineering', 'Diploma in Broadcast graphics', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Des. in Animation Film Design'];
                }
                if (stream == 'arts') {
                    return ['Diploma in Broadcast graphics', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Des. in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['BSc IT', 'BCA', 'BBA']; // Change this based on your specific logic
                }
                break;
            case 'Computer Architecture':
                if (stream == 'science') {
                    return ['BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronical Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Instrumentation and control Engineering', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Dairy Technology', 'Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Des. in Animation Film Design', 'BCA'];
                }
                if (stream == 'arts') {
                    return ['Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Des. in Animation Film Design', 'BCA', 'BSc IT'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Des. in Animation Film Design', 'BCA', 'BSc IT']; // Change this based on your specific logic
                }
                break;
            case 'Cyber Security':
                if (stream == 'science') {
                    return ['BCA', 'BSc in Biotechnology', 'B.Tech in Computer Science and Engineering', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'BSc IT'];
                }
                if (stream == 'arts') {
                    return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design'];
                }
                if (stream == 'commerce') {
                    return ['BCA', 'BSc IT']; // Change this based on your specific logic
                }
                break;
            case 'Coding':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Des in Animation Film Design', 'BSc in Medical Technology', 'BSc in Biotechnology', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects'];
                }
                if (stream == 'arts') {
                    return ['B.Des in Animation Film Design', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects', 'BCA', 'BSc IT'];
                }
                if (stream == 'commerce') {
                    return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                }
                break;
            case 'Digital Arts':
                if (stream == 'science') {
                    return ['BSc IT', 'Media and Communication', 'BCA', 'Mass and Communication', 'Mass and Communication in Film', 'B.Tech in Electrical Engineering', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'B.Des in Animation Film Design'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'Mass and Communication', 'BA in Communication', 'BA in Education', 'BA in Studio Art', 'BA in Music', 'BDes in fashion Designing', 'BDes in Communication Design', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['Bachelor of Business Management', 'BCA', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                }
                break;
            case 'Leadership':
                if (stream == 'science') {
                    return ['BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in zoology', 'BSc in Medical Technology', 'BSc in Botany', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Diploma in Nursing', 'B.Tech in Mechanical Engineering', 'B.Tech in Civil Engineering', , 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['BA in Communication', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Psychology', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'BCA', 'Company Secretary', 'Cost and Management Accountant', 'Bachelor of Economics', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management']; // Change this based on your specific logic
                }
                break;
            case 'Research and Obervation':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in zoology', 'BSc in Biotechnology', 'BSc in Botany', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Mechanical Engineering', 'BA in Biology'];
                }
                if (stream == 'arts') {
                    return ['BA in Communication', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'BA in Psychology', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'Diploma in Education'];
                }
                if (stream == 'commerce') {
                    return ['BDes in Communication Design', 'BDes in Industrial & Product Design', 'Bachelor of Economics', 'BBA', 'Integrated MBA', 'BSc IT', 'BCA']; // Change this based on your specific logic
                }
                break;
            case 'Robotics & ML/AI':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT', 'BSc in Medical Technology', 'Diploma in Game Design And Integration', 'B.Tech in Computer Science and Engineering'];
                }
                if (stream == 'arts') {
                    return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration'];
                }
                if (stream == 'commerce') {
                    return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration']; // Change this based on your specific logic
                }
                break;
            case 'Animation':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT'];
                }
                if (stream == 'arts') {
                    return ['BCA', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Game Design And Integration', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['BCA', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Game Design And Integration', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                }
                break;
            case 'Accounts':
                if (stream == 'science') {
                    return ['BCA', 'BSc IT'];
                }
                if (stream == 'arts') {
                    return ['BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Company Secretary', 'Bachelor of Economics', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                }
                break;
            case 'Business Administration':
                if (stream == 'science') {
                    return ['B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'BA in Economics', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management', ];
                } else {
                    return ['BAF', 'Company Secretary', 'Cost and Management Accountant', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'Media and Communication', 'BA in Economics', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                }
                break;
            case 'Civics':
                if (stream == 'science') {
                    return ['Media and Communication', 'Mass and Communication'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'Mass and Communication', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'BA in Economics'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Company Secretary', 'Bachelor of Economics', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'Media and Communication', 'Mass and Communication', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'BA in Economics'];
                }
                break;
            case 'Trignometry':
                if (stream == 'science') {
                    return ['B.Tech in Electrical Engineering', 'BSc in Genetics', 'B.Tech in Computer Engineering'];
                }
                if (stream == 'arts') {
                    return ['B.Des in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'B.Des in Animation Film Design'];
                }
                break;
            case 'Writing':
                if (stream == 'science') {
                    return ['BSc in Biology', 'MBBS', 'Bachelor of Pharmacy', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Diploma in Pharmacy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Humanities and Social Science'];
                }
                if (stream == 'arts') {
                    return ['BA in Biology', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BDes in Communication Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in Education', 'BA LLB'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Cost and Management Accountant', 'LLB', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film'];
                }
                break;
            case 'Law':
                if (stream == 'science') {
                    return ['Media and Communication'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'BA in Communication', 'BA in Economics', 'BA in Journalism', 'BA in Political Science', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'Bachelor of Journalism & Mass Communication', 'BA LLB'];
                }
                if (stream == 'commerce') {
                    return ['BAF', 'Company Secretary', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'Bachelor of Journalism & Mass Communication'];
                }
                break;
            case 'Arithmetic':
                if (stream == 'science') {
                    return ['B.Tech in Electrical Engineering'];
                }
                if (stream == 'arts') {
                    return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                }
                if (stream == 'commerce') {
                    return ['Company Secretary', 'Cost and Management Accountant', 'BCOM', 'Bachelor of Business Management'];
                }
                break;
            case 'Algebra':
                if (stream == 'science') {
                    return ['B.Tech in Electrical Engineering', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'B.Tech in Computer Engineering'];
                }
                if (stream == 'arts') {
                    return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                }
                if (stream == 'commerce') {
                    return ['Company Secretary', 'Cost and Management Accountant', 'Bachelor of Business Management', 'Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                }
                break;
            case 'Management':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'Bachelor in Optometry', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['BA in Studio Art', 'BA in Music', 'BDes in fashion Designing', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'BA LLB', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Hotel and Tourism Management'];
                }
                if (stream == 'commerce') {
                    return ['Company Secretary', 'Cost and Management Accountant', 'Integrated MBA', 'LLB', 'Media and Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Hotel and Tourism Management', ];
                }
                break;
            case 'Political Science':
                if (stream == 'science') {
                    return ['B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'Mass and Communication', 'BA in Economics', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', ];
                }
                if (stream == 'commerce') {
                    return ['Bachelor of Economics', 'LLB'];
                }
                break;
            case 'Chemistry':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BA in Biology', 'BDes in Industrial & Product Design', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Anchoring':
                if (stream == 'science') {
                    return ['N/A'];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'Diploma in Event Management'];
                }
                if (stream == 'commerce') {
                    return ['LLB', 'Mass and Communication', 'Mass and Communication in Film', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'Diploma in Event Management'];
                }
                break;
            case 'Physics':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in Medical Technology', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'Diploma in Game Design And Integration', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['BA in Biology', ];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'P.T':
                if (stream == 'science') {
                    return ['BSc in Food Technology', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Bachelor in Optometry', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Civil Engineering', 'Diploma in Beauty Therapy'];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication in Film', 'Bachelor of Homeopathic Medicine and Surgery'];
                }
                if (stream == 'commerce') {
                    return ['Mass and Communication in Film'];
                }
                break;
            case 'Gujarati':
                if (stream == 'science') {
                    return ['N/A'];
                }
                if (stream == 'arts') {
                    return ['BA in Journalism', 'BA in Political Science', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music', 'Bachelor of Journalism & Mass Communication'];
                }
                if (stream == 'commerce') {
                    return ['Bachelor of Journalism & Mass Communication'];
                }
                break;
            case 'History':
                if (stream == 'science') {
                    return ['BSc in zoology', 'Bachelor of Homeopathic Medicine and Surgery', 'Bachelor of Ayurvedic Medicine and Surgery', 'B.Tech in Mechanical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Studio Art', 'BDes in fashion Designing', 'BDes in Communication Design', 'BA LLB', 'Diploma in Education', ];
                }
                if (stream == 'commerce') {
                    return ['LLB', 'Mass and Communication in Film', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education'];
                }
                break;
            case 'Sanskrit':
                if (stream == 'science') {
                    return ['Bachelor of Homeopathic Medicine and Surgery', 'Bachelor of Ayurvedic Medicine and Surgery'];
                }
                if (stream == 'arts') {
                    return ['BA in Philosophy', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Sociology':
                if (stream == 'science') {
                    return ['B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'Mass and Communication', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Psychology', 'BA in Studio Art', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'Diploma in Education'];
                }
                if (stream == 'commerce') {
                    return ['Media and Communication', 'Mass and Communication', 'Bachelor of Journalism & Mass Communication'];
                }
                break;
            case 'Geography':
                if (stream == 'science') {
                    return ['B.Tech in Environment Engineering', 'B.Tech in Humanities and Social Science', 'BSc in zoology', 'Bachelor of Science in Agrochemical Science', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology'];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management'];
                }
                if (stream == 'commerce') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management'];
                }
                break;
            case 'Acting':
                if (stream == 'science') {
                    return ['Mass and Communication in Film'];
                }
                if (stream == 'arts') {
                    return ['BA in Theatre and Drama', 'Mass and Communication in Film'];
                }
                if (stream == 'commerce') {
                    return ['Mass and Communication in Film'];
                }
                break;
            case 'Cooking':
                if (stream == 'science') {
                    return ['BSc in Food Technology', 'Bachelor of Ayurvedic Medicine and Surgery', 'Diploma in Nutrition and Dietetics'];
                }
                if (stream == 'arts') {
                    return ['Diploma in Hotel and Tourism Management'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in Hotel and Tourism Management'];
                }
                break;
            case 'Carpentary':
                if (stream == 'science') {
                    return ['BSc in Agriculture'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Gardening':
                if (stream == 'science') {
                    return ['BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Life Science', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'B.Tech in Environment Engineering'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Handicrafts and Arts':
                if (stream == 'science') {
                    return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                }
                if (stream == 'arts') {
                    return ['BA in Studio Art', 'BDes in Fashion Designing', 'Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                }
                break;
            case 'Indoor Games':
                if (stream == 'science') {
                    return ['Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Knitting':
                if (stream == 'science') {
                    return ['N/A'];
                }
                if (stream == 'arts') {
                    return ['BA in Studio Art'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Music':
                if (stream == 'science') {
                    return ['Bachelor of Ayurvedic Medicine and Surgery'];
                }
                if (stream == 'arts') {
                    return ['BA in Theatre and Drama', 'BA in Music', , 'Mass and Communication in Film'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Makeup':
                if (stream == 'science') {
                    return ['Mass and Communication in Film'];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication in Film', 'Diploma in Beauty Therapy', 'Diploma in Aviation Management'];
                }
                if (stream == 'commerce') {
                    return ['Mass and Communication in Film'];
                }
                break;
            case 'Outdoor Games':
                if (stream == 'science') {
                    return ['B.Tech in Aeronautical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Mechanical Engineering', 'Diploma in Nutrition and Dietetics', 'Bachelor in Physiotherapy'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Painting':
                if (stream == 'science') {
                    return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                }
                if (stream == 'arts') {
                    return ['BA in Education', 'BA in English', 'BA in Studio Art', 'BDes in Fashion Designing', 'BDes in Interior Design', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Graphic, Web and Multimedia Design'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Graphic, Web and Multimedia Design'];
                }
                break;
            case 'Reading':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'B.Tech in Computer Science and Engineering', ];
                }
                if (stream == 'arts') {
                    return ['BA in Biology', 'BA in Communication', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Psychology', 'BA LLB', 'Diploma in Education'];
                }
                if (stream == 'commerce') {
                    return ['Cost and Management Accountant', 'LLB', 'Media and Communication', 'Mass and Communication', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education'];
                }
                break;
            case 'Travelling':
                if (stream == 'science') {
                    return ['BSc in Zoology', 'BSc in Botany', 'BSc in Nursing', 'Diploma in Nursing', ];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BA in Philosophy', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Event Management', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'B.Des in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'Bachelor of Journalism & Mass Communication'];
                }
                break;
            case 'Lab Skills':
                if (stream == 'science') {
                    return ['BSc in Biology', 'BSc in Zoology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'BA in Biology'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Biology':
                if (stream == 'science') {
                    return ['Bachelor in Dental surgery', 'BSc in Microbiology', 'BSc in Medical Technology', 'Diploma in Beauty Therapy', 'B.Tech in Environment Engineering', 'BSc in Biology', 'BSc in Zoology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics'];
                }
                if (stream == 'arts') {
                    return ['BA in Psychology', 'BA in Biology'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Environmental Science':
                if (stream == 'science') {
                    return ['BSc in Zoology', 'BSc in Medical Technology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Life Science', 'Bachelor of Veterinary Sciences', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'B.Tech in Environment Engineering'];
                }
                if (stream == 'arts') {
                    return ['BA in Biology', 'BA in Education', 'Diploma in Education', 'Diploma in Aviation Management'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in Education', 'Diploma in Aviation Management'];
                }
                break;
            case 'Wildlife Research':
                if (stream == 'science') {
                    return ['BSc in Zoology', 'BSc in Life Science', 'Bachelor of Veterinary Sciences', 'BSc in Agriculture', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Electronics and Hardware':
                if (stream == 'science') {
                    return ['BSc in Food Technology', 'BSc in Agriculture', 'Bachelor of Science in Agrochemical Science', 'Diploma in X-Ray technology', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering'];
                }
                if (stream == 'arts') {
                    return ['N/A'];
                }
                if (stream == 'commerce') {
                    return ['N/A'];
                }
                break;
            case 'Fine Arts':
                if (stream == 'science') {
                    return ['B.Tech in Aeronautical Engineering', ];
                }
                if (stream == 'arts') {
                    return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Studio Art', 'BA in Theatre and Drama', 'BA in Music', 'BDes in Fashion Designing', 'BDes in Interior Design', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion', 'Textile and Apparel Design (Part Time)', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                }
                if (stream == 'commerce') {
                    return ['BBA Hons in Hospitality and Tourism Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion', ];
                }
                break;
            case 'Geometry':
                if (stream == 'science') {
                    return ['BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering'];
                }
                if (stream == 'arts') {
                    return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                }
                if (stream == 'commerce') {
                    return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                }
                break;
            case 'Psychology':
                if (stream == 'science') {
                    return ['B.Tech in Environment Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'Bachelor in Dental surgery', 'BSc in Microbiology', 'MBBS'];
                }
                if (stream == 'arts') {
                    return ['BA in Communication', 'BA in Education', 'BA in Philosophy', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music', 'BDes in Interior Design', 'BA LLB', 'Diploma in Education', 'Diploma in Beauty Therapy', 'Diploma in Event Management'];
                }
                if (stream == 'commerce') {
                    return ['LLB', 'Diploma in Event Management'];
                }
                break;
            case 'Philosophy':
                if (stream == 'science') {
                    return ['B.Tech in Environment Engineering', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                }
                if (stream == 'arts') {
                    return ['Media and Communication', 'BA in English', 'BA in Philosophy'];
                }
                if (stream == 'commerce') {
                    return ['Media and Communication'];
                }
                break;
            default:
                return ['N/A'];
        }
    } else {
        // Multiple subjects with the same max score, consider marks to recommend courses
        for (let index = 0; index < maxScoreSubjects.length; index++) {
            const element = maxScoreSubjects[index];
            switch (element) {
                case 'Computer':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering',
                            'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'
                        ];
                    }
                    if (stream == 'arts') {
                        return ['BA LLB', 'BA in Communication', 'BA in Journalism', 'Bachelor of Journalism & Mass Communication', 'BCA'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'BBA', 'Bachelor of Economics', 'BCOM', 'BBA Hons. in Hospitality and Tourism Management', 'BCA'];
                    }
                    break;
                case 'English':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in Zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'];
                    }
                    if (stream == 'arts') {
                        return ['BCA', 'BA in Biology', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Psychology', 'BA in Studio Art', 'BA in Theatre and Drama', 'BA in Music', 'BA LLB', 'Bachelor of Journalism & Mass Communication', 'BA in Humanities and Social Science', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Hotel and Tourism Management', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'BDes in Fashion Designing', 'BDes in Interior Design', 'BDes in Communication Design', 'BDes in Industrial & Product Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Company Secretary', 'Cost and Management Accountant', 'Bachelor of Economics', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'BBA Hons. in Hospitality and Tourism Management', 'BSc IT', 'BCA'];
                    }
                    break; // Change this based on your specific logic
                case 'Mathematics':
                    if (stream === 'Science') {
                        return ['BSc IT', 'BCA', 'BSc in Biology', 'BSc in Microbiology', 'BSc in Zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'BSc in Genetics', 'BSc in Agrochemical Science', 'BSc in Dairy Farming', 'BSc in Dairy Technology', 'BSc in Audiology', 'BSc in Agriculture', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Science and Humanities', 'B.Des. in Animation Film Design'];
                    }
                    if (stream == 'arts') {
                        return ['Bachelor of Economics', 'Media and Communication', 'BA in Economics', 'BA in Education', 'BA LLB', 'Diploma in Education', 'BSc IT', 'BCA'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Cost and Management Accountant', 'BCOM', 'Bachelor of Business Management', 'LLB', 'BSc IT', 'BCA']; // Change this based on your specific logic
                    }
                    break;
                case 'Logical & Reasoning':
                    if (stream == 'science') {
                        return ['BSc IT', 'BCA', 'BSc in Biology', 'BSc in Biotechnology', 'MBBS', 'BSc in Genetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BA in Biology'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Economics', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Biology', 'Bachelors of Journalism & Mass Communication', 'BA LLB', 'Diploma in Journalism and Mass Communication', 'Diploma in Game Design and Integration', 'Diploma in Nutrition and Dietetics', 'BSc IT', 'BCA'];
                    }
                    if (stream == 'commerce') {
                        return ['BCOM', 'BBA', 'Integrated MBA', 'BSc IT', 'BCA']; // Change this based on your specific logic
                    } // Change this based on your specific logic
                    break;
                case 'Statistics':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Genetics'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Psychology'];
                    }
                    if (stream == 'commerce') {
                        return ['B.Com', 'BAF', 'Bachelor of Business Management']; // Change this based on your specific logic
                    }
                    break;
                case 'Ethical hacking':
                    if (stream == 'science') {
                        return ['BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'BCA', 'B.Tech in Aeronautical Engineering', 'B.Tech in Computer Engineering'];

                    }
                    if (stream == 'arts') {
                        return ['BSc IT', 'BCA'];
                    }
                    if (stream == 'commerce') {
                        return ['BSc IT', 'BCA']; // Change this based on your specific logic
                    }
                    break;
                case 'Web Design':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Aeronautical Engineering', 'Diploma in Broadcast graphics', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Des. in Animation Film Design'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in Broadcast graphics', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Des. in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BSc IT', 'BCA', 'BBA']; // Change this based on your specific logic
                    }
                    break;
                case 'Computer Architecture':
                    if (stream == 'science') {
                        return ['BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronical Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Instrumentation and control Engineering', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Dairy Technology', 'Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Des. in Animation Film Design', 'BCA'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Des. in Animation Film Design', 'BCA', 'BSc IT'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in Game Design And Integration', 'Diploma in Visual Effects', 'B.Des. in Animation Film Design', 'BCA', 'BSc IT']; // Change this based on your specific logic
                    }
                    break;
                case 'Cyber Security':
                    if (stream == 'science') {
                        return ['BCA', 'BSc in Biotechnology', 'B.Tech in Computer Science and Engineering', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'BSc IT'];
                    }
                    if (stream == 'arts') {
                        return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BCA', 'BSc IT']; // Change this based on your specific logic
                    }
                    break;
                case 'Coding':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT', 'B.Tech in Computer Science and Engineering', 'B.Tech in Electronical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Instrumentation and Control Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Des in Animation Film Design', 'BSc in Medical Technology', 'BSc in Biotechnology', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects'];
                    }
                    if (stream == 'arts') {
                        return ['B.Des in Animation Film Design', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects', 'BCA', 'BSc IT'];
                    }
                    if (stream == 'commerce') {
                        return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Visual Effects', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                    }
                    break;
                case 'Digital Arts':
                    if (stream == 'science') {
                        return ['BSc IT', 'Media and Communication', 'BCA', 'Mass and Communication', 'Mass and Communication in Film', 'B.Tech in Electrical Engineering', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'B.Des in Animation Film Design'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'Mass and Communication', 'BA in Communication', 'BA in Education', 'BA in Studio Art', 'BA in Music', 'BDes in fashion Designing', 'BDes in Communication Design', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['Bachelor of Business Management', 'BCA', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                    }
                    break;
                case 'Leadership':
                    if (stream == 'science') {
                        return ['BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in zoology', 'BSc in Medical Technology', 'BSc in Botany', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Diploma in Nursing', 'B.Tech in Mechanical Engineering', 'B.Tech in Civil Engineering', , 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Communication', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BA in Psychology', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'BCA', 'Company Secretary', 'Cost and Management Accountant', 'Bachelor of Economics', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management']; // Change this based on your specific logic
                    }

                case 'Research and Obervation':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in zoology', 'BSc in Biotechnology', 'BSc in Botany', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Mechanical Engineering', 'BA in Biology'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Communication', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'BA in Psychology', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'Diploma in Education'];
                    }
                    if (stream == 'commerce') {
                        return ['BDes in Communication Design', 'BDes in Industrial & Product Design', 'Bachelor of Economics', 'BBA', 'Integrated MBA', 'BSc IT', 'BCA']; // Change this based on your specific logic
                    }
                    break;
                case 'Robotics & ML/AI':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT', 'BSc in Medical Technology', 'Diploma in Game Design And Integration', 'B.Tech in Computer Science and Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration'];
                    }
                    if (stream == 'commerce') {
                        return ['BCA', 'BSc IT', 'Diploma in Game Design And Integration']; // Change this based on your specific logic
                    }
                    break;
                case 'Animation':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT'];
                    }
                    if (stream == 'arts') {
                        return ['BCA', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Game Design And Integration', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BCA', 'BSc IT', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Broadcast Graphics', 'Diploma in Game Design And Integration', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design']; // Change this based on your specific logic
                    }
                    break;
                case 'Accounts':
                    if (stream == 'science') {
                        return ['BCA', 'BSc IT'];
                    }
                    if (stream == 'arts') {
                        return ['BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Company Secretary', 'Bachelor of Economics', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                    }
                    break;
                case 'Business Administration':
                    if (stream == 'science') {
                        return ['B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'BA in Economics', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management', ];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Company Secretary', 'Cost and Management Accountant', 'BCOM', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'Media and Communication', 'BA in Economics', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Event Management', 'Diploma in Hotel and Tourism Management'];
                    }
                    break;
                case 'Civics':
                    if (stream == 'science') {
                        return ['Media and Communication', 'Mass and Communication'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'Mass and Communication', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'BA in Economics'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Company Secretary', 'Bachelor of Economics', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'Media and Communication', 'Mass and Communication', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'BA in Economics'];
                    }
                case 'Trignometry':
                    if (stream == 'science') {
                        return ['B.Tech in Electrical Engineering', 'BSc in Genetics', 'B.Tech in Computer Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['B.Des in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'B.Des in Animation Film Design'];
                    }
                    break;
                case 'Writing':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'MBBS', 'Bachelor of Pharmacy', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Diploma in Pharmacy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Humanities and Social Science'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Biology', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'BDes in Communication Design', 'Bachelor of Journalism & Mass Communication', 'Diploma in Education', 'BA LLB'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Cost and Management Accountant', 'LLB', 'Media and Communication', 'Mass and Communication', 'Mass and Communication in Film'];
                    }
                    break;
                case 'Law':
                    if (stream == 'science') {
                        return ['Media and Communication'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'BA in Communication', 'BA in Economics', 'BA in Journalism', 'BA in Political Science', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'Bachelor of Journalism & Mass Communication', 'BA LLB'];
                    }
                    if (stream == 'commerce') {
                        return ['BAF', 'Company Secretary', 'BBA', 'Bachelor of Business Management', 'Integrated MBA', 'LLB', 'Bachelor of Journalism & Mass Communication'];
                    }
                    break;
                case 'Arithmetic':
                    if (stream == 'science') {
                        return ['B.Tech in Electrical Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                    }
                    if (stream == 'commerce') {
                        return ['Company Secretary', 'Cost and Management Accountant', 'BCOM', 'Bachelor of Business Management'];
                    }
                    break;
                case 'Algebra':
                    if (stream == 'science') {
                        return ['B.Tech in Electrical Engineering', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'B.Tech in Computer Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                    }
                    if (stream == 'commerce') {
                        return ['Company Secretary', 'Cost and Management Accountant', 'Bachelor of Business Management', 'Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                    }
                    break;
                case 'Management':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'Bachelor in Optometry', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Studio Art', 'BA in Music', 'BDes in fashion Designing', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'BA LLB', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Hotel and Tourism Management'];
                    }
                    if (stream == 'commerce') {
                        return ['Company Secretary', 'Cost and Management Accountant', 'Integrated MBA', 'LLB', 'Media and Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion, Textile and Apparel Design (Part Time)', 'Diploma in Hotel and Tourism Management', ];
                    }
                    break;
                case 'Political Science':
                    if (stream == 'science') {
                        return ['B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'Mass and Communication', 'BA in Economics', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', ];
                    }
                    if (stream == 'commerce') {
                        return ['Bachelor of Economics', 'LLB'];
                    }
                    break;
                case 'Chemistry':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in zoology', 'BSc in Medical Technology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BA in Biology', 'BDes in Industrial & Product Design', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Anchoring':
                    if (stream == 'science') {
                        return ['N/A'];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'Diploma in Event Management'];
                    }
                    if (stream == 'commerce') {
                        return ['LLB', 'Mass and Communication', 'Mass and Communication in Film', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in History', 'BA in Journalism', 'BA in Political Science', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education', 'Diploma in Event Management'];
                    }
                    break;
                case 'Physics':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Microbiology', 'Bachelor in Dental surgery', 'BSc in Medical Technology', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Chemical Engineering', 'BDes in Interior Design', 'BDes in Industrial & Product Design', 'Diploma in Game Design And Integration', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and instrumentation Engineering', 'B.Tech in Aeronautical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Computer Engineering', 'B.Tech in Electronics and telecommunication Engineering', 'B.Tech in Environment Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Biology', ];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'P.T':
                    if (stream == 'science') {
                        return ['BSc in Food Technology', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'Bachelor in Optometry', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'B.Tech in Civil Engineering', 'Diploma in Beauty Therapy'];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication in Film', 'Bachelor of Homeopathic Medicine and Surgery'];
                    }
                    if (stream == 'commerce') {
                        return ['Mass and Communication in Film'];
                    }
                    break;
                case 'Gujarati':
                    if (stream == 'science') {
                        return ['N/A'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Journalism', 'BA in Political Science', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music', 'Bachelor of Journalism & Mass Communication'];
                    }
                    if (stream == 'commerce') {
                        return ['Bachelor of Journalism & Mass Communication'];
                    }
                    break;
                case 'History':
                    if (stream == 'science') {
                        return ['BSc in zoology', 'Bachelor of Homeopathic Medicine and Surgery', 'Bachelor of Ayurvedic Medicine and Surgery', 'B.Tech in Mechanical Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Studio Art', 'BDes in fashion Designing', 'BDes in Communication Design', 'BA LLB', 'Diploma in Education', ];
                    }
                    if (stream == 'commerce') {
                        return ['LLB', 'Mass and Communication in Film', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education'];
                    }
                    break;
                case 'Sanskrit':
                    if (stream == 'science') {
                        return ['Bachelor of Homeopathic Medicine and Surgery', 'Bachelor of Ayurvedic Medicine and Surgery'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Philosophy', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Sociology':
                    if (stream == 'science') {
                        return ['B.Tech in Humanities and Social Science', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'Mass and Communication', 'BA in Communication', 'BA in Economics', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Psychology', 'BA in Studio Art', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'Diploma in Education'];
                    }
                    if (stream == 'commerce') {
                        return ['Media and Communication', 'Mass and Communication', 'Bachelor of Journalism & Mass Communication'];
                    }
                    break;
                case 'Geography':
                    if (stream == 'science') {
                        return ['B.Tech in Environment Engineering', 'B.Tech in Humanities and Social Science', 'BSc in zoology', 'Bachelor of Science in Agrochemical Science', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology'];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BDes in Interior Design', 'Bachelor of Journalism & Mass Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management'];
                    }
                    if (stream == 'commerce') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management'];
                    }
                    break;
                case 'Acting':
                    if (stream == 'science') {
                        return ['Mass and Communication in Film'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Theatre and Drama', 'Mass and Communication in Film'];
                    }
                    if (stream == 'commerce') {
                        return ['Mass and Communication in Film'];
                    }
                    break;
                case 'Cooking':
                    if (stream == 'science') {
                        return ['BSc in Food Technology', 'Bachelor of Ayurvedic Medicine and Surgery', 'Diploma in Nutrition and Dietetics'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in Hotel and Tourism Management'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in Hotel and Tourism Management'];
                    }
                    break;
                case 'Carpentary':
                    if (stream == 'science') {
                        return ['BSc in Agriculture'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Gardening':
                    if (stream == 'science') {
                        return ['BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Life Science', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'B.Tech in Environment Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Handicrafts and Arts':
                    if (stream == 'science') {
                        return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Studio Art', 'BDes in Fashion Designing', 'Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in Fashion, Textile and Apparel Design (Part Time)'];
                    }
                    break;
                case 'Indoor Games':
                    if (stream == 'science') {
                        return ['Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Knitting':
                    if (stream == 'science') {
                        return ['N/A'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Studio Art'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Music':
                    if (stream == 'science') {
                        return ['Bachelor of Ayurvedic Medicine and Surgery'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Theatre and Drama', 'BA in Music', , 'Mass and Communication in Film'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Makeup':
                    if (stream == 'science') {
                        return ['Mass and Communication in Film'];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication in Film', 'Diploma in Beauty Therapy', 'Diploma in Aviation Management'];
                    }
                    if (stream == 'commerce') {
                        return ['Mass and Communication in Film'];
                    }
                    break;
                case 'Outdoor Games':
                    if (stream == 'science') {
                        return ['B.Tech in Aeronautical Engineering', 'B.Tech in Civil Engineering', 'B.Tech in Mechanical Engineering', 'Diploma in Nutrition and Dietetics', 'Bachelor in Physiotherapy'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Painting':
                    if (stream == 'science') {
                        return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Education', 'BA in English', 'BA in Studio Art', 'BDes in Fashion Designing', 'BDes in Interior Design', 'Diploma in Education', 'Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Graphic, Web and Multimedia Design'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in 3D Animation', 'Advanced Diploma in Animation', 'Diploma in Graphic, Web and Multimedia Design'];
                    }
                    break;
                case 'Reading':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'Diploma in Pharmacy', 'B.Tech in Computer Science and Engineering', ];
                    }
                    if (stream == 'arts') {
                        return ['BA in Biology', 'BA in Communication', 'BA in Education', 'BA in English', 'BA in History', 'BA in Journalism', 'BA in Philosophy', 'BA in Psychology', 'BA LLB', 'Diploma in Education'];
                    }
                    if (stream == 'commerce') {
                        return ['Cost and Management Accountant', 'LLB', 'Media and Communication', 'Mass and Communication', 'Bachelor of Journalism & Mass Communication', 'BA LLB', 'Diploma in Education'];
                    }
                    break;
                case 'Travelling':
                    if (stream == 'science') {
                        return ['BSc in Zoology', 'BSc in Botany', 'BSc in Nursing', 'Diploma in Nursing', ];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Journalism', 'BA in Philosophy', 'BA in Theatre and Drama', 'Bachelor of Journalism & Mass Communication', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Aviation Management', 'Diploma in Event Management', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'B.Des in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'Bachelor of Journalism & Mass Communication'];
                    }
                    break;
                case 'Lab Skills':
                    if (stream == 'science') {
                        return ['BSc in Biology', 'BSc in Zoology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics', 'BA in Biology'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Biology':
                    if (stream == 'science') {
                        return ['Bachelor in Dental surgery', 'BSc in Microbiology', 'BSc in Medical Technology', 'Diploma in Beauty Therapy', 'B.Tech in Environment Engineering', 'BSc in Biology', 'BSc in Zoology', 'BSc in Biotechnology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Nursing', 'BSc in Life Science', 'MBBS', 'Bachelor of Veterinary Sciences', 'Bachelor of Pharmacy', 'BSc in Food Technology', 'BSc in Agriculture', 'BSc in Genetics', 'Bachelor of Science in Agrochemical Science', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'BSc in Audiology', 'Bachelor in Optometry', 'Diploma in Pharmacy', 'Diploma in Nursing', 'Diploma in Medical Laboratory Technology', 'Diploma in Operation Theatre Technology', 'Diploma in X-Ray technology', 'Bachelor in Physiotherapy', 'Diploma in Nutrition and Dietetics'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Psychology', 'BA in Biology'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Environmental Science':
                    if (stream == 'science') {
                        return ['BSc in Zoology', 'BSc in Medical Technology', 'BSc in Botany', 'Bachelor of Homeopathic Medicine and Surgery', 'BSc in Life Science', 'Bachelor of Veterinary Sciences', 'BSc in Agriculture', 'Bachelor of Ayurvedic Medicine and Surgery', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'B.Tech in Environment Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Biology', 'BA in Education', 'Diploma in Education', 'Diploma in Aviation Management'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in Education', 'Diploma in Aviation Management'];
                    }
                    break;
                case 'Wildlife Research':
                    if (stream == 'science') {
                        return ['BSc in Zoology', 'BSc in Life Science', 'Bachelor of Veterinary Sciences', 'BSc in Agriculture', 'BSc in Dairy Farming', 'B.Tech in Dairy Technology'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Electronics and Hardware':
                    if (stream == 'science') {
                        return ['BSc in Food Technology', 'BSc in Agriculture', 'Bachelor of Science in Agrochemical Science', 'Diploma in X-Ray technology', 'B.Tech in Computer Science and Engineering', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Electronics and Communication Engineering', 'B.Tech in Electronics and Communication', 'B.Tech in Electronics and Instrumentation Engineering', 'B.Tech in Automobile Engineering', 'B.Tech in Electronics and Telecommunication Engineering', 'B.Tech in Information and Communication Technology', 'B.Tech in Information Technology', 'B.Tech in Instrumentation and Control Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['N/A'];
                    }
                    if (stream == 'commerce') {
                        return ['N/A'];
                    }
                    break;
                case 'Fine Arts':
                    if (stream == 'science') {
                        return ['B.Tech in Aeronautical Engineering', ];
                    }
                    if (stream == 'arts') {
                        return ['Mass and Communication', 'Mass and Communication in Film', 'BA in Studio Art', 'BA in Theatre and Drama', 'BA in Music', 'BDes in Fashion Designing', 'BDes in Interior Design', 'BDes in Communication Design', 'BDes in Industrial & Product Design', 'BBA Hons in Hospitality and Tourism Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion', 'Textile and Apparel Design (Part Time)', 'Diploma in Game Design And Integration', 'Diploma in Graphic, Web and Multimedia Design', 'Diploma in Photography and VFX (Part Time)', 'Diploma in Photography, Videography & Cinematography', 'Diploma in Visual Effects', 'B.Des in Animation Film Design'];
                    }
                    if (stream == 'commerce') {
                        return ['BBA Hons in Hospitality and Tourism Management', 'Diploma in Broadcast Graphics', 'Diploma in Event Management', 'Diploma in Fashion', ];
                    }
                    break;
                case 'Geometry':
                    if (stream == 'science') {
                        return ['BSc in Dairy Farming', 'B.Tech in Dairy Technology', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'B.Tech in Civil Engineering'];
                    }
                    if (stream == 'arts') {
                        return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                    }
                    if (stream == 'commerce') {
                        return ['Diploma in 3D Animation', 'Advanced Diploma in Animation'];
                    }
                    break;
                case 'Psychology':
                    if (stream == 'science') {
                        return ['B.Tech in Environment Engineering', 'B.Tech in Humanities and Social Science', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities', 'Bachelor in Dental surgery', 'BSc in Microbiology', 'MBBS'];
                    }
                    if (stream == 'arts') {
                        return ['BA in Communication', 'BA in Education', 'BA in Philosophy', 'BA in Psychology', 'BA in Theatre and Drama', 'BA in Music', 'BDes in Interior Design', 'BA LLB', 'Diploma in Education', 'Diploma in Beauty Therapy', 'Diploma in Event Management'];
                    }
                    if (stream == 'commerce') {
                        return ['LLB', 'Diploma in Event Management'];
                    }
                    break;
                case 'Philosophy':
                    if (stream == 'science') {
                        return ['B.Tech in Environment Engineering', 'B.Tech in Instrumentation and control Engineering', 'B.Tech in Science and Humanities'];
                    }
                    if (stream == 'arts') {
                        return ['Media and Communication', 'BA in English', 'BA in Philosophy'];
                    }
                    if (stream == 'commerce') {
                        return ['Media and Communication'];
                    }
                    break;
                default:
                    return ['N/A'];
            }
        }


    }
}