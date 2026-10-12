import{j as t,g as n}from"./iframe-Cb7UimVT.js";import{A as r}from"./action-form-CffrEuIp.js";import"./preload-helper-DGUTmafK.js";import"./DropdownField-ij81B06R.js";import"./debounce-BawLAvkZ.js";import"./useOsdkClient-C4al__C_.js";import"./index-BIGxdzOf.js";import"./Input-k33bDy71.js";import"./useBaseUiId-iGVUlg7M.js";import"./useControlled-rmviEhSc.js";import"./index-BOZbfH9s.js";import"./index-DSTszXnE.js";import"./PopoverPopup-Bw13Ouax.js";import"./InternalBackdrop-DFmtA5di.js";import"./composite-DbE7UY6k.js";import"./index-DvKhcYIs.js";import"./getDisabledMountTransitionStyles-CWTpf6lp.js";import"./ToolbarRootContext-BZu2CGWG.js";import"./tick-4A7mewJX.js";import"./svgIconContainer-ByYucP5b.js";import"./small-cross-kV31ju_J.js";import"./search-CFBfi85w.js";import"./cross-CSr-jiik.js";import"./useValueChanged-CWhjY4_u.js";import"./getPseudoElementBounds-1Qmdk9bj.js";import"./CompositeItem-BWbQHkr6.js";import"./makeExternalStore-CitLye_P.js";import"./BaseForm-C5ErN1ZS.js";import"./ActionButton-C961uo5z.js";import"./Button-DpmbPgxa.js";import"./SkeletonBar-SWTHAMDy.js";import"./Tooltip-A0fu90b6.js";import"./info-sign-oL8Yl69K.js";import"./chevron-up-B-j03EAz.js";import"./chevron-down-DGQwsfv-.js";import"./useEventCallback-B_YCllCJ.js";import"./iconLoader-BBQqkCHP.js";import"./Switch-Bht-HJYG.js";import"./CompositeRoot-D6PncqCn.js";import"./TimePicker-B4zNBDLr.js";import"./CollapsiblePanel-leyJJrVG.js";import"./error-DCdQoOyW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMDPVH0d.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
