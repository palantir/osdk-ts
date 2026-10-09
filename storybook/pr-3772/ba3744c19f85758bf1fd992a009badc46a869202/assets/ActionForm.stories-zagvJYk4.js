import{j as t,g as n}from"./iframe-DkUlyVAk.js";import{A as r}from"./action-form-BysoTCyH.js";import"./preload-helper-Do3rx7tx.js";import"./DropdownField-Bqc5sgH5.js";import"./debounce-BrUJ1qZS.js";import"./useOsdkClient-DcaeD6xA.js";import"./index-BKCxouDT.js";import"./Input-DEfnyfO2.js";import"./useBaseUiId-Ct2lb7hy.js";import"./useControlled-DQwmvUO6.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./PopoverPopup-CjNS0jhO.js";import"./InternalBackdrop-JtvBqmbW.js";import"./composite-DFkzp6xD.js";import"./index-BHWhvKcH.js";import"./getDisabledMountTransitionStyles-D2mnHFL5.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./tick-xV8dN8GT.js";import"./svgIconContainer-DXdte7hC.js";import"./small-cross-CBmGUiw6.js";import"./search-BtZqzqFW.js";import"./cross-NxNK5LVM.js";import"./useValueChanged-Bwz98CW8.js";import"./getPseudoElementBounds-DgjJtdNO.js";import"./CompositeItem-C6x4Plfg.js";import"./makeExternalStore-CrMBheh9.js";import"./BaseForm-C9A4lh7l.js";import"./ActionButton-CGCXefcq.js";import"./Button-YTCf-lQa.js";import"./SkeletonBar-DrTF8jwx.js";import"./Tooltip-BZdoNmX1.js";import"./info-sign-B1dSW6Db.js";import"./chevron-up-D37Dfu9H.js";import"./chevron-down-C8H-X29U.js";import"./useEventCallback-Bfg-1dtD.js";import"./iconLoader-DpNWf8c9.js";import"./Switch-CJ7BOnq0.js";import"./CompositeRoot-C2cBBfzl.js";import"./TimePicker-Dnt_S0K2.js";import"./CollapsiblePanel-CWIE3b7e.js";import"./error-Cxkq3yoq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-_-mYkqh_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
