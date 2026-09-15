import{j as t,g as n}from"./iframe-DA9dclNV.js";import{A as r}from"./action-form-DOVH72cx.js";import"./preload-helper-Bx64lG7g.js";import"./DropdownField-97vatCOJ.js";import"./debounce-WmNVgQD9.js";import"./useOsdkClient-pjJiOzt2.js";import"./index-kn43Hsx3.js";import"./Input-xbm-V7-x.js";import"./useBaseUiId-_qFsZVnk.js";import"./useControlled-DOm30eCY.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./PopoverPopup-BbeJMqJB.js";import"./InternalBackdrop-DvR7fsn8.js";import"./composite-CayJIHWq.js";import"./index-CzHCOOLi.js";import"./getDisabledMountTransitionStyles-BijzmGMm.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./tick-DZkClMaT.js";import"./svgIconContainer-CdmY4bEV.js";import"./small-cross-1vdYgDXh.js";import"./search-CsCC8gU7.js";import"./cross-Db3CMctj.js";import"./useValueChanged-ByrE0fn3.js";import"./getPseudoElementBounds-CnYd-v8a.js";import"./CompositeItem-21cMzz5_.js";import"./makeExternalStore-BYx66Bfu.js";import"./BaseForm-CECbDR9s.js";import"./ActionButton-aOr6P1Sc.js";import"./Button-6VSTuqQC.js";import"./SkeletonBar-BkicTxkg.js";import"./Tooltip-Kcrn1yWM.js";import"./info-sign-DUfq2dz9.js";import"./chevron-up-B_EGX8fz.js";import"./chevron-down-DC0K_Daw.js";import"./useEventCallback-DI6z4bpK.js";import"./iconLoader-D03_Zvaq.js";import"./CompositeRoot-BFBFdgV-.js";import"./Switch-DwE2cWv9.js";import"./TimePicker-DEU_mXCy.js";import"./CollapsiblePanel-CQ1HbAul.js";import"./error-DHS0vKCT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BeJRVpQP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
