import{j as t,g as n}from"./iframe-DgffzXcd.js";import{A as r}from"./action-form-31Jrcqb9.js";import"./preload-helper-cnms5IGS.js";import"./DropdownField-FoaA7AiA.js";import"./debounce-KT7GVLZu.js";import"./useOsdkClient-DKu9s4PU.js";import"./index-BBLuu-Hq.js";import"./Input-c6SLv_Xy.js";import"./useBaseUiId-D8q2NPVv.js";import"./useControlled-BV_EXpzJ.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./PopoverPopup-YsjB_oA6.js";import"./InternalBackdrop-Bgldltbx.js";import"./composite-CF6w6iAh.js";import"./index-Cef6tpmG.js";import"./getDisabledMountTransitionStyles-Db73lXfO.js";import"./ToolbarRootContext-DEjBOujG.js";import"./tick-DXpn86OC.js";import"./svgIconContainer-Blhk3Pl5.js";import"./small-cross-BBQkhsLR.js";import"./search-CJlxOI-X.js";import"./cross-BSsj-b40.js";import"./useValueChanged-aTAAjdkj.js";import"./getPseudoElementBounds-DD-pb8mO.js";import"./CompositeItem-BH2gdPXz.js";import"./makeExternalStore-FJNApXaM.js";import"./BaseForm-Dr2GcHyD.js";import"./ActionButton-BaBnxcfR.js";import"./Button-UP0puh42.js";import"./SkeletonBar-CE1Y87-p.js";import"./Tooltip-Ddt-e1A4.js";import"./info-sign-DFmbGnr6.js";import"./chevron-up-CRoF2lK9.js";import"./chevron-down-B-BBWbod.js";import"./useEventCallback-DtRRBbn7.js";import"./iconLoader-DRwKrbpu.js";import"./Switch-ZdJGjIGf.js";import"./CompositeRoot-CEvtoOHV.js";import"./TimePicker-5sBeXGWc.js";import"./CollapsiblePanel-DXdXfeG6.js";import"./error-C62WbJ6c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMLt42BN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
