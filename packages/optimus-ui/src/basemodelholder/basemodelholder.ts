import { computed } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { isNotEmpty } from '@openng/optimus-ui-utils';
import { BaseComponent } from '@openng/optimus-ui/basecomponent';

export abstract class BaseModelHolder<PT = any, ModelValue = any, isNullable extends boolean = false> extends BaseComponent<PT> implements FormValueControl<isNullable extends true ? ModelValue | null : NonNullable<ModelValue>> {
    abstract value: FormValueControl<isNullable extends true ? ModelValue | null : NonNullable<ModelValue>>['value'];

    $filled = computed(() => isNotEmpty(this.value()));

    writeModelValue(value: ReturnType<typeof this.value>) {
        this.value.set(value);
    }
}
