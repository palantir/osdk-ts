import{j as t,g as n}from"./iframe-CMAdZ-tl.js";import{A as r}from"./action-form-XHqUvIwE.js";import"./preload-helper-BCEvkaTh.js";import"./DropdownField-Vcml5_p5.js";import"./debounce-jO5PmR1U.js";import"./useOsdkClient-DLfNvm6T.js";import"./index-uZXDV4-c.js";import"./Input-EDICR5v8.js";import"./useBaseUiId-C6a-nIiQ.js";import"./useControlled-BNZjX3EY.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./PopoverPopup-Dr43Tc4o.js";import"./InternalBackdrop-DDjtbvyl.js";import"./composite-hUzc6DpG.js";import"./index-BVbV_G_W.js";import"./getDisabledMountTransitionStyles-jvQsg8pP.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./tick-JhIa2r4T.js";import"./svgIconContainer-BGo4Ffmi.js";import"./small-cross-DSzexAdf.js";import"./search-Bbf0CQIG.js";import"./cross-TecNFToN.js";import"./useValueChanged-6IX2onud.js";import"./getPseudoElementBounds-k5Ib03Kp.js";import"./CompositeItem-WbzOgrFX.js";import"./makeExternalStore-Y97085jQ.js";import"./BaseForm-BfsFwP3U.js";import"./ActionButton-B6tCqEcW.js";import"./Button-CMbZ2dfd.js";import"./SkeletonBar-BrSrSU08.js";import"./Tooltip-CzT_wPMb.js";import"./info-sign-DMPgZ7eA.js";import"./chevron-up-BOhlPChP.js";import"./chevron-down--0eNTL5v.js";import"./useEventCallback-1slYZiXe.js";import"./iconLoader-CAW9fqmK.js";import"./CompositeRoot-DPqOwPLX.js";import"./Switch-DqGRTjqU.js";import"./TimePicker-Dg2Cv0At.js";import"./CollapsiblePanel-Hpy333SY.js";import"./error-CKKGLKp7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XprJI73J.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
