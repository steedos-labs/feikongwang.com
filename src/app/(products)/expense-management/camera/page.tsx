'use client'

import { Button } from '@/components/Button';
import React, { useRef, useEffect, useState } from 'react';

const Camera = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    let [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        // 获取摄像头权限
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    if (videoRef.current) {
                        (videoRef.current as any).srcObject = stream;
                    }
                })
                .catch(err => console.error("error:", err));
        }
    }, []);

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas:any = canvasRef.current;
        if (video && canvas) {
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            setPhotoData(imageData);
        }
    };

    return (
        <div className='max-w-7xl mx-auto p-10'>
            <Button onClick={capturePhoto}>拍照</Button>
            {photoData && (<div>{photoData}</div>)}
            <video ref={videoRef} autoPlay style={{ width: '100%' }}></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default Camera;