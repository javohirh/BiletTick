import React, {useEffect, useState} from 'react';
import {IconButton} from '@material-tailwind/react';
import FileInputImage from './file-input-image';
import {Modal} from '../modal';
import {TrashIcon} from '../../assets/icons/trash-icons';
import {PenIcon} from '../../assets/icons/pen-icon';
import {GrDocumentDownload} from "react-icons/gr";
import cx from 'classnames';
import axios from "axios";
import {BASE_URL, DEFAULT_HEADERS} from "../../services";


export default function FileInput({
                                      defaultValue, label, width = 376, onChange, limit = 4, id, disabled
                                  }) {
    const [isHovered, setIsHovered] = useState(false);
    const [file, setFile] = useState(null);
    const [defaultPreview, setDefaultPreview] = useState(null);
    const [preview, setPreview] = useState(null);
    const [openPreview, setOpenPreview] = useState(false);
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(null);
    const isFileExist = Boolean(file) || Boolean(defaultPreview);

    const validateFile = (file) => {
        const limitInBytes = limit * 1048576;
        setFile(file);
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            setError('Invalid file type. Only JPEG and PNG allowed.');
        } else if (file.size > limitInBytes) {
            setError(`File size too large. Limit is ${limit}MB.`);
        } else {
            handleSubmit(file); // send the request as soon as file is selected and validated
        }
    };

    useEffect(() => {
        if (disabled) {
            setPreview(null);
            setFile(null);
            setError(null);
        }
    }, [disabled])


    useEffect(() => {
        const urlRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;

        if (defaultValue && urlRegex.test(defaultValue)) {
            // If defaultValue is provided, set it as the default preview image
            setDefaultPreview(defaultValue);
        } else {
            setDefaultPreview(null)
        }
    }, [defaultValue]);

    const handleUpload = (event) => {
        if (event.target.files) {
            validateFile(event.target.files[0]);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.items) {
            const fileItem = event.dataTransfer.items[0];
            if (fileItem.kind === 'file') {
                const file = fileItem.getAsFile();
                if (file) {
                    validateFile(file);
                }
            }
        }
        setIsHovered(false);
    };

    const handleDelete = () => {
        setFile(null);
        setPreview(null);
        setError(null);
        onChange(null);
    };

    const handleProgress = (event) => {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        setUploadProgress(percentCompleted);
    };

    const handleSubmit = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post(`${BASE_URL}/file`, formData, {
                method: 'POST', headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-US,en;q=0.9',
                    ...DEFAULT_HEADERS
                },
                onUploadProgress: handleProgress,
            },);

            setUploadProgress(null);
            setFile(file);
            setError(null);
            setPreview(URL.createObjectURL(file));
            // onChange(res?.data?.result?.id);
        } catch (e) {
            console.log('ERRRRRRRORRRRRRRR',e)
            setError('File upload failed.');
            setFile(file);
            setUploadProgress(null);
        }
    };

    return (<div className='w-full flex flex-col' style={{maxWidth: width}}>
        {label && <span className='input-label'>{label}</span>}
        <div
            className={cx('bg-main-black rounded-md cursor-pointer', {
                'border-primary': isHovered,
                'border-input-error': error,
                'bg-input-disabled': disabled,
                '!border-solid': error || uploadProgress || isFileExist,
            })}
            onDrop={handleDrop}
            onDragOver={(e) => {
                e?.preventDefault();
                if (!isFileExist) {
                    setIsHovered(true);
                }
            }}
            onDragLeave={(e) => {
                e?.preventDefault();
                if (!isFileExist) {
                    setIsHovered(false);
                }
            }}
        >
            {(!isFileExist && !uploadProgress && !error) && (
                <label htmlFor={id} className='p-[20px] cursor-pointer flex flex-col gap-[20px] items-center'>
                    <div
                        className={cx("w-[80px] h-[80px] rounded-full bg-[#1d1d1d] flex items-center justify-center", {
                            "border-solid border-badge-success bg-badge-success": isHovered,
                        })}>
                        <GrDocumentDownload color='#a1a1a1' size={30}/>
                    </div>
                    <div className='flex flex-col text-center gap-1'>
                            <span className='font-medium text-sm text-[#a1a1a1]'>
                                Выберете файл или переместите его сюда
                            </span>
                        <span className='font-normal text-sm text-[#a1a1a1]'>
                              JPG, PNG or PDF, файлы не больше 10MB
                            </span>
                    </div>
                </label>)}
            {(isFileExist || uploadProgress || error) && (<div className='p-[20px] flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <div className='w-[56px] h-[56px]'>
                        <FileInputImage error={Boolean(error)} loading={Boolean(uploadProgress)}
                                        preview={(!disabled && preview) || defaultPreview}/>
                    </div>
                    <div className={cx({
                        'flex items-center !text-[16px]': uploadProgress || error,
                    })}>
                        <p className='text-[14px] text-fg  font-semibold'>
                            {uploadProgress ? 'Загрузка файла...' : (!file && defaultPreview) ? `${defaultPreview.slice(0, 15)}...` : file?.name}
                        </p>
                        {(!uploadProgress && !error) && file &&
                            <p className='text-[14px] text-[#667085]'>{Math.round(file?.size / 1024)} KB</p>}
                    </div>
                </div>
                {uploadProgress !== null && (<div className='relative flex items-center gap-2'>
                    <div className='overflow-hidden h-2 text-xs flex flex-1 rounded bg-[#F2F4F7]'>
                        <div
                            style={{width: '100%', maxWidth: `${uploadProgress}%`, transition: '0.3s'}}
                            className='shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary'
                        ></div>
                    </div>
                    <div className='inline-block text-sm font-bold text-primary'>
                        {uploadProgress}%
                    </div>
                </div>)}
                {!uploadProgress && (isFileExist || error) && (<div className='flex justify-between items-center'>
                    <div>
                        {!error && !uploadProgress &&
                            <p className='text-[#2E90FA]' onClick={() => setOpenPreview(true)}>
                                Просмотр
                            </p>}
                    </div>
                    <div className='flex gap-2'>
                        <IconButton
                            variant='text'
                            size='sm'
                            disabled={disabled}
                        >
                            <label
                                htmlFor={id}
                                className='cursor-pointer'
                            >
                                <PenIcon color="stroke-fg"/>
                            </label>
                        </IconButton>
                        <IconButton
                            variant='text'
                            size='sm'
                            onClick={handleDelete}
                            disabled={disabled}
                        >
                            <TrashIcon color="stroke-error"/>
                        </IconButton>
                    </div>
                </div>)}
            </div>)}
        </div>

        {error && <div className='text-main mt-1 font-semibold text-[14px]'>{error}</div>}

        <input
            className='w-full p-1 my-2'
            type='file'
            id={id}
            hidden={true}
            disabled={disabled}
            value=''
            onChange={handleUpload}
        />

        {!error && !uploadProgress && isFileExist && (<Modal
            open={openPreview}
            onHandleChange={() => setOpenPreview(false)}
        >
            <div className='flex justify-center items-center p-5 h-[400px]'>
                <img
                    className='object-contain w-full h-full'
                    src={defaultPreview || preview}
                    alt='modal img'
                />
            </div>
        </Modal>)}
    </div>);
}
