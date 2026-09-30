import{j as t,g as n}from"./iframe-Cd3assbj.js";import{A as r}from"./action-form-BHrve19f.js";import"./preload-helper-CJDETHpR.js";import"./DropdownField-CwGIbooA.js";import"./debounce-BBOLVlWE.js";import"./useOsdkClient-5X7bez4P.js";import"./index-CuezTBwu.js";import"./Input-CNsHRcz9.js";import"./useBaseUiId-BiXP69FS.js";import"./useControlled-C6IOb7yO.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./PopoverPopup-vz2lsMDk.js";import"./InternalBackdrop-Bfk48BSq.js";import"./composite-Ba6K1tVR.js";import"./index-CwyP96WI.js";import"./getDisabledMountTransitionStyles-JnE9U1PQ.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./tick-CiqYFsfj.js";import"./svgIconContainer-mKWT46Ew.js";import"./small-cross-D0ffFCO-.js";import"./search-DpDuiZ1l.js";import"./cross-BWupVKMA.js";import"./useValueChanged-BUUaJ7qm.js";import"./getPseudoElementBounds-DSs2TMmL.js";import"./CompositeItem-Bvq7b2TM.js";import"./makeExternalStore-BWQlbo1w.js";import"./BaseForm-CH248WxQ.js";import"./ActionButton-CJgwBqar.js";import"./Button-DL7dr6Eo.js";import"./SkeletonBar-Cic0iWBu.js";import"./Tooltip-CtacdFMY.js";import"./info-sign-BNzuDPpv.js";import"./chevron-up-DpAs353q.js";import"./chevron-down-CJuFpDqg.js";import"./useEventCallback-CeMIqilU.js";import"./iconLoader-BJhKh2oH.js";import"./Switch-BsNQZc4h.js";import"./CompositeRoot-BeW3YXzY.js";import"./TimePicker-B8QfD_oz.js";import"./CollapsiblePanel-_KRgjImS.js";import"./error-DnfhABs7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CmAk2EDk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
