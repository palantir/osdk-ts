import{j as t,g as n}from"./iframe-1dJaCYlm.js";import{A as r}from"./action-form-OPN0YdCv.js";import"./preload-helper-DxSOn4L7.js";import"./DropdownField-DPzSkJ64.js";import"./debounce-D-qHnft_.js";import"./useOsdkClient-DRXMsfLX.js";import"./index-B5nbKv82.js";import"./Input-CIfB9akU.js";import"./useBaseUiId-C4uZnOHm.js";import"./useControlled-CHSiaIM9.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./PopoverPopup-jAP8Jjj3.js";import"./InternalBackdrop-Dgfuakv5.js";import"./composite-L8QPO2DT.js";import"./index-C7xGCqhv.js";import"./getDisabledMountTransitionStyles-DWnTx_mX.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./tick-CIW2Y4rB.js";import"./svgIconContainer-BHSx6W0Z.js";import"./small-cross-BJKO5x2i.js";import"./search-BkPLkzDr.js";import"./cross-YjWLpu8J.js";import"./useValueChanged-mwlCE8cl.js";import"./getPseudoElementBounds-wNHBeRCJ.js";import"./CompositeItem-C0Th2oHB.js";import"./makeExternalStore-P9a4XRGC.js";import"./BaseForm-DV51Ccif.js";import"./ActionButton-CAA2JXXL.js";import"./Button-C4vq1MKj.js";import"./SkeletonBar-D250oLk_.js";import"./Tooltip-B8lT1fcQ.js";import"./info-sign-B28TwitN.js";import"./chevron-up-BxuEZMzO.js";import"./chevron-down-CFBQ0zoB.js";import"./useEventCallback-DUPF2gzl.js";import"./iconLoader-CFAK5Jtp.js";import"./Switch-B4hYg3HL.js";import"./CompositeRoot-BEQKaFyv.js";import"./TimePicker-BGyjNlm4.js";import"./CollapsiblePanel-Co1-lWcX.js";import"./error-BHBv4jub.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-H4WNoQWX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
