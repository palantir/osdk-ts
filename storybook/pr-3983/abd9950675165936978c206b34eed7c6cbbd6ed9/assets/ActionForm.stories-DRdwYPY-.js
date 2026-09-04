import{j as t,g as n}from"./iframe-DvFhas0q.js";import{A as r}from"./action-form-DfdcY95g.js";import"./preload-helper-QHjuDrJd.js";import"./DropdownField-BAPz2zMI.js";import"./debounce-CV3_uBLw.js";import"./useOsdkClient-DDHO7ERi.js";import"./index-CmLQwMDk.js";import"./Input-Co66Vae_.js";import"./useBaseUiId-BFo_-NKJ.js";import"./useControlled-CxHMv-Gu.js";import"./index-Apg0qjyu.js";import"./index-BoSI0BFD.js";import"./PopoverPopup-BENmx3Et.js";import"./InternalBackdrop-BEZpm-Rm.js";import"./composite-C99jNiLY.js";import"./index-lBWfPJIN.js";import"./getDisabledMountTransitionStyles-BsD7puFJ.js";import"./ToolbarRootContext-Dzf-NS_o.js";import"./tick-C-HkFW0L.js";import"./svgIconContainer-BHO7oNHP.js";import"./small-cross-BLY3irjp.js";import"./search-C6DWKwgW.js";import"./cross-CM36P0tx.js";import"./useValueChanged-D5EnR-8c.js";import"./getPseudoElementBounds-WfWTcseT.js";import"./CompositeItem-Dn55C0Ya.js";import"./makeExternalStore-wKI12oPU.js";import"./BaseForm-B20Ibfzr.js";import"./ActionButton-DMraA7nF.js";import"./Button-CK4f3ZCw.js";import"./SkeletonBar-DYRVMcyT.js";import"./Tooltip-C1NiSt4U.js";import"./info-sign-CeXK1UOx.js";import"./chevron-up-CdfQr7_J.js";import"./chevron-down-EuTJEAw_.js";import"./useEventCallback-CaLmf3WD.js";import"./iconLoader-djKTypbt.js";import"./CompositeRoot-CwTTqsB_.js";import"./Switch-LKYKnYr7.js";import"./TimePicker-DFw2U4H7.js";import"./CollapsiblePanel-Ky7kH8D6.js";import"./error-ASo9jiXR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-UKaUAaA5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
