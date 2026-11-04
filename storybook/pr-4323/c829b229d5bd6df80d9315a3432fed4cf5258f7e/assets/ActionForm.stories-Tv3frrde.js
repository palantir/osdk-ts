import{j as t,g as n}from"./iframe-DywpB1hE.js";import{A as r}from"./action-form-CH7DNSQZ.js";import"./preload-helper-C9IGOhE9.js";import"./DropdownField-DhQOHxUk.js";import"./debounce-DRpUcqeI.js";import"./useOsdkClient-BoCP8Ra0.js";import"./index-DmgiNEb3.js";import"./Input-DaT49KS2.js";import"./useBaseUiId-J99Ack0x.js";import"./useControlled-vk6jUFHs.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./PopoverPopup-9xYxalag.js";import"./InternalBackdrop-ilty_vzC.js";import"./composite-Cr11nkBG.js";import"./index-CkWqHjdx.js";import"./getDisabledMountTransitionStyles-hoTdldX2.js";import"./ToolbarRootContext-DhYqu86z.js";import"./tick-dSuqEogv.js";import"./svgIconContainer-BDFx6Zxn.js";import"./small-cross-DEhP5KVo.js";import"./search-DVZ7S7-1.js";import"./cross-aTqn6PnT.js";import"./useValueChanged-DBM24efT.js";import"./getPseudoElementBounds-CTvhJMZP.js";import"./CompositeItem-D-O0kvjn.js";import"./makeExternalStore-CFrW1DiS.js";import"./BaseForm-AXJgYuhl.js";import"./ActionButton-j4A3JxyA.js";import"./Button-Ctxa2jTP.js";import"./SkeletonBar-CYjAwPZM.js";import"./Tooltip-BR9BNp9s.js";import"./info-sign-BsNAXybS.js";import"./chevron-up-JlLgHj79.js";import"./chevron-down-B3UYxdX4.js";import"./useEventCallback-B0JvgrbD.js";import"./iconLoader-BhY7eD-j.js";import"./Switch-Dbjy3nES.js";import"./CompositeRoot-9jjcsh-H.js";import"./TimePicker-XwTntsOe.js";import"./CollapsiblePanel-QB2yvwOj.js";import"./error-zG4ckKPW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BM9yLZRB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
