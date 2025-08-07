import { type Item, type InsertItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getItems(): Promise<Item[]>;
  getItemsByProvince(province: string): Promise<Item[]>;
  getItemsByCategory(category: string): Promise<Item[]>;
  getItem(id: string): Promise<Item | undefined>;
  createItem(item: InsertItem): Promise<Item>;
}

export class MemStorage implements IStorage {
  private items: Map<string, Item>;

  constructor() {
    this.items = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Afghanistan provinces
    const provinces = [
      'کابل', 'هرات', 'قندهار', 'بلخ', 'ننگرهار', 'غزنی', 'پکتیا', 'بامیان',
      'لغمان', 'کنر', 'خوست', 'وردک', 'لوگر', 'بدخشان', 'تخار', 'کندز',
      'بغلان', 'سمنگان', 'جوزجان', 'سر پل', 'فاریاب', 'بادغیس', 'غور', 'دایکندی',
      'ارزگان', 'زابل', 'هلمند', 'نیمروز', 'فراه', 'پکتیکا', 'کاپیسا', 'پروان',
      'پنجشیر', 'نورستان'
    ];

    // Item types for random generation
    const itemTypes = [
      { titleFa: 'گوشی سامسونگ گلکسی', titleEn: 'Samsung Galaxy Phone', price: [25000, 80000], category: 'موبایل و تبلت' },
      { titleFa: 'آیفون', titleEn: 'iPhone', price: [40000, 120000], category: 'موبایل و تبلت' },
      { titleFa: 'لپ تاپ لنوو', titleEn: 'Lenovo Laptop', price: [35000, 85000], category: 'کامپیوتر' },
      { titleFa: 'تلویزیون LED', titleEn: 'LED Television', price: [20000, 60000], category: 'لوازم خانه' },
      { titleFa: 'یخچال', titleEn: 'Refrigerator', price: [25000, 50000], category: 'لوازم خانه' },
      { titleFa: 'ماشین لباسشویی', titleEn: 'Washing Machine', price: [18000, 45000], category: 'لوازم خانه' },
      { titleFa: 'کفش ورزشی', titleEn: 'Sports Shoes', price: [2000, 8000], category: 'پوشاک' },
      { titleFa: 'کت و شلوار', titleEn: 'Suit', price: [3000, 15000], category: 'پوشاک' },
      { titleFa: 'دوچرخه', titleEn: 'Bicycle', price: [5000, 15000], category: 'ورزش و تفریح' },
      { titleFa: 'کتاب قرآن', titleEn: 'Quran Book', price: [500, 2000], category: 'کتاب و مجله' },
      { titleFa: 'فرش افغانی', titleEn: 'Afghan Carpet', price: [10000, 50000], category: 'لوازم خانه' },
      { titleFa: 'ساعت مچی', titleEn: 'Wrist Watch', price: [2000, 15000], category: 'لوازم شخصی' },
      { titleFa: 'موتور سیکلت', titleEn: 'Motorcycle', price: [80000, 200000], category: 'خودرو' },
      { titleFa: 'خانه دو طبقه', titleEn: 'Two-Story House', price: [500000, 2000000], category: 'املاک' },
      { titleFa: 'زمین مسکونی', titleEn: 'Residential Land', price: [200000, 1500000], category: 'املاک' },
      { titleFa: 'کیف دستی چرمی', titleEn: 'Leather Handbag', price: [1500, 6000], category: 'پوشاک' },
      { titleFa: 'عینک آفتابی', titleEn: 'Sunglasses', price: [800, 4000], category: 'لوازم شخصی' },
      { titleFa: 'گیتار', titleEn: 'Guitar', price: [8000, 25000], category: 'موسیقی' },
      { titleFa: 'دوربین عکاسی', titleEn: 'Camera', price: [15000, 80000], category: 'الکترونیک' },
      { titleFa: 'پرینتر', titleEn: 'Printer', price: [8000, 25000], category: 'الکترونیک' }
    ];

    // Generate 426 items
    for (let i = 1; i <= 426; i++) {
      const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
      const randomPrice = Math.floor(Math.random() * (randomType.price[1] - randomType.price[0])) + randomType.price[0];
      const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];
      
      const item: Item = {
        id: randomUUID(),
        titleFa: randomType.titleFa + (i > itemTypes.length ? ` ${i}` : ''),
        titleEn: randomType.titleEn + (i > itemTypes.length ? ` ${i}` : ''),
        price: randomPrice,
        currency: 'AFN',
        category: randomType.category,
        province: randomProvince,
        image: `https://picsum.photos/400/300?random=${i}`,
        description: null,
        createdAt: new Date().toISOString()
      };
      
      this.items.set(item.id, item);
    }
  }

  async getItems(): Promise<Item[]> {
    return Array.from(this.items.values());
  }

  async getItemsByProvince(province: string): Promise<Item[]> {
    if (province === 'all') return this.getItems();
    return Array.from(this.items.values()).filter(item => item.province === province);
  }

  async getItemsByCategory(category: string): Promise<Item[]> {
    if (category === 'all') return this.getItems();
    return Array.from(this.items.values()).filter(item => item.category === category);
  }

  async getItem(id: string): Promise<Item | undefined> {
    return this.items.get(id);
  }

  async createItem(insertItem: InsertItem): Promise<Item> {
    const id = randomUUID();
    const item: Item = { 
      ...insertItem, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.items.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
