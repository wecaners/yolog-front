function SocialBottomSheet() {
  return (
    <div>
      <div className="flex flex-col gap-16pxr items-center mt-37pxr">
        {Array.from({ length: 4 }, (v, i) => (
          <button
            key={i}
            className="bg-[#FFEB3B] w-358pxr h-58pxr rounded-[15px]"
          >
            소셜 버튼
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialBottomSheet;
