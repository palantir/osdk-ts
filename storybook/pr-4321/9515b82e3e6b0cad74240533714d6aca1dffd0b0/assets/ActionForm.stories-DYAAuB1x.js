import{j as t,g as n}from"./iframe-D7hanWlH.js";import{A as r}from"./action-form-DFxv6DFx.js";import"./preload-helper-CO6dxj1b.js";import"./DropdownField-D4ARGNHY.js";import"./debounce-mHKnM1xi.js";import"./useOsdkClient-BSYzdils.js";import"./index-D-fAM26k.js";import"./Input-Cdf8UtKg.js";import"./useBaseUiId-Bu7z_xTH.js";import"./useControlled-i2ARdjw-.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./isObject-Ch3YWkBe.js";import"./InternalBackdrop-BFQj_iFn.js";import"./composite-D9lkXcst.js";import"./index-IdV4lxqA.js";import"./getDisabledMountTransitionStyles-DWFqeBfp.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./tick-CdQvoyle.js";import"./svgIconContainer-DvWstcAL.js";import"./small-cross-B6GvYH7n.js";import"./search-DSRtq581.js";import"./cross-Y5gvP3Fl.js";import"./useValueChanged-oGOkIYmK.js";import"./getPseudoElementBounds-DqLcKxx9.js";import"./CompositeItem-tDOcOAJb.js";import"./makeExternalStore-UI8ZJEmg.js";import"./BaseForm-DjNpCmgT.js";import"./ActionButton-C66CjuoN.js";import"./Button-BnMNzQq6.js";import"./SkeletonBar-DmFGXpbg.js";import"./Tooltip-Bb8Pjuc6.js";import"./info-sign-DRqMhEf4.js";import"./chevron-up-D-MXJorO.js";import"./chevron-down-Cjgkim-K.js";import"./useEventCallback-BbTn_ynB.js";import"./iconLoader-BDqZShSg.js";import"./Switch-CqEzaUDd.js";import"./CompositeRoot-QObKR3Zx.js";import"./TimePicker-DX8Vpfyy.js";import"./CollapsiblePanel-pB8a9YNp.js";import"./error-CzhlMkp_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BemcFffG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
