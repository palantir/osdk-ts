import{j as t,g as n}from"./iframe-CY0l_yrm.js";import{A as r}from"./action-form-B09wDsuD.js";import"./preload-helper-DND0VgR5.js";import"./DropdownField-BBmL-vGd.js";import"./debounce-BZTVhNsm.js";import"./useOsdkClient-Dpp4RHdN.js";import"./index-jD6aOkFv.js";import"./Input-BSPMw6pL.js";import"./useBaseUiId-CnQ31eNT.js";import"./useControlled-C5au6PDu.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./PopoverPopup-DVUI0Hkh.js";import"./InternalBackdrop-DpYJb7P7.js";import"./composite-CtsMuCZE.js";import"./index-B7EOaFV2.js";import"./getDisabledMountTransitionStyles-CP-qJ1MY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./tick-D8A10Ahp.js";import"./svgIconContainer-CS1jdY6Z.js";import"./small-cross-Lb1xubsF.js";import"./search-pW8689hu.js";import"./cross-Cx7CV6yi.js";import"./useValueChanged-DZx2OgZD.js";import"./getPseudoElementBounds-DAo1H6Bx.js";import"./CompositeItem-CBwjlwAY.js";import"./makeExternalStore-DLJSnM06.js";import"./BaseForm-DqXdstKC.js";import"./ActionButton-DOh4jQXf.js";import"./Button-BSjQUjCf.js";import"./SkeletonBar-DHnB17DS.js";import"./Tooltip-CaHDHcXi.js";import"./info-sign-DNxwG5zR.js";import"./chevron-up-jZ1csiz0.js";import"./chevron-down-CevA26oJ.js";import"./useEventCallback-CuUylEqe.js";import"./iconLoader-BsF4KO6v.js";import"./Switch-B-bJPSfO.js";import"./CompositeRoot-hAfSplJR.js";import"./TimePicker-BKmryMWw.js";import"./CollapsiblePanel-qW1X9ES0.js";import"./error-CvxyrBuz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5SRPOi7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
