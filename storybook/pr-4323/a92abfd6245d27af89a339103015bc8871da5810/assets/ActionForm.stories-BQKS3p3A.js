import{j as t,g as n}from"./iframe-DQCdqfg5.js";import{A as r}from"./action-form-CbMH6-r2.js";import"./preload-helper-BnuMKywq.js";import"./DropdownField-NOLN6HRJ.js";import"./debounce-DHf3w8rI.js";import"./useOsdkClient-DpwLfZR6.js";import"./index-vgggs2zv.js";import"./Input-BTifrhUx.js";import"./useBaseUiId-uJtwceXU.js";import"./useControlled-ChMbt_Fz.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./PopoverPopup-CvC35ehe.js";import"./InternalBackdrop-mKo4eMuU.js";import"./composite-CLQo-Wfa.js";import"./index-DkmdKJbM.js";import"./getDisabledMountTransitionStyles-BryvnPSi.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./tick-BNBx5Vf4.js";import"./svgIconContainer-DQ3vDY3d.js";import"./small-cross-B8kNhtpM.js";import"./search-BVksAAy0.js";import"./cross-BM5-gN2O.js";import"./useValueChanged-BB3_bFNq.js";import"./getPseudoElementBounds-SCb5Bi3b.js";import"./CompositeItem-BV9j03E3.js";import"./makeExternalStore-DhC3eF_c.js";import"./BaseForm-DIKaDx9O.js";import"./ActionButton-8qbOBxU2.js";import"./Button-DNN3wzC1.js";import"./SkeletonBar-BMXSVux8.js";import"./Tooltip-F2HH1cxW.js";import"./info-sign-BvZiXsUZ.js";import"./chevron-up-CW7S1XHj.js";import"./chevron-down-s9at5FCB.js";import"./useEventCallback-DI2LvAvB.js";import"./iconLoader-OmPVOwxC.js";import"./Switch-CkQ-PZsb.js";import"./CompositeRoot-NOBl9W0a.js";import"./TimePicker-C8EH4Jms.js";import"./CollapsiblePanel-B0RAMB_a.js";import"./error-LGbg2EdJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B1flG_2m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
