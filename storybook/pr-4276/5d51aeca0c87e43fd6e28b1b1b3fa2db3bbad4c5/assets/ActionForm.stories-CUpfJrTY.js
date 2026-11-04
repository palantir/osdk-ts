import{j as t,g as n}from"./iframe-DWecEh6Z.js";import{A as r}from"./action-form-tSP7q_Sm.js";import"./preload-helper-Bbi2Z730.js";import"./DropdownField-CrXyCQrM.js";import"./debounce-BVhyQSqg.js";import"./useOsdkClient-BfFw3qSS.js";import"./index-6GDxt5zW.js";import"./Input-CalqcJQf.js";import"./useBaseUiId-DGtSF2d7.js";import"./useControlled-DxZ-cBby.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./isObject-4ImOr-SM.js";import"./InternalBackdrop-Dwui7Iwy.js";import"./composite-Dkoqcymr.js";import"./index-D1u_zvAB.js";import"./getDisabledMountTransitionStyles-DyI0iHRG.js";import"./ToolbarRootContext-D-1OWq12.js";import"./tick-DrdvNN56.js";import"./svgIconContainer-CzZM0mPh.js";import"./small-cross-CtR_-pfW.js";import"./search-Dq1J9kTw.js";import"./cross-DJ8vlukc.js";import"./useValueChanged-MajtV6Am.js";import"./getPseudoElementBounds-DnVQyjld.js";import"./CompositeItem-K9AR25LJ.js";import"./makeExternalStore-BKGvKQz7.js";import"./BaseForm-B_aaukT-.js";import"./ActionButton-BHq7nCiC.js";import"./Button-Cipj2Ppc.js";import"./SkeletonBar-BtmrMCoY.js";import"./Tooltip-CvzGGbpE.js";import"./info-sign-ByrZS5c-.js";import"./chevron-up-DhCvWGQU.js";import"./chevron-down-C6k7Uas0.js";import"./useEventCallback-BnrirAaK.js";import"./iconLoader-CsfwHRVU.js";import"./Switch-CD-lRFzS.js";import"./CompositeRoot-BmQXXL_v.js";import"./TimePicker-rGpAfDcR.js";import"./CollapsiblePanel-DKsnYU-Y.js";import"./error-BHOwo5JQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BTTMLJya.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
