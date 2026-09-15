import{j as t,g as n}from"./iframe-BJcI6I7N.js";import{A as r}from"./action-form-CFJDbYrv.js";import"./preload-helper-t8YjvYIO.js";import"./DropdownField-kCDd1U-6.js";import"./debounce-wJHHfadf.js";import"./useOsdkClient-Jr33iov8.js";import"./index-ciSMf65j.js";import"./Input-kyBh5Wk4.js";import"./useBaseUiId-DEblu5yn.js";import"./useControlled-CouybXNc.js";import"./index-2EHDOsjj.js";import"./index-CwTnZiyW.js";import"./PopoverPopup-CgNtTmRS.js";import"./InternalBackdrop-zWlD-uj6.js";import"./composite-idv80Jfn.js";import"./index-C7gjBbhW.js";import"./getDisabledMountTransitionStyles-CufsIM65.js";import"./ToolbarRootContext-Dl2ojvsq.js";import"./tick-BazIxijd.js";import"./svgIconContainer-ChDR1isz.js";import"./small-cross-p3VCPLe0.js";import"./search-c-uEdInI.js";import"./cross-BXeyHaO7.js";import"./useValueChanged-C92q1_Gi.js";import"./getPseudoElementBounds-B6bLm4lL.js";import"./CompositeItem-DBn217Rb.js";import"./makeExternalStore-DeicAe6-.js";import"./BaseForm-D4t-ufC1.js";import"./ActionButton-ClWqSrJc.js";import"./Button-0eHUW9F4.js";import"./SkeletonBar-Bb1sSD9X.js";import"./Tooltip-Dl2lUrm5.js";import"./info-sign-DX3TZU3f.js";import"./chevron-up-Cz0SE9zU.js";import"./chevron-down-BrRIIpof.js";import"./useEventCallback-D2AFx3Tw.js";import"./iconLoader-CHOBZumi.js";import"./CompositeRoot-D_FNc8SW.js";import"./Switch-BAqJKEMi.js";import"./TimePicker-CyvrHLvh.js";import"./CollapsiblePanel-C_sKcFRB.js";import"./error-llhgzFId.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Da2pPJDy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
