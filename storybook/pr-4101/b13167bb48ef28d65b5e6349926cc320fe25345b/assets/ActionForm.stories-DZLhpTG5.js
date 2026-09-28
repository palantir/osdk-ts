import{j as t,g as n}from"./iframe-BqJ-ZnBR.js";import{A as r}from"./action-form-Iay7lKtm.js";import"./preload-helper-JLrGau54.js";import"./DropdownField-CLjpg3Un.js";import"./debounce-DUBEN3SV.js";import"./useOsdkClient-CIGN3ZFv.js";import"./index-BK1P1voH.js";import"./Input-Bgztm7qK.js";import"./useBaseUiId-BcNmiaah.js";import"./useControlled-DrJztn-2.js";import"./index-94n_hVW-.js";import"./index-By0VHStz.js";import"./PopoverPopup-DklAn_WH.js";import"./InternalBackdrop-BQv9yU4o.js";import"./composite-iKsnpVuz.js";import"./index-BLIg07yZ.js";import"./getDisabledMountTransitionStyles-BjNITUuJ.js";import"./ToolbarRootContext-nuNuNDyh.js";import"./tick-CvXUKs1d.js";import"./svgIconContainer-Dc4tWYI9.js";import"./small-cross-CeRG__Xs.js";import"./search-BZek_B3M.js";import"./cross-BDK7LG_e.js";import"./useValueChanged-B9GECoed.js";import"./getPseudoElementBounds-SdYgej76.js";import"./CompositeItem-COP7jkJm.js";import"./makeExternalStore-DtB887rj.js";import"./BaseForm-DWm5m0pG.js";import"./ActionButton-BRh8fnVZ.js";import"./Button-DxthHQUU.js";import"./SkeletonBar-BeQPr1Hf.js";import"./Tooltip-ChG6KFaQ.js";import"./info-sign-DsTNj3ge.js";import"./chevron-up-BkQGN6j9.js";import"./chevron-down-rJ0TahbK.js";import"./useEventCallback-HXpemZPp.js";import"./iconLoader-7LaX65rH.js";import"./Switch-D3Css2eU.js";import"./CompositeRoot-CmH82QeL.js";import"./TimePicker-CLI6BKks.js";import"./CollapsiblePanel-rA8Z4Ruz.js";import"./error-B0ep7kDm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CsoY-VD3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
