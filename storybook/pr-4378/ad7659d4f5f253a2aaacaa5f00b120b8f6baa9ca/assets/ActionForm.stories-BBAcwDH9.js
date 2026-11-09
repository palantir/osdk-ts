import{j as t,g as n}from"./iframe-BGt7IhdS.js";import{A as r}from"./action-form-DU0f_rQC.js";import"./preload-helper-DUkvm5oM.js";import"./DropdownField-DLrwqyVG.js";import"./debounce-B-wJIF06.js";import"./useOsdkClient-BcDStKp7.js";import"./index-gkzrPHGR.js";import"./Input-BDhQTr7d.js";import"./useBaseUiId-Dcw5wc3b.js";import"./useControlled-BgB3rMOH.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./isObject-Ce9k2qqC.js";import"./InternalBackdrop-S55VIO1-.js";import"./composite-CtTlfVza.js";import"./index-CNVam7GG.js";import"./getDisabledMountTransitionStyles-B653rn17.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./tick-BMa_7DrH.js";import"./svgIconContainer-Bf5Aovc1.js";import"./small-cross-D5oEM4rj.js";import"./search-B8wvEhc-.js";import"./cross-Cb9gWeTe.js";import"./useValueChanged-CBLz-uPE.js";import"./getPseudoElementBounds-C4Cn99UK.js";import"./CompositeItem-VInoCAcU.js";import"./makeExternalStore-Crpu5ieT.js";import"./BaseForm-DBtwDsux.js";import"./ActionButton-BLtk1IHL.js";import"./Button-Bf0GrAaJ.js";import"./SkeletonBar-CgrFEgnf.js";import"./Tooltip-Bj8KxrzN.js";import"./info-sign-B_T6-Wva.js";import"./chevron-up-Cn1zNPCt.js";import"./chevron-down-DB4w1r6J.js";import"./useEventCallback-JNIdHdBh.js";import"./iconLoader-CnYpwK2W.js";import"./Switch-GH48JDk5.js";import"./CompositeRoot-B7PjbCYj.js";import"./TimePicker-Cx81xAum.js";import"./CollapsiblePanel-C6psZrkp.js";import"./error-5t3qELAN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEwucJks.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
