import{j as t,g as n}from"./iframe-Bln2S2Hd.js";import{A as r}from"./action-form-e9yVbp8Z.js";import"./preload-helper-D4XaSru4.js";import"./DropdownField-B6DQXdcq.js";import"./debounce-Chz3lEmw.js";import"./useOsdkClient-8Oo-BI0v.js";import"./index-D1Ietrlj.js";import"./Input-CVgkuK1P.js";import"./useBaseUiId-DzFDj8Yr.js";import"./useControlled-BG_GY85e.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./PopoverPopup-C1scz7F7.js";import"./InternalBackdrop-KP_aOvQ9.js";import"./composite-BlSW-C1U.js";import"./index-C16meakn.js";import"./getDisabledMountTransitionStyles-B2diP31Y.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./tick-CX7gnba2.js";import"./svgIconContainer-BTYpKb3Z.js";import"./small-cross-E68qj1jZ.js";import"./search-DNt_4LqU.js";import"./cross-wcRc-diA.js";import"./useValueChanged-D84JKHV4.js";import"./getPseudoElementBounds-BoRsn9l4.js";import"./CompositeItem-D6F0jU5J.js";import"./makeExternalStore-CXv5fKfm.js";import"./BaseForm-D5Bf7qUh.js";import"./ActionButton-DDJblqxX.js";import"./Button-B9XMX6ms.js";import"./SkeletonBar-BdZdM1Th.js";import"./Tooltip-DgYrqeUf.js";import"./info-sign-WZJdLgqJ.js";import"./chevron-up-Dzy9tRBv.js";import"./chevron-down-B_NZATAC.js";import"./useEventCallback-Bj0pRbTX.js";import"./iconLoader-C6Ub8aCE.js";import"./CompositeRoot-BAgoEH8y.js";import"./Switch-ZUDrrH31.js";import"./TimePicker-CuUpe_xY.js";import"./CollapsiblePanel-_dpQ2gCa.js";import"./error-wBBSXgAg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BkrRXFvl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
