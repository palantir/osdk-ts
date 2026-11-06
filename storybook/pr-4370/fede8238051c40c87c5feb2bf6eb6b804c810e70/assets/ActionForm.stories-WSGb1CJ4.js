import{j as t,g as n}from"./iframe-DNO5nHhn.js";import{A as r}from"./action-form-Bb4CqvhB.js";import"./preload-helper-DmJRiiyv.js";import"./DropdownField-9n3rWcYS.js";import"./debounce-Sh9pMPZ4.js";import"./useOsdkClient-BWdcC--S.js";import"./index-B1zYgGoG.js";import"./Input-DLMSp_LN.js";import"./useBaseUiId-VJjRPmeN.js";import"./useControlled-DFdql7xi.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./isObject-CUrQ0YWF.js";import"./InternalBackdrop-DLzfXrnQ.js";import"./composite-BaAus-sy.js";import"./index-Ce87FLOS.js";import"./getDisabledMountTransitionStyles-CNFrfHKN.js";import"./ToolbarRootContext-XjIA09C4.js";import"./tick-BGglWVfw.js";import"./svgIconContainer-CrvnRU9F.js";import"./small-cross-BKeeryj7.js";import"./search-D7RgJWVi.js";import"./cross-DkGiXpSw.js";import"./useValueChanged-C9nCISHq.js";import"./getPseudoElementBounds-D5ABxTfB.js";import"./CompositeItem-50twUNd1.js";import"./makeExternalStore-BOcAXB1x.js";import"./BaseForm-hMbXrUlt.js";import"./ActionButton-YeYo3Rcp.js";import"./Button-RvpRTGgQ.js";import"./SkeletonBar-CPy14_Pl.js";import"./Tooltip-DQGkuZz9.js";import"./info-sign-DN2p_ndq.js";import"./chevron-up-BcMW1dnv.js";import"./chevron-down-CoqE-c4D.js";import"./useEventCallback-BOvCXpPp.js";import"./iconLoader-Bk4I8lvc.js";import"./Switch-C5zxcZ38.js";import"./CompositeRoot-BFIbpMYC.js";import"./TimePicker-DzboJzGA.js";import"./CollapsiblePanel-BYOXGGhP.js";import"./error-BkrZNArB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1wr3AqUj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
