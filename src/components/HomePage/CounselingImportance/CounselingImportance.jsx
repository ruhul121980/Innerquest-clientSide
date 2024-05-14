import React, { useState } from 'react';

const CounselingImportance = () => {
  const ReadMore = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };

    return (
      <div className="my-4">
        {isTruncated ? (
          <div>
            <p className="text-gray-700 text-xl">{`${text.slice(0, maxLength)}...`}</p>
            <button
              onClick={toggleTruncate}
              className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline ml-2"
            >
              Read More
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-700">{text}</p>
            <button
              onClick={toggleTruncate}
              className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline ml-2"
            >
              Read Less
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full mx-auto bg-base-200 py-8 px-4">
      <div className='w-2/3 mx-auto '>
      <h2 className="text-4xl text-center font-bold mb-6">Why Counseling is Essential for Mental Health</h2>
      <ReadMore
        text="Professional Guidance: Counselors are trained professionals equipped with the knowledge and skills to address various mental health concerns. They provide guidance, support, and evidence-based interventions tailored to individual needs."
        maxLength={150}
      />
      <ReadMore
        text="Emotional Support: Counseling offers a safe and supportive environment for individuals to express their thoughts, feelings, and concerns without fear of judgment. Counselors provide empathy, validation, and understanding, helping clients feel heard and validated."
        maxLength={150}
      />
      <ReadMore
        text="Insight and Self-Discovery: Counseling encourages self-reflection and self-awareness, enabling individuals to gain insight into their thoughts, behaviors, and patterns. Through exploration and introspection, clients can better understand themselves and their experiences."
        maxLength={150}
      />
      <ReadMore
        text="Coping Strategies: Counselors teach coping strategies and techniques to manage stress, anxiety, depression, and other mental health challenges. These tools empower individuals to develop healthier coping mechanisms and build resilience in the face of adversity."
        maxLength={150}
      />
      <ReadMore
        text="Behavioral Change: Counseling helps individuals identify and modify maladaptive behaviors and patterns that may be contributing to their mental health issues. By learning new skills and adopting healthier habits, clients can create positive changes in their lives."
        maxLength={150}
      />
      </div>
    </div>
  );
};

export default CounselingImportance;
