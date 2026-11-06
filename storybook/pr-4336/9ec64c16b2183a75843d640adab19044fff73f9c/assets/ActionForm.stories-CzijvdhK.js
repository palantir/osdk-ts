import{j as t,g as n}from"./iframe-29gR9XhZ.js";import{A as r}from"./action-form-DzTz8bNQ.js";import"./preload-helper-DlT-mGxO.js";import"./DropdownField-BNL8L0v5.js";import"./debounce-DxHc7Ker.js";import"./useOsdkClient-CwzE6u8u.js";import"./index-CrsEpx0M.js";import"./Input-5lsFnUBK.js";import"./useBaseUiId-s8FPLP5u.js";import"./useControlled-DH4JcH5f.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./PopoverPopup-CIsYphuH.js";import"./InternalBackdrop-BprBEkhL.js";import"./composite-C-osCGVl.js";import"./index-Cch7mQ8a.js";import"./getDisabledMountTransitionStyles-D9EBmjTC.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./tick-T4_w1PlJ.js";import"./svgIconContainer-B81IYS8r.js";import"./small-cross-B-y2x7T0.js";import"./search-DAxbo9jb.js";import"./cross-CuUhPQxd.js";import"./useValueChanged-B5seCtbl.js";import"./getPseudoElementBounds-BV3Dd7LZ.js";import"./CompositeItem-7um1p8gd.js";import"./makeExternalStore-CAnIClXP.js";import"./BaseForm-C8vd1-y_.js";import"./ActionButton-DBsW9PSK.js";import"./Button-DYk_F-qJ.js";import"./SkeletonBar-C37AZzuf.js";import"./Tooltip-BXN6Rclk.js";import"./info-sign-D_253kwY.js";import"./chevron-up-BqCjK7xm.js";import"./chevron-down-C2ebRgMi.js";import"./useEventCallback-DBhYM9Hy.js";import"./iconLoader-DZNiETJ_.js";import"./Switch-BHgravVk.js";import"./CompositeRoot-BhXeyUrp.js";import"./TimePicker-DnJs0RVD.js";import"./CollapsiblePanel-CQQxgaFT.js";import"./error-C8ioQ8xA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8queKnp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
