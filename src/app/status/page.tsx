"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SupabaseUtils } from '../../utils/supabaseUtils';

interface EnvironmentValidation {
  isValid: boolean;
  issues: string[];
  url: boolean;
  key: boolean;
}

interface DatabaseHealth {
  isHealthy: boolean;
  responseTime: number | null;
  productCount: number;
  error: string | null;
  timestamp: string;
}

interface SystemStatus {
  environment: EnvironmentValidation;
  connection: boolean;
  database: DatabaseHealth;
  overall: boolean;
  timestamp: string;
}

export default function StatusPage() {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSystemStatus();
  }, []);

  const checkSystemStatus = async () => {
    setLoading(true);
    try {
      const systemCheck = await SupabaseUtils.performSystemCheck();
      setStatus(systemCheck);
    } catch (error) {
      console.error('Error checking system status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Supabase Status</h1>
            <button
              onClick={checkSystemStatus}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Opdaterer...' : 'Opdater Status'}
            </button>
          </div>

          {status && (
            <div className="space-y-6">
              {/* Overall Status */}
              <div className={`p-4 rounded-lg ${status.overall ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${status.overall ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <h2 className="text-lg font-semibold">
                    System Status: {status.overall ? 'Healthy' : 'Issues Detected'}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Sidste tjek: {new Date(status.timestamp).toLocaleString('da-DK')}
                </p>
              </div>

              {/* Environment Variables */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${status.environment.isValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  Environment Variables
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">SUPABASE_URL:</span>
                    <span className={`ml-2 ${status.environment.url ? 'text-green-600' : 'text-red-600'}`}>
                      {status.environment.url ? '✓ Configured' : '✗ Missing'}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">SUPABASE_ANON_KEY:</span>
                    <span className={`ml-2 ${status.environment.key ? 'text-green-600' : 'text-red-600'}`}>
                      {status.environment.key ? '✓ Configured' : '✗ Missing'}
                    </span>
                  </div>
                </div>
                {status.environment.issues.length > 0 && (
                  <div className="mt-3">
                    <p className="font-medium text-red-600 mb-1">Issues:</p>
                    <ul className="text-sm text-red-600 space-y-1">
                      {status.environment.issues.map((issue: string, index: number) => (
                        <li key={index}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Database Connection */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${status.connection ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  Database Connection
                </h3>
                <div className="text-sm">
                  <p>
                    <span className="font-medium">Connection:</span>
                    <span className={`ml-2 ${status.connection ? 'text-green-600' : 'text-red-600'}`}>
                      {status.connection ? '✓ Connected' : '✗ Failed'}
                    </span>
                  </p>
                  {status.database.responseTime && (
                    <p>
                      <span className="font-medium">Response Time:</span>
                      <span className="ml-2">{status.database.responseTime}ms</span>
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Product Count:</span>
                    <span className="ml-2">{status.database.productCount}</span>
                  </p>
                  {status.database.error && (
                    <p className="text-red-600 mt-2">
                      <span className="font-medium">Error:</span> {status.database.error}
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Link
                    href="/produkter"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-4"
                  >
                    View Products Page
                  </Link>
                  <a
                    href="https://supabase.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Open Supabase Dashboard
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
