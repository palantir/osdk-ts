import{j as t,g as n}from"./iframe-BRcpmwFv.js";import{A as r}from"./action-form-DWSv1ZRt.js";import"./preload-helper-B5eDbs3J.js";import"./DropdownField-66rMfkM0.js";import"./debounce-DDQyBRU1.js";import"./useOsdkClient-BUSM7w3V.js";import"./index-DK3oZ2G7.js";import"./Input-DcIPWMXq.js";import"./useBaseUiId-BZpEg0W8.js";import"./useControlled-DbOKjk83.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./PopoverPopup-Dh05gS4y.js";import"./InternalBackdrop-Bi_i6Gge.js";import"./composite-BLjliQ-J.js";import"./index-BlWG8r-Q.js";import"./getDisabledMountTransitionStyles-D1N43ayV.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./tick-DxXZI3bo.js";import"./svgIconContainer-BHIG5g_O.js";import"./small-cross-DBM2r0BS.js";import"./search-DB_eRkJ7.js";import"./cross-C_YRX_a7.js";import"./useValueChanged-DKSrxV4L.js";import"./getPseudoElementBounds-C96XcGvW.js";import"./CompositeItem-BjOjS-vj.js";import"./makeExternalStore-CZ91arQK.js";import"./BaseForm-Fz6JWCeM.js";import"./ActionButton-BnrjjFOh.js";import"./Button-D8AxOjNK.js";import"./SkeletonBar-CwZnLaIO.js";import"./Tooltip-ZcVO_NEa.js";import"./info-sign-Clt2eY9S.js";import"./chevron-up-C07MusWk.js";import"./chevron-down-l6tBIHM5.js";import"./useEventCallback-f3FFz_4C.js";import"./iconLoader-DDwPKm75.js";import"./Switch-DBtctA06.js";import"./CompositeRoot-CTz8OuYl.js";import"./TimePicker-DNHY89cz.js";import"./CollapsiblePanel-BYDCF-xy.js";import"./error-b3Z30HbN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dwn_FNSW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
