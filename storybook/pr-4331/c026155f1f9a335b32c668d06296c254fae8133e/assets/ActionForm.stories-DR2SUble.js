import{j as t,g as n}from"./iframe-Ck95bxu4.js";import{A as r}from"./action-form-CxrPW3vQ.js";import"./preload-helper-KA9de6lE.js";import"./DropdownField-nQt9qvfV.js";import"./debounce-xVAvVgAm.js";import"./useOsdkClient-BanL0364.js";import"./index-Cif5jAEJ.js";import"./Input-s6yy9vkz.js";import"./useBaseUiId-CWyLFOC8.js";import"./useControlled-B8TEOr6k.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./isObject-1wBlTIbM.js";import"./InternalBackdrop-BN5IDP0f.js";import"./composite-Yh1yynjC.js";import"./index-jkcmc-OQ.js";import"./getDisabledMountTransitionStyles-D5C9DTmw.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./tick-CkjrrKLh.js";import"./svgIconContainer-CPHbIRji.js";import"./small-cross-B8CohMqi.js";import"./search-BS_g30el.js";import"./cross-D4AVy5in.js";import"./useValueChanged-B4fSJG4I.js";import"./getPseudoElementBounds-skEh5NHv.js";import"./CompositeItem-B10VO3gZ.js";import"./makeExternalStore-BMm4gCLi.js";import"./BaseForm-DU0cZWRr.js";import"./ActionButton-r8oP0f9s.js";import"./Button-PWPX_ks7.js";import"./SkeletonBar-8iEwSFxF.js";import"./Tooltip-rzDvG8SV.js";import"./info-sign-CP3Vxr3K.js";import"./chevron-up-Deo3COxs.js";import"./chevron-down-bheQQ_PQ.js";import"./useEventCallback-B4j9PWJ8.js";import"./iconLoader-B5uuN2az.js";import"./Switch-SY4h04ws.js";import"./CompositeRoot-fnIddyY_.js";import"./TimePicker-sjGs_yva.js";import"./CollapsiblePanel-D4YJo7Ff.js";import"./error-RnJ96IVH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dr6WHfBD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
