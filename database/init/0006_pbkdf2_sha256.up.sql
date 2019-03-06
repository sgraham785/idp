create or replace function public.PBKDF2_SHA256(pw text, salt text)
  returns text
  immutable
  language plpgsql
as $$
declare 
  iter integer;
  algorithm text;
  block_count integer;
  output bytea;
  the_last bytea;
  xorsum bytea;
  i_as_int32 bytea;
  i integer;
  j integer;
  k integer;
begin
  
  iter := 10000;
  algorithm := 'sha256';

  i_as_int32 := E'\\000\\000\\000'::bytea || chr(1)::bytea;
  i_as_int32 := substring(i_as_int32, length(i_as_int32) - 3);
  
  the_last := salt::bytea || i_as_int32;
  
  xorsum := HMAC(the_last, pw::bytea, algorithm);
  the_last := xorsum;
  
  for j in 2 .. iter loop
    the_last := HMAC(the_last, pw::bytea, algorithm);
    --
    -- xor the two
    --
    for k in 1 .. length(xorsum) loop
      xorsum := set_byte(xorsum, k - 1, get_byte(xorsum, k - 1) # get_byte(the_last, k - 1));
    end loop;
  end loop;
  
  if output is null then
    output := xorsum;
  else
    output := output || xorsum;
  end if;
  
  return substring(output from 1 for 32)::text;
end $$;