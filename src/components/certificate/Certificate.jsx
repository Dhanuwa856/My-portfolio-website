"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import Certification01 from "../../assets/certificates/Python_for_Beginners_E-Certificate.pdf";
import Certification02 from "../../assets/certificates/Web_Design_for_Beginners_E-Certificate.pdf";

const certificates = [
  {
    id: 1,
    title: "Python for Beginners",
    provider: "University of Moratuwa",
    pdf: Certification01,
    verifyUrl: "https://open.uom.lk/verify/ZL4UEPU0KG",
  },
  {
    id: 2,
    title: "Web Design for Beginners",
    provider: "University of Moratuwa",
    pdf: Certification02,
    verifyUrl: "https://open.uom.lk/verify/MFMdsltqzW",
  },
  {
    id: 3,
    title: "Coming soon",
    provider: "Not available",
    pdf: "SOON",
    verifyUrl: "/",
  },
];

const CertificateSection = ({ darkMode }) => {
  return (
    <section
      className={`py-12 px-4 font-body ${
        darkMode ? " text-white" : " text-gray-900"
      }`}
      id="certificates"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className={`rounded-xl overflow-hidden shadow-lg p-4 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-64 mb-4 rounded-md border"
                title={cert.title}
              />

              <h3 className="text-xl font-semibold mb-1 font-body">
                {cert.title}
              </h3>
              <p className="text-sm mb-2 font-body">{cert.provider}</p>
              <div className="flex gap-3">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
                >
                  View PDF
                </a>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 inline-flex items-center gap-1 hover:underline text-sm"
                >
                  Verify <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
