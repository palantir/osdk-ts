import{j as t,g as n}from"./iframe-Dy3pbGVl.js";import{A as r}from"./action-form-BeW53C7V.js";import"./preload-helper-CpAlczou.js";import"./DropdownField-CzivYSGB.js";import"./debounce-CXNS7Ik8.js";import"./useOsdkClient-B6m6pKrS.js";import"./index-BGynA5Ey.js";import"./Input-Ddh63PuK.js";import"./useBaseUiId-1GhcXjBj.js";import"./useControlled-CHjpObPc.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./PopoverPopup-DrFWXbYx.js";import"./InternalBackdrop-DMIRmadR.js";import"./composite-DD7PMic6.js";import"./index-Dl_Buekn.js";import"./getDisabledMountTransitionStyles-eVKTLrRf.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./tick-CBR4s6ZO.js";import"./svgIconContainer-DwcpIzbz.js";import"./small-cross-DjIzegN_.js";import"./search-CRVUm7gt.js";import"./cross-_ffwL7On.js";import"./useValueChanged-DpMeL3s2.js";import"./getPseudoElementBounds-gTzTtYPO.js";import"./CompositeItem-BeUctUoU.js";import"./makeExternalStore-WrhHs9Vh.js";import"./BaseForm-Dsu8e9px.js";import"./ActionButton-DFCeFCb6.js";import"./Button-ByPi26fD.js";import"./SkeletonBar-DSCrW__O.js";import"./Tooltip-BSjRKIbt.js";import"./info-sign-DxAi4WzX.js";import"./chevron-up-UghmMVpH.js";import"./chevron-down-8plcDTLG.js";import"./useEventCallback-C3LX0_mu.js";import"./iconLoader-E-yBB-wo.js";import"./Switch-BDf_tE69.js";import"./CompositeRoot-1DflDt2z.js";import"./TimePicker-MnoLirkJ.js";import"./CollapsiblePanel-CBe89pMe.js";import"./error-C7pYFxix.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DtiZVH3G.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
