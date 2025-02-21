


























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigate = useNavigate();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = googleSheetUrls[activeTab];
//       const response = await fetch(url);
//       const csvText = await response.text();

//       const rows = csvText.split('\n');
//       const headers = rows[0].split(',').map((header) => header.trim());
//       const data = rows.slice(1).map((row) => {
//         const values = row.split(',');
//         const job = {};
//         headers.forEach((header, index) => {
//           job[header] = values[index]?.trim() || '';
//         });
//         return job;
//       });

//       const validJobs = data
//         .filter((job) => job['Job Title'])
//         .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//       setJobsData(validJobs);
//       setFilteredJobs(validJobs);
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData
//       .filter((job) => {
//         const jobStartDate = new Date(job['Start Date']);
//         const jobEndDate = new Date(job['End Date']);
//         const filterStart = startDate ? new Date(startDate) : null;
//         const filterEnd = endDate ? new Date(endDate) : null;

//         const matchesDate =
//           (!filterStart || jobStartDate >= filterStart) &&
//           (!filterEnd || jobEndDate <= filterEnd);

//         const matchesLocation =
//           !locationFilter ||
//           job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//         return matchesDate && matchesLocation;
//       })
//       .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//     setFilteredJobs(filtered);
//   };

//   const locationOptions = [
//     'Bilaspur',
//     'Bhilai',
//     'Durg',
//     'Kawardha',
//     'Raipur',
//     'Rajnandgoan',
   
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs</h1>

//       {/* Tab Navigation */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'government'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('government')}
//         >
//           Government Jobs
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'private'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('private')}
//         >
//           Private Jobs
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap items-center space-x-4 mb-4">
//         <div className="flex items-center space-x-4">
//           <label className="flex flex-col">
//             Start Date:
//             <input
//               type="date"
//               className="border rounded px-2 py-1"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </label>
//           <label className="flex flex-col">
//             End Date:
//             <input
//               type="date"
//               className="border rounded px-2 py-1"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </label>
//         </div>
//         <label className="flex flex-col">
//           <span className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-red-500" />
//             <span>Location:</span>
//           </span>
//           <select
//             className="border rounded px-2 py-1"
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//           >
//             <option value="">All Locations</option>
//             {locationOptions.map((location, index) => (
//               <option key={index} value={location}>
//                 {location}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={handleFilter}
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Jobs List */}
//       <div className="border p-4 rounded shadow">
//         {filteredJobs.length > 0 ? (
//           <ul className="space-y-2">
//             {filteredJobs.map((job, index) => (
//               <li key={index}>
//                 <button
//                   className="w-full text-left px-4 py-3 bg-green-100 rounded shadow hover:bg-green-200 transition"
//                   onClick={() => navigate(`/job-details`, { state: { job } })}
//                 >
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={job['Image Link']}
//                       alt={job['Job Title']}
//                       className="w-12 h-12 rounded-full border-2 border-white"
//                     />
//                     <div>
//                       <div className="text-lg font-medium">{job['Job Title']}</div>
//                       <div className="text-sm text-gray-600">
//                         {job['Organization/Company Name']}
//                       </div>
//                       <div className="text-sm text-gray-500 flex items-center space-x-1">
//                         <FaMapMarkerAlt className="text-red-500" />
//                         <span>{job['Location'] || 'Not specified'}</span>
//                       </div>
//                       <div className="text-sm text-green-600">
//                         Start Date: {job['Start Date']}
//                       </div>
//                       <div className="text-sm text-red-600">
//                         End Date: {job['End Date']}
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="text-gray-500">No jobs found...</div>
//         )}
//       </div>
//     </div>
//   );
// }





















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigate = useNavigate();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = googleSheetUrls[activeTab];
//       const response = await fetch(url);
//       const csvText = await response.text();

//       const rows = csvText.split('\n');
//       const headers = rows[0].split(',').map((header) => header.trim());
//       const data = rows.slice(1).map((row) => {
//         const values = row.split(',');
//         const job = {};
//         headers.forEach((header, index) => {
//           job[header] = values[index]?.trim() || '';
//         });
//         return job;
//       });

//       const validJobs = data
//         .filter((job) => job['Job Title'])
//         .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//       setJobsData(validJobs);
//       setFilteredJobs(validJobs);
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData
//       .filter((job) => {
//         const jobStartDate = new Date(job['Start Date']);
//         const jobEndDate = new Date(job['End Date']);
//         const filterStart = startDate ? new Date(startDate) : null;
//         const filterEnd = endDate ? new Date(endDate) : null;

//         const matchesDate =
//           (!filterStart || jobStartDate >= filterStart) &&
//           (!filterEnd || jobEndDate <= filterEnd);

//         const matchesLocation =
//           !locationFilter ||
//           job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//         return matchesDate && matchesLocation;
//       })
//       .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//     setFilteredJobs(filtered);
//   };

//   const shareOnWhatsApp = (job) => {
//     const message = `📢 *Job Alert!* 📢
    
// 🔹 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Organization/Company Name']}
// 📍 *Location:* ${job['Location'] || 'Not specified'}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}

// 🔗 More Details: https://ajaydhurwe.tech/
// 📲 Download App: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe

// Apply now! ✅`;

//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs</h1>

