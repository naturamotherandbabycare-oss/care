import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-50 via-primary-50/20 to-dark-50 px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-dark-900 mb-3">Page not found</h1>
        <p className="text-dark-500 mb-8">
          Looks like this page took a cleaning break! Let's get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
