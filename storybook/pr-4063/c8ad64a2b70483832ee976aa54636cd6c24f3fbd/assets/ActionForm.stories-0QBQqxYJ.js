import{j as t,g as n}from"./iframe-BMrwWMZ2.js";import{A as r}from"./action-form-Cu77vCh-.js";import"./preload-helper-DoFjuVNT.js";import"./DropdownField-Bk7MJDj2.js";import"./debounce-CcyW07a2.js";import"./useOsdkClient-DG-loGVw.js";import"./index-B-70XFhu.js";import"./Input-BMTygJUG.js";import"./useBaseUiId-CWfKm3xo.js";import"./useControlled-D483ZYKr.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./PopoverPopup-Cs8tAGg3.js";import"./InternalBackdrop-DBtObWvw.js";import"./composite-BaT2Rrgm.js";import"./index-BRQVA_3N.js";import"./getDisabledMountTransitionStyles-XH-VCXpg.js";import"./ToolbarRootContext-yILvKIp4.js";import"./tick-B5oTJlX2.js";import"./svgIconContainer-kz6kEcEQ.js";import"./small-cross-BrwfsXlZ.js";import"./search-BhHSPRHE.js";import"./cross-xNU9IbBp.js";import"./useValueChanged-BW2KTtVu.js";import"./getPseudoElementBounds-Bfv7yUkE.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./makeExternalStore-CVWgtyr5.js";import"./BaseForm-xYqgWmH1.js";import"./ActionButton-eMUnEcf2.js";import"./Button-WcPNJQ9X.js";import"./SkeletonBar-C0kfolP9.js";import"./Tooltip-DglXCpHI.js";import"./info-sign-DWk6sYJf.js";import"./chevron-up-wg8bUuDi.js";import"./chevron-down-Cm6BVMO0.js";import"./useEventCallback-BSd1E5Q2.js";import"./iconLoader-CbxTcMQf.js";import"./Switch-FCmmfML3.js";import"./CompositeRoot-8skUI5uI.js";import"./TimePicker-FwZGbzER.js";import"./CollapsiblePanel-oxSGc6n5.js";import"./error-ZGBsqwOl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-fvKzM9Fz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
