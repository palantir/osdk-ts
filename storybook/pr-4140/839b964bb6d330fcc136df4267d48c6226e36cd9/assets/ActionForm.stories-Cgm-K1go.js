import{j as t,g as n}from"./iframe-CjvYcpTc.js";import{A as r}from"./action-form-DqJlqfwd.js";import"./preload-helper-CwAZ_RFp.js";import"./DropdownField-CSAcVewx.js";import"./debounce-d3qhgy8J.js";import"./useOsdkClient-DyGGfFqC.js";import"./index-DuZ19wcn.js";import"./Input-B4ChrBJV.js";import"./useBaseUiId-CZUJXt98.js";import"./useControlled-BgiktbGb.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./PopoverPopup-DhrzdhL9.js";import"./InternalBackdrop-Cvpmom_D.js";import"./composite-Dv8ZzttY.js";import"./index-CMgAql6Y.js";import"./getDisabledMountTransitionStyles-D8pKVFxg.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./tick-DHMwXqUI.js";import"./svgIconContainer-B4kwPvVG.js";import"./small-cross-DrNdp9td.js";import"./search-C9XpCEsC.js";import"./cross-C7lWgdj2.js";import"./useValueChanged-jVldrQSp.js";import"./getPseudoElementBounds-zCP0_jeb.js";import"./CompositeItem-CrZyp1SA.js";import"./makeExternalStore-CTMnuTK_.js";import"./BaseForm-CRbGw3mG.js";import"./ActionButton-CNilsdeF.js";import"./Button-x48_kffx.js";import"./SkeletonBar-CEUKT4EZ.js";import"./Tooltip-B-fFKI94.js";import"./info-sign-DrT8dlLS.js";import"./chevron-up-BF8EWcTU.js";import"./chevron-down-B6AkEAGC.js";import"./useEventCallback-ByweALPq.js";import"./iconLoader-CGw4-g2f.js";import"./Switch-Ch_B9iIW.js";import"./CompositeRoot-BOGEONXL.js";import"./TimePicker-DvHuSC3r.js";import"./CollapsiblePanel-BOX1nR00.js";import"./error-DdgUBnOy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-c8up4Ye7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
