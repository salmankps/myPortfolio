 const background = document.getElementById("background");

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    background.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 80%)
    `;
  });

  const aboutMeContent=`Hi, I'm Salman KP, an aspiring web developer with a strong focus on building clean, modern websites.

I'm currently deepening my skills in HTML, CSS, and JavaScript, laying a solid foundation for full-stack development. While I'm still exploring whether to move forward with JavaScript-based stacks or .NET, my current priority is mastering the core technologies that power the web.

My journey began with mobile development using Flutter, but I quickly realized that I’m more drawn to the structure, logic, and visual depth of web applications.

I believe in writing purposeful code and designing interfaces that feel intuitive and polished. Every day, I push myself to learn, create, and grow — not just as a developer, but as a builder of meaningful digital experiences`
  
  document.getElementById("about-content").innerHTML = aboutMeContent;