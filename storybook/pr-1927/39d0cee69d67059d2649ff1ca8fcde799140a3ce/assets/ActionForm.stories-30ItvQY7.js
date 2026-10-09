import{j as t,g as n}from"./iframe-cBiyHty9.js";import{A as r}from"./action-form-DA4tv62F.js";import"./preload-helper-Bv3meVH3.js";import"./DropdownField-DiamDw4J.js";import"./debounce-B191BFcS.js";import"./useOsdkClient-BAx2SljP.js";import"./index-D9svWSdg.js";import"./Input-CUOeqbmp.js";import"./useBaseUiId-DvsuiOVy.js";import"./useControlled-CK1iqSKb.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./PopoverPopup-CUtWkbQa.js";import"./InternalBackdrop-CkoiXEVu.js";import"./composite-CzYA3ElD.js";import"./index-irxThoCO.js";import"./getDisabledMountTransitionStyles-CI3RAlpb.js";import"./ToolbarRootContext-C7-4unHr.js";import"./tick-VSl0kWDd.js";import"./svgIconContainer-BYeKHHBz.js";import"./small-cross-Cs_0F4xM.js";import"./search-BHdPsWbB.js";import"./cross-6ls1LaWh.js";import"./useValueChanged-BaN3_QZu.js";import"./getPseudoElementBounds-CxFqqadz.js";import"./CompositeItem-CVN4lZoj.js";import"./makeExternalStore-CGJamYgh.js";import"./BaseForm-B-2NpQuU.js";import"./ActionButton-CTzhl48y.js";import"./Button-BcVzWRXY.js";import"./SkeletonBar-CFxnwFPu.js";import"./Tooltip-CvHPMZe4.js";import"./info-sign-X1UTMW-B.js";import"./chevron-up-CMsS-JIu.js";import"./chevron-down-X8NW_OEl.js";import"./useEventCallback-DpA9bV-i.js";import"./iconLoader-DkUTo_H3.js";import"./Switch-DGhIHNcv.js";import"./CompositeRoot-DICBneCX.js";import"./TimePicker-YjELmLDG.js";import"./CollapsiblePanel-B8M_JZTW.js";import"./error-Ct0Hv0fs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CoTXzMQi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
