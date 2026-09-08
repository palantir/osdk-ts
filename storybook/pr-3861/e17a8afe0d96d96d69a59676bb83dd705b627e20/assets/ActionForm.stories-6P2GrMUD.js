import{j as t,g as n}from"./iframe-CMaTw6X_.js";import{A as r}from"./action-form-BpGBeTuX.js";import"./preload-helper-YUCSvBRl.js";import"./DropdownField-C8LlY8gH.js";import"./debounce-CcQQoCkT.js";import"./useOsdkClient-BWocAVB-.js";import"./index-DcwZFFHE.js";import"./Input-C22UXl1f.js";import"./useBaseUiId-BQVDaT2W.js";import"./useControlled-BhIydEad.js";import"./index-DrAoL5DS.js";import"./index-CokBQJMj.js";import"./PopoverPopup-_o2oNRLE.js";import"./InternalBackdrop-B4tVXPLL.js";import"./composite-CLM32H9h.js";import"./index-i_JEJzIT.js";import"./getDisabledMountTransitionStyles-21zR2DnY.js";import"./ToolbarRootContext-0tvyCtzm.js";import"./tick-D-4tdeUZ.js";import"./svgIconContainer-DzaaatyJ.js";import"./small-cross-D_VaN_YZ.js";import"./search-DX2tWApA.js";import"./cross-BToySQSC.js";import"./useValueChanged-DC6zsyd6.js";import"./getPseudoElementBounds-t54joTAf.js";import"./CompositeItem-BOjJ-dS3.js";import"./makeExternalStore-daS2Qovb.js";import"./BaseForm-DJPSHkej.js";import"./ActionButton-j6Ig36dP.js";import"./Button-gCGWFRxS.js";import"./SkeletonBar-y-lFwvfk.js";import"./Tooltip-B5T5Xpkt.js";import"./info-sign-DudkLCeE.js";import"./chevron-up-0_d0BXvT.js";import"./chevron-down-CiliQGq8.js";import"./useEventCallback-JAzPbeMV.js";import"./iconLoader-Cpn6N6wi.js";import"./CompositeRoot-DX7AciNN.js";import"./Switch-DyCKzmQT.js";import"./TimePicker-4RY3QywG.js";import"./CollapsiblePanel-zt3byeQH.js";import"./error-QpkULiAa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-06-Hb-DT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
