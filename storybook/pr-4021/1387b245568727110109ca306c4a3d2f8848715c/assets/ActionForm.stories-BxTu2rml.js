import{j as t,g as n}from"./iframe-62_AXEOv.js";import{A as r}from"./action-form-GAAxNXY-.js";import"./preload-helper-CFT5weAC.js";import"./DropdownField-BNfXsoFz.js";import"./debounce-R6klB3y2.js";import"./useOsdkClient-Dn0oXpKF.js";import"./index-BBxmoCpH.js";import"./Input-B1gv6X7f.js";import"./useBaseUiId-DxeaWUqe.js";import"./useControlled-BvDlAnVr.js";import"./index-DqKHmJ5-.js";import"./index-IeLwL8MY.js";import"./PopoverPopup-chxNfS0K.js";import"./InternalBackdrop-B_mBuTj-.js";import"./composite-D1RGgOF8.js";import"./index-BSNtLGGk.js";import"./getDisabledMountTransitionStyles-D7AIJw0A.js";import"./ToolbarRootContext-Cx34GHdJ.js";import"./tick-lJjx81-G.js";import"./svgIconContainer-B2ejb94d.js";import"./small-cross-Ddj8Sovb.js";import"./search-BDESzP6B.js";import"./cross-DUPyqLs7.js";import"./useValueChanged-Dbwftc6q.js";import"./getPseudoElementBounds-BgmToZV8.js";import"./CompositeItem-BaakSNrp.js";import"./makeExternalStore-ChHrabzP.js";import"./BaseForm-X4VxUUcE.js";import"./ActionButton-DrWj2qAO.js";import"./Button-CHJGiQMj.js";import"./SkeletonBar-DIRl3Uz5.js";import"./Tooltip-C03G-SPW.js";import"./info-sign-Bkz2B_xo.js";import"./chevron-up-CtNejs2C.js";import"./chevron-down-CLeFx5id.js";import"./useEventCallback-DoO6cpQA.js";import"./iconLoader-Dk_MEWty.js";import"./CompositeRoot-D0wNAoJa.js";import"./Switch-BTZCxex4.js";import"./TimePicker-B3yMmzO0.js";import"./CollapsiblePanel-ByMOZaM4.js";import"./error-BRCVBLBe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DHRPDUGo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
