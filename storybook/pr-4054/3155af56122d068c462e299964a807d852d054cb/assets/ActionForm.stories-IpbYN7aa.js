import{j as t,g as n}from"./iframe-BUT1Ca21.js";import{A as r}from"./action-form-CX98lI63.js";import"./preload-helper-C3ZTbeOG.js";import"./DropdownField-CeTN_DiQ.js";import"./debounce-CousxmCd.js";import"./useOsdkClient-DKJPb5Gm.js";import"./index-CEgKTB7y.js";import"./Input-VfpuHGrG.js";import"./useBaseUiId-qyGuXCWk.js";import"./useControlled-MxpDrEQu.js";import"./index-BKX7kSRn.js";import"./index-Cxye_Vbl.js";import"./PopoverPopup-DD5F8aqU.js";import"./InternalBackdrop-CKROOC4c.js";import"./composite-CfgLMjRu.js";import"./index-CAyUZnlL.js";import"./getDisabledMountTransitionStyles-Ne5QFwsT.js";import"./ToolbarRootContext-Cefa8MxM.js";import"./tick-Bc2ETXIe.js";import"./svgIconContainer-Bompvmw_.js";import"./small-cross-D5yHal12.js";import"./search-wRZY1Zgd.js";import"./cross-Cr9ZjHRZ.js";import"./useValueChanged-Sx5eg1XK.js";import"./getPseudoElementBounds-yw_Voijw.js";import"./CompositeItem-Bsqpxv5d.js";import"./makeExternalStore-BZeEFOui.js";import"./BaseForm-BEls3htM.js";import"./ActionButton-DmPqgqpY.js";import"./Button-jhXvjlOf.js";import"./SkeletonBar-DDbomIY0.js";import"./Tooltip-ByJbGxVL.js";import"./info-sign-BMLUQ1ik.js";import"./chevron-up-B-vwqMPP.js";import"./chevron-down-DwUo7lxb.js";import"./useEventCallback-CDxA8TLn.js";import"./iconLoader-DR5vONvl.js";import"./Switch-B_3k-11T.js";import"./CompositeRoot-QpWKJl8e.js";import"./TimePicker-C2GJcrhD.js";import"./CollapsiblePanel-BxEgYLVa.js";import"./error-C95PtJNd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRAr1v2v.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
