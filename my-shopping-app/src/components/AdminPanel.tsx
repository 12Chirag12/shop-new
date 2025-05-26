import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AdminPanel: React.FC = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setProductImage(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!productImage) return;

        const { data, error } = await supabase.storage
            .from('product-images')
            .upload(`public/${productImage.name}`, productImage);

        if (error) {
            console.error('Error uploading image:', error);
            return;
        }

        const imageUrl = data?.Key;

        const { error: insertError } = await supabase
            .from('products')
            .insert([
                {
                    name: productName,
                    description: productDescription,
                    price: parseFloat(productPrice),
                    image_url: imageUrl,
                },
            ]);

        if (insertError) {
            console.error('Error inserting product:', insertError);
        } else {
            alert('Product added successfully!');
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setProductImage(null);
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Product Name:
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Product Image:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPanel;