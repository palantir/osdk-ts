import{j as t,g as n}from"./iframe-C8k3uumS.js";import{A as r}from"./action-form-BUAg8DBO.js";import"./preload-helper-Dj6SQCER.js";import"./DropdownField-cT1ROS8v.js";import"./debounce-Nfw019PW.js";import"./useOsdkClient-BvDl_R1k.js";import"./index-Da9JAcME.js";import"./Input--AleI5pt.js";import"./useBaseUiId-DFXqCjvq.js";import"./useControlled-C2PJbUNw.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./PopoverPopup-qnEIN4P4.js";import"./InternalBackdrop-aU7kJmwR.js";import"./composite-DxAUAqur.js";import"./index-DZnZB0mi.js";import"./getDisabledMountTransitionStyles-DfVVkl0j.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./tick-B-xbQpjH.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./small-cross-Ce-hROYd.js";import"./search-DKEa9C8l.js";import"./cross-Dp2ox1xu.js";import"./useValueChanged-Dqs1inlY.js";import"./getPseudoElementBounds-BPwV_7bA.js";import"./CompositeItem-DZbgQ7y8.js";import"./makeExternalStore-Xdq9roG-.js";import"./BaseForm-DX1FsRfC.js";import"./ActionButton-BMUSg4X7.js";import"./Button-CBL5cv9S.js";import"./SkeletonBar-abAgXsnv.js";import"./Tooltip-BGHZdQle.js";import"./info-sign-gBRP9vEn.js";import"./chevron-up-BOBf7BBR.js";import"./chevron-down-Biem--ni.js";import"./useEventCallback-fbvYUM-2.js";import"./iconLoader-ymcKs6pE.js";import"./Switch-BKf54HbQ.js";import"./CompositeRoot-Am1Pq9vl.js";import"./TimePicker-DSq5eFhz.js";import"./CollapsiblePanel-Dt19Mdgf.js";import"./error-DgFxq49l.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zb3RyNQY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
