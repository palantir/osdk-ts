import{j as t,g as n}from"./iframe-xaYq_0YR.js";import{A as r}from"./action-form-CqY5T1HV.js";import"./preload-helper-CtEamZCu.js";import"./DropdownField-Cy43Eyay.js";import"./debounce-MHGPLv4v.js";import"./useOsdkClient-SxgRcysC.js";import"./index-BAZUgVLK.js";import"./Input-DH1br5He.js";import"./useBaseUiId-CuYx4u3b.js";import"./useControlled-Dxi7lg4n.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./PopoverPopup-KIkgahna.js";import"./InternalBackdrop-DGDqVAbo.js";import"./composite-CLd-Xsnk.js";import"./index-DP9PCb3S.js";import"./getDisabledMountTransitionStyles-CYDL5wfQ.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./tick--__R7rUv.js";import"./svgIconContainer-B7c-1n-U.js";import"./small-cross-CMj_rk0B.js";import"./search-CSNqrmY1.js";import"./cross-BYWrVYOR.js";import"./useValueChanged-CXh9zAke.js";import"./getPseudoElementBounds-CNTTaqKi.js";import"./CompositeItem-BRCxLN7a.js";import"./makeExternalStore-BQ-WZB7-.js";import"./BaseForm-BxQdjXf9.js";import"./ActionButton-Pylu-ep_.js";import"./Button-DeJ4BDKP.js";import"./SkeletonBar-DOvs9Ogk.js";import"./Tooltip-CRRIRYeo.js";import"./info-sign-BtoUa0cW.js";import"./chevron-up-DPpnrDxa.js";import"./chevron-down-C-g4LLea.js";import"./useEventCallback-PLoii0z9.js";import"./iconLoader-CY_Wk3-Q.js";import"./CompositeRoot-DWktMQsZ.js";import"./Switch-Dn6eS0dV.js";import"./TimePicker-D7YEkeEB.js";import"./CollapsiblePanel-DT_VkLtR.js";import"./error-C61gPazY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cry6aqA_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
