import{j as t,g as n}from"./iframe-Biji2bf1.js";import{A as r}from"./action-form-C-4DSue0.js";import"./preload-helper-BnQD_pUs.js";import"./DropdownField-BMpZFA_1.js";import"./debounce-CMsRCK9t.js";import"./useOsdkClient-iyUYhFeG.js";import"./index-DfdB1ttn.js";import"./Input-Ka8u0CD4.js";import"./useBaseUiId-D8agI47X.js";import"./useControlled-CvQogkf4.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./PopoverPopup-BgQoU5Ch.js";import"./InternalBackdrop-Cur7vZgT.js";import"./composite-DTVuKyBl.js";import"./index-DuyzOau4.js";import"./getDisabledMountTransitionStyles-uiKLVkrc.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./tick-B0yPEej0.js";import"./svgIconContainer-CtuHzH_7.js";import"./small-cross-BJ_whcm4.js";import"./search-CLwp4qIO.js";import"./cross-DgO8Y3SG.js";import"./useValueChanged-CgmTK9yE.js";import"./getPseudoElementBounds-CuRI4A7q.js";import"./CompositeItem-D3laoAWw.js";import"./makeExternalStore-Wt3R0a85.js";import"./BaseForm-Cj2yykEP.js";import"./ActionButton-D5GVqQ0r.js";import"./Button-B3fK-m0j.js";import"./SkeletonBar-prYHuNvB.js";import"./Tooltip-Gl-FzrVH.js";import"./info-sign-pZHarkj5.js";import"./chevron-up-NX2TCCeJ.js";import"./chevron-down-xdyo5QmP.js";import"./useEventCallback-BuGz6aEK.js";import"./iconLoader-C51-L0Ko.js";import"./Switch-CxqLoMXS.js";import"./CompositeRoot-Bhuo6i00.js";import"./TimePicker-DenynEFV.js";import"./CollapsiblePanel-Q8df4Rvk.js";import"./error-AacONtzC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRBNDhHT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
