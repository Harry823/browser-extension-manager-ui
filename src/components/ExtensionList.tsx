'use client';

import ExtensionItem from "@/components/ExtensionItem";
import { Extension } from "@/types/extension";
import { useState } from "react";

const SORT_TYPES = {
    all: 'All',
    active: 'Active',
    inactive: 'Inactive'
}

type SortType = keyof typeof SORT_TYPES;
interface ExtensionListProps {
    extensionData: Extension[]
}

const ExtensionList = ({ extensionData }: ExtensionListProps) => {
    const [sortBy, setSortBy] = useState<SortType>('all');
    const [extensions, setExtensions] = useState<Extension[]>(extensionData)

    const shouldExtensionShow = (extensionItem: Extension) => {
        const extensionSortStatus = extensionItem.isActive
            ? 'active'
            : 'inactive';
        if (sortBy === 'all' || sortBy === extensionSortStatus) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="mt-7">
            <div className="mb-4 text-center flex flex-wrap justify-center md:justify-between">
                <h1 className="text-3xl font-medium md:float-left">Extensions List</h1>
                <div className="flex my-6 gap-2 justify-center md:float-right">
                    {Object.keys(SORT_TYPES).map((buttonType, index) => {
                        const typedButtonType = buttonType as SortType
                        return (
                            <button
                                key={index}
                                onClick={() => setSortBy(typedButtonType)}>
                                <div
                                    className={`inline rounded-3xl px-4 py-2 
                                        ${typedButtonType === sortBy
                                            ? 'bg-[hsl(3,_86%,_64%)]'
                                            : 'bg-[hsl(225,_23%,_24%)] border border-[hsl(226,_11%,_37%)]'}
                                    `}
                                >
                                    <span
                                        className={typedButtonType === sortBy ? 'text-[#040918]' : 'text-white'}>
                                        {SORT_TYPES[typedButtonType]}
                                    </span>
                                </div>
                            </button>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                {extensions
                    .filter(shouldExtensionShow)
                    .map((extension, index) =>
                    <ExtensionItem
                        extensionData={extension}
                        key={index}
                        updateExtensionState={setExtensions}
                    />
                )}
            </div>
        </div>
    );
}

export default ExtensionList;
