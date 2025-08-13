import { Head, Link, useForm, router } from '@inertiajs/react';
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/InputLabel";
import Input from "@/Components/TextInput";
import Checkbox from '@/Components/Checkbox';
import Button from '@/Components/PrimaryButton';
import ValidationErrors from '@/Components/ValidationErrors';

export default function Edit({auth, movie}) {
    const { setData, data, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name, 
            event.target.type === "file" 
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }
        
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('_method', 'PUT');
        
        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data
        })
    };

    return (
        <Authenticated auth={auth}>
            <Head title='Admin - Update Movie' />
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name"/>
                <Input 
                    type="text"
                    name="name"
                    defaultValue={data.name}
                    variant="primary-outline"
                    onChange={onHandleChange}
                    placeholder="Enter the name of movie"
                    isError={errors.name}
                />
                
                <Label forInput="category" value="Category" className='mt-4'/>
                <Input 
                    type="text"
                    name="category"
                    defaultValue={data.category}
                    variant="primary-outline"
                    onChange={onHandleChange}
                    placeholder="Enter the category of movie"
                    isError={errors.category}
                />
                
                <Label forInput="video_url" value="Video URL" className='mt-4'/>
                <Input 
                    type="url"
                    name="video_url"
                    defaultValue={data.video_url}
                    variant="primary-outline"
                    onChange={onHandleChange}
                    placeholder="Enter the video url of movie"
                    isError={errors.video_url}
                />
                
                <Label forInput="thumbnail" value="Thumbnail" className='mt-4'/>
                    <img 
                        src={`/storage/${movie.thumbnail}`} 
                        className='w-40 mb-2' 
                        alt="Current thumbnail" 
                    />
                <Input 
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                    accept="image/*"
                />
                
                <Label forInput="rating" value="Rating" className='mt-4'/>
                <Input 
                    type="number"
                    name="rating"
                    value={data.rating}
                    variant="primary-outline"
                    onChange={onHandleChange}
                    placeholder="Insert rating of the movie"
                    isError={errors.rating}
                    min="0"
                    max="10"
                    step="0.1"
                />

                <div className="flex flex-row mt-4 items-center">
                    <Label forInput="is_featured" value="Is Featured" className='mr-3 mt-1'/>
                    <Checkbox 
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                
                <Button type="submit" className="mt-4" processing={processing}>
                    Update Movie
                </Button>
            </form>
        </Authenticated>
    )
}