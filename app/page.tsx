"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="p-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold">Kammari Sai Yugandhar</h1>
        <p className="text-lg text-gray-600 mt-2">
          Data Engineering Associate @ Accenture
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-700">
          <div className="flex items-center gap-1">
            <MapPin size={18} /> Navi Mumbai
          </div>
          <div className="flex items-center gap-1">
            <Phone size={18} /> +91 93817 59232
          </div>
          <div className="flex items-center gap-1">
            <Mail size={18} /> saiyugandhar0720@gmail.com
          </div>
          <a
            href="https://linkedin.com/in/sai-yugandhar-kammari-a63530200"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Results-driven Data Engineering Associate at Accenture with over 1 year of hands-on
            experience in data management, ETL pipeline development, and cloud-based analytics.
            Proficient in Databricks, Informatica, Python, SQL, and Big Data ecosystems, with a strong
            ability to design scalable, automated data workflows that enhance operational performance
            and decision-making efficiency. Certified Databricks Data Engineer Professional & Associate,
            with a passion for building high-performance data systems that bridge business strategy and
            data-driven insights.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Accenture — Data Engineering, Management & Governance Associate
              </h3>
              <p className="text-sm text-gray-500 mb-2">Navi Mumbai | July 2024 – Present</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  Engineered and optimized ETL pipelines using Informatica BDM and Databricks, ensuring seamless integration across multiple data sources.
                </li>
                <li>
                  Automated workflows, reducing manual intervention by 40% and improving data refresh speed by 30%.
                </li>
                <li>
                  Maintained Big Data Lake architecture on Azure and HDFS for scalability and accuracy.
                </li>
                <li>
                  Improved SQL performance via optimization, achieving 25% faster data processing.
                </li>
                <li>
                  Collaborated in Agile teams to ensure compliance with governance standards.
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Technologies: Databricks, Informatica BDM, Azure Data Factory, SQL, PySpark, Hadoop, Python
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Bank of Baroda Analytics and Reporting System</h3>
              <p className="text-sm text-gray-500 mb-2">
                Informatica BDM, HDFS, Python, SQL
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Designed ETL workflows to process 1M+ daily financial transactions.</li>
                <li>Leveraged HDFS for distributed storage, reducing query latency by 20%.</li>
                <li>Automated reporting pipelines using Python, increasing insight speed by 35%.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Databricks Certified Data Engineer Professional (2025 – 2027)</li>
            <li>Databricks Certified Data Engineer Associate (2025 – 2027)</li>
            <li>From Data to Insights with Google Cloud – Coursera (2022)</li>
            <li>Accenture Technology Quotient (TQ) – Agentic AI Certified (2025)</li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold">Programming</h4>
              <p>Python, C++, SQL</p>
            </div>
            <div>
              <h4 className="font-semibold">Data Engineering</h4>
              <p>Databricks, Informatica BDM, Hadoop, PySpark</p>
            </div>
            <div>
              <h4 className="font-semibold">Cloud</h4>
              <p>Azure (ADF, ADLS), AWS (S3, EC2)</p>
            </div>
            <div>
              <h4 className="font-semibold">DevOps & Visualization</h4>
              <p>Docker, Git, Power BI, Tableau</p>
            </div>
            <div>
              <h4 className="font-semibold">Core Concepts</h4>
              <p>ETL, Data Modeling, Data Governance, Big Data Analytics</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Achievements & Leadership</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Technovanza 2.0 Hackathon Finalist — Smart India Hackathon 2022 (National Round).</li>
            <li>Information Security Advocate — Recognized at Accenture.</li>
            <li>Technical Lead, AI Club – CMRTC — Organized ML workshops for 100+ students.</li>
            <li>Represented college in Badminton and Cricket at inter-college level.</li>
          </ul>
        </section>

        {/* Contact */}
        <div className="text-center py-8">
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            <a href="mailto:saiyugandhar0720@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-200 text-sm">
        © {new Date().getFullYear()} Kammari Sai Yugandhar. Built with ❤️ using React & TailwindCSS.
      </footer>
    </div>
  );
}
