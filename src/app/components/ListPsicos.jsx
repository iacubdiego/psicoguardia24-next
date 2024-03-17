
// <!-- Component: Three Lines List With Trailing Icon And Leading Avatar -->

import Rating from "./Rating";

export default function ListPsicos() {
    return (
      <>
      <div className="flex flex-wrap justify-center gap-4 p-6 mx-auto">
<ul class="divide-y divide-slate-100 bg-gray-800">
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=1" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white"><span class="sr-only"> offline </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center mr-auto min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Ellen Ripley</h4>
            <p class="w-full text-sm text-slate-500">A tough, resourceful space officer and survivor.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=3" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white"><span class="sr-only"> online </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Thomas Anderson</h4>
            <p class="w-full text-sm text-slate-500">The chosen one, a hacker who can bend the rules.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=7" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white"><span class="sr-only"> online </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Luke Skywalker</h4>
            <p class="w-full text-sm text-slate-500">A Jedi warrior who fights against the dark side.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
</ul>
<ul class="divide-y divide-slate-100 bg-gray-800">
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=5" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white"><span class="sr-only"> online </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Sarah Connor</h4>
            <p class="w-full text-sm text-slate-500">A fierce resistance leader who fights machines.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=11" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white"><span class="sr-only"> offline </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Captain James T. Kirk</h4>
            <p class="w-full text-sm text-slate-500">A charismatic and adventurous captain.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            <a href="#" class="relative flex items-center justify-center w-20 h-20 text-white rounded-full">
                <img src="https://i.pravatar.cc/40?img=11" alt="user name" title="user name" width="80" height="80" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white"><span class="sr-only"> offline </span></span>
            </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="w-full text-base truncate text-slate-700">Captain James T. Kirk</h4>
            <p class="w-full text-sm text-slate-500">A charismatic and adventurous captain.</p>
        </div>
        < Rating />
        <a href="#" class="flex items-center justify-center w-6 h-6 text-xs transition-colors text-slate-500 hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <span class="sr-only">user options</span>
        </a>
    </li>
</ul>
</div>
</>
  )
}


// <!-- End Three Lines List With Trailing Icon And Leading Avatar -->