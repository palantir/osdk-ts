import{j as t,g as n}from"./iframe-Cf0qyGmO.js";import{A as r}from"./action-form-BagLA3v8.js";import"./preload-helper-FPWMSdmp.js";import"./DropdownField-BNhZxXTj.js";import"./debounce-qcOHSgKC.js";import"./useOsdkClient-Blulg0DK.js";import"./index-BgodPvXa.js";import"./Input-DeGiuUjm.js";import"./useBaseUiId-BYXJoihF.js";import"./useControlled-BC5mDRRe.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./PopoverPopup-CAL-bmct.js";import"./InternalBackdrop-Cr8_GTkt.js";import"./composite-C4psFksR.js";import"./index-DcVAYh3u.js";import"./getDisabledMountTransitionStyles-D1czWqQx.js";import"./ToolbarRootContext-BEgrRK88.js";import"./tick-YNlQehLt.js";import"./svgIconContainer-Cf6GYh8C.js";import"./small-cross-BtxyZWiR.js";import"./search-CjtKZYOm.js";import"./cross-Dw3cMUV6.js";import"./useValueChanged-Iv8KZjJ4.js";import"./getPseudoElementBounds-D7l6Y_as.js";import"./CompositeItem-Hv8dpGL2.js";import"./makeExternalStore-Do5TdYdF.js";import"./BaseForm-B6_I5Xrm.js";import"./ActionButton-CagVTzlG.js";import"./Button-QXRQZjdg.js";import"./SkeletonBar-B3eK4lrr.js";import"./Tooltip-D8djcuHS.js";import"./info-sign-CCaiLduF.js";import"./chevron-up-jTKpnbxO.js";import"./chevron-down-CciGsrf9.js";import"./useEventCallback-D6E5ELqq.js";import"./iconLoader-qU1zqvxP.js";import"./CompositeRoot-DNYnltY6.js";import"./Switch-BSqFyIUL.js";import"./TimePicker-2cdSYwe0.js";import"./CollapsiblePanel-CzQfHLf4.js";import"./error-CneFkgZH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-T_QycJJf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
