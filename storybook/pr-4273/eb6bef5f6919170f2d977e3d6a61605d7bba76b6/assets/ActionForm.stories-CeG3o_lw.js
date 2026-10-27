import{j as t,g as n}from"./iframe-BECIlG-5.js";import{A as r}from"./action-form-DOvWpUa3.js";import"./preload-helper-Cv0NrjSm.js";import"./DropdownField-BFCCzcrd.js";import"./debounce-CE7uEcJP.js";import"./useOsdkClient-D-IWW227.js";import"./index-0SVtXK84.js";import"./Input-Bv6R3iZB.js";import"./useBaseUiId-BynaZof5.js";import"./useControlled-DwAysQOe.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./PopoverPopup-C9IPhO-b.js";import"./InternalBackdrop-BZhDjVB7.js";import"./composite-Bb9FNHOi.js";import"./index-smJV3T31.js";import"./getDisabledMountTransitionStyles-BHt47q_U.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./tick-lltI7QIF.js";import"./svgIconContainer-B-mztRGa.js";import"./small-cross-DOrp5uSW.js";import"./search-CxKdELes.js";import"./cross-ubVpY3r4.js";import"./useValueChanged-DzzM5aJt.js";import"./getPseudoElementBounds-CXr87JiK.js";import"./CompositeItem-Dl8QDSWw.js";import"./makeExternalStore-c840Nimt.js";import"./BaseForm-Bds1nSbE.js";import"./ActionButton-BElBMuAb.js";import"./Button-cPt_jdAf.js";import"./SkeletonBar-iQAgIX6_.js";import"./Tooltip-RYGXYlOF.js";import"./info-sign-B0Xawvhn.js";import"./chevron-up-DUxMILLL.js";import"./chevron-down-B_ghTOEG.js";import"./useEventCallback-BfSwElrQ.js";import"./iconLoader-DghVndlP.js";import"./Switch-CqTe_lE5.js";import"./CompositeRoot-CYKJI4vX.js";import"./TimePicker-BsVXhg12.js";import"./CollapsiblePanel-eLA5oT-Y.js";import"./error-W3FJWM_l.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DjCRSE02.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
