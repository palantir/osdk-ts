import{j as t,g as n}from"./iframe-B-YGlnkZ.js";import{A as r}from"./action-form-nIpWBpZx.js";import"./preload-helper-CtVpadX7.js";import"./DropdownField-ClrxV16v.js";import"./debounce-BjzkkvaB.js";import"./useOsdkClient-gj8ttqqj.js";import"./index-BwbxpG9V.js";import"./Input-DaqHwlu0.js";import"./useBaseUiId-H-3YJ5Rw.js";import"./useControlled-DdFFxVnf.js";import"./index-B6aw-_Dz.js";import"./index-BOs-qFJy.js";import"./PopoverPopup-ugp2aSv8.js";import"./InternalBackdrop-Ce_XWd_Q.js";import"./composite-Dqyj-RK-.js";import"./index-YMqDUVbD.js";import"./getDisabledMountTransitionStyles-Dh82TnbN.js";import"./ToolbarRootContext-CnbQ5y9z.js";import"./tick-D0iG3kes.js";import"./svgIconContainer-ur9r5SLx.js";import"./small-cross-C4G_4bm0.js";import"./search-DXsdMEbr.js";import"./cross-Cxuf4ocZ.js";import"./useValueChanged-BrDu_oCw.js";import"./getPseudoElementBounds-B0PDl1uq.js";import"./CompositeItem-BE3XYcA2.js";import"./makeExternalStore-DLMtLoe9.js";import"./BaseForm-Cnp6U3tO.js";import"./ActionButton-DPJ_lqmP.js";import"./Button-BxSaRA57.js";import"./SkeletonBar-CzDhRjqu.js";import"./Tooltip-Tqm6OBEx.js";import"./info-sign-4Y9RWxRN.js";import"./chevron-up-C9R30Plo.js";import"./chevron-down-G62k-E5h.js";import"./useEventCallback-D17bhAXF.js";import"./iconLoader-DNy-vSDe.js";import"./CompositeRoot-a-MzYvnw.js";import"./Switch-BQEUQUvw.js";import"./TimePicker-kqVRYuv6.js";import"./CollapsiblePanel-CvgPh7ET.js";import"./error-CFJFAjZO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bw9hmnsv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
