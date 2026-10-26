import{j as t,g as n}from"./iframe-CzgnuvEu.js";import{A as r}from"./action-form-CGfcJ4ks.js";import"./preload-helper-BOIiyEUV.js";import"./DropdownField-Bkj49_ok.js";import"./debounce-DvL0klkp.js";import"./useOsdkClient-BHaXbtia.js";import"./index-DzE9qOqD.js";import"./Input-ZYnWFBEZ.js";import"./useBaseUiId-BVmKyOEj.js";import"./useControlled-C5aZuSIZ.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./PopoverPopup-Cftbj8pR.js";import"./InternalBackdrop-DI2I7eRR.js";import"./composite-DYp9sm2c.js";import"./index-pus3Iuu0.js";import"./getDisabledMountTransitionStyles-DxBJ1NRq.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./tick-DwhgM6ss.js";import"./svgIconContainer-CqjF4WdJ.js";import"./small-cross-DSTYA1K8.js";import"./search-Cwa3Up2s.js";import"./cross-BZ8qiqH7.js";import"./useValueChanged-CqEHKFBa.js";import"./getPseudoElementBounds-Dyuhd565.js";import"./CompositeItem-D17OeXfK.js";import"./makeExternalStore-b-3Eu4Hx.js";import"./BaseForm-BsDz4-xH.js";import"./ActionButton-C6BBrtRh.js";import"./Button-NdiRMwUB.js";import"./SkeletonBar-tfdRWGle.js";import"./Tooltip-B2E5uvSu.js";import"./info-sign-CK5NRa7x.js";import"./chevron-up-MSLkKn0U.js";import"./chevron-down-CcjtSJSE.js";import"./useEventCallback-DP5etoNb.js";import"./iconLoader-B_9Sh9Et.js";import"./Switch-YvBvRgS5.js";import"./CompositeRoot-B_mZQolP.js";import"./TimePicker-DNoAul8a.js";import"./CollapsiblePanel-O0DPlNmM.js";import"./error-Dn-b8Fhc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-4RonxvLU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
