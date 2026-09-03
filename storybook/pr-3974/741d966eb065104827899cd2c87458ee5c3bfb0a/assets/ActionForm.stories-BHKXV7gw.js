import{j as t,g as n}from"./iframe-B_oy6e6M.js";import{A as r}from"./action-form-8ghCao_2.js";import"./preload-helper-CWVJ8YRK.js";import"./DropdownField--s7bes0M.js";import"./debounce-ZroeBVII.js";import"./useOsdkClient-Dux18aMq.js";import"./index-DZJD6sDp.js";import"./Input-DTC7T4Cz.js";import"./useBaseUiId-POvatS82.js";import"./useControlled-zA33IEOZ.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./PopoverPopup-a2ucjmTV.js";import"./InternalBackdrop-Dp2uHLRa.js";import"./composite-ZAoedBeg.js";import"./index-D-0Q_ZIA.js";import"./getDisabledMountTransitionStyles-x7AHHcyr.js";import"./ToolbarRootContext-DJgLJnil.js";import"./tick-BcOBtFgu.js";import"./svgIconContainer-C6P8MOfd.js";import"./small-cross-QUZC1axO.js";import"./search-DCED0BUt.js";import"./cross-DSgNe7Mr.js";import"./useValueChanged-mZg_qe7l.js";import"./getPseudoElementBounds-DZ3pLnsf.js";import"./CompositeItem-C4ZzMkp4.js";import"./makeExternalStore-A3uWrp0V.js";import"./BaseForm-B2sKvMtc.js";import"./ActionButton-CH9G9AI1.js";import"./Button-CrOvgvfA.js";import"./SkeletonBar-D6M-u8eM.js";import"./Tooltip-DbdokS7N.js";import"./info-sign-fpuZ8o_6.js";import"./chevron-up-B_wJHEMW.js";import"./chevron-down-rpYvjBzs.js";import"./useEventCallback-DYFfeE7x.js";import"./iconLoader-B6CMyue7.js";import"./CompositeRoot-CZtVj5nO.js";import"./Switch-DeZD4pru.js";import"./TimePicker-U7SAsHt0.js";import"./CollapsiblePanel-YftoqHFR.js";import"./error-BNXYH_2v.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C137OdQw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
