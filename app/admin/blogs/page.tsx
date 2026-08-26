import BlogsCard from "@/compnents/BlogCard";
import BlogForm from "@/compnents/BlogForm";
import CategoryForm from "@/compnents/CategoryForm";

export default function BlogPage(){
    return(
        <div>
            <BlogForm/>
            <BlogsCard/>
        </div>
    );
}