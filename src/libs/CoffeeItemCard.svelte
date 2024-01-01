<script>
    import Card, { PrimaryAction } from '@smui/card';
        let products = [
            {
                id: 1,
                name: '에스프레소',
                href: '#',
                price: '1500',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                id: 2,
                name: '아메리카노',
                href: '#',
                price: '2000',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 3,
                name: '카페라떼',
                href: '#',
                price: '2500',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
                id: 4,
                name: '바닐라 라떼',
                href: '#',
                price: '2500',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                id: 5,
                name: '돌체 라떼',
                href: '#',
                price: '2500',
                imageSrc: './image/돌체라떼.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                id: 6,
                name: '카푸치노',
                href: '#',
                price: '2500',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                id: 7,
                name: '카페모카',
                href: '#',
                price: '3500',
                imageSrc: './image/바닐라라떼.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                id: 8,
                name: '카라멜 마끼아또',
                href: '#',
                price: '3500',
                imageSrc: './image/카라멜마끼아또.jpg',
                imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
        ];
    </script>
    
    <div class="card-display bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
    
            <div
                class="card-container grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                {#each products as product (product.id)} 
                    <Card class="">
                        <PrimaryAction on:click={(event) => { event.preventDefault(); }}>
                            <a href={product.href} class="group">
                                <div
                                    class="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200"
                                >
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 class="mt-4 text-lg font-bold text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</h3>
                                <p class="mt-1 font-semibold text-orange-600">{product.price}원</p>
                            </a>
                        </PrimaryAction>
                    </Card>
                {/each}
            </div>
        </div>
    </div>