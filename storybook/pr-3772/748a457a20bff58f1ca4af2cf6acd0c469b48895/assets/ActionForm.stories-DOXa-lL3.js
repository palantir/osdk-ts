import{j as t,g as n}from"./iframe-CY1bley7.js";import{A as r}from"./action-form-B9sMJxmP.js";import"./preload-helper-D3osyoeZ.js";import"./DropdownField-BaFSMd8X.js";import"./debounce-DWtsOSeV.js";import"./useOsdkClient-hIZdaTDT.js";import"./index-rh2lseoR.js";import"./Input-DEo9NwDI.js";import"./useBaseUiId-DVcIvI44.js";import"./useControlled-fFwZP0Ap.js";import"./index-Bn4JMmGr.js";import"./index-gS5-xXe0.js";import"./PopoverPopup-CFM-iRBs.js";import"./InternalBackdrop-XcwLG7Wl.js";import"./composite-CiwpWFDy.js";import"./index-Cql1DwPR.js";import"./getDisabledMountTransitionStyles-yZsKNqSB.js";import"./ToolbarRootContext-rjSxP1dE.js";import"./tick-fClSJcEW.js";import"./svgIconContainer-CzZrnJM2.js";import"./small-cross-C-dRKbNY.js";import"./search-146DDh_k.js";import"./cross-cJ3Efo1g.js";import"./useValueChanged-L5FNnMzO.js";import"./getPseudoElementBounds-FXB-giXH.js";import"./CompositeItem-BpiTOIyl.js";import"./makeExternalStore-Hj73T8jD.js";import"./BaseForm-Bj4BCIna.js";import"./ActionButton-DZcKNYBj.js";import"./Button-B5JcIIcB.js";import"./SkeletonBar-DwIeclcD.js";import"./Tooltip-CKa7DR8P.js";import"./info-sign-CMde3MNT.js";import"./chevron-up-B-kb44Hy.js";import"./chevron-down-BiDqtejG.js";import"./useEventCallback-0BkCCq-P.js";import"./iconLoader-LlH2WJMz.js";import"./Switch-DI3zwsWI.js";import"./CompositeRoot-HV9BrKro.js";import"./TimePicker-BKKjhp1a.js";import"./CollapsiblePanel-DpxhAw9o.js";import"./error-B6HE4awo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Y9b7QhtM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
