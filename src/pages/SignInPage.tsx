import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { signIn, signInSchema, type SignInValues } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isAppleLoading, setIsAppleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInValues) => {
    try {
      await signIn(data);
      toast.success('Signed in successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
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
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 my-4">
          <div className="h-px w-1/3 bg-gray-300"></div>
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="h-px w-1/3 bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => {}}
            disabled={isGoogleLoading}
            className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100"
          >
            {isGoogleLoading ? (
              <Loader2 className="animate-spin h-4 w-4" />
            ) : (
              <>
                <img src="/api/placeholder/20/20" alt="Google" className="h-5 w-5 mr-2" />
                Google
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {}}
            disabled={isAppleLoading}
            className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100"
          >
            {isAppleLoading ? (
              <Loader2 className="animate-spin h-4 w-4" />
            ) : (
              <>
                <img src="/api/placeholder/20/20" alt="Apple" className="h-5 w-5 mr-2" />
                Apple
              </>
            )}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}