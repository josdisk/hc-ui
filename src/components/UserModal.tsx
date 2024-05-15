import React from 'react';

interface UserModalProps {
    open: boolean;
    onClose: () => void;
    user: {
        avatar: string;
        firstname: string;
        lastname: string;
        role: string;
        joinDate: string;
        description: string;
    };
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose, user }) => (
<div className='modal_popup'>
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!open && 'hidden'}`}>
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <img src={user.avatar} alt={`${user.firstname} ${user.lastname}`} className="rounded-full" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{`${user.firstname} ${user.lastname}`}</h3>
                <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-gray-500">{user.role}</p>
                    <p className="text-sm text-gray-500">{user.joinDate}</p>
                    <p className="text-sm text-gray-500">{user.description}</p>
                </div>
                <button 
                    onClick={onClose} 
                    className="mt-3 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none">
                Close
                </button>
            </div>
        </div>
    </div>
</div>
);

export default UserModal;