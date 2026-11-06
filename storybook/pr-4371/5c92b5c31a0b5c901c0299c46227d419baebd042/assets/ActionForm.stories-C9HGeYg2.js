import{j as t,g as n}from"./iframe-BTjo4hoa.js";import{A as r}from"./action-form-C1TH-2vK.js";import"./preload-helper-GDbQ32hR.js";import"./DropdownField-R4jwd9Zw.js";import"./debounce-mxu17zY-.js";import"./useOsdkClient-BVjPnTI9.js";import"./index-DzoGtTYW.js";import"./Input-C7imWp_z.js";import"./useBaseUiId-DiKKztfj.js";import"./useControlled-DrQ-vlJr.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./isObject-aHdVZCJ4.js";import"./InternalBackdrop-C3VRyl9V.js";import"./composite-DnWT1pj_.js";import"./index-CoDC80rb.js";import"./getDisabledMountTransitionStyles-ClFFQye4.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./tick-B6UzXqFV.js";import"./svgIconContainer-Ci_Sec47.js";import"./small-cross-Brkvg0Wi.js";import"./search-CK191Oob.js";import"./cross-C7uzIn7X.js";import"./useValueChanged-CDlZmnEp.js";import"./getPseudoElementBounds-DsfXOZwR.js";import"./CompositeItem-DqO_c0k8.js";import"./makeExternalStore-Ch7iFOMP.js";import"./BaseForm-CFhF2DAW.js";import"./ActionButton-tTZpGoIh.js";import"./Button-BcNFr6aW.js";import"./SkeletonBar-Been06Cr.js";import"./Tooltip-BPmE3Z94.js";import"./info-sign-DK78UtZX.js";import"./chevron-up-B3FYNOj0.js";import"./chevron-down-Ca_e0izc.js";import"./useEventCallback-C_wT4v2Q.js";import"./iconLoader-CU9MvHMx.js";import"./Switch-xP2lsaMi.js";import"./CompositeRoot-CKEaTo9L.js";import"./TimePicker-DRS0Zudb.js";import"./CollapsiblePanel-CEseDnp9.js";import"./error-D2oiLEA6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DsZGAGfW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
