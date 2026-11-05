import{j as t,g as n}from"./iframe-BTvYIEq8.js";import{A as r}from"./action-form-CnlnwuHz.js";import"./preload-helper-CFYdII7P.js";import"./DropdownField-NUB4RBhJ.js";import"./debounce-C9YzblTl.js";import"./useOsdkClient-Dy5Kdk0b.js";import"./index-Beef_kHp.js";import"./Input-WD0q61A7.js";import"./useBaseUiId-DVwPqKHc.js";import"./useControlled-CpfYcIbT.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./PopoverPopup-CtLtSFsG.js";import"./InternalBackdrop-BI_MJr4_.js";import"./composite-UnbXp0a2.js";import"./index-CANSaJTu.js";import"./getDisabledMountTransitionStyles-BbQWw9EP.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./tick-DqlQ5rnC.js";import"./svgIconContainer-CDJ2X3CN.js";import"./small-cross-CqhWne9-.js";import"./search-Dy8Cjq17.js";import"./cross-sKht6Kec.js";import"./useValueChanged-DAMkXmw8.js";import"./getPseudoElementBounds-BDf86miM.js";import"./CompositeItem-nLfGi46c.js";import"./makeExternalStore-B8YeuVYn.js";import"./BaseForm-eI2C4bWz.js";import"./ActionButton-DfZ4bMP2.js";import"./Button-EZBekNYG.js";import"./SkeletonBar-iK4bBXD5.js";import"./Tooltip-B1Fhyptq.js";import"./info-sign-C0INVtBo.js";import"./chevron-up-B6CDvaW8.js";import"./chevron-down-Bkejrg-1.js";import"./useEventCallback-CwXh44fh.js";import"./iconLoader-LDiE2P2W.js";import"./Switch-BbWnU671.js";import"./CompositeRoot-Dv6uAAoY.js";import"./TimePicker-BpT_DvvO.js";import"./CollapsiblePanel-DcdCTuB_.js";import"./error-ByI-eSLJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCNSh7gL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
