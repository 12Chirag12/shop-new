import React from 'react';
import AdminPanel from '../components/AdminPanel';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/supabaseClient';

const AdminPage: React.FC = () => {
    const router = useRouter();
    const { user, loading } = useUser();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [loading, user, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            {user && <AdminPanel />}
        </div>
    );
};

export default AdminPage;