//       {/* Tab Navigation */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'government'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('government')}
//         >
//           Government Jobs
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'private'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('private')}
//         >
//           Private Jobs
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap items-center space-x-4 mb-4">
//         <div className="flex items-center space-x-4">
//           <label className="flex flex-col">
//             Start Date:
//             <input
//               type="date"
//               className="border rounded px-2 py-1"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </label>
//           <label className="flex flex-col">
//             End Date:
//             <input
//               type="date"
//               className="border rounded px-2 py-1"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </label>
//         </div>
//         <label className="flex flex-col">
//           <span className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-red-500" />
//             <span>Location:</span>
//           </span>
//           <select
//             className="border rounded px-2 py-1"
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//           >
//             <option value="">All Locations</option>
//             {['Bilaspur', 'Bhilai', 'Durg', 'Kawardha', 'Raipur', 'Rajnandgoan'].map((location, index) => (
//               <option key={index} value={location}>
//                 {location}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleFilter}>
//           Apply Filter
//         </button>
//       </div>

//       {/* Jobs List */}
//       <div className="border p-4 rounded shadow">
//         {filteredJobs.length > 0 ? (
//           <ul className="space-y-2">
//             {filteredJobs.map((job, index) => (
//               <li key={index} className="flex justify-between items-center p-3 bg-green-100 rounded shadow hover:bg-green-200 transition">
//                 <button
//                   className="w-full text-left"
//                   onClick={() => navigate(`/job-details`, { state: { job } })}
//                 >
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={job['Image Link']}
//                       alt={job['Job Title']}
//                       className="w-12 h-12 rounded-full border-2 border-white"
//                     />
//                     <div>
//                       <div className="text-lg font-medium">{job['Job Title']}</div>
//                       <div className="text-sm text-gray-600">{job['Organization/Company Name']}</div>
//                       <div className="text-sm text-gray-500 flex items-center space-x-1">
//                         <FaMapMarkerAlt className="text-red-500" />
//                         <span>{job['Location'] || 'Not specified'}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//                 <button onClick={() => shareOnWhatsApp(job)} className="text-green-600 text-2xl ml-2">
//                   <FaWhatsapp />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="text-gray-500">No jobs found...</div>
//         )}
//       </div>
//     </div>
//   );
// }








































import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export function Jobs() {
  const [activeTab, setActiveTab] = useState('government');
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const navigate = useNavigate();

  const googleSheetUrls = {
    government:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
    private:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = googleSheetUrls[activeTab];
      const response = await fetch(url);
      const csvText = await response.text();

      const rows = csvText.split('\n');
      const headers = rows[0].split(',').map((header) => header.trim());
      const data = rows.slice(1).map((row) => {
        const values = row.split(',');
        const job = {};
        headers.forEach((header, index) => {
          job[header] = values[index]?.trim() || '';
        });
        return job;
      });

      const validJobs = data
        .filter((job) => job['Job Title'])
        .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

      setJobsData(validJobs);
      setFilteredJobs(validJobs);
    };

    fetchData();
  }, [activeTab]);

  const handleFilter = () => {
    const filtered = jobsData
      .filter((job) => {
        const jobStartDate = new Date(job['Start Date']);
        const jobEndDate = new Date(job['End Date']);
        const filterStart = startDate ? new Date(startDate) : null;
        const filterEnd = endDate ? new Date(endDate) : null;

        const matchesDate =
          (!filterStart || jobStartDate >= filterStart) &&
          (!filterEnd || jobEndDate <= filterEnd);

        const matchesLocation =
          !locationFilter ||
          job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

        return matchesDate && matchesLocation;
      })
      .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

    setFilteredJobs(filtered);
  };

  const locationOptions = ['Bilaspur', 'Bhilai', 'Durg', 'Kawardha', 'Raipur', 'Rajnandgoan'];

  const shareOnWhatsApp = (job) => {
    const message = `📢 *Job Alert!* 📢\n\n🔹 *${job['Job Title']}*\n🏢 ${job['Organization/Company Name']}\n📍 Location: ${job['Location'] || 'Not specified'}\n📅 Start Date: ${job['Start Date']}\n📅 End Date: ${job['End Date']}\n\n🌐 More Details: https://ajaydhurwe.tech/\n📲 Download the app: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Jobs</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'government' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('government')}
        >
          Government Jobs
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('private')}
        >
          Private Jobs
        </button>
      </div>

      {/* Jobs List */}
      <div className="border p-4 rounded shadow">
        {filteredJobs.length > 0 ? (
          <ul className="space-y-2">
            {filteredJobs.map((job, index) => (
              <li key={index} className="bg-green-100 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img
                    src={job['Image Link']}
                    alt={job['Job Title']}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <div className="text-lg font-medium">{job['Job Title']}</div>
                    <div className="text-sm text-gray-600">{job['Organization/Company Name']}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <FaMapMarkerAlt className="text-red-500" />
                      <span>{job['Location'] || 'Not specified'}</span>
                    </div>
                    <div className="text-sm text-green-600">Start Date: {job['Start Date']}</div>
                    <div className="text-sm text-red-600">End Date: {job['End Date']}</div>
                  </div>
                </div>
                {/* WhatsApp Share Button */}
                <button
                  className="mt-2 flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={() => shareOnWhatsApp(job)}
                >
                  <FaWhatsapp className="mr-2" /> Share on WhatsApp
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-4">
            <span className="text-4xl animate-spin">🔄</span> 
            <p className="mt-2 text-lg font-semibold">Searching Jobs</p>
            <span className="text-3xl">🤔</span>
          </div>
        )}
      </div>
    </div>
  );
}
