import{j as t,g as n}from"./iframe-J30hPVdk.js";import{A as r}from"./action-form-BHT-lHFb.js";import"./preload-helper-21pBjwGc.js";import"./DropdownField-DXOH2Xdp.js";import"./debounce-D3LSvrP2.js";import"./useOsdkClient-jc2ng4S0.js";import"./index-DzFJcvqE.js";import"./Input-DW9kemBa.js";import"./useBaseUiId-BPzj-rci.js";import"./useControlled-CGDYKM6L.js";import"./index-B1uCCcyj.js";import"./index-D8MmmnXz.js";import"./PopoverPopup-DbS2DolK.js";import"./InternalBackdrop-DnbkkKQH.js";import"./composite-BMEMfwlO.js";import"./index-BWrnMFHO.js";import"./getDisabledMountTransitionStyles-sG9CL-HI.js";import"./ToolbarRootContext-ClVL2vmD.js";import"./tick-Bz0F0nuW.js";import"./svgIconContainer-Bmpr-YG-.js";import"./small-cross-DLACjrSW.js";import"./search-CBu-pF0G.js";import"./cross-1ilXjfTr.js";import"./useValueChanged-DEXfPX0Q.js";import"./getPseudoElementBounds-DfSRht98.js";import"./CompositeItem-Jmu2r9JC.js";import"./makeExternalStore-DALczlz3.js";import"./BaseForm-CsCuMHyb.js";import"./ActionButton-Cj1dNVdG.js";import"./Button-9RAeKDxl.js";import"./SkeletonBar-DX3FY0lK.js";import"./Tooltip-BokQxeg5.js";import"./info-sign-Ddr3TSEB.js";import"./chevron-up-B4H5o32y.js";import"./chevron-down-CdNGoo9Q.js";import"./useEventCallback-C7hZrsdh.js";import"./iconLoader-Cj3_GmHE.js";import"./Switch-sxTM2LDc.js";import"./CompositeRoot-BbFAycp0.js";import"./TimePicker-CSASEqd2.js";import"./CollapsiblePanel-Or1n6xhN.js";import"./error-BSLpMKqj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bp-1idm_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
