import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { JSX } from 'vue/jsx-runtime';
import type { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';

declare const _default: DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;

declare const _default_2: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>;

export declare const KButton: SFCWithInstall<DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", PublicProps, Readonly<ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>> & Record<string, any>;

/**
 * 定义emit类型
 */
export declare type KButtonEmits = {
    (e: 'click'): void;
};

/**
 * 定义instance类型
 */
export declare type KButtonInstance = InstanceType<typeof _default>;

/**
 * 定义props类型
 */
export declare type KButtonProps = {
    type?: string;
};

export declare const KTypewriter: SFCWithInstall<DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>> & Record<string, any>;

/**
 * 定义emit类型
 */
export declare type KTypewriterEmits = {
    (e: 'click'): void;
};

/**
 * 定义instance类型
 */
export declare type KTypewriterInstance = InstanceType<typeof _default_2>;

/**
 * 定义props类型
 */
export declare type KTypewriterProps = {
    type?: string;
};

declare type SFCWithInstall<T> = T & Plugin_2;

export { }
