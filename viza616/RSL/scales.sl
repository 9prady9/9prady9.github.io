displacement scales(float s_repeats=2,
                        t_repeats=2,
                        scalewidth=0.2,
                        scalethickness=0.2,
                        scaleheight=0.6,
                        scalebend=60,
                        sC=0.5,
                        tC=0.5,
                        blur=0.05;
                    output varying float hump=0)
{
  float final=0;
  vector n = faceforward(normalize(N),I);
  vector direction = normalize(dPdv);
  point P1 = P - 0.25*direction;
  point P2 = P + 0.25*direction;

  float sC, tC;
  float row = floor(s*s_repeats);
  if(mod(row, 2) == 0)
  {
      float i, res1, res2;
      for(i=0; i<2; i=i+1)
      {
        float ss, tt, ssC, ttC;

        if( i== 0 ) { sC=0.5; tC=1; } else { sC=0.5; tC=0; }
        ss = mod(s*s_repeats,1);
        tt = mod(t*t_repeats,1);

        if(i==0) {
          ssC = mod(sC*s_repeats+0.5,1);
          ttC = mod(tC*t_repeats,1);
        } else {
          ssC = mod(sC*s_repeats+0.5,1);
          ttC = mod(tC*t_repeats+0.999,1);
        }

        float sdist = ss-ssC,
              tdist = tt-ttC,
              dist  = sqrt((sdist*sdist)/(scalethickness*scalethickness)+(tdist*tdist)/(scalewidth*scalewidth));
        final = (1-smoothstep(0,scalewidth+blur,dist))*(1-smoothstep(0,scalethickness+blur,dist));
        if( i==0 ) { res1 = final; } else { res2 = final; }
      }
      if( res1==0 ) { final = res2; } else { final = res1; }
  } else {
      sC=0.5; tC=0.5;
      float ssC = mod(sC * s_repeats+0.5,1);
      float ttC = mod(tC * t_repeats+0.5,1);
      float ss = mod(s * s_repeats, 1);
      float tt = mod(t * t_repeats, 1);
      float sdist = ss-ssC,
            tdist = tt-ttC,
            dist  = sqrt((sdist*sdist)/(scalethickness*scalethickness)+(tdist*tdist)/(scalewidth*scalewidth));
      final = (1-smoothstep(0,scalewidth+blur,dist))*(1-smoothstep(0,scalethickness+blur,dist));
  }
  hump = final;
  P = P + n * scaleheight * hump;
  P = rotate(P,scalebend*PI/180,P1,P2);
  N = calculatenormal(P);
}
