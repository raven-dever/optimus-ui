import { booleanAttribute, Directive, input } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { BaseModelHolder } from '@openng/optimus-ui/basemodelholder';

@Directive({ standalone: true })
export abstract class BaseEditableHolder<PT = any, ModelValue = any, isNullable extends boolean = false>
    extends BaseModelHolder<PT, ModelValue, isNullable>
    implements FormValueControl<isNullable extends true ? ModelValue | null : NonNullable<ModelValue>>
{
    /**
     * The model value can be set to null.
     * @defaultValue false
     * @group Props
     */
    nullable = input<isNullable, unknown>(false as isNullable, { transform: booleanAttribute as (v: unknown) => isNullable });
    /**
     * There must be a value (if set).
     * @defaultValue false
     * @group Props
     */
    required = input(false, { transform: booleanAttribute });
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     * @group Props
     */
    invalid = input(false, { transform: booleanAttribute });
    /**
     * When present, it specifies that the component should have disabled state style.
     * @defaultValue false
     * @group Props
     */
    disabled = input(false, { transform: booleanAttribute });

    /**
     * When present, it specifies that an input field is read-only.
     * @defaultValue false
     * @group Props
     */
    readonly = input(false, { transform: booleanAttribute });

    /**
     * When present, it specifies that the name of the input.
     * @defaultValue undefined
     * @group Props
     */
    name = input<string>('');

    /**
     * Indicates if input was touched.
     * @defaultValue false
     * @group Props
     */
    touched = input(false, { transform: booleanAttribute });
}
