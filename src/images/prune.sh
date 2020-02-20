for filename in ./*; do
  if grep -nrq "$filename" ../../src;
    then echo "found $filename"
    else 
      if grep -nrq "$filename" ../css; 
        then echo "found $filename IN CSS only"
        else git rm $filename; rm filename;
      fi
  fi
done   

