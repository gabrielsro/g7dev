export default function Footer() {
  return (
    <footer className="font-semibold">
      <div className="flex flex-col lg:flex-row gap-x-10 items-center justify-center pt-4">
        <div>info@g7dev.com</div>
        <div>2669372</div>
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
