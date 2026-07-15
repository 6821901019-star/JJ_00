export default function CategoryForm ()  {


    return (
        <div>
            <h1> หมวกหมู่สินค้า </h1>
            <form>
                <input type="text" name="name" placeholder="ชื่อประเภท"/> <br/>
                <textarea  name="description" placeholder="กรอกรายละเอียด" > </textarea>
            
            <button>บันทึกข้อมูล</button>
            </form>
        </div>
    );
}