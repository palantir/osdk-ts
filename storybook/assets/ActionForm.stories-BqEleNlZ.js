import{j as t,g as n}from"./iframe-DSHto0DU.js";import{A as r}from"./action-form-CYqD7IRE.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Cf3uBb5H.js";import"./debounce-CbpWBqbr.js";import"./useOsdkClient-SmfWaa1T.js";import"./index-DgEgOLFM.js";import"./Input-KYVV9ro4.js";import"./useBaseUiId-C-ni1EUd.js";import"./useControlled-vcfVgJyd.js";import"./index-Dsj4AUeZ.js";import"./index-Da1D6qV_.js";import"./PopoverPopup-mckkiFEE.js";import"./InternalBackdrop-BPZt_MJA.js";import"./composite-CGWcZn8w.js";import"./index-Cg05C7Um.js";import"./getDisabledMountTransitionStyles-CN3s_Czu.js";import"./ToolbarRootContext-CSFHIoxQ.js";import"./tick-IfmUtKPy.js";import"./svgIconContainer-D1SJmbot.js";import"./small-cross-CDGKQKRZ.js";import"./search-BdBx2XvV.js";import"./cross-FFwPOx1g.js";import"./useValueChanged-P73U_JNR.js";import"./getPseudoElementBounds-C1cvZaeh.js";import"./CompositeItem-vxVvcXOU.js";import"./makeExternalStore--ixwTB0S.js";import"./BaseForm-CkiAKbGD.js";import"./ActionButton-D1Tmn4nA.js";import"./Button-3LMPugrf.js";import"./SkeletonBar-_7teksHk.js";import"./Tooltip-B6O1k0wv.js";import"./info-sign-B7YyDx9R.js";import"./chevron-up-gtGCZXyv.js";import"./chevron-down-DEDDGssX.js";import"./useEventCallback-DGorVKay.js";import"./iconLoader-CWV1JfzA.js";import"./CompositeRoot-50pCyPM4.js";import"./Switch-CYL20vuV.js";import"./TimePicker-D12Z7bPJ.js";import"./CollapsiblePanel-Br5gvUV_.js";import"./error-DjYRJjuj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVxbOnBr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
