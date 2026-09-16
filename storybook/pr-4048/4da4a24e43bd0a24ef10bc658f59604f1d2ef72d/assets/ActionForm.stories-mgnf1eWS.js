import{j as t,g as n}from"./iframe-DjbWNQ0f.js";import{A as r}from"./action-form-BYO84LR9.js";import"./preload-helper-DZqHfMjf.js";import"./DropdownField-DPS-yQWq.js";import"./debounce-CbTVWiuR.js";import"./useOsdkClient-Bc0GWDgg.js";import"./index-DRSVy1id.js";import"./Input-qPpH6qdj.js";import"./useBaseUiId-CQ0aFnKR.js";import"./useControlled-CdWNY0zK.js";import"./index-B_S3CqUO.js";import"./index-CT8ZI4c8.js";import"./PopoverPopup-HGqWpJmj.js";import"./InternalBackdrop-CooNNSHH.js";import"./composite-ChJITrYk.js";import"./index-DfXwDEaE.js";import"./getDisabledMountTransitionStyles-S-y8QJJa.js";import"./ToolbarRootContext-DHwz-r64.js";import"./tick-gtzlN82s.js";import"./svgIconContainer-DpceGvSJ.js";import"./small-cross-Drrz11Vc.js";import"./search-Cp6KPEc7.js";import"./cross-Cqp-lwuB.js";import"./useValueChanged-_VLUSyOj.js";import"./getPseudoElementBounds-B8z3ndYd.js";import"./CompositeItem-BSe1aJMv.js";import"./makeExternalStore-BTX3xjPy.js";import"./BaseForm-Bvmhzp-V.js";import"./ActionButton-DNL1JaTx.js";import"./Button-DMt4PyPT.js";import"./SkeletonBar-Biacx3N_.js";import"./Tooltip-Bg_Tux9e.js";import"./info-sign-Dhf1WKNv.js";import"./chevron-up-B7Sg9fTM.js";import"./chevron-down-Dn4fSYZt.js";import"./useEventCallback-BSzqPBzd.js";import"./iconLoader-Bl6UzYuW.js";import"./Switch-BUoTD_D2.js";import"./CompositeRoot-BgWIqctS.js";import"./TimePicker-IslR2nci.js";import"./CollapsiblePanel-1MDyh-8L.js";import"./error-DBRIaq9T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMIQgg40.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
