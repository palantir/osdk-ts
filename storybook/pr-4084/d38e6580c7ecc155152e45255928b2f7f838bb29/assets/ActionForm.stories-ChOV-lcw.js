import{j as t,g as n}from"./iframe-_pZ-OrnG.js";import{A as r}from"./action-form-sRsr6DfN.js";import"./preload-helper-CI2nkxYP.js";import"./DropdownField-Boodu9_n.js";import"./debounce-Cs0rV5XU.js";import"./useOsdkClient-CXug1a02.js";import"./index-BzR1Js4P.js";import"./Input-DDttcV3K.js";import"./useBaseUiId-sTNVvHGV.js";import"./useControlled-MIg91upF.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./PopoverPopup-CeDlnkfZ.js";import"./InternalBackdrop-Bo6uJZfN.js";import"./composite-s_PtHBLY.js";import"./index-BarU5QY7.js";import"./getDisabledMountTransitionStyles-D1TqjFAj.js";import"./ToolbarRootContext-DDubgB6v.js";import"./tick-B25sgwJt.js";import"./svgIconContainer-Df8znJbK.js";import"./small-cross-cg-4l1k7.js";import"./search-ChtcLVXZ.js";import"./cross-DHXoKhRr.js";import"./useValueChanged-BA_OyhSR.js";import"./getPseudoElementBounds-CSJkhnGQ.js";import"./CompositeItem-1-7kFxMp.js";import"./makeExternalStore-_KUFuRZc.js";import"./BaseForm-C2LU4dVX.js";import"./ActionButton-CtdL7XCW.js";import"./Button-HWVms3sL.js";import"./SkeletonBar-BFdlYeDG.js";import"./Tooltip-Cv-ahOg4.js";import"./info-sign-DM1I45XG.js";import"./chevron-up-By0AYAVT.js";import"./chevron-down-DaGWzrOS.js";import"./useEventCallback-ChWi4eCf.js";import"./iconLoader-C2PKsGzE.js";import"./Switch-BfhRXf0I.js";import"./CompositeRoot-BgW5BMuP.js";import"./TimePicker-CzxYC-YB.js";import"./CollapsiblePanel-D-pLoE7v.js";import"./error-CDa2ZV4b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNAkmbs_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
