import{j as t,g as n}from"./iframe-Cbv5zznp.js";import{A as r}from"./action-form-CNEmqRwn.js";import"./preload-helper-DqfcifpH.js";import"./DropdownField-D-ungKoa.js";import"./debounce-Do5MJNfP.js";import"./useOsdkClient-CLoY1UKz.js";import"./index-D2aFmDJC.js";import"./Input-DmJSS6xV.js";import"./useBaseUiId-CbroaXAW.js";import"./useControlled-BoBGM7g4.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./PopoverPopup-DcG6I0rn.js";import"./InternalBackdrop-CUgFheWq.js";import"./composite-DJiR_4ty.js";import"./index-D_4oJywF.js";import"./getDisabledMountTransitionStyles-Drv_mS0M.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./tick-CdvKMWYt.js";import"./svgIconContainer-BWSQzhSR.js";import"./small-cross-OENn1soQ.js";import"./search-CH6DBRTT.js";import"./cross-C8I2PI6u.js";import"./useValueChanged-CRrnyi5j.js";import"./getPseudoElementBounds-CnQ2m5T7.js";import"./CompositeItem-CWAeob4t.js";import"./makeExternalStore-BZhL-95P.js";import"./BaseForm-Cb3aUUDw.js";import"./ActionButton-CRpLCn8e.js";import"./Button-Tfyx2Upy.js";import"./SkeletonBar-OKZ2wWwG.js";import"./Tooltip-C20r3_Es.js";import"./info-sign-BGPjBaxW.js";import"./chevron-up-C98UExzO.js";import"./chevron-down-DHe7MR3-.js";import"./useEventCallback-r3b2hAl0.js";import"./iconLoader-CHqow_YA.js";import"./CompositeRoot-DdtBOEpx.js";import"./Switch-BKpzlCV3.js";import"./TimePicker-BOO9mkMA.js";import"./CollapsiblePanel-DUHKDOmV.js";import"./error-DnP2O5g6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ByXJuDkr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
