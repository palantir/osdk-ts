import{j as t,g as n}from"./iframe-DtoP6UZw.js";import{A as r}from"./action-form-DAP6zZIy.js";import"./preload-helper-CFHJtsfx.js";import"./DropdownField-nkpjhsB4.js";import"./debounce-C7WOXlCO.js";import"./useOsdkClient-DBRAdTeM.js";import"./index-By2xjehZ.js";import"./Input-Cj3lDoEk.js";import"./useBaseUiId-C9myCpxn.js";import"./useControlled-CLD2ZIzN.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./PopoverPopup-T9050naI.js";import"./InternalBackdrop-DpFHb2md.js";import"./composite-ZO42S3vI.js";import"./index-qPBLNpVs.js";import"./getDisabledMountTransitionStyles-wDP_kl-U.js";import"./ToolbarRootContext-Chftn44K.js";import"./tick-ql6tnj8R.js";import"./svgIconContainer-DfGYICSx.js";import"./small-cross-CuZnJmiX.js";import"./search-BGmMu9uk.js";import"./cross-Bz8JPJRT.js";import"./useValueChanged-DuhnSJjf.js";import"./getPseudoElementBounds-DVsLrH1i.js";import"./CompositeItem-8ApCVdWW.js";import"./makeExternalStore-CFHh14tM.js";import"./BaseForm-CcCPn26u.js";import"./ActionButton-Q7OU6HgZ.js";import"./Button-MPweKG2u.js";import"./SkeletonBar-BvasMIuf.js";import"./Tooltip-D8pj6bCS.js";import"./info-sign-CKV1tYXs.js";import"./chevron-up-DuX0xyRv.js";import"./chevron-down-Cp3kMwRT.js";import"./useEventCallback-DjN8mM0o.js";import"./iconLoader-BL5DV3kE.js";import"./CompositeRoot-aZVuHxv1.js";import"./Switch-BzuOHd74.js";import"./TimePicker-DGnGuNIx.js";import"./CollapsiblePanel-Cmkp7L83.js";import"./error-BgO9vMGd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BylLLJIu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
