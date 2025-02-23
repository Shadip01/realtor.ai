import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { signUp, signUpSchema, type SignUpValues } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = useCallback(async (data: SignUpValues) => {
    try {
      await signUp(data);
      toast.success('Account created successfully!');
      navigate('/signin');
    } catch (error) {
      toast.error(error?.message || 'Failed to create account. Please try again.');
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium">Date of Birth</label>
            <input
              id="dob"
              type="date"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              {...register('dob')}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              {...register('phone')}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Creating account...
              </>
            ) : (
              'Create account'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}