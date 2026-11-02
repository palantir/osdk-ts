import{j as t,g as n}from"./iframe-BCqrjcZp.js";import{A as r}from"./action-form-BpXYGaeU.js";import"./preload-helper-IP6Q7Lp8.js";import"./DropdownField-DR9iVX7L.js";import"./debounce-KOiwrhH1.js";import"./useOsdkClient-DPRWmwVD.js";import"./index-D0jlJMeY.js";import"./Input-CuKouNDL.js";import"./useBaseUiId-BHV9sQZt.js";import"./useControlled-Bzb-P5Sw.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./PopoverPopup-lQJBNDjd.js";import"./InternalBackdrop-CTTwd3gc.js";import"./composite-D7-rpd9b.js";import"./index-DXLbvv5i.js";import"./getDisabledMountTransitionStyles-fk6vko0H.js";import"./ToolbarRootContext-gONCPNww.js";import"./tick-Mmlb1_fs.js";import"./svgIconContainer-DwsnB4Bh.js";import"./small-cross-uBxq7RBA.js";import"./search-uqqKBKCA.js";import"./cross-B5B9w1fn.js";import"./useValueChanged-Xw3hkMdy.js";import"./getPseudoElementBounds-BFSuywVY.js";import"./CompositeItem-CI0_kgLB.js";import"./makeExternalStore-IQ_ZHFEU.js";import"./BaseForm-BKwrEoU5.js";import"./ActionButton-BeKm1dws.js";import"./Button-u7PTjF0v.js";import"./SkeletonBar-DCUOzX1s.js";import"./Tooltip-BZ1-8qFM.js";import"./info-sign-ClBeCyWj.js";import"./chevron-up-CDPM_Mi7.js";import"./chevron-down-ClwDZxr-.js";import"./useEventCallback-CVpAOZ4R.js";import"./iconLoader-DYOJ6p3W.js";import"./Switch-CnkNBTGM.js";import"./CompositeRoot-PCvE1_W2.js";import"./TimePicker-Tik4OEVN.js";import"./CollapsiblePanel-jE2vmdzP.js";import"./error--BdktMRw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5LHIkEx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
