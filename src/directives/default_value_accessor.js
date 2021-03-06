/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Renderer, forwardRef } from '@angular/core/index';
import { NG_VALUE_ACCESSOR } from './control_value_accessor';
export const /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DefaultValueAccessor),
    multi: true
};
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
export class DefaultValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        const /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
DefaultValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngControl],[ngModel],[ngFormControl]',
                host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
DefaultValueAccessor.ctorParameters = () => [
    { type: Renderer, },
    { type: ElementRef, },
];
function DefaultValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    DefaultValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DefaultValueAccessor.ctorParameters;
    /** @type {?} */
    DefaultValueAccessor.prototype.onChange;
    /** @type {?} */
    DefaultValueAccessor.prototype.onTouched;
    /** @type {?} */
    DefaultValueAccessor.prototype._renderer;
    /** @type {?} */
    DefaultValueAccessor.prototype._elementRef;
}
//# sourceMappingURL=default_value_accessor.js.map