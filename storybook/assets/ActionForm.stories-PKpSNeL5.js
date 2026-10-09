import{j as t,g as n}from"./iframe-C6yB_OA9.js";import{A as r}from"./action-form-ClT7QXB-.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-3xa1gpQG.js";import"./debounce-B5XLReag.js";import"./useOsdkClient-CUdML_iS.js";import"./index-CYHovncI.js";import"./Input-Cq3PGtjU.js";import"./useBaseUiId-rM_6hxp0.js";import"./useControlled-De9a2DUs.js";import"./index-CrGhjRoP.js";import"./index-CtIX1NAw.js";import"./PopoverPopup-78FD9gys.js";import"./InternalBackdrop-DtqyQDxL.js";import"./composite-pSUWUpBY.js";import"./index-BGZVb3vI.js";import"./getDisabledMountTransitionStyles-CjvM7Kt-.js";import"./ToolbarRootContext-l_NHV493.js";import"./tick-DGvKhXVA.js";import"./svgIconContainer-BHMXavE6.js";import"./small-cross-BeJfHwu2.js";import"./search-Cs6gheVK.js";import"./cross-CGEn_f8Q.js";import"./useValueChanged-DgXpI1nC.js";import"./getPseudoElementBounds-BxFMQaGu.js";import"./CompositeItem-BhFX388v.js";import"./makeExternalStore-BcRZCs8p.js";import"./BaseForm-B8EYwt1i.js";import"./ActionButton-Otj0HFao.js";import"./Button-fD8qjLcS.js";import"./SkeletonBar-Crhiib3I.js";import"./Tooltip-BZBvUMD1.js";import"./info-sign-CL-ePnqk.js";import"./chevron-up-CS1XVqDu.js";import"./chevron-down-DYrrqtdW.js";import"./useEventCallback-CB_wvjSH.js";import"./iconLoader-CiUEis1P.js";import"./Switch-BytfwJki.js";import"./CompositeRoot-BFdfrHiw.js";import"./TimePicker-Cyu_tk9r.js";import"./CollapsiblePanel-Dq0dYvbH.js";import"./error-DvPL7YDk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CC4rYMg2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
