import React from "react";

const Details = () => {
  return (
    <>
      <div className="relative">
        <div className="px-6 py-7 flex justify-between">
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center z-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.91076 10.5893C6.58533 10.2638 6.58533 9.7362 6.91076 9.41077L11.9108 4.41077C12.2362 4.08533 12.7638 4.08533 13.0893 4.41077C13.4147 4.7362 13.4147 5.26384 13.0893 5.58928L8.67853 10L13.0893 14.4108C13.4147 14.7362 13.4147 15.2638 13.0893 15.5893C12.7638 15.9147 12.2362 15.9147 11.9108 15.5893L6.91076 10.5893Z"
                fill="#3A3379"
              />
            </svg>
          </div>
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center z-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.62496 4.16667C4.79723 4.16667 3.33329 5.62732 3.33329 7.40741C3.33329 8.27444 3.67815 9.06202 4.24452 9.64567L9.99985 15.4799L15.6508 9.74932C15.6566 9.74353 15.6624 9.73783 15.6682 9.7322C16.2863 9.14111 16.6666 8.31779 16.6666 7.40741C16.6666 5.62733 15.2027 4.16667 13.375 4.16667C12.9782 4.16667 12.5137 4.3889 11.9968 4.84671C11.493 5.29293 11.0419 5.87186 10.6785 6.38151C10.5221 6.60084 10.2693 6.73105 9.99996 6.73105C9.73058 6.73105 9.47782 6.60084 9.32144 6.38151C8.95806 5.87186 8.50693 5.29293 8.00315 4.84671C7.48627 4.3889 7.02172 4.16667 6.62496 4.16667ZM1.66663 7.40741C1.66663 4.68739 3.89634 2.5 6.62496 2.5C7.62332 2.5 8.47301 3.03645 9.10822 3.59908C9.43531 3.8888 9.73454 4.21136 9.99996 4.5289C10.2654 4.21136 10.5646 3.8888 10.8917 3.59908C11.5269 3.03646 12.3766 2.5 13.375 2.5C16.1036 2.5 18.3333 4.68739 18.3333 7.40741C18.3333 8.78991 17.7547 10.0383 16.8294 10.9279L10.5933 17.2518C10.4367 17.4106 10.223 17.5 10 17.5C9.77703 17.5 9.56332 17.4107 9.4067 17.2519L3.05144 10.8095C2.19572 9.92916 1.66663 8.72935 1.66663 7.40741Z"
                fill="#3A3379"
              />
            </svg>
          </div>
        </div>
        <img
          src="/img/detail-1.png"
          alt=""
          className="object-cover absolute top-0"
        />
        <div className="bg-white mt-[220px] rounded-t-[26px] h-full px-6 py-7 relative">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-medium">Kuretakeso Hott</h1>
              <span className="text-lg font-light text-[#7A7E86] mt-[2px]">
                <span className="text-[#5843BE] text-lg font-medium">$52</span>{" "}
                / month
              </span>
            </div>
            <div className="flex gap-[2px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17609 8.52743L6.51216 7.85132C6.7432 7.80449 6.94359 7.66201 7.0637 7.45917L9.28299 3.71103C9.60569 3.16602 10.3944 3.16602 10.7171 3.71103L12.9364 7.45917C13.0565 7.66201 13.2569 7.80449 13.4879 7.85132L16.824 8.52743C17.4729 8.65894 17.7167 9.45822 17.2516 9.9295L14.4765 12.7416C14.2827 12.938 14.1987 13.2176 14.2521 13.4883L14.8773 16.6558C15.0118 17.3372 14.3026 17.8744 13.6831 17.5605L10.3767 15.8853C10.1399 15.7653 9.86018 15.7653 9.62341 15.8853L6.31701 17.5605C5.69746 17.8744 4.98832 17.3372 5.12281 16.6558L5.74797 13.4883C5.8014 13.2176 5.71737 12.938 5.52356 12.7416L2.74846 9.9295C2.28339 9.45822 2.52716 8.65894 3.17609 8.52743Z"
                  fill="#FF9376"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17609 8.52743L6.51216 7.85132C6.7432 7.80449 6.94359 7.66201 7.0637 7.45917L9.28299 3.71103C9.60569 3.16602 10.3944 3.16602 10.7171 3.71103L12.9364 7.45917C13.0565 7.66201 13.2569 7.80449 13.4879 7.85132L16.824 8.52743C17.4729 8.65894 17.7167 9.45822 17.2516 9.9295L14.4765 12.7416C14.2827 12.938 14.1987 13.2176 14.2521 13.4883L14.8773 16.6558C15.0118 17.3372 14.3026 17.8744 13.6831 17.5605L10.3767 15.8853C10.1399 15.7653 9.86018 15.7653 9.62341 15.8853L6.31701 17.5605C5.69746 17.8744 4.98832 17.3372 5.12281 16.6558L5.74797 13.4883C5.8014 13.2176 5.71737 12.938 5.52356 12.7416L2.74846 9.9295C2.28339 9.45822 2.52716 8.65894 3.17609 8.52743Z"
                  fill="#FF9376"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17609 8.52743L6.51216 7.85132C6.7432 7.80449 6.94359 7.66201 7.0637 7.45917L9.28299 3.71103C9.60569 3.16602 10.3944 3.16602 10.7171 3.71103L12.9364 7.45917C13.0565 7.66201 13.2569 7.80449 13.4879 7.85132L16.824 8.52743C17.4729 8.65894 17.7167 9.45822 17.2516 9.9295L14.4765 12.7416C14.2827 12.938 14.1987 13.2176 14.2521 13.4883L14.8773 16.6558C15.0118 17.3372 14.3026 17.8744 13.6831 17.5605L10.3767 15.8853C10.1399 15.7653 9.86018 15.7653 9.62341 15.8853L6.31701 17.5605C5.69746 17.8744 4.98832 17.3372 5.12281 16.6558L5.74797 13.4883C5.8014 13.2176 5.71737 12.938 5.52356 12.7416L2.74846 9.9295C2.28339 9.45822 2.52716 8.65894 3.17609 8.52743Z"
                  fill="#FF9376"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17609 8.52743L6.51216 7.85132C6.7432 7.80449 6.94359 7.66201 7.0637 7.45917L9.28299 3.71103C9.60569 3.16602 10.3944 3.16602 10.7171 3.71103L12.9364 7.45917C13.0565 7.66201 13.2569 7.80449 13.4879 7.85132L16.824 8.52743C17.4729 8.65894 17.7167 9.45822 17.2516 9.9295L14.4765 12.7416C14.2827 12.938 14.1987 13.2176 14.2521 13.4883L14.8773 16.6558C15.0118 17.3372 14.3026 17.8744 13.6831 17.5605L10.3767 15.8853C10.1399 15.7653 9.86018 15.7653 9.62341 15.8853L6.31701 17.5605C5.69746 17.8744 4.98832 17.3372 5.12281 16.6558L5.74797 13.4883C5.8014 13.2176 5.71737 12.938 5.52356 12.7416L2.74846 9.9295C2.28339 9.45822 2.52716 8.65894 3.17609 8.52743Z"
                  fill="#FF9376"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17609 8.52743L6.51216 7.85132C6.7432 7.80449 6.94359 7.66201 7.0637 7.45917L9.28299 3.71103C9.60569 3.16602 10.3944 3.16602 10.7171 3.71103L12.9364 7.45917C13.0565 7.66201 13.2569 7.80449 13.4879 7.85132L16.824 8.52743C17.4729 8.65894 17.7167 9.45822 17.2516 9.9295L14.4765 12.7416C14.2827 12.938 14.1987 13.2176 14.2521 13.4883L14.8773 16.6558C15.0118 17.3372 14.3026 17.8744 13.6831 17.5605L10.3767 15.8853C10.1399 15.7653 9.86018 15.7653 9.62341 15.8853L6.31701 17.5605C5.69746 17.8744 4.98832 17.3372 5.12281 16.6558L5.74797 13.4883C5.8014 13.2176 5.71737 12.938 5.52356 12.7416L2.74846 9.9295C2.28339 9.45822 2.52716 8.65894 3.17609 8.52743Z"
                  fill="#989BA1"
                />
              </svg>
            </div>
          </div>
          <div className="mt-7">
            <h2 className="text-base">Main Facilities</h2>
            <div className="flex items-center gap-9 mt-3">
              <div className="flex flex-col gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_132_175)">
                    <path
                      d="M30.9999 1.87499H1.00006C0.482309 1.87499 0.062561 1.45524 0.062561 0.937496C0.062561 0.419748 0.482309 0 1.00006 0H30.9999C31.5177 0 31.9374 0.419748 31.9374 0.937496C31.9374 1.45524 31.5177 1.87499 30.9999 1.87499Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M16.0001 6.9375H3.00006C2.48231 6.9375 2.06256 6.51775 2.06256 6V0.9375C2.06256 0.41975 2.48231 0 3.00006 0H16.0001C16.5178 0 16.9376 0.41975 16.9376 0.9375V6C16.9376 6.51775 16.5178 6.9375 16.0001 6.9375ZM3.93756 5.0625H15.0626V1.875H3.93756V5.0625Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M29.0001 6.9375H16.0001C15.4823 6.9375 15.0626 6.51775 15.0626 6V0.9375C15.0626 0.41975 15.4823 0 16.0001 0H29.0001C29.5178 0 29.9376 0.41975 29.9376 0.9375V6C29.9376 6.51775 29.5178 6.9375 29.0001 6.9375ZM16.9376 5.0625H28.0626V1.875H16.9376V5.0625Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M8.50007 15.4375H4.50006C3.98231 15.4375 3.56256 15.0177 3.56256 14.5V12C3.56256 10.3802 4.88031 9.0625 6.50006 9.0625C8.11982 9.0625 9.43757 10.3802 9.43757 12V14.5C9.43757 15.0177 9.01782 15.4375 8.50007 15.4375ZM5.43756 13.5625H7.56257V12C7.56257 11.4141 7.08594 10.9375 6.50006 10.9375C5.91419 10.9375 5.43756 11.4141 5.43756 12V13.5625Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M6.50006 10.9375C5.98231 10.9375 5.56256 10.5177 5.56256 10V6C5.56256 5.48225 5.98231 5.0625 6.50006 5.0625C7.01781 5.0625 7.43756 5.48225 7.43756 6V10C7.43756 10.5177 7.01781 10.9375 6.50006 10.9375Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M27.5 15.4375H23.5C22.9822 15.4375 22.5625 15.0177 22.5625 14.5V12C22.5625 10.3802 23.8802 9.06246 25.5 9.06246C27.1198 9.06246 28.4375 10.3802 28.4375 12V14.5C28.4375 15.0177 28.0177 15.4375 27.5 15.4375ZM24.4375 13.5625H26.5625V12C26.5625 11.4141 26.0859 10.9375 25.5 10.9375C24.9141 10.9375 24.4375 11.4141 24.4375 12V13.5625Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M25.4999 10.9375C24.9821 10.9375 24.5624 10.5177 24.5624 9.99997V5.99998C24.5624 5.48223 24.9821 5.06248 25.4999 5.06248C26.0176 5.06248 26.4374 5.48223 26.4374 5.99998V9.99997C26.4374 10.5177 26.0176 10.9375 25.4999 10.9375Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M18.0001 15.4375H14.0001C13.4823 15.4375 13.0626 15.0177 13.0626 14.5V12C13.0626 10.3802 14.3803 9.0625 16.0001 9.0625C17.6198 9.0625 18.9376 10.3802 18.9376 12V14.5C18.9376 15.0177 18.5178 15.4375 18.0001 15.4375ZM14.9376 13.5625H17.0626V12C17.0626 11.4141 16.5859 10.9375 16.0001 10.9375C15.4142 10.9375 14.9376 11.4141 14.9376 12V13.5625Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M16.0001 10.9375C15.4823 10.9375 15.0626 10.5177 15.0626 10V6C15.0626 5.48225 15.4823 5.0625 16.0001 5.0625C16.5178 5.0625 16.9376 5.48225 16.9376 6V10C16.9376 10.5177 16.5178 10.9375 16.0001 10.9375Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M29 31.9999C28.4822 31.9999 28.0625 31.5801 28.0625 31.0624V19.9374H3.93755V31.0624C3.93755 31.5801 3.51781 31.9999 3.00006 31.9999C2.48231 31.9999 2.06256 31.5801 2.06256 31.0624V18.9999C2.06256 18.4822 2.48231 18.0624 3.00006 18.0624H29C29.5177 18.0624 29.9375 18.4822 29.9375 18.9999V31.0624C29.9375 31.5801 29.5177 31.9999 29 31.9999Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M30.9999 19.9374H1.00006C0.482309 19.9374 0.062561 19.5177 0.062561 18.9999C0.062561 18.4822 0.482309 18.0624 1.00006 18.0624H30.9999C31.5177 18.0624 31.9374 18.4822 31.9374 18.9999C31.9374 19.5177 31.5177 19.9374 30.9999 19.9374Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M13.4989 32.0001C13.0326 32.0001 12.6285 31.6524 12.5697 31.1779L11.6717 23.9374H8.82848L7.93042 31.1779C7.86667 31.6917 7.39823 32.0566 6.88467 31.9928C6.37086 31.9291 6.00592 31.4609 6.06967 30.9471L7.06967 22.8845C7.12792 22.415 7.52686 22.0625 8.00004 22.0625H12.5C12.9732 22.0625 13.3722 22.415 13.4304 22.8845L14.4304 30.9471C14.4942 31.4609 14.1293 31.9291 13.6154 31.9928C13.5763 31.9977 13.5374 32.0001 13.4989 32.0001Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M12.9925 27.8749H7.50812C6.99037 27.8749 6.57062 27.4552 6.57062 26.9374C6.57062 26.4197 6.99037 25.9999 7.50812 25.9999H12.9925C13.5102 25.9999 13.93 26.4197 13.93 26.9374C13.93 27.4552 13.5102 27.8749 12.9925 27.8749Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M13.5 23.9374H7C6.48225 23.9374 6.0625 23.5177 6.0625 22.9999C6.0625 22.4822 6.48225 22.0624 7 22.0624H13.5C14.0178 22.0624 14.4375 22.4822 14.4375 22.9999C14.4375 23.5177 14.0178 23.9374 13.5 23.9374Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M24.9989 32.0001C24.5325 32.0001 24.1285 31.6524 24.0697 31.1779L23.1716 23.9374H20.3285L19.4304 31.1779C19.3667 31.6917 18.899 32.0568 18.3847 31.9928C17.8709 31.9291 17.506 31.4609 17.5697 30.9471L18.5697 22.8845C18.628 22.415 19.0269 22.0625 19.5001 22.0625H24.0001C24.4732 22.0625 24.8722 22.415 24.9305 22.8845L25.9305 30.9471C25.9942 31.4609 25.6294 31.9291 25.1155 31.9928C25.0763 31.9977 25.0374 32.0001 24.9989 32.0001Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M24.4924 27.8749H19.0081C18.4903 27.8749 18.0706 27.4552 18.0706 26.9374C18.0706 26.4197 18.4903 25.9999 19.0081 25.9999H24.4924C25.0102 25.9999 25.4299 26.4197 25.4299 26.9374C25.4299 27.4552 25.0102 27.8749 24.4924 27.8749Z"
                      fill="#5843BE"
                    />
                    <path
                      d="M25 23.9374H18.5C17.9822 23.9374 17.5625 23.5177 17.5625 22.9999C17.5625 22.4822 17.9822 22.0624 18.5 22.0624H25C25.5177 22.0624 25.9375 22.4822 25.9375 22.9999C25.9375 23.5177 25.5177 23.9374 25 23.9374Z"
                      fill="#5843BE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_132_175">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#7A7E86]">
                  <span className="text-[#5843BE] font-medium">2 </span>
                  kitchen
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.0625 27.4375H0.9375C0.41975 27.4375 0 27.0177 0 26.5V19.875C0 18.3242 1.26169 17.0625 2.8125 17.0625H29.1875C30.7383 17.0625 32 18.3242 32 19.875V26.5C32 27.0177 31.5802 27.4375 31.0625 27.4375ZM1.875 25.5625H30.125V19.875C30.125 19.3581 29.7044 18.9375 29.1875 18.9375H2.8125C2.29556 18.9375 1.875 19.3581 1.875 19.875V25.5625Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M5 29.9375C4.48225 29.9375 4.0625 29.5178 4.0625 29V26.5C4.0625 25.9822 4.48225 25.5625 5 25.5625C5.51775 25.5625 5.9375 25.9822 5.9375 26.5V29C5.9375 29.5178 5.51775 29.9375 5 29.9375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M27 29.9375C26.4822 29.9375 26.0625 29.5178 26.0625 29V26.5C26.0625 25.9822 26.4822 25.5625 27 25.5625C27.5178 25.5625 27.9375 25.9822 27.9375 26.5V29C27.9375 29.5178 27.5178 29.9375 27 29.9375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M14 18.9375H8C7.48225 18.9375 7.0625 18.5177 7.0625 18V13C7.0625 12.4822 7.48225 12.0625 8 12.0625H14C14.5177 12.0625 14.9375 12.4822 14.9375 13V18C14.9375 18.5177 14.5177 18.9375 14 18.9375ZM8.9375 17.0625H13.0625V13.9375H8.9375V17.0625Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M24 18.9375H18C17.4822 18.9375 17.0625 18.5177 17.0625 18V13C17.0625 12.4822 17.4822 12.0625 18 12.0625H24C24.5177 12.0625 24.9375 12.4822 24.9375 13V18C24.9375 18.5177 24.5177 18.9375 24 18.9375ZM18.9375 17.0625H23.0625V13.9375H18.9375V17.0625Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M29 18.9375H3C2.48225 18.9375 2.0625 18.5177 2.0625 18V16C2.0625 12.2772 3.51225 8.77719 6.14469 6.14469C8.77713 3.51219 12.2772 2.0625 16 2.0625C19.7173 2.0625 23.2143 3.50937 25.8471 6.13656C28.4848 8.76875 29.9375 12.2716 29.9375 16V18C29.9375 18.5177 29.5177 18.9375 29 18.9375ZM3.9375 17.0625H28.0625V16C28.0625 9.34875 22.6513 3.9375 16 3.9375C9.34875 3.9375 3.9375 9.34875 3.9375 16V17.0625Z"
                    fill="#5843BE"
                  />
                </svg>
                <span className="text-[#7A7E86]">
                  <span className="text-[#5843BE] font-medium">3 </span>
                  bedroom
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.625 29.9375H5.375C3.82419 29.9375 2.5625 28.6758 2.5625 27.125V2.8125C2.5625 1.26169 3.82419 0 5.375 0H26.625C28.1758 0 29.4375 1.26169 29.4375 2.8125V27.125C29.4375 28.6758 28.1758 29.9375 26.625 29.9375ZM5.375 1.875C4.85806 1.875 4.4375 2.29556 4.4375 2.8125V27.125C4.4375 27.6419 4.85806 28.0625 5.375 28.0625H26.625C27.1419 28.0625 27.5625 27.6419 27.5625 27.125V2.8125C27.5625 2.29556 27.1419 1.875 26.625 1.875H5.375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M8 32C7.48225 32 7.0625 31.5803 7.0625 31.0625V29C7.0625 28.4822 7.48225 28.0625 8 28.0625C8.51775 28.0625 8.9375 28.4822 8.9375 29V31.0625C8.9375 31.5803 8.51775 32 8 32Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M24 32C23.4822 32 23.0625 31.5803 23.0625 31.0625V29C23.0625 28.4822 23.4822 28.0625 24 28.0625C24.5178 28.0625 24.9375 28.4822 24.9375 29V31.0625C24.9375 31.5803 24.5178 32 24 32Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M16 29.9375C15.4822 29.9375 15.0625 29.5177 15.0625 29V0.9375C15.0625 0.41975 15.4822 0 16 0C16.5178 0 16.9375 0.41975 16.9375 0.9375V29C16.9375 29.5177 16.5178 29.9375 16 29.9375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M28.5 21.9375H16C15.4822 21.9375 15.0625 21.5178 15.0625 21C15.0625 20.4822 15.4822 20.0625 16 20.0625H28.5C29.0177 20.0625 29.4375 20.4822 29.4375 21C29.4375 21.5178 29.0177 21.9375 28.5 21.9375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M23 26H21.5C20.9822 26 20.5625 25.5803 20.5625 25.0625C20.5625 24.5447 20.9822 24.125 21.5 24.125H23C23.5178 24.125 23.9375 24.5447 23.9375 25.0625C23.9375 25.5803 23.5178 26 23 26Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M12 15.9375C11.4822 15.9375 11.0625 15.5178 11.0625 15V13.5C11.0625 12.9822 11.4822 12.5625 12 12.5625C12.5178 12.5625 12.9375 12.9822 12.9375 13.5V15C12.9375 15.5178 12.5178 15.9375 12 15.9375Z"
                    fill="#5843BE"
                  />
                  <path
                    d="M20 15.9375C19.4822 15.9375 19.0625 15.5178 19.0625 15V13.5C19.0625 12.9822 19.4822 12.5625 20 12.5625C20.5178 12.5625 20.9375 12.9822 20.9375 13.5V15C20.9375 15.5178 20.5178 15.9375 20 15.9375Z"
                    fill="#5843BE"
                  />
                </svg>
                <span className="text-[#7A7E86]">
                  <span className="text-[#5843BE] font-medium">3 </span>
                  cupboard
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 pl-6">
          <h2 className="text-base">Photos</h2>
          <div className="mt-3 flex gap-5 overflow-x-auto">
            <div className="flex-shrink-0">
              <img
                src="/img/photo-detail-1.png"
                alt=""
                className="object-cover rounded-2xl w-[110px] h-[88px]"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="/img/photo-detail-2.png"
                alt=""
                className="object-cover rounded-2xl w-[110px] h-[88px]"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="/img/photo-detail-3.png"
                alt=""
                className="object-cover rounded-2xl w-[110px] h-[88px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 px-6 flex justify-between items-center">
          <div>
            <h2 className="text-base mb-1">Location</h2>
            <p className="text-[#7A7E86] text-sm">Jln. Kappan Sukses No. 20</p>
            <p className="text-[#7A7E86] text-sm">Palembang</p>
          </div>
          <div className="w-[40px] h-[40px] bg-[#F6F7F8] rounded-full flex items-center justify-center p-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5416 19.7066C13.0886 18.3263 17.4167 13.9752 17.4167 8.49999C17.4167 5.16666 15.4115 1.83333 11 1.83333C6.58858 1.83333 4.58337 5.16666 4.58337 8.49999C4.58337 13.9752 8.91147 18.3263 10.4585 19.7066C10.7718 19.9862 11.2283 19.9862 11.5416 19.7066ZM11 11C12.5188 11 13.75 9.76878 13.75 8.24999C13.75 6.73121 12.5188 5.49999 11 5.49999C9.48126 5.49999 8.25004 6.73121 8.25004 8.24999C8.25004 9.76878 9.48126 11 11 11Z"
                fill="#989BA1"
              />
            </svg>
          </div>
        </div>
        <div className="px-6 py-12 flex">
          <a
            href=""
            className="bg-[#5843BE] w-full px-[120px] py-3 text-white rounded-2xl"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
