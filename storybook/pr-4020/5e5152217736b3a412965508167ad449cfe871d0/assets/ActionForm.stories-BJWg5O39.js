import{j as t,g as n}from"./iframe-88cR0Kb6.js";import{A as r}from"./action-form-Bt8Jozr8.js";import"./preload-helper-YlgatCnn.js";import"./DropdownField-C6Sig76U.js";import"./debounce-R5snSJSd.js";import"./useOsdkClient-CQKftRkO.js";import"./index-B3iu9Z4K.js";import"./Input-CBeXc1FM.js";import"./useBaseUiId-DM5phI6w.js";import"./useControlled-B1WACGZl.js";import"./index-m81VPS-N.js";import"./index-CGLm8TXz.js";import"./PopoverPopup-CPw-5q_W.js";import"./InternalBackdrop-DdO1TR54.js";import"./composite-D2yt_gez.js";import"./index-TuaMuo_5.js";import"./getDisabledMountTransitionStyles-EWMBCi1t.js";import"./ToolbarRootContext-B6xb1eEg.js";import"./tick-BXAWhEKb.js";import"./svgIconContainer-BWrQPgSJ.js";import"./small-cross-TgiDvwiu.js";import"./search-D2eeLv3Q.js";import"./cross-vHFr3mSH.js";import"./useValueChanged-CKD-6pQy.js";import"./getPseudoElementBounds-CBBgF56s.js";import"./CompositeItem-x-J85oX3.js";import"./makeExternalStore-DzZ4mLu7.js";import"./BaseForm-C_JhWWnc.js";import"./ActionButton-DilKZ_dk.js";import"./Button-CfFrXY9_.js";import"./SkeletonBar-DL6i_PYS.js";import"./Tooltip-BDliEVDr.js";import"./info-sign-7a9TZltl.js";import"./chevron-up-DkIe5-SH.js";import"./chevron-down-J3WtM_eJ.js";import"./useEventCallback-BY6bNS44.js";import"./iconLoader-Cl3B_0s2.js";import"./CompositeRoot-joFOOXBP.js";import"./Switch-BiardwJu.js";import"./TimePicker-CsJnpk6u.js";import"./CollapsiblePanel-LjlawlAT.js";import"./error-B6tbVTJ_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BByVeH1n.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
