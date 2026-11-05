import{j as t,g as n}from"./iframe-B0O6MtlS.js";import{A as r}from"./action-form-BjPMtyuI.js";import"./preload-helper-D6pURdot.js";import"./DropdownField-CQin5nsR.js";import"./debounce-6Otf2ylt.js";import"./useOsdkClient-DiYg4DLq.js";import"./index-CWmTKLGK.js";import"./Input-C5r_FU3t.js";import"./useBaseUiId-BznU3LGS.js";import"./useControlled-Bx-6J2ID.js";import"./index-iJddnt6C.js";import"./index-D_qtusqG.js";import"./isObject-4DXF1F0N.js";import"./InternalBackdrop-BC098Jsb.js";import"./composite-BMg2yNSq.js";import"./index-DXznXhjK.js";import"./getDisabledMountTransitionStyles-reeodFI6.js";import"./ToolbarRootContext-DCOU3uiJ.js";import"./tick-BcfAOxfQ.js";import"./svgIconContainer-DXqgtHND.js";import"./small-cross-CvWDOY6F.js";import"./search-Ck63SNgv.js";import"./cross-CWEImtxT.js";import"./useValueChanged-C4aiVzbu.js";import"./getPseudoElementBounds-9i5ws3FW.js";import"./CompositeItem-BbV5-QNT.js";import"./makeExternalStore-CyQVHXN1.js";import"./BaseForm-oy6lFPTJ.js";import"./ActionButton-CX9VY3Vm.js";import"./Button-BoJolYQb.js";import"./SkeletonBar-g2uwrnoF.js";import"./Tooltip-BbpaHu5y.js";import"./info-sign-CEvxMUrI.js";import"./chevron-up-DuOAHvz8.js";import"./chevron-down-7CANPOc8.js";import"./useEventCallback-BYZGQENt.js";import"./iconLoader-CKUovYDx.js";import"./Switch-r52Gqa6N.js";import"./CompositeRoot-bjmwauj3.js";import"./TimePicker-BPQw-mBj.js";import"./CollapsiblePanel-CaYS0I-E.js";import"./error-CSV7R-eM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CPnPG3g5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
