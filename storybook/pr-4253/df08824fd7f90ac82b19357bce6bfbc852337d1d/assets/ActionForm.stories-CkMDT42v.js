import{j as t,g as n}from"./iframe-2fyz7Bbq.js";import{A as r}from"./action-form-TSZ4gvBj.js";import"./preload-helper-FOou-mrh.js";import"./DropdownField-D9o_O7ux.js";import"./debounce-BsOS8FIl.js";import"./useOsdkClient-CFdcyAcU.js";import"./index-w9tQLZ4b.js";import"./Input-BME0--u-.js";import"./useBaseUiId-Dhg2ncZ0.js";import"./useControlled-DBeA7CGw.js";import"./index-2dmmxfKi.js";import"./index-BVjs4Tt3.js";import"./PopoverPopup-Djz7xAaZ.js";import"./InternalBackdrop-BtkGVef4.js";import"./composite-B2qtiWqW.js";import"./index-D6LVVKRT.js";import"./getDisabledMountTransitionStyles-DUL0cjvK.js";import"./ToolbarRootContext-D0NvUOkn.js";import"./tick-DxXdptn1.js";import"./svgIconContainer-CyZL2Xnt.js";import"./small-cross-BrCxHajj.js";import"./search-Cte9a7SC.js";import"./cross-FzaN-G0q.js";import"./useValueChanged-DqgUGOFJ.js";import"./getPseudoElementBounds-nIhWr_xb.js";import"./CompositeItem-DxQDXycs.js";import"./makeExternalStore-wF1R62-h.js";import"./BaseForm-BgJrtPU9.js";import"./ActionButton-DopClacG.js";import"./Button-CEYlZhfx.js";import"./SkeletonBar-C3vpEq_4.js";import"./Tooltip-BzXO1CqE.js";import"./info-sign-C6Oa8AmN.js";import"./chevron-up-BQ9gaiFE.js";import"./chevron-down-IEWgGiNw.js";import"./useEventCallback-UvUwHhfn.js";import"./iconLoader-CWXykQvb.js";import"./Switch-55K3Lhpc.js";import"./CompositeRoot-Bp4YIOpv.js";import"./TimePicker-Bdu0YXYw.js";import"./CollapsiblePanel-BaQP6E3J.js";import"./error-DQou1LSG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BgEBqHFS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
