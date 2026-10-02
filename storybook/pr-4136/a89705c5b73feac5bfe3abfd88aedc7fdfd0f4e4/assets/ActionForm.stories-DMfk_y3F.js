import{j as t,g as n}from"./iframe-PECeEW3T.js";import{A as r}from"./action-form-Ca_TnyIi.js";import"./preload-helper-C6A5QCy5.js";import"./DropdownField-D4M8Ec5T.js";import"./debounce-DUaEl7gF.js";import"./useOsdkClient-DubZDY7d.js";import"./index-BjSahMIP.js";import"./Input-Dyun1iu7.js";import"./useBaseUiId-D-8DZjqe.js";import"./useControlled-rCZffMic.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./PopoverPopup-B6HgbBU2.js";import"./InternalBackdrop-O0lOdESn.js";import"./composite-Ce7Nqskp.js";import"./index-DtGkyzrP.js";import"./getDisabledMountTransitionStyles-CKuvmIJF.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./tick-zmXIdbTH.js";import"./svgIconContainer-B-v0aTHG.js";import"./small-cross-Dy6Y0Hcc.js";import"./search-CpCpMqWp.js";import"./cross-jtAUAPzX.js";import"./useValueChanged-ChvBCWAV.js";import"./getPseudoElementBounds-DuSZBJyL.js";import"./CompositeItem-CUJUUY83.js";import"./makeExternalStore-v3gjQsp8.js";import"./BaseForm-BIWPtlPj.js";import"./ActionButton-B99REHhD.js";import"./Button-LcQP4ZCC.js";import"./SkeletonBar-BMS3_wA0.js";import"./Tooltip-CNpkEvmJ.js";import"./info-sign-BbyTDm3N.js";import"./chevron-up-DtnaTWWl.js";import"./chevron-down-CxtRUuHx.js";import"./useEventCallback-DyH-DdM5.js";import"./iconLoader-DZdBRPp-.js";import"./Switch-Bm2LzUmB.js";import"./CompositeRoot-BwnSttYY.js";import"./TimePicker-CQFm9gx1.js";import"./CollapsiblePanel-BsfLZLWB.js";import"./error-BJrA_-EN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQL6tA2X.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
