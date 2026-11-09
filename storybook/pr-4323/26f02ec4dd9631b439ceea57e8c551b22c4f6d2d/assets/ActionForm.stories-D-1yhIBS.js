import{j as t,g as n}from"./iframe-D4P7etlB.js";import{A as r}from"./action-form-OqeVj8d5.js";import"./preload-helper-C2lPWNQK.js";import"./DropdownField-CWcrlvwC.js";import"./debounce-BMR9Ivsx.js";import"./useOsdkClient-CeUx27Wr.js";import"./index--jClFyuO.js";import"./Input-qm2XT5j9.js";import"./useBaseUiId-DvebyHll.js";import"./useControlled-Bt7GOIrD.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./isObject-XT_Sb81H.js";import"./InternalBackdrop-DGlO_IGy.js";import"./composite-EmCbbtLr.js";import"./index-_8-zIP07.js";import"./getDisabledMountTransitionStyles-CX4qj900.js";import"./ToolbarRootContext-BJaSUWck.js";import"./tick-BK6XBZsH.js";import"./svgIconContainer-U5WzETGn.js";import"./small-cross-DTEPBgMK.js";import"./search-BeidNAh3.js";import"./cross-2BDiF0Hd.js";import"./useValueChanged-cSUG-TZB.js";import"./getPseudoElementBounds-hPghm1P1.js";import"./CompositeItem-Ca01-11J.js";import"./makeExternalStore-B40swsdd.js";import"./BaseForm-Dp2R03wn.js";import"./ActionButton-DK6o_d0J.js";import"./Button-DSmwZlqW.js";import"./SkeletonBar-BO8Ocj6J.js";import"./Tooltip-rdRqYy6n.js";import"./info-sign-B237SQTF.js";import"./chevron-up-C2KJQHoa.js";import"./chevron-down-6L8qWnzl.js";import"./useEventCallback-DkNCpCyH.js";import"./iconLoader-DF3JFhNI.js";import"./Switch-DOBhefw2.js";import"./CompositeRoot-DF6AjUpi.js";import"./TimePicker-fjSMFMWj.js";import"./CollapsiblePanel-rtSyYl_a.js";import"./error-BEbiBzi3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DllWQK_5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
