import{j as t,g as n}from"./iframe-DkzbgSAD.js";import{A as r}from"./action-form-CmX-DX13.js";import"./preload-helper-BiwIe667.js";import"./DropdownField-mY-AIqk3.js";import"./debounce-DuGr5rYC.js";import"./useOsdkClient-BN4CbGuS.js";import"./index-DjIOOe4t.js";import"./Input-CAjIPIjE.js";import"./useBaseUiId-CdNYBUR5.js";import"./useControlled-C8Dvxw0_.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./PopoverPopup-jjunJ9hJ.js";import"./InternalBackdrop-CaeoLXWh.js";import"./composite-CynzhD0V.js";import"./index-MiufCKVv.js";import"./getDisabledMountTransitionStyles-BKGL4WDU.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./tick-BvW-N913.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./small-cross-D9-XIEQD.js";import"./search-DVRH7Lct.js";import"./cross-Cd4Ezf-o.js";import"./useValueChanged-DbcB2lMI.js";import"./getPseudoElementBounds-CuBbtjn1.js";import"./CompositeItem-B0TjqzOk.js";import"./makeExternalStore-CBYxH43f.js";import"./BaseForm-lAdeFIWc.js";import"./ActionButton-CX4x4__7.js";import"./Button-BHYsrTUy.js";import"./SkeletonBar-DLuntpKM.js";import"./Tooltip-4k1X8Kbh.js";import"./info-sign-DY1wqq41.js";import"./chevron-up-C9YSxQqF.js";import"./chevron-down-D4koVRNt.js";import"./useEventCallback-Dvazelct.js";import"./iconLoader-Hd_2hvg6.js";import"./CompositeRoot-Cd6zKnLT.js";import"./Switch-CKDMNlf-.js";import"./TimePicker-BRN1Cj4b.js";import"./CollapsiblePanel-lk9wXXL6.js";import"./error-CAfn1z7w.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BhSP4CDN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
