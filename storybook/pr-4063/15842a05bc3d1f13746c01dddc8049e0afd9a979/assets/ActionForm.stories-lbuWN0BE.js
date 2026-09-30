import{j as t,g as n}from"./iframe-BP89Z9wn.js";import{A as r}from"./action-form-Du6520y_.js";import"./preload-helper-CpDXy6ri.js";import"./DropdownField-DBILA8E6.js";import"./debounce--3v9P4Lb.js";import"./useOsdkClient-BZi6F2zc.js";import"./index-7fPc8Pd4.js";import"./Input-CurDQ8U3.js";import"./useBaseUiId-BsQB3yjV.js";import"./useControlled-DYUiPWJr.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./PopoverPopup-oOwrFqQx.js";import"./InternalBackdrop-qHNvDGw-.js";import"./composite-JzO3n_7v.js";import"./index-RHMRxRkz.js";import"./getDisabledMountTransitionStyles-BNgnrYDf.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./tick-jzT-KPyz.js";import"./svgIconContainer-B-B6fhYH.js";import"./small-cross-CxfEbA50.js";import"./search-Ce4dpx9M.js";import"./cross-CseKBkZX.js";import"./useValueChanged-SyUpxD-D.js";import"./getPseudoElementBounds-bsHuPucT.js";import"./CompositeItem-BWaumFAX.js";import"./makeExternalStore-G7zKBEOt.js";import"./BaseForm-Bs9pGvvp.js";import"./ActionButton-QrFK0FUf.js";import"./Button-Bcmb5ML8.js";import"./SkeletonBar-BVNLCVuA.js";import"./Tooltip-DYmR_CPY.js";import"./info-sign-BwZzG_gz.js";import"./chevron-up-CnfXm6bd.js";import"./chevron-down-CbjEdb4A.js";import"./useEventCallback-OSRHYtdG.js";import"./iconLoader-DafdFOE7.js";import"./Switch-D6seZ66B.js";import"./CompositeRoot-CBGwrkeq.js";import"./TimePicker-Cjj1stsU.js";import"./CollapsiblePanel-C9i8cz4o.js";import"./error-B9U50q0S.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hOQ5lnvy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
