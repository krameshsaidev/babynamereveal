# 🎬 Cinematic Baby Reveal Pack

## 📁 Assets
Replace files inside /assets with your real content:
- scene1.jpg to scene4.jpg
- music.mp3
- voice.mp3
- hit.mp3

## 🎬 Render Video (FFmpeg)

Step 1:
ffmpeg -loop 1 -t 3 -i assets/scene1.jpg -loop 1 -t 3 -i assets/scene2.jpg -loop 1 -t 3 -i assets/scene3.jpg -loop 1 -t 3 -i assets/scene4.jpg -filter_complex "
[0:v]zoompan=z='min(zoom+0.0015,1.2)':d=75,fade=t=out:st=2.5:d=0.5[v0];
[1:v]zoompan=z='min(zoom+0.0015,1.2)':d=75,fade=t=in:st=0:d=0.5,fade=t=out:st=2.5:d=0.5[v1];
[2:v]zoompan=z='min(zoom+0.0015,1.2)':d=75,fade=t=in:st=0:d=0.5,fade=t=out:st=2.5:d=0.5[v2];
[3:v]zoompan=z='min(zoom+0.0015,1.2)':d=75,fade=t=in:st=0:d=0.5[v3];
[v0][v1][v2][v3]concat=n=4:v=1:a=0,format=yuv420p[v]
" -map "[v]" -r 25 -s 1080x1920 temp.mp4

Step 2:
ffmpeg -i temp.mp4 -i assets/music.mp3 -i assets/voice.mp3 -i assets/hit.mp3 -filter_complex "
[1:a]volume=0.4[a1];
[2:a]adelay=500|500[a2];
[3:a]adelay=14000|14000[a3];
[a1][a2][a3]amix=inputs=3:duration=longest
" -c:v copy -shortest final.mp4

## Output:
final.mp4 ready for WhatsApp 🚀
