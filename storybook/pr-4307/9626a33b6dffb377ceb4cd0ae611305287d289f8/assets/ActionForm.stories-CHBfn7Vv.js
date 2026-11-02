import{j as t,g as n}from"./iframe-p7D6sarL.js";import{A as r}from"./action-form-CyUPEs0e.js";import"./preload-helper-fTfJHf6r.js";import"./DropdownField-BbI_YIBj.js";import"./debounce-BTn7u_ux.js";import"./useOsdkClient-C4rR5Xc2.js";import"./index-BdE6iQIl.js";import"./Input-LdPdzdTD.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./useControlled-D8RNaOKh.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./PopoverPopup-yOM8q7VT.js";import"./InternalBackdrop-CUea6RLj.js";import"./composite-C6-iGtUX.js";import"./index-BVmNSvna.js";import"./getDisabledMountTransitionStyles-BFunDdeZ.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./tick--ApORUGf.js";import"./svgIconContainer-4FKWJ0K3.js";import"./small-cross-kvaYMftR.js";import"./search-0vpab4Qy.js";import"./cross-BIlvkmku.js";import"./useValueChanged-RektJa3Q.js";import"./getPseudoElementBounds-DnyF4quT.js";import"./CompositeItem-DPnrDtg_.js";import"./makeExternalStore-DDdf7AUk.js";import"./BaseForm-BvObY-bN.js";import"./ActionButton-bSAEuYzP.js";import"./Button-DTuYEipm.js";import"./SkeletonBar-tX2D-Wzp.js";import"./Tooltip-B-bvds49.js";import"./info-sign-CHd3Qf-G.js";import"./chevron-up-C__4PLQb.js";import"./chevron-down-CW12YW7p.js";import"./useEventCallback-TGDvplRl.js";import"./iconLoader-CVbd7CCh.js";import"./Switch-BT3_vU6h.js";import"./CompositeRoot-0UMvT-js.js";import"./TimePicker-B3hByAKP.js";import"./CollapsiblePanel-BrMihlLp.js";import"./error-orkHl4EN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMV3eX8V.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
