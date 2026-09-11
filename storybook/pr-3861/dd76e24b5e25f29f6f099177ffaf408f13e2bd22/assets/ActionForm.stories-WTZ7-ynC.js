import{j as t,g as n}from"./iframe-DXDjAXel.js";import{A as r}from"./action-form-B7P02g2o.js";import"./preload-helper-IpZxA0ro.js";import"./DropdownField-DkSwoN9D.js";import"./debounce-BtAkR6Pi.js";import"./useOsdkClient-_rpTUpw6.js";import"./index-CpU5tjqP.js";import"./Input-Dpc4Iwso.js";import"./useBaseUiId-C45Ma1UV.js";import"./useControlled-KXVdK95E.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./PopoverPopup-Tb6F7J3K.js";import"./InternalBackdrop-CRUN8gyi.js";import"./composite--V8DJrbe.js";import"./index-BacqsjHg.js";import"./getDisabledMountTransitionStyles-Ccg_pvfR.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./tick-BygXNrkI.js";import"./svgIconContainer-jCzC3C8h.js";import"./small-cross-DbxwjyCU.js";import"./search-CiGMtB3E.js";import"./cross-DEtWv0qy.js";import"./useValueChanged-BmkI91ny.js";import"./getPseudoElementBounds-BHQeyyd6.js";import"./CompositeItem-CDBKBcu9.js";import"./makeExternalStore-Dyu5lTE9.js";import"./BaseForm-Cpu_PTLS.js";import"./ActionButton-DBwaiG9o.js";import"./Button-B-4Jw48N.js";import"./SkeletonBar-HdKrVA_I.js";import"./Tooltip-_9vbGbii.js";import"./info-sign-D4bZizmi.js";import"./chevron-up-CTqyJ7aC.js";import"./chevron-down-KI9ROJP6.js";import"./useEventCallback-X2pfGQGy.js";import"./iconLoader-gyjlPiPU.js";import"./CompositeRoot-zXPDzw2Z.js";import"./Switch-D5sbUUJX.js";import"./TimePicker-CiCTMOsy.js";import"./CollapsiblePanel-BLnECc8-.js";import"./error-Ba9KLhOx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_T1pq9p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
