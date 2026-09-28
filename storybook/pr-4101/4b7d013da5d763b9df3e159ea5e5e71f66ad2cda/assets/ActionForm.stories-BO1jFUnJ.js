import{j as t,g as n}from"./iframe-CxXsZYaL.js";import{A as r}from"./action-form-D28knCNB.js";import"./preload-helper-Dt2THrkM.js";import"./DropdownField-BIToETMe.js";import"./debounce-C7Sw8tZF.js";import"./useOsdkClient-B9HSbxHr.js";import"./index-DPiocoAy.js";import"./Input-CWxuf688.js";import"./useBaseUiId-Bv8MvEl3.js";import"./useControlled-CCbrWuYr.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./PopoverPopup-u7OHtDv1.js";import"./InternalBackdrop-BI6mC2qq.js";import"./composite-DTKgIMa8.js";import"./index-Cw4rMGGb.js";import"./getDisabledMountTransitionStyles-BR22wxCp.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./tick-CMFb73FH.js";import"./svgIconContainer-B1eyjN3k.js";import"./small-cross-DNpUAcLG.js";import"./search-DvGGeQU1.js";import"./cross-DyjS402Z.js";import"./useValueChanged-CHP3biT2.js";import"./getPseudoElementBounds-DpN1Og-q.js";import"./CompositeItem-ltfNlpKQ.js";import"./makeExternalStore-C8dW_5p-.js";import"./BaseForm-Bgj8ucGO.js";import"./ActionButton-IBcvUrIn.js";import"./Button-By61fxAS.js";import"./SkeletonBar-DLXC3u_6.js";import"./Tooltip-64p6zcvU.js";import"./info-sign-CI2WTU2g.js";import"./chevron-up-fhAvyM3e.js";import"./chevron-down-LKr_hJQt.js";import"./useEventCallback-D6R4tDnw.js";import"./iconLoader-DKftqTv2.js";import"./Switch-Dh2M9qg1.js";import"./CompositeRoot-ZVj8zSQs.js";import"./TimePicker-Dv9DhsIh.js";import"./CollapsiblePanel-DMmR_d8n.js";import"./error-D5twijSF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BmsRu25F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
