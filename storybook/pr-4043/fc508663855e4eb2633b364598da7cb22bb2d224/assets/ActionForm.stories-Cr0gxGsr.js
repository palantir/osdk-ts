import{j as t,g as n}from"./iframe-DQjaRBUi.js";import{A as r}from"./action-form-C3qKxBDh.js";import"./preload-helper-B51_55sC.js";import"./DropdownField-CvsinZmL.js";import"./debounce-DQESqZVa.js";import"./useOsdkClient-muvg_G4O.js";import"./index-a9fHowso.js";import"./Input-CsAKN6EM.js";import"./useBaseUiId-CsxSSmlu.js";import"./useControlled-BLfmFiCd.js";import"./index-4Rz5xHWo.js";import"./index-4wWSGius.js";import"./PopoverPopup-DROtk8sN.js";import"./InternalBackdrop-CGlx2QtJ.js";import"./composite-h2wwgXba.js";import"./index-CmZITiK9.js";import"./getDisabledMountTransitionStyles-D9FvhRU-.js";import"./ToolbarRootContext-N17gF4sL.js";import"./tick-DrIoKrNo.js";import"./svgIconContainer-P1Q9eNRM.js";import"./small-cross-CFXecDDy.js";import"./search-Dh1WJUP1.js";import"./cross-CzaogkbO.js";import"./useValueChanged-ldsEspGn.js";import"./getPseudoElementBounds-BxgEvMoC.js";import"./CompositeItem-CKeLa0nw.js";import"./makeExternalStore-B1bL49mU.js";import"./BaseForm-9FM69DYZ.js";import"./ActionButton-DKLUDny4.js";import"./Button-DgMUmpJg.js";import"./SkeletonBar-kfcTeHsF.js";import"./Tooltip-BfdSll4I.js";import"./info-sign-V-DJWdCy.js";import"./chevron-up-5_nHH3cO.js";import"./chevron-down-BCCVuGBy.js";import"./useEventCallback-NOj49XSF.js";import"./iconLoader-DKqCbJkH.js";import"./Switch-BspK11xG.js";import"./CompositeRoot-BfZMTdOJ.js";import"./TimePicker-DfrmbxLr.js";import"./CollapsiblePanel-COn6Cc5t.js";import"./error-w3bPHlOX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DnZQS4XI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
