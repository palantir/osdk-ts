import{j as t,g as n}from"./iframe-CzOy-JTY.js";import{A as r}from"./action-form-Dq5h_mDP.js";import"./preload-helper-CIQ1DaMN.js";import"./DropdownField-B6ALO_qp.js";import"./debounce-B12Ng-j0.js";import"./useOsdkClient-D1vV9ihk.js";import"./index-Dumhhqmc.js";import"./Input-MeFMWRbL.js";import"./useBaseUiId-DnUPrOGO.js";import"./useControlled-B2qS0FH4.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./PopoverPopup-qNr6ABeL.js";import"./InternalBackdrop-gMia_oWL.js";import"./composite-BVn9jKX7.js";import"./index-_QH05vrF.js";import"./getDisabledMountTransitionStyles-AvhfLujU.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./tick-6hUQYeO9.js";import"./svgIconContainer-DpIclYOT.js";import"./small-cross-BveryxDD.js";import"./search-BJ6lcKDX.js";import"./cross-CWygvYLq.js";import"./useValueChanged-BXU_izG3.js";import"./getPseudoElementBounds-D6X318e6.js";import"./CompositeItem-BAmKL-U0.js";import"./makeExternalStore-BilT8BO2.js";import"./BaseForm-KDPLgPEd.js";import"./ActionButton-Cda1a-qR.js";import"./Button-emQM4kcG.js";import"./SkeletonBar-D4NOqT2L.js";import"./Tooltip-BdClGodm.js";import"./info-sign-BnhOBwVz.js";import"./chevron-up-r9gOX2c1.js";import"./chevron-down-USLYqae_.js";import"./useEventCallback-C_FMXfn2.js";import"./iconLoader-CH6c8OKS.js";import"./Switch-BipZ0Z5n.js";import"./CompositeRoot-DXRrMkcj.js";import"./TimePicker-oiRiYGCw.js";import"./CollapsiblePanel-BO5DGu80.js";import"./error-Dy_Lr_qP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-0tSP_r9F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
