import{j as t,g as n}from"./iframe-D1j4WqtX.js";import{A as r}from"./action-form-B7k9wR3C.js";import"./preload-helper-CIO_iRSv.js";import"./DropdownField-CtIEk2rp.js";import"./debounce-7OJ_vS6c.js";import"./useOsdkClient-DKIRHYjG.js";import"./index-CF3Sq86v.js";import"./Input-aBbimhzA.js";import"./useBaseUiId-CvpmnQHF.js";import"./useControlled-Dvj50PQH.js";import"./index-BVTY6Q3I.js";import"./index-CMSKaHd2.js";import"./PopoverPopup-DhqCBiK0.js";import"./InternalBackdrop-BgpNPtgI.js";import"./composite-BY3OkPXB.js";import"./index-DEbP6mAZ.js";import"./getDisabledMountTransitionStyles-D8w4jYHi.js";import"./ToolbarRootContext-Bggxr9N9.js";import"./tick-CpAUDOtg.js";import"./svgIconContainer-DQLh4QVM.js";import"./small-cross-4Og_SUqy.js";import"./search-Ci42lqAV.js";import"./cross-Bu-eP3kR.js";import"./useValueChanged-B-1W8pQZ.js";import"./getPseudoElementBounds-BvCK0FHD.js";import"./CompositeItem-BjdsKKJr.js";import"./makeExternalStore-CpT-N4RM.js";import"./BaseForm-BTNLF05O.js";import"./ActionButton-DK01lYjB.js";import"./Button-DfvOvfvD.js";import"./SkeletonBar-goStr7xk.js";import"./Tooltip-sztRiYUo.js";import"./info-sign-BzzS_9kE.js";import"./chevron-up-jmetNAh2.js";import"./chevron-down-9_oXjY5S.js";import"./useEventCallback-BMLswSq8.js";import"./iconLoader-BFvo2XC4.js";import"./Switch-Rk_r6Pg3.js";import"./CompositeRoot-CdwMZIiK.js";import"./TimePicker-N7AKiWCG.js";import"./CollapsiblePanel-CU0iKWn6.js";import"./error-CSigbrmD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-9ebMCx2K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
