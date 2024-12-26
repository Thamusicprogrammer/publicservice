const employees = [
  { employee_number: "166881", "full_name": "IDOWU-ADELAKUN, Mrs. RASHIDAT AJOKE", "ministry": "EDUCATION DISTRICT I (054)", "grade": "GL10_TS_CTS", "email": "ajokerashidat@lagosstate.gov.ng", "name": "RASHIDAT AJOKE IDOWU-ADELAKUN" },
  { employee_number: "166882", "full_name": "FAHN-BELLO, Mrs. GHANIYAT OMOTOLA", "ministry": "EDUCATION DISTRICT VI (059)", "grade": "GL10_TS_CTS", "email": "ganiatbello@lagosstate.gov.ng", "name": "Ganiat Bello" },
  { employee_number: "166883", "full_name": "GBADAMOSI, Miss ADEOLA DOLAPO", "ministry": "EDUCATION DISTRICT VI (059)", "grade": "GL10_TS_CTS", "email": "agbadamosi@lagosstate.gov.ng", "name": "Adeola E. Gbadamosi" },
  { employee_number: "166884", "full_name": "LAWAL, Mr. IBRAHIM OKANLAWON", "ministry": "EDUCATION DISTRICT IV (057)", "grade": "GL10_TS_CTS", "email": "ibrahimo.lawal@lagosstate.gov.ng", "name": "Lawal Ibrahim Okanlawon" },
  { employee_number: "166885", "full_name": "AKPALA, Mrs. ANIMETU FAITH", "ministry": "EDUCATION DISTRICT II (055)", "grade": "GL10_TS_CTS", "email": "animetuakpala@lagosstate.gov.ng", "name": "Akpala Animetu Faith" },
  { employee_number: "166886", "full_name": "OTUNIGA, Mrs. OLUFUNMILAYO PATIENCE", "ministry": "STATE UNIVERSAL BASIC EDUCATION BOARD(SUBEB 001)", "grade": "GL12_TS_CTS", "email": "otuniga.olufunmilayo@lagosstate.gov.ng", "name": "Otuniga Olufunmilayo Patience" },
  { employee_number: "166887", "full_name": "HAMZAT, Mr. MURITALA OLAWALE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL13_CCS", "email": "hamzat.muritala@lagosstate.gov.ng", "name": "Hamzat Muritala Olawale" },
  { employee_number: "166888", "full_name": "ADEFISAN, Mr. ADEDOJA FRANCIS", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL13_CCS", "email": "adefisan.adedoja@lagosstate.gov.ng", "name": "Adefisan Adedoja Francis" },
  { employee_number: "166889", "full_name": "OPELOYERU, Mrs. FATIMOH FOLAKE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL12_CCS", "email": "fopeloyeru@lagosstate.gov.ng", "name": "Fatimoh F. Opeloyeru" },
  { employee_number: "166890", "full_name": "ONIBUDO, Mrs. RUKAYAT MOTUNRAYO", "ministry": "LAGOS STATE SPORTS COMMISSION(042)", "grade": "GL07_CCS", "email": "r.onibudo@lagosstate.gov.ng", "name": "Rukayat M. Onibudo" },
  { employee_number: "166891", "full_name": "SHAIBU, Mr. ACHILE PETER", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL10_CCS", "email": "shaibu.achile@lagosstate.gov.ng", "name": "Shaibu Achile Peter" },
  { employee_number: "166892", "full_name": "BELLO, Mr. OLAITAN MUHAMMED", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "bello.olaitan@lagosstate.gov.ng", "name": "Bello Olaitan Muhammed" },
  { employee_number: "166893", "full_name": "AGOSA, Mr. SUNDAY SONAYON", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "agosa.sunday@lagosstate.gov.ng", "name": "Agosa Sunday Sonayon" },
  { employee_number: "166894", "full_name": "PARAH, Ms. SERAH", "ministry": "MINISTRY OF EDUCATION(005)", "grade": "GL07_CCS", "email": "sarah.parah@lagosstate.gov.ng", "name": "Parah Sarah Joyful" },
  { employee_number: "166895", "full_name": "ABOGUNLOKO, Mr. SHAMUSIDEEN OLAIWOLA", "ministry": "MOTOR VEHICLE ADMINISTRATION AGENCY (068)", "grade": "GL09_CCS", "email": "sabogunloko@lagosstate.gov.ng", "name": "Shasideen O. Abogunloko" },
  { employee_number: "166896", "full_name": "OLOYEDE, Mr. MUYISIDEEN KOLAWOLE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "oloyede.muyisideen@lagosstate.gov.ng", "name": "Oloyede Muyisideen Kolawole" },
  { employee_number: "166897", "full_name": "MONSURU, Mr. IDOWU YEYENU", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "monsuru.idowu@lagosstate.gov.ng", "name": "Monsuru Idowu Yeyenu" },
  { employee_number: "166898", "full_name": "IDOWU, Mr. OLALEKAN SUNDAY", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "idowu.olalekan@lagosstate.gov.ng", "name": "Idowu Olalekan Sunday" },
  { employee_number: "166899", "full_name": "ADELANI, Mr. MUTAIRU LASISI", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "adelani.mutairu@lagosstate.gov.ng", "name": "Adelani Mutairu Lasisi" },
  { employee_number: "166900", "full_name": "OLAYIWOLA, Mr. TAJUDEEN ADEREMI", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "olayiwola.tajudeen@lagosstate.gov.ng", "name": "Olayiwola Tajudeen Aderemi" },
  { employee_number: "166901", "full_name": "FABIYI, Mrs. ADUKE APEKE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "fabiyi.aduke@lagosstate.gov.ng", "name": "Fabiyi Aduke Apeke" },
  { employee_number: "166902", "full_name": "SUBAIR, Mrs. DORCAS ADEBIMPE", "ministry": "MOTOR VEHICLE ADMINISTRATION AGENCY (068)", "grade": "GL07_CCS", "email": "dsubair@lagosstate.gov.ng", "name": "Dorcas A. Subair" },
  { employee_number: "166903", "full_name": "TIAMIU, Mr. HAKEEM AKANBI", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "tiamiu.hakeem@lagosstate.gov.ng", "name": "Tiamiu Hakeem Akanbi" },
  { employee_number: "166904", "full_name": "AJIBODE, Mr. AKINSOLA ISAAC", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL10_CCS", "email": "ajibode.akinsola@lagosstate.gov.ng", "name": "Ajibode Akinsola Isaac" },
  { employee_number: "166905", "full_name": "OGUNSAKIN, Mr. BOLUWAJI OJO", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL10_CCS", "email": "bogunsakin@lagosstate.gov.ng", "name": "Boluwaji O. Ogunsakin" },
  { employee_number: "166906", "full_name": "OSHO, Mrs. OLUFUNMILAYO MORENIKE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "osho.olufunmilayo@lagosstate.gov.ng", "name": "Osho Olufunmilayo Morenike" },
  { employee_number: "166907", "full_name": "ABDULKADIR, Mr. SHEHU WAHAB", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL04_CCS", "email": "abdulkadir.shehu@lagosstate.gov.ng", "name": "Abdulkadir Shehu Wahab" },
  { employee_number: "166908", "full_name": "AIVOJI, Mr. SUNDAY PAUL", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL07_CCS", "email": "aivoji.sunday@lagosstate.gov.ng", "name": "Aivoji Sunday Paul" },
  { employee_number: "166909", "full_name": "LAWAL, Mrs. BIOLA RUKAYAT", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL08_CCS", "email": "lawal.biola@lagosstate.gov.ng", "name": "Lawal Biola Rukayat" },
  { employee_number: "166910", "full_name": "OBIAKOR, Mrs. BENEDETTE NWAMAKA", "ministry": "EDUCATION DISTRICT III (056)", "grade": "GL16_TS_CTS", "email": "benedette.obiakor@lagosstate.gov.ng", "name": "Benedette Nwamaka Obiakor" },
  { employee_number: "166911", "full_name": "TAIWO, Mrs. ELIZABETH MOSADIOLUWA", "ministry": "GBAGADA GENERAL HOSPITAL (102)", "grade": "GL12_MS_NCHSH", "email": "ektaiwo@lagosstate.gov.ng", "name": "Elizabeth K. Taiwo" },
  { employee_number: "166912", "full_name": "FASHOLA, Miss KAFAYAT OMOBOLANLE", "ministry": "AGBOWA GENERAL HOSPITAL (109)", "grade": "GL09_MS_NCHSH", "email": "kafayat.fashola@lagosstate.gov.ng", "name": "Fashola Kafayat Omobolanle" },
  { employee_number: "166913", "full_name": "ADETUNJI, Mrs. IKEADE", "ministry": "CIVIL SERVICE PENSIONS OFFICE(003)", "grade": "GL13_CCS", "email": "iadetunji@lagosstate.gov.ng", "name": "Ikeade Adetunji" },
  { employee_number: "166914", "full_name": "AKINPELU, Miss OLABISI AJOKEADE", "ministry": "LAGOS STATE HOUSE OF ASSEMBLY(019)", "grade": "GL13_CCS", "email": "ofakinpelu@lagosstate.gov.ng", "name": "Olabisi F. Akinpelu" },
  { employee_number: "166915", "full_name": "GIWA, Mr. MUSTAPHA ADENIYI", "ministry": "MINISTRY OF COMMERCE, INDUSTRY AND COOPERATIVES(004)", "grade": "GL16_CCS", "email": "magiwa@lagosstate.gov.ng", "name": "Mustapha A. Giwa" },
  { employee_number: "166916", "full_name": "OJELABI, Miss SALEWA MODUPEOLA", "ministry": "MINISTRY OF PHYSICAL PLANNING AND URBAN DEVELOPMENT(031)", "grade": "GL12_CCS", "email": "mojelabi@lagosstate.gov.ng", "name": "Modupeola S. Ojelabi" },
  { employee_number: "166917", "full_name": "KADEJO, Mr. YAHYA AKANBI", "ministry": "OFFICE OF TRANSFORMATION, CREATIVITY AND INNOVATIONS (051)", "grade": "GL14_CCS", "email": "ykadejo@lagosstate.gov.ng", "name": "Yahya A. Kadejo" },
  { employee_number: "166918", "full_name": "ADETULA, Mr. ROTIMI", "ministry": "MINISTRY OF TRANSPORTATION(033)", "grade": "GL13_CCS", "email": "radetula@lagosstate.gov.ng", "name": "Rotimi Adetula" },
  { employee_number: "166919", "full_name": "ADEROUNMU, Mrs. TOYIN", "ministry": "LAGOS STATE UNIVERSITY TEACHING HOSPITAL(LASUTH)", "grade": "GL10_MS_NCHSH", "email": "aderounmu.toyin@lagosstate.gov.ng", "name": "ADEROUNMU TOYIN" },
  { employee_number: "166920", "full_name": "SHOYEMI, Miss OLUSOLA JANET", "ministry": "LAGOS STATE UNIVERSITY TEACHING HOSPITAL(LASUTH)", "grade": "GL09_MS_NCHSH", "email": "janet.olusola@lagosstate.gov.ng", "name": "SHOYEMI OLUSOLA JANET" },
  { employee_number: "166921", "full_name": "SANNI, Mrs. IDOWU MORAYO", "ministry": "MINISTRY OF EDUCATION(005)", "grade": "GL12_CCS", "email": "isanni@lagosstate.gov.ng", "name": "Idowu M. Sanni" },
  { employee_number: "166922", "full_name": "LAWAL, Mr. ABUDULAI ADEKUNLE", "ministry": "LAGOS STATE TECHNICAL AND VOCATIONAL EDUCATION BOARD (77121)", "grade": "GL10_TS_CTS", "email": "lawal.abudulai@lagosstate.gov.ng", "name": "Lawal Abudulai Adekunle" },
  { employee_number: "166923", "full_name": "OKEDIRAN, Mrs. KHADIJAT OYINLOLA", "ministry": "EDUCATION DISTRICT I (054)", "grade": "GL10_TS_CTS", "email": "oyinlolakhadijat@lagosstate.gov.ng", "name": "KHADIJAT OYINLOLA OKEDIRAN" },
  { employee_number: "166924", "full_name": "AJAYI, Mrs. OMOBOLA ADEBIMPE", "ministry": "MINISTRY OF ENVIRONMENT(006)", "grade": "GL16_CCS", "email": "oaajayi@lagosstate.gov.ng", "name": "Ajayi" },
  { employee_number: "166925", "full_name": "SOMIDE, Mr. LATEEF AYODELE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL17_CCS", "email": "lsomide@lagosstate.gov.ng", "name": "Lateef A. Somide" },
  { employee_number: "166926", "full_name": "ADEMOLU, Mr. TAIWO AJIBOLA", "ministry": "LANDS BUREAU(023)", "grade": "GL15_CCS", "email": "tademolu@lagosstate.gov.ng", "name": "Taiwo Ajibola. Ademolu" },
  { employee_number: "166927", "full_name": "OYENUGA, Mr. OLUTOKUNBO OLAYODE", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL16_CCS", "email": "oloyenuga@lagosstate.gov.ng", "name": "Olutokunbo O. Oyenuga" },
  { employee_number: "166928", "full_name": "OLUKOKO, Mrs. IBIRONKE ADEOLA", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL15_CCS", "email": "iolukoko@lagosstate.gov.ng", "name": "Ibironke Olukoko" },
  { employee_number: "166929", "full_name": "HOTONU, Mr. OLUJIMI NUNAYON", "ministry": "MINISTRY OF WORKS AND INFRASTRUCTURE(030)", "grade": "GL15_CCS", "email": "ohotonu@lagosstate.gov.ng", "name": "Olujimi Nunayon Hotonu" }
];


    // document.getElementById("loginForm").addEventListener("submit", function (event) {
    //   event.preventDefault();
    //   const employeeNumber = document.getElementById("employeeNumber").value.trim();
    //   const password = document.getElementById("password").value.trim();
    //   document.getElementById("spinner").style.display = "block";
    //   const defaultPassword = "admin";

    //   if (password !== defaultPassword) {
    //     displayError("Incorrect password!");
    //     document.getElementById("spinner").style.display = "none";
    //     return;
    //   }

    //   const employee = employees.find(emp => emp.employee_number === employeeNumber);
    //   if (employee) {
    //     document.getElementById("error-message").style.display = "none";
    //     setTimeout(() => {
    //       displayEmployeeTable([employee]);
    //       document.getElementById("spinner").style.display = "none";
    //     }, 2000);
    //   } else {
    //     displayError("No user found with this employee number!");
    //     document.getElementById("spinner").style.display = "none";
    //   }
    // });

    // document.getElementById("adminLogin").addEventListener("click", function () {
    //   const employeeNumber = document.getElementById("employeeNumber").value.trim();
    //   const password = document.getElementById("password").value.trim();
    //   document.getElementById("spinner").style.display = "block";
    //   const defaultPassword = "admin";

    //   if (password !== defaultPassword) {
    //     displayError("Incorrect password!");
    //     document.getElementById("spinner").style.display = "none";
    //     return;
    //   }

    //   document.getElementById("error-message").style.display = "none";
    //   setTimeout(() => {
    //     displayEmployeeTable(employees);
    //     document.getElementById("spinner").style.display = "none";
    //   }, 2000);
    // });

    // function displayEmployeeTable(employeeList) {
    //   const tableBody = document.getElementById("employeeTableBody");
    //   tableBody.innerHTML = employeeList.map(employee => `
    //     <tr>
    //       <td>${employee.employee_number}</td>
    //       <td>${employee.full_name}</td>
    //       <td>${employee.ministry}</td>
    //       <td>${employee.grade}</td>
    //       <td>${employee.email}</td>
    //       <td>${employee.name}</td>
    //     </tr>
    //   `).join("");
    //   document.getElementById("employeeModal").style.display = "block";
    // }

    // function displayError(message) {
    //   const errorMessageElement = document.getElementById("error-message");
    //   errorMessageElement.textContent = message;
    //   errorMessageElement.style.display = "block";
    // }

    // document.getElementById("closeModal").addEventListener("click", function () {
    //   document.getElementById("employeeModal").style.display = "none";
    // });

    // window.onclick = function (event) {
    //   if (event.target == document.getElementById("employeeModal")) {
    //     document.getElementById("employeeModal").style.display = "none";
    //   }
    // };

    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const employeeNumber = document.getElementById("employeeNumber").value.trim();
      const password = document.getElementById("password").value.trim();
      document.getElementById("spinner").style.display = "block";
      const defaultPassword = "admin";
    
      if (password !== defaultPassword) {
        displayError("Incorrect password!");
        document.getElementById("spinner").style.display = "none";
        return;
      }
    
      const employee = employees.find(emp => emp.employee_number === employeeNumber);
      if (employee) {
        document.getElementById("error-message").style.display = "none";
        setTimeout(() => {
          displayEmployeeTable([employee]);
          document.getElementById("spinner").style.display = "none";
        }, 2000);
      } else {
        displayError("No user found with this employee number!");
        document.getElementById("spinner").style.display = "none";
      }
    });
    
    document.getElementById("adminLogin").addEventListener("click", function () {
      const employeeNumber = document.getElementById("employeeNumber").value.trim();
      const password = document.getElementById("password").value.trim();
      document.getElementById("spinner").style.display = "block";
      const defaultPassword = "admin";
    
      if (password !== defaultPassword) {
        displayError("Incorrect password!");
        document.getElementById("spinner").style.display = "none";
        return;
      }
    
      document.getElementById("error-message").style.display = "none";
      setTimeout(() => {
        displayEmployeeTable(employees);
        document.getElementById("spinner").style.display = "none";
      }, 2000);
    });
    
    function displayEmployeeTable(employeeList) {
      const tableBody = document.getElementById("employeeTableBody");
      tableBody.innerHTML = employeeList.map(employee => `
        <tr>
          <td>${employee.employee_number}</td>
          <td>${employee.full_name}</td>
          <td>${employee.ministry}</td>
          <td>${employee.grade}</td>
          <td>${employee.email}</td>
          <td>${employee.name}</td>
        </tr>
      `).join("");
      document.getElementById("employeeModal").style.display = "block";
    }
    
    function displayError(message) {
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = message;
      errorMessageElement.style.display = "block";
    }
    
    document.getElementById("closeModal").addEventListener("click", function () {
      document.getElementById("employeeModal").style.display = "none";
    });
    
    window.onclick = function (event) {
      if (event.target == document.getElementById("employeeModal")) {
        document.getElementById("employeeModal").style.display = "none";
      }
    };
    
    // Add search filter
    document.getElementById("searchInput").addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      const filteredEmployees = employees.filter(employee => {
        return employee.employee_number.toLowerCase().includes(query) ||
               employee.full_name.toLowerCase().includes(query) ||
               employee.ministry.toLowerCase().includes(query) ||
               employee.grade.toLowerCase().includes(query) ||
               employee.email.toLowerCase().includes(query) ||
               employee.name.toLowerCase().includes(query);
      });
    
      displayEmployeeTable(filteredEmployees);
    });