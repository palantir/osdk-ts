import{j as t,g as n}from"./iframe-K0TCdsde.js";import{A as r}from"./action-form-c7jV8ivT.js";import"./preload-helper-Dwgne7Il.js";import"./DropdownField-D7fdjvLz.js";import"./debounce-GmSPsudP.js";import"./useOsdkClient-Cb96qSwW.js";import"./index-DItHkTgY.js";import"./Input-jHELzDU6.js";import"./useBaseUiId-BMvE3UAz.js";import"./useControlled-CpHTfHM_.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./PopoverPopup-DfnNNJDY.js";import"./InternalBackdrop-D74UPcil.js";import"./composite-BDOTFVh5.js";import"./index-CC8neGBv.js";import"./getDisabledMountTransitionStyles-BmL_QtPR.js";import"./ToolbarRootContext-B08lxs8l.js";import"./tick-D-0sxjMV.js";import"./svgIconContainer-Gp_WdiNB.js";import"./small-cross-vpbYh6K7.js";import"./search-FP5lKD6I.js";import"./cross-DjsH4BEX.js";import"./useValueChanged-wDqDSQMF.js";import"./getPseudoElementBounds-DYoZN7nx.js";import"./CompositeItem-CKtGokfX.js";import"./makeExternalStore-sZwLQQxf.js";import"./BaseForm-Be1nfFeS.js";import"./ActionButton-De6D_lsR.js";import"./Button-vcsLfruM.js";import"./SkeletonBar-Brb8R_mA.js";import"./Tooltip-DV12Jp8G.js";import"./info-sign-CNybjTCk.js";import"./chevron-up-C1-T6d0o.js";import"./chevron-down-BkK6PVnf.js";import"./useEventCallback-Bz_plcSd.js";import"./iconLoader-QiPnPJsT.js";import"./CompositeRoot-Cs1rgyIt.js";import"./Switch-BzR8ap5G.js";import"./TimePicker-CmCOAZG8.js";import"./CollapsiblePanel-CCOarC2c.js";import"./error-C3B7tWvq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B9tQP4dB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
