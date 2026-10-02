import{j as t,g as n}from"./iframe-CcC1m7dm.js";import{A as r}from"./action-form-CDuHE5iH.js";import"./preload-helper-DeCk53aw.js";import"./DropdownField-BHSw1oU1.js";import"./debounce-C2vAZ4aB.js";import"./useOsdkClient-DUcNDZWw.js";import"./index-0gvTVOTK.js";import"./Input-CPQRmcYd.js";import"./useBaseUiId-CzCqcGop.js";import"./useControlled-SAzSAZAO.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./PopoverPopup-C7-o66fe.js";import"./InternalBackdrop-9qsE-EbY.js";import"./composite-tUxKNezP.js";import"./index-BxRkQYGY.js";import"./getDisabledMountTransitionStyles-1Tab1F_A.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./tick-BhUO318A.js";import"./svgIconContainer-yjiCwwqK.js";import"./small-cross-DS174T3T.js";import"./search-BXFqiFKZ.js";import"./cross-DV51ECIz.js";import"./useValueChanged-BstO879O.js";import"./getPseudoElementBounds-DJdribUH.js";import"./CompositeItem-BC1QTYXK.js";import"./makeExternalStore-cat_cA42.js";import"./BaseForm-CrmSVMBc.js";import"./ActionButton-BhdUY9pE.js";import"./Button-D0RNeWLg.js";import"./SkeletonBar-DnFTb433.js";import"./Tooltip-B0OqTl9G.js";import"./info-sign-BSvMFW5L.js";import"./chevron-up-DTWkSza1.js";import"./chevron-down-C2TUiN-F.js";import"./useEventCallback-Blu-LJRb.js";import"./iconLoader-OuaOUi4o.js";import"./Switch-DuQHEB1F.js";import"./CompositeRoot-CxTruRAJ.js";import"./TimePicker-V9KRYumY.js";import"./CollapsiblePanel-vSa8PNib.js";import"./error-hsPgizh-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cqfc_v3H.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
