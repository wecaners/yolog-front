import InquiryForm from '../inquiry-form';

function InquiryMenu() {
  return (
    <div className="flex flex-col mt-53pxr h-full">
      <h1 className="text-15pxr font-semibold">문의 내용을 작성해주세요.</h1>
      <InquiryForm />
    </div>
  );
}

export default InquiryMenu;
