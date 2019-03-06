create or replace function public.ALNUM_LOWER(t text)
  returns text
  immutable
  language plpgsql
as $$
begin
  return regexp_replace(trim(lower(t)), '\W+', '', 'g')::text;
end $$;