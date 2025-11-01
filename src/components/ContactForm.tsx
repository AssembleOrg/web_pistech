import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send data to your API endpoint
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-pistech-secondary p-8 rounded-lg shadow-lg max-w-md mx-auto border border-pistech-primary/20">
      <h3 className="text-xl font-semibold text-pistech-primary mb-6">Contactanos</h3>

      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-pistech-primary/20 text-pistech-primary rounded-md border border-pistech-primary/30">
          ¡Mensaje enviado exitosamente! Te contactaremos pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-500/20 text-red-400 rounded-md border border-red-500/30">
          Error al enviar el mensaje. Intentalo de nuevo.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-pistech-light mb-1">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'El nombre es requerido' })}
            className="w-full px-3 py-2 bg-pistech-dark border border-pistech-primary/30 rounded-md text-pistech-light placeholder-pistech-light/50 focus:outline-none focus:ring-2 focus:ring-pistech-primary focus:border-transparent transition-all"
            placeholder="¿Como te llamamos?"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-pistech-light mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'El email es requerido',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Formato de email invalido'
              }
            })}
            className="w-full px-3 py-2 bg-pistech-dark border border-pistech-primary/30 rounded-md text-pistech-light placeholder-pistech-light/50 focus:outline-none focus:ring-2 focus:ring-pistech-primary focus:border-transparent transition-all"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-pistech-light mb-1">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-3 py-2 bg-pistech-dark border border-pistech-primary/30 rounded-md text-pistech-light placeholder-pistech-light/50 focus:outline-none focus:ring-2 focus:ring-pistech-primary focus:border-transparent transition-all"
            placeholder="Tu telefono (opcional)"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-pistech-light mb-1">
            Mensaje *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'El mensaje es requerido' })}
            className="w-full px-3 py-2 bg-pistech-dark border border-pistech-primary/30 rounded-md text-pistech-light placeholder-pistech-light/50 focus:outline-none focus:ring-2 focus:ring-pistech-primary focus:border-transparent resize-none transition-all"
            placeholder="¿Que necesitas automatizar o digitalizar?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-pistech-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </form>
    </div>
  );
}