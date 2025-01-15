
import Chef4 from '../../assets/Chef/Chef4.png';
import { AuthCard } from '../AuthPage/Auth';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Wrapper for the grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 max-w-5xl bg-slate-950 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Chef Image */}
        <div className="flex justify-center items-center p-6">
          <img
            src={Chef4}
            alt="Chef"
            className="max-w-full h-auto rounded-lg shadow-sm"
          />
        </div>

        {/* Right Section - Auth Card */}
        <div className="flex justify-center items-center p-6">
          <div className="w-full max-w-md">
            <AuthCard />
          </div>
        </div>
      </div>
    </div>
  );
}