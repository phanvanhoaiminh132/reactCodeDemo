export interface tagType {
    title?: string,
    tags?: string[]
}

export interface linkType {
    title?: string,
    links?: string[]
}

export interface categoryTagType {
    title?: string;
    isShowViewAll?: boolean;
}

export const categoryFooterTag:tagType = {
    title: "Categories",
    tags: [
        "Politics", 
        "Business", 
        "Corporate", 
        "Sports", 
        "Health", 
        "Education", 
        "Science", 
        "Technology",
        "Foods",
        "Entertainment",
        "Travel",
        "lifestyle"
    ]
}

export const tagsFooterTag:tagType = {
    title: "Tags",
    tags: [
        "Politics", 
        "Business", 
        "Corporate", 
        "Sports", 
        "Health", 
        "Education", 
        "Science", 
        "Technology",
        "Foods",
        "Entertainment",
        "Travel",
        "lifestyle"
    ]
}

export const footerLink:linkType = {
    title: "Quick Link",
    links: [
        "About", 
        "Advertise", 
        "Privacy Policy", 
        "Temrm & Conditions", 
        "Contact",
    ]
}