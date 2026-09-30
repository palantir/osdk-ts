import{j as t,g as n}from"./iframe-CAOw1_Np.js";import{A as r}from"./action-form-BOoH7zv0.js";import"./preload-helper-BtDOje63.js";import"./DropdownField-DPBhg9Lf.js";import"./debounce-CxqcX0B2.js";import"./useOsdkClient-BinCW-Bh.js";import"./index-rKNeW6R2.js";import"./Input-BIFRYkQa.js";import"./useBaseUiId-BRTQVt9V.js";import"./useControlled-BcHOqTg-.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./PopoverPopup-r-UXKcU9.js";import"./InternalBackdrop-DdGTfKiB.js";import"./composite-ceXOKcGl.js";import"./index-CSvoLCmH.js";import"./getDisabledMountTransitionStyles-BKTsnLJ9.js";import"./ToolbarRootContext-kfYngOQa.js";import"./tick-C5OyQv1Y.js";import"./svgIconContainer-DJZ5kPqi.js";import"./small-cross-BhY_ToEZ.js";import"./search-CAyVB4HI.js";import"./cross-6UH6f3dc.js";import"./useValueChanged-BFl7n5IX.js";import"./getPseudoElementBounds-B-ChLQl_.js";import"./CompositeItem-CJnfXQEg.js";import"./makeExternalStore-BP-pbk-j.js";import"./BaseForm-DvZsztBV.js";import"./ActionButton-D6SZJ9IH.js";import"./Button-BCAtXo9W.js";import"./SkeletonBar-4wb1Kl_E.js";import"./Tooltip-Brm-nAjm.js";import"./info-sign-C4R3kHsu.js";import"./chevron-up-ChEOdxdh.js";import"./chevron-down-CrNYgO2n.js";import"./useEventCallback-DP-govtU.js";import"./iconLoader-DnqSZPNw.js";import"./Switch-mf9z4Cih.js";import"./CompositeRoot-Dibs-RKo.js";import"./TimePicker-xZXPGawM.js";import"./CollapsiblePanel-D09cr1ad.js";import"./error-BklEgYFX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9zKllhN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
