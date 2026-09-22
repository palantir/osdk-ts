import{j as t,g as n}from"./iframe-DIhVLHWR.js";import{A as r}from"./action-form-DOUdx4IM.js";import"./preload-helper-DLYQvN5u.js";import"./DropdownField-Cs1bE49h.js";import"./debounce-BVO9QG61.js";import"./useOsdkClient-ClSS8h4g.js";import"./index-yKNrR2B4.js";import"./Input-BMTQDxuL.js";import"./useBaseUiId-CNPP6ho2.js";import"./useControlled-BGD6VLnv.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./PopoverPopup-ZRsy0L-w.js";import"./InternalBackdrop-lEVTZFj9.js";import"./composite-tiXb7rK6.js";import"./index-CFb_KvGD.js";import"./getDisabledMountTransitionStyles-BhOQM4-k.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./tick-BYc1w6Qb.js";import"./svgIconContainer-D0TTrVxE.js";import"./small-cross-C-n_IULq.js";import"./search-Cy5B3T22.js";import"./cross-B1cvRkvv.js";import"./useValueChanged-BEZkKn0s.js";import"./getPseudoElementBounds-BvEiaKTW.js";import"./CompositeItem-oXJFfhwO.js";import"./makeExternalStore-JpSfp1kg.js";import"./BaseForm-Dz3Qyw4T.js";import"./ActionButton-D4GpRNPK.js";import"./Button-vhJFIUHZ.js";import"./SkeletonBar-Bp3S-nOd.js";import"./Tooltip-BrGNKtK_.js";import"./info-sign-Bex1uUNh.js";import"./chevron-up-6zlct0hU.js";import"./chevron-down-Cs6sjnv7.js";import"./useEventCallback-CFvkhzPc.js";import"./iconLoader-C_9TYN2w.js";import"./Switch-DrRvyLuv.js";import"./CompositeRoot-DqrzMnzB.js";import"./TimePicker-DI2IVL5U.js";import"./CollapsiblePanel-hd58x1Xj.js";import"./error-BbBgUwm_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cal4vLIC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
