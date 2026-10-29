import{j as t,g as n}from"./iframe-hXrfBBL8.js";import{A as r}from"./action-form-gWwQJhbf.js";import"./preload-helper-Bqy1uZtT.js";import"./DropdownField-eX2NPP_w.js";import"./debounce-C77Azx16.js";import"./useOsdkClient-De86JThJ.js";import"./index-uBLz7gbD.js";import"./Input-DskUev2S.js";import"./useBaseUiId-DXzMJ9Pu.js";import"./useControlled-BMHl3Ney.js";import"./index-B5iR3PxV.js";import"./index-BwEWCMrj.js";import"./PopoverPopup-BWLtTrxm.js";import"./InternalBackdrop-4YTQPE1w.js";import"./composite-rXoGJEtm.js";import"./index-BUEqptTm.js";import"./getDisabledMountTransitionStyles-D-elqNz5.js";import"./ToolbarRootContext-emE-minV.js";import"./tick-CmQh1iFq.js";import"./svgIconContainer-DT9-fJuD.js";import"./small-cross-CSwTYwFN.js";import"./search-ClLVbiXV.js";import"./cross-EKOWl3qR.js";import"./useValueChanged-BRdsuTQj.js";import"./getPseudoElementBounds-BQB0gaFo.js";import"./CompositeItem-CXVgDan9.js";import"./makeExternalStore-WYwpKCNb.js";import"./BaseForm-BNRU1HRr.js";import"./ActionButton-Bc_lN9oE.js";import"./Button-DA1M1QLW.js";import"./SkeletonBar-zDOwBpUy.js";import"./Tooltip-DboKux0-.js";import"./info-sign-DgE1IiBg.js";import"./chevron-up-BjBS-LsO.js";import"./chevron-down-CbQ2WyOf.js";import"./useEventCallback-HWvI9hEC.js";import"./iconLoader-BvolIwCW.js";import"./Switch-C0CQOZjC.js";import"./CompositeRoot-ZTNjzHOg.js";import"./TimePicker-Dsx8YMZ6.js";import"./CollapsiblePanel-BURgI4Vv.js";import"./error-TXsyVqhB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DSKv7sJY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
