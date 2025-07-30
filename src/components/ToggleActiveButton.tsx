import { Extension } from "@/types/extension";

interface ToggleActiveButtonProps {
    isActive: boolean;
    extensionNameRef: string;
    updateExtensionState: React.Dispatch<React.SetStateAction<Extension[]>>;
}

const ToggleActiveButton = ({
    isActive,
    extensionNameRef,
    updateExtensionState
}: ToggleActiveButtonProps) => {
    return (
        <button
            onClick={ () =>
                updateExtensionState(prevState =>
                    prevState.map(extension => 
                        extension.name === extensionNameRef
                        ? { ...extension, isActive: !extension.isActive}
                        : extension
                    )
                )
            }
        >
            <div
                className={
                    `w-14 h-8 flex items-center rounded-full
                    p-1 cursor-pointer transition-colors duration-300
                    ${isActive ? 'bg-[hsl(3,_86%,_64%)]' : 'bg-[hsl(226,_11%,_37%)]'}`
                }
            >
                <div
                    className={
                        `bg-white w-6 h-6 rounded-full shadow-md transform
                        transition-transform duration-300
                        ${isActive ? 'translate-x-6' : 'translate-x-0'}`
                    }
                />
            </div>
        </button>
    )
};

export default ToggleActiveButton;
