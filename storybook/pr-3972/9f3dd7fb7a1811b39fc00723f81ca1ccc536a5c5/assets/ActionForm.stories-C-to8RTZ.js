import{j as t,g as n}from"./iframe-BjZw4uZx.js";import{A as r}from"./action-form-C69ETu8_.js";import"./preload-helper-ORk2FqAe.js";import"./DropdownField-ByxMaZrM.js";import"./debounce-D6KN3GLj.js";import"./useOsdkClient-DAD_fQEy.js";import"./index-1W3MQsZX.js";import"./Input-LhLxUdgb.js";import"./useBaseUiId-C8tvPGb8.js";import"./useControlled-CVj57D_o.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./PopoverPopup-Ba3qL99k.js";import"./InternalBackdrop-C46cFkSM.js";import"./composite-D0Ri5kCB.js";import"./index-r0kwR1Gy.js";import"./getDisabledMountTransitionStyles-BxHU8rzl.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./tick-C-xJqvAS.js";import"./svgIconContainer-BFOOKm-2.js";import"./small-cross-bjtS9678.js";import"./search-H7eFoEJT.js";import"./cross-B7IcoVob.js";import"./useValueChanged-Dm26sXFI.js";import"./getPseudoElementBounds-PRDfHB8H.js";import"./CompositeItem-aZoPkaZ5.js";import"./makeExternalStore-NPZJ19CP.js";import"./BaseForm-B3HGxI6n.js";import"./ActionButton-CpeH4f8W.js";import"./Button-CWwJb2Uz.js";import"./SkeletonBar-Daru_zCU.js";import"./Tooltip-COufKIaj.js";import"./info-sign-BfepT_Sj.js";import"./chevron-up-B8gHdAwL.js";import"./chevron-down-D59bxWeC.js";import"./useEventCallback-CSDQXoK-.js";import"./iconLoader-BpLj1BsX.js";import"./CompositeRoot-B1ME2X-M.js";import"./Switch-idbfgML8.js";import"./TimePicker-B2zr6UGL.js";import"./CollapsiblePanel-DjPQRvCu.js";import"./error-BcfWkrIR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2-SGnqg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
