import{j as t,g as n}from"./iframe-DTvoIH2r.js";import{A as r}from"./action-form-BE9MFHUD.js";import"./preload-helper-Bl5BDaS_.js";import"./DropdownField-_nnCiIcu.js";import"./debounce-Kfo2TjOI.js";import"./useOsdkClient-DgEbhQnl.js";import"./index-Cm5sGWxJ.js";import"./Input-C-tth6vb.js";import"./useBaseUiId-DFuLIzAR.js";import"./useControlled-0uh_9m14.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./PopoverPopup-BTvzJrlx.js";import"./InternalBackdrop-BtTRXxuq.js";import"./composite-u0e-F1rW.js";import"./index-BJuMumhG.js";import"./getDisabledMountTransitionStyles-jYzEuXLs.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./tick-xV1uMXxC.js";import"./svgIconContainer-TNOoFETa.js";import"./small-cross-b1Gc4au3.js";import"./search-CkOB4LMx.js";import"./cross-dEikKBUB.js";import"./useValueChanged-C0F3L9Dh.js";import"./getPseudoElementBounds-DP6PNIaO.js";import"./CompositeItem-OtQFnxkB.js";import"./makeExternalStore-B3yQfg4Y.js";import"./BaseForm-BX-toeIZ.js";import"./ActionButton-DvyFEALd.js";import"./Button-Eyz2dERQ.js";import"./SkeletonBar-B_QvOAKR.js";import"./Tooltip-D8UVCGwD.js";import"./info-sign-B5T2gQu4.js";import"./chevron-up-Bhsls9ly.js";import"./chevron-down-Kc2WAjaE.js";import"./useEventCallback-ClE8dN3c.js";import"./iconLoader-BVwwsglv.js";import"./Switch-BqbqHvc3.js";import"./CompositeRoot-C_JqeGsa.js";import"./TimePicker-VsY_M2Uu.js";import"./CollapsiblePanel-CmQJ5gXg.js";import"./error-CAqUL9Mb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iCsj3SqR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
