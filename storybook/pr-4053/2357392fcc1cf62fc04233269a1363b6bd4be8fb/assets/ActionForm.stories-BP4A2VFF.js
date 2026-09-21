import{j as t,g as n}from"./iframe-8nXJMjDB.js";import{A as r}from"./action-form-Bh7ZeAj9.js";import"./preload-helper-CJKRkHxR.js";import"./DropdownField-C3Grldi_.js";import"./debounce-CLt3Mm3K.js";import"./useOsdkClient-DlZIRDE7.js";import"./index-DJbKq1-5.js";import"./Input-QBUJ65eb.js";import"./useBaseUiId-DpDF9vet.js";import"./useControlled-CUJ7pCf5.js";import"./index-CEoWz6xw.js";import"./index-2q5Mchef.js";import"./PopoverPopup-iFnEjeGR.js";import"./InternalBackdrop-BwllQc25.js";import"./composite-Bp-oM0Et.js";import"./index-BXuWsT-u.js";import"./getDisabledMountTransitionStyles-yJ-bhU6o.js";import"./ToolbarRootContext-BLLK3VJo.js";import"./tick-DDh-ihWu.js";import"./svgIconContainer-olalqAcz.js";import"./small-cross-7ULJZ0Aq.js";import"./search-Bnief77D.js";import"./cross-CpVH0STr.js";import"./useValueChanged-Dzpnds2M.js";import"./getPseudoElementBounds-BTPVoCRU.js";import"./CompositeItem-CfRgOFRs.js";import"./makeExternalStore-DMgVpl9f.js";import"./BaseForm-C83334N6.js";import"./ActionButton-BVPquFXf.js";import"./Button-BIf78uDw.js";import"./SkeletonBar-D3HcZ6cf.js";import"./Tooltip-DYQoxjoJ.js";import"./info-sign-BhpmOOgS.js";import"./chevron-up-BpQYE4lq.js";import"./chevron-down-Cc9laCGb.js";import"./useEventCallback-Cb1n4noc.js";import"./iconLoader-D9oJ4Jxj.js";import"./Switch-2eFdsHji.js";import"./CompositeRoot-DGrYXncj.js";import"./TimePicker-C4eJWqLD.js";import"./CollapsiblePanel-C7gxpTye.js";import"./error-BhxtiV9P.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C8MRYO6c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
