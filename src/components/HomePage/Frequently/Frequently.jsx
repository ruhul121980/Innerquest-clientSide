import React from 'react';

export default function Frequently() {
  return (
    <div className="container mx-auto px-4">
      <h2 className='text-center font-bold text-3xl lg:text-4xl xl:text-5xl my-7'>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid gap-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            Why is Inner Quest Counseling Center the Right Choice for Your Mental Health?
          </div>
          <div className="collapse-content"> 
            <p>Inner Quest Counseling Center is committed to providing comprehensive and compassionate mental health care to individuals and families. Here are some reasons why we are the right choice for your mental health needs:
              · Our team consists of highly trained and experienced counselors who specialize in various areas of mental health.
              · We offer personalized treatment plans tailored to each individual's unique needs and goals.
              · Our counseling services provide a safe and supportive environment for clients to explore their thoughts, feelings, and concerns.
              · We use evidence-based therapies and techniques to help clients achieve meaningful and lasting change in their lives.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            What Sets Inner Quest Counseling Center Apart?
          </div>
          <div className="collapse-content"> 
            <p>At Inner Quest Counseling Center, we strive to provide the highest quality mental health care to our clients. Here's what sets us apart from other counseling centers:
              · Our commitment to excellence in client care and service delivery.
              · Our team of dedicated professionals who are passionate about helping others.
              · Our focus on holistic wellness and promoting overall well-being.
              · Our collaborative approach to treatment, which involves working closely with clients to develop personalized goals and strategies for growth.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            How Can Inner Quest Counseling Center Help You?
          </div>
          <div className="collapse-content"> 
            <p>Inner Quest Counseling Center offers a wide range of counseling services to address various mental health concerns. Here's how we can help you:
              · Individual counseling to address personal issues and challenges.
              · Couples counseling to improve communication and strengthen relationships.
              · Family counseling to resolve conflicts and improve family dynamics.
              · Group therapy to connect with others who are facing similar struggles.
              · Specialized services for specific populations, such as children, adolescents, and veterans.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
