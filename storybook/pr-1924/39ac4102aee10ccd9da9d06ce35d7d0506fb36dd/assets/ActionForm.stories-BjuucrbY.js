import{j as t,g as n}from"./iframe-C9aInfce.js";import{A as r}from"./action-form-BgQncU1g.js";import"./preload-helper-PMI8cRcX.js";import"./DropdownField-DSk9Pf-V.js";import"./debounce-G0Gt7iOQ.js";import"./useOsdkClient-CoTph7YD.js";import"./index-Cr0L3GZN.js";import"./Input-CG7QoG-N.js";import"./useBaseUiId-bh5ywVzc.js";import"./useControlled-BMW5V9nZ.js";import"./index-6S-kg2yi.js";import"./index-ScvUSFZz.js";import"./PopoverPopup-CmF8uWKK.js";import"./InternalBackdrop-B3ucOVZd.js";import"./composite-CLAAs_xp.js";import"./index-YtZtBJ6H.js";import"./getDisabledMountTransitionStyles-DP-946Fx.js";import"./ToolbarRootContext-BuD4rpNO.js";import"./tick-BzlYcUXY.js";import"./svgIconContainer-BJqGJbKn.js";import"./small-cross-BzhMeLn8.js";import"./search-DFxfowIj.js";import"./cross-DetncErB.js";import"./useValueChanged-DPxHLeei.js";import"./getPseudoElementBounds-Bl18tBQw.js";import"./CompositeItem-DcXO7kaY.js";import"./makeExternalStore-CqZkZ6X0.js";import"./BaseForm-CIBR9EZ1.js";import"./ActionButton-8qmPdMKn.js";import"./Button-DLimHkL6.js";import"./SkeletonBar-DD0yFs0X.js";import"./Tooltip-u4pIgaNq.js";import"./info-sign-K3OQHfuy.js";import"./chevron-up-Dlj0s1iI.js";import"./chevron-down-CAB1YUBN.js";import"./useEventCallback-1FeWEKRC.js";import"./iconLoader-CjOd46Sa.js";import"./Switch-DDPdNKCd.js";import"./CompositeRoot-B5sKgSby.js";import"./TimePicker-2Q0u-8HZ.js";import"./CollapsiblePanel-CEhqOGjS.js";import"./error-CwJEBYlM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-7XGlhu7o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
