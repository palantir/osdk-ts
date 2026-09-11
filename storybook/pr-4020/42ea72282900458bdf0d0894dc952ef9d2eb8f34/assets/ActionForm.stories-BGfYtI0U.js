import{j as t,g as n}from"./iframe-BAOOmxmu.js";import{A as r}from"./action-form-DG5N0uxC.js";import"./preload-helper-BIm_Fr-4.js";import"./DropdownField-C3tYCGBa.js";import"./debounce-YjlmO8bW.js";import"./useOsdkClient-Cb63-21m.js";import"./index-QY-KQRXF.js";import"./Input-d_-ySvYA.js";import"./useBaseUiId-B4ZR21gm.js";import"./useControlled-CuqfVZxX.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./PopoverPopup-CJ9iUHSY.js";import"./InternalBackdrop-CM1IsXud.js";import"./composite-DMwFPLnT.js";import"./index-BoMMojJ9.js";import"./getDisabledMountTransitionStyles-raUh3s1U.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./tick-BQoQRlmD.js";import"./svgIconContainer-Bp5LkjRC.js";import"./small-cross-DGk8qS5c.js";import"./search-D68AVNns.js";import"./cross-h2O47eJg.js";import"./useValueChanged-BSyPbCHB.js";import"./getPseudoElementBounds-CUG0gOL4.js";import"./CompositeItem-BPZd139z.js";import"./makeExternalStore-DNiKFXrW.js";import"./BaseForm-UFPOGXl9.js";import"./ActionButton-Cfr9kbRA.js";import"./Button-btye1J53.js";import"./SkeletonBar-CC4f_ujB.js";import"./Tooltip-BkO9PIng.js";import"./info-sign-B4JboqIE.js";import"./chevron-up-C8zsWRrD.js";import"./chevron-down-Dwrs1hNu.js";import"./useEventCallback-DWFrmsqt.js";import"./iconLoader-BHHhalXB.js";import"./CompositeRoot-C4ZGEnfk.js";import"./Switch-6EOKuYVt.js";import"./TimePicker-q3khTHLb.js";import"./CollapsiblePanel-BN5oNg3z.js";import"./error-BswP0WVl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C7ktc4nn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
