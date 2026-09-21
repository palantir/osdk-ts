import{j as t,g as n}from"./iframe-UjTNASi3.js";import{A as r}from"./action-form-l1hO219T.js";import"./preload-helper-ChUqF7Rx.js";import"./DropdownField-B-vNGTny.js";import"./debounce-C0USvgmQ.js";import"./useOsdkClient-DN28ZgTP.js";import"./index-CBLOqz9O.js";import"./Input-BLyk5LFB.js";import"./useBaseUiId-DbZZYE7u.js";import"./useControlled-C5YhSjey.js";import"./index-bodWc-gm.js";import"./index-D5cIctx_.js";import"./PopoverPopup-DfAiwejK.js";import"./InternalBackdrop-BCPpUKFw.js";import"./composite-BsaBRbEf.js";import"./index-Bzh_X7xQ.js";import"./getDisabledMountTransitionStyles-DSqUzqL9.js";import"./ToolbarRootContext-BlxyZF17.js";import"./tick-pbW1n8ts.js";import"./svgIconContainer-BnZ--aX4.js";import"./small-cross-xy7dzoIW.js";import"./search-4dG4ZP2W.js";import"./cross-BEq_sPpX.js";import"./useValueChanged-BLjWbJ6t.js";import"./getPseudoElementBounds-Dhsw8tBA.js";import"./CompositeItem-B-v9FANt.js";import"./makeExternalStore-BAIn4U_g.js";import"./BaseForm-CJIfPQcx.js";import"./ActionButton-DwiWw116.js";import"./Button-DAjQjRlz.js";import"./SkeletonBar-BPWMNsbJ.js";import"./Tooltip-D20tmfcP.js";import"./info-sign-B1NKtDcD.js";import"./chevron-up-CGTmJszk.js";import"./chevron-down-B950jIbn.js";import"./useEventCallback-FKK13t9n.js";import"./iconLoader-CA0HonSH.js";import"./Switch-BDzD2Gii.js";import"./CompositeRoot-BdPnDRlp.js";import"./TimePicker-FjFntDHH.js";import"./CollapsiblePanel-DWpVdDad.js";import"./error-K7GcRxh8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-viX3FGJl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
