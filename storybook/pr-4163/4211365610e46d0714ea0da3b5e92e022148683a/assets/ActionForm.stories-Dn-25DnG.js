import{j as t,g as n}from"./iframe-DKjGRkFv.js";import{A as r}from"./action-form-BEu0mSFy.js";import"./preload-helper-C6rqf7Sg.js";import"./DropdownField-BHrdVt_T.js";import"./debounce-BuHDhe6S.js";import"./useOsdkClient-BBbCJZXc.js";import"./index-_KqllXCA.js";import"./Input-Cl-jE7Eu.js";import"./useBaseUiId-jPX4s7al.js";import"./useControlled-BvxP1vnA.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./PopoverPopup--8y4HuFf.js";import"./InternalBackdrop-BxtymM3X.js";import"./composite-Be6SAy6p.js";import"./index-CQPVNm9V.js";import"./getDisabledMountTransitionStyles-DRdQhkzq.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./tick-jLPbNGml.js";import"./svgIconContainer-D-LkokGt.js";import"./small-cross-Cxklwva_.js";import"./search-CvJrksrv.js";import"./cross-Byw5v4Q_.js";import"./useValueChanged-HwxNHl9M.js";import"./getPseudoElementBounds-DHlxXCHC.js";import"./CompositeItem-CdsaUFys.js";import"./makeExternalStore-BnEyfyYD.js";import"./BaseForm-DLY_jbiE.js";import"./ActionButton-DAdOrkYi.js";import"./Button-CT84oTMh.js";import"./SkeletonBar-Eqz4moCH.js";import"./Tooltip-KIWE0Mve.js";import"./info-sign-cEQac5cj.js";import"./chevron-up-CIG-gUzX.js";import"./chevron-down-zDaWrCdE.js";import"./useEventCallback-BdnTh0Kq.js";import"./iconLoader-DnGCQSUb.js";import"./Switch-CJtrB88v.js";import"./CompositeRoot-BTdYvgkq.js";import"./TimePicker-BrlHKWIx.js";import"./CollapsiblePanel-DC1OaWK6.js";import"./error-CIT7Z9G8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-e_OoMjHx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
