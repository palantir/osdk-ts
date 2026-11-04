import{j as t,g as n}from"./iframe-DiEwqi1M.js";import{A as r}from"./action-form-7Ugo3Txu.js";import"./preload-helper-ClSjrKqp.js";import"./DropdownField-AFS21FgE.js";import"./debounce-7cRIuX0l.js";import"./useOsdkClient-BaTJ5QdO.js";import"./index-C5HZMqqF.js";import"./Input-DNKlbqfx.js";import"./useBaseUiId-BzjC-o1k.js";import"./useControlled-BF2DtUKW.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./PopoverPopup-ByyKD9PW.js";import"./InternalBackdrop-DxnLPPQZ.js";import"./composite-DPWnr1eN.js";import"./index-CSzmMYde.js";import"./getDisabledMountTransitionStyles-BCI44SNh.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./tick-DyH69Fpo.js";import"./svgIconContainer-DEpavXsM.js";import"./small-cross-BDLukEIX.js";import"./search-rt5xI3z4.js";import"./cross-CTKZHD3L.js";import"./useValueChanged-CNrcq4Bg.js";import"./getPseudoElementBounds-Jk7AP9A0.js";import"./CompositeItem-DTryuWNv.js";import"./makeExternalStore-QP4ecZbg.js";import"./BaseForm-n547NHs4.js";import"./ActionButton-CcZqKb4G.js";import"./Button-C4dfwxaK.js";import"./SkeletonBar-7gs1ucKw.js";import"./Tooltip-UrBb9NBS.js";import"./info-sign-CmlWs1zs.js";import"./chevron-up-C7lXuzkr.js";import"./chevron-down-D04sNIFr.js";import"./useEventCallback-B63epV8V.js";import"./iconLoader-D-SAW3oZ.js";import"./Switch-C75mEXoy.js";import"./CompositeRoot-BQDYDRc8.js";import"./TimePicker-C07mZmT6.js";import"./CollapsiblePanel-6U2IaLzh.js";import"./error-CTX_J0NI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CwH_Tict.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
