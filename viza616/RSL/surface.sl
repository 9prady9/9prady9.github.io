surface colorate(float Kd = 0.9;
                 color scalecolor=color (0.8,0.79,0.1),
                       surfacecolor = color(0.9,0.9,0.9))
{
  float h = 0;
  if(displacement("hump", h) == 1)
    h = h;
  color surfcolor = mix(scalecolor,surfacecolor,h);
  
  normal  n = normalize(N), 
          nf = faceforward(n, I);
  
  color  diffusecolor = Kd * diffuse(nf); 
  Oi = Os;
  Ci = Oi * surfcolor * diffusecolor;
}
