import { useEffect, useState } from 'react';
import API_URL from '../../api/config';

const Sidebar = ({ filter, setFilter }) => {
  const [categories, setCategories] = useState(null);

  // Fallback static categories
  const FALLBACK = [
    {
      name: 'Оптика',
      slug: 'optics',
      subcategories: [
        { name: 'Бинокли', slug: 'binoculars' },
        { name: 'Зрительные трубы', slug: 'spotting' },
        { name: 'Дальномеры', slug: 'rangefinders' },
        { name: 'Аксессуары', slug: 'optics-accessories' },
      ],
    },
    {
      name: 'Тепловизоры',
      slug: 'thermal',
      subcategories: [{ name: 'Тепловизоры для охоты', slug: 'thermal' }],
    },
    {
      name: 'Туризм',
      slug: 'tourism',
      subcategories: [
        { name: 'Газовое оборудование', slug: 'gas' },
        { name: 'Гермоупаковки', slug: 'drybags' },
        { name: 'Коврики', slug: 'mats' },
        { name: 'Туристическая мебель', slug: 'camp-furniture' },
        { name: 'Палатки', slug: 'tents' },
        { name: 'Печи для палаток', slug: 'tent-stoves' },
        { name: 'Портативные холодильники', slug: 'coolers' },
        { name: 'Посуда', slug: 'cookware' },
      ],
    },
    {
      name: 'Рыбалка',
      slug: 'fishing',
      subcategories: [
        { name: 'Удилища', slug: 'rods' },
        { name: 'Катушки', slug: 'reels' },
        { name: 'Леска и шнуры', slug: 'lines' },
        { name: 'Приманки', slug: 'lures' },
        { name: 'Прикормки', slug: 'bait' },
        { name: 'Оснащение', slug: 'rigs' },
        { name: 'Рыболовное оборудование', slug: 'fishing-equipment' },
      ],
    },
    {
      name: 'Экипировка',
      slug: 'equipment',
      subcategories: [
        { name: 'Одежда', slug: 'clothing' },
        { name: 'Обувь', slug: 'footwear' },
        { name: 'Аксессуары', slug: 'accessories' },
        { name: 'Ножи', slug: 'knifes' },
      ],
    },
  ];

  useEffect(() => {
    fetch(`${API_URL}/api/categories/`)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        const merged = (Array.isArray(data) ? data : []).map(cat => {
          const fb = FALLBACK.find(f => f.slug === cat.slug);

          const subs = [
            ...(cat.subcategories || []),
            ...(fb?.subcategories || []),
          ];

          // ❗ убираем дубли подкатегорий по slug
          const uniqueSubs = Array.from(
            new Map(subs.map(sub => [sub.slug, sub])).values()
          );

          return {
            ...cat,
            subcategories: uniqueSubs,
          };
        });

        // добавляем fallback-категории, которых нет с backend
        const existing = new Set(merged.map(c => c.slug));
        FALLBACK.forEach(fb => {
          if (!existing.has(fb.slug)) merged.push(fb);
        });

        setCategories(merged.length ? merged : FALLBACK);
      })
      .catch(() => setCategories(FALLBACK));
  }, []);

  const isActiveSub = sub =>
    filter && filter.type === 'subcategory' && filter.slug === sub.slug;

  return (
    <aside className="sidebar">
      {(categories || FALLBACK).map(cat => (
        <div key={cat.slug} style={{ marginTop: 12 }}>
          <h4>{cat.name}</h4>

          {cat.subcategories.map(sub => (
            <button
              key={sub.slug}
              className={isActiveSub(sub) ? 'active' : ''}
              onClick={() =>
                setFilter({ type: 'subcategory', slug: sub.slug })
              }
            >
              {sub.name}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
