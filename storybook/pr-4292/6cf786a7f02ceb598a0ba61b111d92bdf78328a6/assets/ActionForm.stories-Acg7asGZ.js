import{j as t,g as n}from"./iframe-yzha5v0q.js";import{A as r}from"./action-form-gKrOGykR.js";import"./preload-helper-D-8FAAW5.js";import"./DropdownField-Dw87S1et.js";import"./debounce-X5gf-7Uy.js";import"./useOsdkClient-Bxqh4Bcm.js";import"./index-60EGa8qT.js";import"./Input-EyuyzT2W.js";import"./useBaseUiId-BbIMkHOG.js";import"./useControlled-D0bVi2TG.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./PopoverPopup-C3DSbH4l.js";import"./InternalBackdrop-Tn-t9TYq.js";import"./composite-BDH9_dFX.js";import"./index-C1kDTagr.js";import"./getDisabledMountTransitionStyles-IE49pSF5.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./tick-DY8FjhzJ.js";import"./svgIconContainer-C44iOk89.js";import"./small-cross-Cm5dK0ec.js";import"./search-gm56Xs7t.js";import"./cross-BlwLOBUQ.js";import"./useValueChanged-B6X9c3a_.js";import"./getPseudoElementBounds-DPNIWnqr.js";import"./CompositeItem-ha9gBhOi.js";import"./makeExternalStore-DbXaKl2K.js";import"./BaseForm-DCWIppK_.js";import"./ActionButton-DTkeL8Lj.js";import"./Button-BiUOfKuO.js";import"./SkeletonBar-aZ1R4mdC.js";import"./Tooltip-DPFg4mPg.js";import"./info-sign-DbStR5S8.js";import"./chevron-up-CKX1qmzh.js";import"./chevron-down-DLVlSQ8P.js";import"./useEventCallback-DsjWVVDr.js";import"./iconLoader-jodaKSos.js";import"./Switch-BJlP82CC.js";import"./CompositeRoot-BTH8FPsW.js";import"./TimePicker-BBmpIrcQ.js";import"./CollapsiblePanel-DOlyQkQE.js";import"./error-B0YQBao9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DqbCp-LC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
