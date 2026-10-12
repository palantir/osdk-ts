import{j as t,g as n}from"./iframe-C9SuZ1RJ.js";import{A as r}from"./action-form-C4DqeZRg.js";import"./preload-helper-DMSK6AnV.js";import"./DropdownField-Bh7g_Xnj.js";import"./debounce-Bhm2oAnY.js";import"./useOsdkClient-es3CZ3SD.js";import"./index-DT_ukoYl.js";import"./Input-D0BDhaw_.js";import"./useBaseUiId-7WRirspl.js";import"./useControlled-DGoyddZA.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./PopoverPopup-iUPwntF5.js";import"./InternalBackdrop-CMb1PVBv.js";import"./composite-CLRoo5Je.js";import"./index-CbbSTcJP.js";import"./getDisabledMountTransitionStyles-D61a-Amc.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./tick-Bfjhhadh.js";import"./svgIconContainer-D69sxdT1.js";import"./small-cross-CVj6zxAy.js";import"./search-N0RiDnX8.js";import"./cross-Itynl6FX.js";import"./useValueChanged-DcttfwPd.js";import"./getPseudoElementBounds-C0ASFWoG.js";import"./CompositeItem-y2AxCYkL.js";import"./makeExternalStore-BkAl_UIS.js";import"./BaseForm-DD82RabG.js";import"./ActionButton-CFuC9l1R.js";import"./Button-DPVeNaPl.js";import"./SkeletonBar-B5kYBk_d.js";import"./Tooltip-CDDNzZxm.js";import"./info-sign-DFf1w0pr.js";import"./chevron-up-B114p7Am.js";import"./chevron-down-BSUO84z0.js";import"./useEventCallback-BATy1042.js";import"./iconLoader-B44dHDSk.js";import"./Switch-DxneGFY5.js";import"./CompositeRoot-CSEc_gTU.js";import"./TimePicker-By_bXLkm.js";import"./CollapsiblePanel-BYWPcYrr.js";import"./error-JN7vVG19.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-FfcvjHUd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
