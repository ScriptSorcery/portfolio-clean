import { useEffect, useRef, useState } from "react"
import YouTube from "react-youtube"
import YTMusic from "ytmusic-api"
import { Play, Pause } from "lucide-react"

const ytmusic = new YTMusic()

type PlayableSong = {
  type: "SONG" | "VIDEO"
  videoId: string
  name: string
  thumbnails: { url: string }[]
  artist?: {
    name: string
  }
  artists?: { name: string }[]
}


const MusicPlayer = () => {
  const playerRef = useRef<any>(null)

  const [videoId, setVideoId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSong] = useState<PlayableSong | null>(null)

  // Init YTMusic
  useEffect(() => {
    ytmusic.initialize()
  }, [])

  const playRandomSong = async () => {
  const res = await ytmusic.search("Top hits")

  const playable = res.filter(
    (item: any) =>
      (item.type === "SONG" || item.type === "VIDEO") &&
      typeof item.videoId === "string"
  ) as PlayableSong[]

  if (!playable.length) return

  const random =
    playable[Math.floor(Math.random() * playable.length)]

  setSong(random)
  setVideoId(random.videoId)
  setIsPlaying(true)
}


  const togglePlay = () => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className="relative w-full max-w-xl rounded-2xl p-4
      bg-neutral-900/80 backdrop-blur
      border border-white/5 shadow-lg"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 rounded-2xl
        bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
        bg-size-[16px_16px] pointer-events-none"
      />

      <div className="relative flex items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex items-center gap-4 min-w-0">
          {/* Album Art */}
          <div className="h-12 w-12 rounded-md bg-neutral-800 overflow-hidden shrink-0">
            {song?.thumbnails?.[0]?.url && (
              <img
                src={song.thumbnails[0].url}
                alt={song.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Song info */}
          <div className="flex flex-col min-w-0">
            <span className="text-xs tracking-wider text-neutral-400">
              LAST PLAYED
            </span>
            <span className="text-sm font-semibold text-white truncate">
              {song?.name || "Play something"}
            </span>
            <span className="text-xs text-neutral-400 truncate">
              {song?.artist?.name || song?.artists?.map((a: any) => a.name).join(", ") || "—"}
            </span>
          </div>
        </div>

        {/* Play / Pause button */}
        <button
          onClick={song ? togglePlay : playRandomSong}
          className="h-10 w-10 rounded-full
          bg-white/10 hover:bg-white/20
          flex items-center justify-center
          transition shrink-0"
        >
          {isPlaying ? (
            <Pause size={18} className="text-white" />
          ) : (
            <Play size={18} className="text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Hidden YouTube Player */}
      {videoId && (
        <YouTube
          videoId={videoId}
          opts={{
            height: "0",
            width: "0",
            playerVars: {
              autoplay: 1,
              controls: 0,
            },
          }}
          onReady={(e) => {
            playerRef.current = e.target
          }}
          onEnd={() => {
            setIsPlaying(false)
          }}
        />
      )}
    </div>
  )
}

export default MusicPlayer
