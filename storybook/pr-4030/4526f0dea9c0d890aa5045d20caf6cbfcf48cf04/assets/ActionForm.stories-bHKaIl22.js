import{j as t,g as n}from"./iframe-BDNIqcwM.js";import{A as r}from"./action-form-BHchTkGA.js";import"./preload-helper-AKgPBeH6.js";import"./DropdownField-BiIjaXyg.js";import"./debounce-C30szGMw.js";import"./useOsdkClient-bCCWw78J.js";import"./index-CxoqJ8Ca.js";import"./Input-CGsPuuzg.js";import"./useBaseUiId-D6uxKhCZ.js";import"./useControlled-jo7j2Y8W.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./PopoverPopup-C_vvYsh3.js";import"./InternalBackdrop-DHNCq7so.js";import"./composite-CjQ-M14e.js";import"./index-6Oer6Qui.js";import"./getDisabledMountTransitionStyles-DFR4pKCD.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./tick-C99eCLyr.js";import"./svgIconContainer-YSUGMhqY.js";import"./small-cross-ZYK0SGzG.js";import"./search-B7vNZRvA.js";import"./cross-DSoUlEls.js";import"./useValueChanged-C0sUDO03.js";import"./getPseudoElementBounds-BLuItyL9.js";import"./CompositeItem-9re6AgtS.js";import"./makeExternalStore-qbxX8lsc.js";import"./BaseForm-ufwfV1cY.js";import"./ActionButton-hlvEU7PC.js";import"./Button-DAHfEEi6.js";import"./SkeletonBar-4B0Vdclq.js";import"./Tooltip-CXp93mpB.js";import"./info-sign-BpC2jtmF.js";import"./chevron-up-BtnFHI9a.js";import"./chevron-down-B8PeAqOW.js";import"./useEventCallback-C8nnE3Sq.js";import"./iconLoader-DEnZbtbw.js";import"./CompositeRoot-CWUeN4IQ.js";import"./Switch-DJpk60hT.js";import"./TimePicker-BdHR7DCh.js";import"./CollapsiblePanel-CmEgATYW.js";import"./error-CizQVsJR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DbOReG2B.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
