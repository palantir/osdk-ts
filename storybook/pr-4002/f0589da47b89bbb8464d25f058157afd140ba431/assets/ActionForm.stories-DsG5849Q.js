import{j as t,g as n}from"./iframe-CM-gF3vE.js";import{A as r}from"./action-form-LOVSf3P9.js";import"./preload-helper-6RfIl02U.js";import"./DropdownField-DO17CDFv.js";import"./debounce-BZ1j8w7d.js";import"./useOsdkClient-BXUVBGsy.js";import"./index-DP8egC0k.js";import"./Input-DqavlJne.js";import"./useBaseUiId-CaS2-N7q.js";import"./useControlled-BG8DwFhU.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./PopoverPopup-Bq82sjKK.js";import"./InternalBackdrop-BWQN2r6E.js";import"./composite-Cf4jE4TY.js";import"./index-JlgGEqsp.js";import"./getDisabledMountTransitionStyles-CA_1r-E1.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./tick-Cz70wbcO.js";import"./svgIconContainer-PHQsggTT.js";import"./small-cross-BR7O7PTe.js";import"./search-BtBkQ6yC.js";import"./cross-YK-JeFcC.js";import"./useValueChanged-CM10G8md.js";import"./getPseudoElementBounds-du8OB8QR.js";import"./CompositeItem-D8NXSqvh.js";import"./makeExternalStore-BT0R62z7.js";import"./BaseForm-qZi5FGkQ.js";import"./ActionButton-ESMROX5N.js";import"./Button-BzK-RFmN.js";import"./SkeletonBar-BEl30Own.js";import"./Tooltip-Bwp1W_ff.js";import"./info-sign-kaT35AbO.js";import"./chevron-up-DEDIQR-O.js";import"./chevron-down-w3gTlyQy.js";import"./useEventCallback-DWaD4meR.js";import"./iconLoader-1ApeYSen.js";import"./CompositeRoot-Dsr36EnY.js";import"./Switch-CtrCyqqO.js";import"./TimePicker-BF9b48JR.js";import"./CollapsiblePanel-CMWBQRO_.js";import"./error-2hF2x4c1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CARAYaYa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
