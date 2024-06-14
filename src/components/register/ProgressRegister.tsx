interface Step {
    number: number;
    isActive: boolean;
    description: string;
    bar: {
        isActive: boolean;
    };
}

interface ProgressProps {
    steps: Step[];
}

export default function Progress({ steps }: ProgressProps) {


    return (
        <ol className="relative flex items-center w-full mb-4 sm:mb-5 p-10">
            {steps.map((step, index) => (
                <li key={index} className={
                    index === steps.length - 1 ?
                        ''
                        :
                        step.bar.isActive ?
                            "relative flex w-full items-center text-secondary-800 dark:text-secondary-700 after:content-[''] after:w-full after:h-1 after:border-b after:border-[#DA2B3A] after:border-8 after:inline-block dark:after:border-[#DA2B3A]"
                            :
                            "relative flex w-full items-center text-secondary-800 dark:text-secondary-700 after:content-[''] after:w-full after:h-1 after:border-b after:border-[#D9D9D9] after:border-8 after:inline-block dark:after:border-[#D9D9D9];"
                }>
                    <div className="flex flex-col items-center">
                        <div className={
                            step.isActive ?
                                "flex place-items-center justify-center w-10 h-10 bg-[#f2f2f2] rounded-full lg:h-9 lg:w-9 dark:bg-[#f2f2f2] border-secondary-600 border-solid border-4 font-bold text-1xl"
                                :
                                "flex place-items-center justify-center w-10 h-10 bg-[#f2f2f2] rounded-full lg:h-9 lg:w-9 dark:bg-[#f2f2f2] border-[#D9D9D9] border-solid border-4 font-bold text-1xl"}>
                            {step.number}
                        </div>
                        <div className="absolute mt-12 text-sm text-secondary-600 dark:text-secondary-500 whitespace-nowrap">
                            {step.description}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
}
