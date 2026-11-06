import{j as t,g as n}from"./iframe-C_zjGY3J.js";import{A as r}from"./action-form-CFS6FNz8.js";import"./preload-helper-CxQirRCn.js";import"./DropdownField-CyGzvNY6.js";import"./debounce-h7EBhWzB.js";import"./useOsdkClient-Y2kyMsP0.js";import"./index-DKxF60He.js";import"./Input-DcJi9KF0.js";import"./useBaseUiId-B_8kV6Oo.js";import"./useControlled-Cax61rbp.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./PopoverPopup-BzhSaZz_.js";import"./InternalBackdrop-uWsHH71n.js";import"./composite-Cr4kgIEQ.js";import"./index-DI66YYCT.js";import"./getDisabledMountTransitionStyles-XdJXtecO.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./tick-CL77rkJb.js";import"./svgIconContainer-D5MQxCYm.js";import"./small-cross-CGjWQ0oG.js";import"./search-BzCll0d5.js";import"./cross-CQU2s8jh.js";import"./useValueChanged-BYMJHvk0.js";import"./getPseudoElementBounds-BkxLwt0A.js";import"./CompositeItem-LZfgl15E.js";import"./makeExternalStore-UmBMWTEb.js";import"./BaseForm-Dulfk6pq.js";import"./ActionButton-C5vJNt5z.js";import"./Button-CKW0-13G.js";import"./SkeletonBar-Cy9nbF32.js";import"./Tooltip-DApHIikG.js";import"./info-sign-BheWdciN.js";import"./chevron-up-C0TyuGk4.js";import"./chevron-down-DXGDx1Zu.js";import"./useEventCallback-BQXY3ym0.js";import"./iconLoader-CvaLNfeJ.js";import"./Switch-BmrhapAg.js";import"./CompositeRoot-FvSK3I_g.js";import"./TimePicker-BBf58xy6.js";import"./CollapsiblePanel-BDYGizlk.js";import"./error-D5GOl81y.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BNDJqEzp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
