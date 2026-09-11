import{j as t,g as n}from"./iframe-RU8IGrNT.js";import{A as r}from"./action-form-Bvn8KKAQ.js";import"./preload-helper-CC2SHOu0.js";import"./DropdownField-47olZyAw.js";import"./debounce-C6QpBJAl.js";import"./useOsdkClient-DTEwEYtW.js";import"./index-D0VksrnV.js";import"./Input-9-d8I3Qs.js";import"./useBaseUiId-B7sFi6pv.js";import"./useControlled-D60JD0mh.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./PopoverPopup-BUwRG3BX.js";import"./InternalBackdrop-BmKA3i1c.js";import"./composite-qIXSIzDA.js";import"./index-BH9gOnci.js";import"./getDisabledMountTransitionStyles-KBK5f9_s.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./tick-D1RPONbV.js";import"./svgIconContainer-CAf1V-Tr.js";import"./small-cross-DDP_QlWn.js";import"./search-C35W7rra.js";import"./cross-4-OM6Ghb.js";import"./useValueChanged-Dq_Pzrul.js";import"./getPseudoElementBounds-CS_FDytm.js";import"./CompositeItem-CC8f_DCj.js";import"./makeExternalStore-m1NamX6V.js";import"./BaseForm-vrPxhuqp.js";import"./ActionButton-B_UOz8mm.js";import"./Button-i-hZGgk2.js";import"./SkeletonBar-CjsJgAUH.js";import"./Tooltip-6itGbzak.js";import"./info-sign-C6tKuTwN.js";import"./chevron-up-DF4kmb64.js";import"./chevron-down-D65XdSbD.js";import"./useEventCallback-DsQ6v7L7.js";import"./iconLoader-4WfYnx9P.js";import"./CompositeRoot-BPOHmP0R.js";import"./Switch-yAZp6zBQ.js";import"./TimePicker-8lC2FT7Z.js";import"./CollapsiblePanel-gYEJ-yuU.js";import"./error-DtrLgX5c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D0KBj7Xc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
