import{j as t,g as n}from"./iframe-rp70fwwu.js";import{A as r}from"./action-form-pbJcrl5p.js";import"./preload-helper-EME5q9Jz.js";import"./DropdownField-BAITP7Mj.js";import"./debounce-nCyeRLUU.js";import"./useOsdkClient-Cw47H3av.js";import"./index-B4gvWsM6.js";import"./Input-DVBMxCln.js";import"./useBaseUiId-DldllHCL.js";import"./useControlled-CHM7HnpL.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./PopoverPopup-BCC2iev1.js";import"./InternalBackdrop-CB3wopGK.js";import"./composite-CuPJzJjA.js";import"./index-DcEXat2t.js";import"./getDisabledMountTransitionStyles-DdvpbK1X.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./tick-Cg7GSAs6.js";import"./svgIconContainer-CDe1DB3O.js";import"./small-cross-DQIE1Y4r.js";import"./search-BsQb9YNR.js";import"./cross-DNFUYcP8.js";import"./useValueChanged-B2lIX5Tz.js";import"./getPseudoElementBounds-24IcT4YD.js";import"./CompositeItem-Dn7oIdOY.js";import"./makeExternalStore-povODIJu.js";import"./BaseForm-DakAxvGL.js";import"./ActionButton-rTM9eEX4.js";import"./Button-iCfiBEgd.js";import"./SkeletonBar-DWB3vied.js";import"./Tooltip-CvmyFLlW.js";import"./info-sign-rodaFAb9.js";import"./chevron-up-D1pHSNIt.js";import"./chevron-down-Ba1aP0dz.js";import"./useEventCallback-Z9CbEpN8.js";import"./iconLoader-CmIsDHHl.js";import"./Switch-DlP7z8aW.js";import"./CompositeRoot-VrJdpJ3U.js";import"./TimePicker-eUFvkW5b.js";import"./CollapsiblePanel-BdVNDfzn.js";import"./error-BMFKsVka.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dg07kNzb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
