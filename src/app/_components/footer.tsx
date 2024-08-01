export default function Footer() {
  return (
    <footer className="font-semibold">
      <div className="flex flex-col lg:flex-row gap-x-10 items-center justify-center pt-14">
        <div className="flex items-center gap-1">
          <img src="/icons/email.svg" alt="Email" className="w-7 h-7" />
          info@g7dev.com
        </div>
      </div>
      <div className="grid place-content-center py-2">
        <div className="flex gap-1">
          <p>Powered by</p>
          <a href="https://www.xtcdev.com" className="text-teal-300">
            xtcdev.com
          </a>
        </div>
      </div>
    </footer>
  );
}
