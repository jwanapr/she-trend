-- She Trend customer reviews
create extension if not exists pgcrypto;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  city text not null check (char_length(city) between 2 and 80),
  rating smallint not null check (rating between 1 and 5),
  review_text text not null check (char_length(review_text) between 5 and 1000),
  avatar_data text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

create index if not exists reviews_status_created_idx on public.reviews(status, created_at desc);

create table if not exists public.review_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.reviews enable row level security;
alter table public.review_admins enable row level security;

-- An authenticated user may only see their own admin row.
drop policy if exists "Admins can read own admin record" on public.review_admins;
create policy "Admins can read own admin record"
on public.review_admins for select
to authenticated
using (user_id = auth.uid());

-- Anyone can submit a review. It is ALWAYS pending by default.
drop policy if exists "Public can submit reviews" on public.reviews;
create policy "Public can submit reviews"
on public.reviews for insert
to anon, authenticated
with check (status = 'pending');

-- Website visitors can only read approved reviews.
drop policy if exists "Anyone can read approved reviews" on public.reviews;
create policy "Anyone can read approved reviews"
on public.reviews for select
to anon, authenticated
using (status = 'approved');

-- Admins can see every review.
drop policy if exists "Admins can read all reviews" on public.reviews;
create policy "Admins can read all reviews"
on public.reviews for select
to authenticated
using (exists (select 1 from public.review_admins a where a.user_id = auth.uid()));

-- Admins can approve/reject/delete reviews.
drop policy if exists "Admins can update reviews" on public.reviews;
create policy "Admins can update reviews"
on public.reviews for update
to authenticated
using (exists (select 1 from public.review_admins a where a.user_id = auth.uid()))
with check (status in ('pending','approved','rejected'));

drop policy if exists "Admins can delete reviews" on public.reviews;
create policy "Admins can delete reviews"
on public.reviews for delete
to authenticated
using (exists (select 1 from public.review_admins a where a.user_id = auth.uid()));

-- After creating your admin user in Authentication > Users:
-- insert into public.review_admins(user_id) values ('PASTE_ADMIN_USER_UUID_HERE');
