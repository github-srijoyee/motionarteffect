const Footer = () => {
    return (
<footer class="bg-gradientog mt-24 bottom-0 z-30">
    <div class="w-full font-light mx-auto max-w-screen-xl md:flex md:items-center md:justify-between pt-8 bg-gradientog pb-4">
    <div className="lg:hidden bg-gradientog ms-3">
    <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className="text-sm text-gray-200 sm:text-center bg-gradient10 pr-10">Documentation
    </a>
    <a href="https://support.qodematrix.com/login" className="text-sm text-gray-200 sm:text-center bg-gradient11">Support
    </a>
</div>
      <span class="hidden lg:block text-sm text-gray-200 sm:text-center bg-gradient9">© 2023 Copywrite. All Rights Reserved by QodeMatrix.
    </span>
    <div className="hidden lg:block bg-[#5e11ff]">
    <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className="text-sm text-gray-200 sm:text-center bg-[#5e11ff] pr-10">Documentation
    </a>
    <a href="https://support.qodematrix.com/login" className="text-sm text-gray-200 sm:text-center bg-[#5e11ff]">Support
    </a>
</div>
<span class="lg:hidden text-sm text-gray-200 sm:text-center bg-gradientog ms-4">© 2023 Copywrite. All Rights Reserved by QodeMatrix.
    </span>
    </div>
</footer>

    );
  }
  
  export default Footer;