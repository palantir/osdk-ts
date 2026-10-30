import{j as t,g as n}from"./iframe-B-n5uLkA.js";import{A as r}from"./action-form-CSOEt3Um.js";import"./preload-helper-vxu-jvpO.js";import"./DropdownField-BoiijBdj.js";import"./debounce-H1RiGpm9.js";import"./useOsdkClient-CDqx5dcV.js";import"./index-r9aFA9c6.js";import"./Input-LcpenwpJ.js";import"./useBaseUiId-Cx3-H6q7.js";import"./useControlled-Bce4MQ3D.js";import"./index-AEeSb7o4.js";import"./index-DKaYQA5S.js";import"./PopoverPopup-BoLWF4qb.js";import"./InternalBackdrop-DE5d7cjQ.js";import"./composite-CcnMcVoq.js";import"./index-CWueSEk2.js";import"./getDisabledMountTransitionStyles-BWEZuvfD.js";import"./ToolbarRootContext-pXgQ7_Yk.js";import"./tick-DdfGjDes.js";import"./svgIconContainer-BAP4xquW.js";import"./small-cross-xC3C54Po.js";import"./search-DCVRYddG.js";import"./cross-CzzoI-Me.js";import"./useValueChanged-DWhuyL2N.js";import"./getPseudoElementBounds-DNbnatNp.js";import"./CompositeItem-Brq4Jfrc.js";import"./makeExternalStore-CWIwlctc.js";import"./BaseForm-C2jQAMiy.js";import"./ActionButton-D2uNXT3k.js";import"./Button-Cxizrf8Y.js";import"./SkeletonBar-Cy7lWMxB.js";import"./Tooltip-f4HmeV3o.js";import"./info-sign-C8OnFRLu.js";import"./chevron-up-hPelyIO0.js";import"./chevron-down-COZB8m2A.js";import"./useEventCallback-Cug5Ejgk.js";import"./iconLoader-BH3d01Lb.js";import"./Switch-CtSFpJiJ.js";import"./CompositeRoot-BbXiNDeB.js";import"./TimePicker-DI0ESlLP.js";import"./CollapsiblePanel-D3r1-b_X.js";import"./error-ctHtVSzl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BSpJ8hG-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
