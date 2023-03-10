const data = {
    products: [
        {
            id: 1,
            name: 'Áo thun nữ mỏng',
            price: 37000,
            discount: 15,
            type: 'shirt',
            description:
                'Áo thun in tay lỡ nữ freesize phông form rộng dáng Unisex - Ulzzang mặc cặp, nhóm, lớp hình BƯỚM MISSOUT BUTTERFLY',
            image: 'images/ao1.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 2,
            name: 'Áo phông nữ cộc tay',
            price: 37000,
            discount: 15,
            type: 'shirt',
            description: 'Áo thun nữ ,áo phông nữ cộc tay phối cổ dáng rộng 3 màu cực xinh',
            image: 'images/ao2.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 3,
            name: 'Áo thun bóng rổ nữ',
            price: 62000,
            discount: 8,
            type: 'shirt',
            description: 'Áo thun bóng rổ nữ - áo phông cộc tay phom rộng in số 11 phong cách hàn quốc',
            image: 'images/ao3.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 4,
            name: 'Áo thun bóng rổ nữ',
            price: 62000,
            discount: 8,
            type: 'shirt',
            description: 'Áo thun bóng rổ nữ - áo phông cộc tay phom rộng in số 11 phong cách hàn quốc',
            image: 'images/ao4.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 5,
            name: 'Áo thun unisex',
            price: 340000,
            discount: 20,
            type: 'shirt',
            description: 'Áo thun unisex Khổng Hiền from rộng cổ tròn tay lỡ freesize 38-70kg - LAVE OFF',
            image: 'images/ao5.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 6,
            name: 'Áo phông tay lỡ',
            price: 340000,
            discount: 22,
            type: 'shirt',
            description: 'Áo phông, Áo thun unisex from rộng cổ tròn tay lỡ freesize 38-70kg Tim nhỏ',
            image: 'images/ao6.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 7,
            name: 'Áo thun unisex',
            price: 240000,
            discount: 18,
            type: 'shirt',
            description: 'Áo phông, Áo thun unisex from rộng cổ tròn tay lỡ freesize 38-70kg Ghost',
            image: 'images/ao7.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 8,
            name: 'Áo thun unisex Khổng Hiền',
            price: 560000,
            discount: 48,
            type: 'shirt',
            description: 'Áo thun unisex Khổng Hiền from rộng cổ tròn tay lỡ freesize 38-70kg thun trắng',
            image: 'images/ao8.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 9,
            name: 'Áo phông rộng freesize',
            price: 340000,
            discount: 32,
            type: 'shirt',
            description: 'Áo phông rộng freesize nam nữ unisex chất đẹp from chuẩn',
            image: 'images/ao9.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 10,
            name: 'ÁO SMOCKING KATE',
            price: 500000,
            discount: 22,
            type: 'shirt',
            description: 'ÁO SMOCKING KATE CAO CẤP SEXY',
            image: 'images/ao10.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 11,
            name: 'Quần ống rộng nữ 1 cúc',
            price: 390000,
            discount: 6,
            type: 'pant',
            description: 'Quần ống rộng nữ 1 cúc trước chất tuyết mưa nhiều màu tự nhiên',
            image: 'images/quan1.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 12,
            name: 'Quần bò ống rộng nữ cạp cao',
            price: 100000,
            discount: 23,
            type: 'pant',
            description:
                'Quần bò ống rộng nữ cạp cao, quần jeans ống rộng lưng cao, dáng suông baggy ống đứng, kiểu ulzzang Cherry T008',
            image: 'images/quan2.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 13,
            name: 'Quần jean nữ co dãn Julido Store',
            price: 130000,
            discount: 16,
            type: 'pant',
            description: 'Quần jean nữ co dãn Julido Store, lưng cao mẫu mới màu đen JD8888',
            image: 'images/quan3.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 14,
            name: 'Quần jean nữ lưng cao Julido',
            price: 120000,
            discount: 22,
            type: 'pant',
            description: 'Quần jean nữ lưng cao Julido, chất jean cotton co dãn tôn dáng phụ nữ eo thon mẫu KV03A',
            image: 'images/quan4.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 15,
            name: 'Quần giả váy nữ ngắn vạt lệch đính cúc',
            price: 250000,
            discount: 21,
            type: 'pant',
            description: 'Quần giả váy nữ ngắn vạt lệch đính cúc, Quần đùi giả váy vạt lệch',
            image: 'images/quan5.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 16,
            name: 'Quần yếm kaki Banamo fashion',
            price: 220000,
            discount: 27,
            type: 'pant',
            description:
                'Quần yếm kaki Banamo fashion ống rộng dáng dài phối túi ngực màu be phong cách hàn quốc quần yếm kaki 565',
            image: 'images/quan6.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 17,
            name: 'Quần đùi nữ cạp chun RÚT DÂY',
            price: 170000,
            discount: 10,
            type: 'pant',
            description:
                'Quần đùi nữ cạp chun RÚT DÂY <55kg vải thun cotton short hot tiktok sooc cạp cao thể thao sexy aomi',
            image: 'images/quan7.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 18,
            name: 'Quần yếm nữ King168',
            price: 180000,
            discount: 5,
            type: 'pant',
            description: 'Quần yếm nữ King168, yếm short nữ co dãn nhẹ mẫu mới DC13',
            image: 'images/quan8.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 19,
            name: 'Quần Jean Nữ Lưng Cao thương hiệu Chandi',
            price: 290000,
            discount: 33,
            type: 'pant',
            description:
                'Quần Jean Nữ Lưng Cao thương hiệu Chandi, chất jean cotton co dãn tôn dáng phụ nữ eo thon mẫu KV617',
            image: 'images/quan9.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 20,
            name: 'Quần short jean nữ lưng cao phối rách denim cotton',
            price: 300000,
            discount: 50,
            type: 'pant',
            description: 'Quần short jean nữ lưng cao phối rách denim cotton, rin ngắn phối rách William - AT87',
            image: 'images/quan10.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 21,
            name: 'Giày thể thao nữ GB2.5',
            price: 220000,
            discount: 12,
            type: 'shoe',
            description: 'Giày thể thao nữ đi êm chân - GB2.5',
            image: 'images/giay1.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 22,
            name: 'Giày nữ thấp cổ thêu hoa',
            price: 160000,
            discount: 17,
            type: 'shoe',
            description: 'Giày nữ thấp cổ thêu hoa cúc siêu đáng yêu',
            image: 'images/giay2.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 23,
            name: 'GIÀY NỮ | GIÀY THỂ THAO',
            price: 550000,
            discount: 14,
            type: 'shoe',
            description: 'GIÀY NỮ | GIÀY THỂ THAO & THỜI TRANG',
            image: 'images/giay3.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 24,
            name: 'GIÀY SNEAKERS NỮ',
            price: 250000,
            discount: 12,
            type: 'shoe',
            description: 'GIÀY SNEAKERS NỮ KIỂU DÁNG TRẺ TRUNG THANH LỊCH',
            image: 'images/giay4.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 25,
            name: 'Giày thể thao nữ phong cách Hàn quốc',
            price: 520000,
            discount: 25,
            type: 'shoe',
            description: 'Giày thể thao nữ đế dày phong cách Hàn quốc mẫu mới nhất 2020 siêu đẹp',
            image: 'images/giay5.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 26,
            name: "Giày Biti's DSM074400XNH",
            price: 330000,
            discount: 3,
            type: 'shoe',
            description: "Giày Thể Thao Trung Cấp Nam Biti's DSM074400XNH",
            image: 'images/giay6.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 27,
            name: 'Giày Nam Trắng các loại',
            price: 200000,
            discount: 10,
            type: 'shoe',
            description: 'Giày Nam Thể Thao Nam Nữ Thời Trang (Trắng các loại)',
            image: 'images/giay7.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 28,
            name: 'Giày nam K99',
            price: 270000,
            discount: 11,
            type: 'shoe',
            description: 'Giày thể thao nam, giày nam da lộn K99',
            image: 'images/giay8.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 29,
            name: 'Giày Nam Sneaker Live Running',
            price: 290000,
            discount: 6,
            type: 'shoe',
            description:
                'Giày Thể Thao Nam Sneaker Live Running Độn Gót Tăng Chiều Cao 5cm Cao Cấp Tặng Kèm Đồng Hồ Đeo Tay Nam Thời Trang',
            image: 'images/giay9.webp',
            number: 20,
            sold: 4,
        },
        {
            id: 30,
            name: 'Giày thể thao nam XD21',
            price: 310000,
            discount: 26,
            type: 'shoe',
            description: 'Giày thể thao nam, giày sneaker nam da Xám - Trắng (2 màu) XD21',
            image: 'images/giay10.webp',
        },
    ],
    users: [
        {
            id: 1,
            name: 'Nguyen Van Son 1',
            username: 'son1',
            password: '123',
            avatar: 'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-16.jpg',
            email: 'son1@gmail.com',
            address: ' Ha Noi',
            phone: '123456789',
            website: 'hildegard.org',
            role: 'admin',
            number: 20,
            sold: 4,
        },
        {
            id: 2,
            name: 'Nguyen Van Son 2',
            username: 'son2',
            password: '123',
            avatar: 'https://thuviendohoa.vn/upload/images/items/nhan-vat-shin-cau-be-but-chi-hinh-anh-png-620.jpg',
            email: 'son2@gmail.com',
            address: 'Bac Giang',
            phone: '0869046822',
            website: 'anastasia.net',
            role: 'user',
            number: 20,
            sold: 4,
        },
        {
            username: 'son7',
            password: '123',
            id: 3,
        },
        {
            username: 'son4',
            password: '123',
            id: 4,
            name: 'Nguyen Van son 4',
            email: 'user10@gmail.com',
            phone: '12345677',
            avatar: 'https://www.invert.vn/media/uploads/uploads/2022/12/03191809-2.jpeg',
        },
        {
            username: 'son5',
            password: '123',
            id: 5,
        },
        {
            username: 'admin',
            password: 'admin',
            id: 6,
            name: 'Quản trị viên',
            email: 'admin@gmail.com',
            phone: '0123456789',
            avatar: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/252397505_197007939245865_5889774168621917087_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qa695LH_JDgAX9iOZl8&_nc_ht=scontent.fhan2-5.fna&oh=00_AfC561oKpclsPSHtCB1BB7Q_K7x5O1yKsb1Y3XJJ4Wpglw&oe=63AF0015',
        },
        {
            username: 'admin1',
            password: 'admin',
            id: 7,
        },
    ],
};

export default data;
