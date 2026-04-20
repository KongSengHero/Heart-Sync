async function loadComponent(htmlPath, containerId, scriptPath) { 
    const response = await fetch(htmlPath); 
    const html = await response.text(); 
    const container = document.getElementById(containerId);
    if (!container) {
        // Container not present on this page — skip injecting this component.
        return;
    }
    container.innerHTML = html; 

    if (scriptPath) { 
        const script = document.createElement('script'); 
        script.src = scriptPath; 
        document.body.appendChild(script); 
    }
}

// Load Components 
loadComponent('../frontend/components/navigation.html', 'load_navigation', '../frontend/components/navigation.js'); 
loadComponent('../frontend/components/footer.html', 'load_footer', '../frontend/components/footer.js'); 
