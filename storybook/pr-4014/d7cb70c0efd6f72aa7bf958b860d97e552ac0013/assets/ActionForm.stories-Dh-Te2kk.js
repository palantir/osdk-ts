import{j as t,g as n}from"./iframe-Cmyuw2Ph.js";import{A as r}from"./action-form-lzUjQu-I.js";import"./preload-helper-BdOHKbj_.js";import"./DropdownField-BYzSEZU3.js";import"./debounce-YjruCfws.js";import"./useOsdkClient-Bhx478d6.js";import"./index-DmkTpiQF.js";import"./Input-DF2j3Inj.js";import"./useBaseUiId-BKvwKpWC.js";import"./useControlled-1Ry22NdV.js";import"./index-DdBzIF29.js";import"./index-Cy1dz_-E.js";import"./PopoverPopup-BFna4Wvy.js";import"./InternalBackdrop-aC0FPmUr.js";import"./composite-BApZsjKv.js";import"./index-DrYEH3ho.js";import"./getDisabledMountTransitionStyles-A2_XJssl.js";import"./ToolbarRootContext-Bziyhvzk.js";import"./tick-Ci4PnMCw.js";import"./svgIconContainer-kIxwS322.js";import"./small-cross-B-7R2q8G.js";import"./search-MWYwj9aD.js";import"./cross-DgRED2Y7.js";import"./useValueChanged-C6zv_ojv.js";import"./getPseudoElementBounds-C24zyg7W.js";import"./CompositeItem-Bm_UDkTp.js";import"./makeExternalStore-D1HySzYn.js";import"./BaseForm-B9moN0DP.js";import"./ActionButton-BwGzlO-h.js";import"./Button-Cgurdd-l.js";import"./SkeletonBar-BFEabyG6.js";import"./Tooltip-DJOnRYv9.js";import"./info-sign-7-tYs6yp.js";import"./chevron-up-DKDq-nZE.js";import"./chevron-down-DihUPRd8.js";import"./useEventCallback-D2P37CA4.js";import"./iconLoader-X--BuGrc.js";import"./CompositeRoot-YHm0gnnd.js";import"./Switch-DDzAD7R1.js";import"./TimePicker-BMGSx-cF.js";import"./CollapsiblePanel-DIQ0ICSn.js";import"./error-BVkhCBJN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCjep4oi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
