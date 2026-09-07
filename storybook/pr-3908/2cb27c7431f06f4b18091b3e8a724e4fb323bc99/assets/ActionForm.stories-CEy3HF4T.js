import{j as t,g as n}from"./iframe-jVZSa0_O.js";import{A as r}from"./action-form-Br9olaSq.js";import"./preload-helper-B0JsgF0Q.js";import"./DropdownField-B7ayEcBh.js";import"./debounce-29zvw66V.js";import"./useOsdkClient-DXW6J2KM.js";import"./index-cz87o1u2.js";import"./Input-DE-dqgbb.js";import"./useBaseUiId-Dh7cbX1i.js";import"./useControlled-PPoFg-g2.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./PopoverPopup-BkH3GWX-.js";import"./InternalBackdrop-CNizCF8V.js";import"./composite-B1R1VOU-.js";import"./index-D68UoJcu.js";import"./getDisabledMountTransitionStyles-CPsauNSR.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./tick-y1p0xcrN.js";import"./svgIconContainer-CCkoUGO-.js";import"./small-cross-DW-_vWg4.js";import"./search-y5GiQxVJ.js";import"./cross-D_kf2VMY.js";import"./useValueChanged-lRBuZxnF.js";import"./getPseudoElementBounds-CZyxgjLi.js";import"./CompositeItem-Bdw-jz1U.js";import"./makeExternalStore-D0xCnJrG.js";import"./BaseForm-D8w5O-kn.js";import"./ActionButton-MDw6R0lF.js";import"./Button-ruj5eHNw.js";import"./SkeletonBar-D52KZgWC.js";import"./Tooltip-nvYgD8vA.js";import"./info-sign-CTw9L9Bj.js";import"./chevron-up-t4wLVQYF.js";import"./chevron-down-vgR9jQm9.js";import"./useEventCallback-BFzCFepw.js";import"./iconLoader-DKBoIV-k.js";import"./CompositeRoot-C9Vt8VFM.js";import"./Switch-BItEgePq.js";import"./TimePicker-CBEnDM6K.js";import"./CollapsiblePanel-BwEkY4as.js";import"./error-BkWT_eOO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6vVTJkI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
