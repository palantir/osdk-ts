import{j as t,g as n}from"./iframe-Hh4e2kUx.js";import{A as r}from"./action-form-BUAHMm5k.js";import"./preload-helper-TOQk18-t.js";import"./DropdownField-DwXJ1LzE.js";import"./debounce-byZt61cr.js";import"./useOsdkClient-CewGTPBJ.js";import"./index-FPZnvji7.js";import"./Input-C0NV1hD9.js";import"./useBaseUiId-DjrC8msS.js";import"./useControlled-DdhVK8TG.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./PopoverPopup-B5EBdm0I.js";import"./InternalBackdrop-BRLz5Oo7.js";import"./composite-Cp4pW4Qp.js";import"./index-BAn8m4dN.js";import"./getDisabledMountTransitionStyles-CyyQe50a.js";import"./ToolbarRootContext-C2gF6pit.js";import"./tick-DsV0GkZM.js";import"./svgIconContainer-Cz0JOvaj.js";import"./small-cross-BOMG33o5.js";import"./search-BdChkyLR.js";import"./cross-B1QiScfw.js";import"./useValueChanged-DfM3tkSL.js";import"./getPseudoElementBounds--QWVPd6g.js";import"./CompositeItem-Cklqv3Ob.js";import"./makeExternalStore-CPyLrlbT.js";import"./BaseForm-CKPJIvE6.js";import"./ActionButton-DBkLaJxS.js";import"./Button-BeEw7oZA.js";import"./SkeletonBar-h8EAA6dT.js";import"./Tooltip-JRfON3Mb.js";import"./info-sign-ci7mLXdX.js";import"./chevron-up--D5KI_17.js";import"./chevron-down-CYKjDF1m.js";import"./useEventCallback-CgA-LA5D.js";import"./iconLoader-BZWKFMP2.js";import"./Switch-WhiM8l4f.js";import"./CompositeRoot-C3QN_l9C.js";import"./TimePicker-BeBWOkYj.js";import"./CollapsiblePanel-CURvjbvA.js";import"./error-B0H5FIAQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Da4KZg1t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
