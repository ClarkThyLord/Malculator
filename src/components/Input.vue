<template>
  <div class="uk-margin-right">
    <label class="uk-form-label">
      <slot name="title" />
    </label>
    <div class="uk-form-controls">
      <input
        :type="type"
        :disabled="disabled"
        v-model="value"
        :placeholder="placeholder"
        @input="update"
        class="uk-input"
        :style="{'max-width': InputLenght }"
        :class="{'uk-form-success': success, 'uk-form-danger': danger}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    starting_value: {
      default: ""
    },
    placeholder: {
      type: String,
      default: "Input here..."
    },
    valid_type: {
      type: String,
      default: "number"
    },
    empty_invalid: {
      type: Boolean,
      default: false
    },
    InputLenght: {
      type: String,
      default: "200px"
    }
  },
  data: function() {
    return {
      value: "",
      real_value: "",
      valid: false,
      invalid: false
    };
  },
  mounted: function(params) {
    this.value = this.starting_value;
  },
  computed: {
    success: function() {
      return this.valid;
    },
    danger: function() {
      return (this.empty_invalid && this.value.length <= 0) || this.invalid;
    }
  },
  methods: {
    update: function() {
      let value = undefined;
      if (this.value.length > 0) {
        try {
          value = window.mathjs.evaluate(this.value);
        } catch (e) {
          // console.log(e.message);
        }
        this.valid = typeof value == this.valid_type ? true : false;
        this.invalid = !this.valid;
      } else {
        this.valid = this.invalid = false;
      }
      if (this.valid) {
        this.real_value = value;
        this.$emit("updated");
      }
    }
  }
};
</script>
