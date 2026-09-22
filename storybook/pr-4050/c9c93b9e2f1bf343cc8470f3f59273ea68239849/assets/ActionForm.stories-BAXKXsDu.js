import{j as t,g as n}from"./iframe-B4Qf2x47.js";import{A as r}from"./action-form-BieNM2JT.js";import"./preload-helper-DmaZizbX.js";import"./DropdownField-D-duYmE0.js";import"./debounce-DpXq-GLD.js";import"./useOsdkClient-D22Zy3Aq.js";import"./index-B97ocqDB.js";import"./Input-CT1b0uTH.js";import"./useBaseUiId-CuoaS_IK.js";import"./useControlled-CjTdF22S.js";import"./index-DHeuY6qT.js";import"./index-B6nqCMvX.js";import"./PopoverPopup-tqPNwfif.js";import"./InternalBackdrop-C8l1Y-0f.js";import"./composite-BxeFJGWF.js";import"./index-BA03CKcA.js";import"./getDisabledMountTransitionStyles-CdqBMtts.js";import"./ToolbarRootContext-gq31GD3n.js";import"./tick-DFcuOcOL.js";import"./svgIconContainer-Bx39OoUr.js";import"./small-cross-DS3Q2Rz0.js";import"./search-D96kAX6P.js";import"./cross-w9xefAeS.js";import"./useValueChanged-DsKPkoty.js";import"./getPseudoElementBounds-F5SYiEpp.js";import"./CompositeItem-Dm0AUseO.js";import"./makeExternalStore-DYKlPK4M.js";import"./BaseForm-xcvQ-VpD.js";import"./ActionButton-zETE6syU.js";import"./Button-xKEqEHmE.js";import"./SkeletonBar-BtuvgBa-.js";import"./Tooltip-Rk-aR7OJ.js";import"./info-sign-BIz9tY1i.js";import"./chevron-up-ak9y96z8.js";import"./chevron-down-DNdE9fs0.js";import"./useEventCallback-DWh8d3_D.js";import"./iconLoader-Ccl7SiVb.js";import"./Switch-CviNNyzt.js";import"./CompositeRoot-D4QEyeBh.js";import"./TimePicker-DSaZQq9q.js";import"./CollapsiblePanel-B9o26G0c.js";import"./error-0thEM3V8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQFCnZa4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
