import{j as t,g as n}from"./iframe-CvsBQ7Bv.js";import{A as r}from"./action-form--VyEm4kh.js";import"./preload-helper-DlzqvSUq.js";import"./DropdownField-Dkea7y5N.js";import"./debounce-B8ADmp8k.js";import"./useOsdkClient-Gme28oz4.js";import"./index-zqvYW4SU.js";import"./Input-CyAWOOQt.js";import"./useBaseUiId-DJie0QLa.js";import"./useControlled-BMRWc9HY.js";import"./index-DWqMtX_5.js";import"./index-pktwAYcd.js";import"./PopoverPopup-ICSjS-3E.js";import"./InternalBackdrop-CgJA0r_O.js";import"./composite-tQAENqA9.js";import"./index-CgcrBJpo.js";import"./getDisabledMountTransitionStyles-BYd2AM5Z.js";import"./ToolbarRootContext-CUoJwkVG.js";import"./tick-Cx1M9Q22.js";import"./svgIconContainer-BICOG3-Z.js";import"./small-cross-CJHhyVum.js";import"./search-DMySM0K3.js";import"./cross-BBfoUyvH.js";import"./useValueChanged-MiAVaZ_u.js";import"./getPseudoElementBounds-C1BIyYMV.js";import"./CompositeItem-CgFodWwZ.js";import"./makeExternalStore-CoY10B_2.js";import"./BaseForm-0L9pJbEk.js";import"./ActionButton-B4IV8DDr.js";import"./Button--C8rvOfU.js";import"./SkeletonBar-BDtygrLN.js";import"./Tooltip-BEj0KtXz.js";import"./info-sign-q7LjEHzz.js";import"./chevron-up-CYHlR5AY.js";import"./chevron-down-pfssoNn9.js";import"./useEventCallback-ama7zC7l.js";import"./iconLoader-BlDjsGNg.js";import"./Switch-3NA0JuWu.js";import"./CompositeRoot-DtY7inzu.js";import"./TimePicker-b4GoGvvY.js";import"./CollapsiblePanel-C7BP8ZD3.js";import"./error-D7W27UGH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_Zhux1x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
