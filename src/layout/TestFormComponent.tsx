import React from 'react';
import"../styles/style.css"
const TestFormComponent: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input type="text" id="username" />

        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default TestFormComponent;
