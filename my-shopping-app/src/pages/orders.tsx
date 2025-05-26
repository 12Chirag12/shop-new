import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User } from '../types';

const Orders = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user || null);

        const fetchOrders = async () => {
            if (session?.user) {
                const { data, error } = await supabase
                    .from('orders')
                    .select('*')
                    .eq('user_id', session.user.id);

                if (error) {
                    console.error('Error fetching orders:', error);
                } else {
                    setOrders(data);
                }
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Your Order History</h1>
            {user ? (
                <ul>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <li key={order.id}>
                                <p>Order ID: {order.id}</p>
                                <p>Product: {order.product_name}</p>
                                <p>Quantity: {order.quantity}</p>
                                <p>Total Price: ${order.total_price}</p>
                                <p>Status: {order.status}</p>
                            </li>
                        ))
                    ) : (
                        <p>No orders found.</p>
                    )}
                </ul>
            ) : (
                <p>Please log in to view your order history.</p>
            )}
        </div>
    );
};

export default Orders;