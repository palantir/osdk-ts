import{j as t,g as n}from"./iframe-KzcVBCRi.js";import{A as r}from"./action-form-DWvmnWGx.js";import"./preload-helper-BHEHcaci.js";import"./DropdownField-CLCiF7Rm.js";import"./debounce-NVX7x4-3.js";import"./useOsdkClient-B5kzp8lo.js";import"./index-CzXxEHHr.js";import"./Input-Cd7kdMt2.js";import"./useBaseUiId-DZF9dUKs.js";import"./useControlled-uli5q6ql.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./PopoverPopup-CndzA1oj.js";import"./InternalBackdrop-DU_2I3T6.js";import"./composite-5RWCdSN2.js";import"./index-DjI5xhOO.js";import"./getDisabledMountTransitionStyles-VJ04QHXq.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./tick-BnZkTXtc.js";import"./svgIconContainer-59d154vN.js";import"./small-cross-DS-iYFW3.js";import"./search-CflGQf1d.js";import"./cross-C3McpADX.js";import"./useValueChanged-WxAxKP7S.js";import"./getPseudoElementBounds-B5CJHYyN.js";import"./CompositeItem-BzuuDXx0.js";import"./makeExternalStore-DCqqAOa1.js";import"./BaseForm-ByWrtDIx.js";import"./ActionButton-IdIQB2NM.js";import"./Button-CBd10Xxd.js";import"./SkeletonBar-Cjrbehp8.js";import"./Tooltip-CutkRXXV.js";import"./info-sign-Bau8CvcJ.js";import"./chevron-up-BpQ4LsbP.js";import"./chevron-down-DpGps272.js";import"./useEventCallback-C8Tozf_J.js";import"./iconLoader-SFpQWfC5.js";import"./CompositeRoot-B2eR39UF.js";import"./Switch-CDLlyKuw.js";import"./TimePicker-DbbpRNn0.js";import"./CollapsiblePanel-Bw4ONZWv.js";import"./error-BAN-C5Cp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIAhwg3C.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
