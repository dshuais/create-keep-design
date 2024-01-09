import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_TypePropsToRuntimeProps<KButtonProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<KButtonProps>>> & {
    onClick?: (() => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;

declare const _default_2: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>;

export declare const KButton: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        type: {
            type: PropType<string>;
        };
    }>> & {
        onClick?: (() => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        click: () => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        type: {
            type: PropType<string>;
        };
    }>> & {
        onClick?: (() => any) | undefined;
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        type: {
            type: PropType<string>;
        };
    }>> & {
        onClick?: (() => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    type: {
        type: PropType<string>;
    };
}>> & {
    onClick?: (() => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: () => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;

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
