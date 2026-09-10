import{j as t,g as n}from"./iframe-C1TIX5JI.js";import{A as r}from"./action-form-K_YT_2_P.js";import"./preload-helper-BtZpkMB0.js";import"./DropdownField-B8kwWA0Z.js";import"./debounce-BJNuh3Yk.js";import"./useOsdkClient-D64jRzyq.js";import"./index-Gx0d5aEB.js";import"./Input-bIhTrC5p.js";import"./useBaseUiId-DePiMeOB.js";import"./useControlled-C6axbr2z.js";import"./index-DJqIo3bD.js";import"./index-CIcyQnyh.js";import"./PopoverPopup-DiuwLzzF.js";import"./InternalBackdrop-3gKyBm5j.js";import"./composite-C4rxhLiP.js";import"./index-BzYFvMJd.js";import"./getDisabledMountTransitionStyles-DAbJFScG.js";import"./ToolbarRootContext-B4mO9KPM.js";import"./tick-Cf1cYmcP.js";import"./svgIconContainer-C8MADQYH.js";import"./small-cross-qJkEPBr6.js";import"./search-LH-9seDT.js";import"./cross-BhNrYvcF.js";import"./useValueChanged-Bv8cfv1O.js";import"./getPseudoElementBounds-DEGLArUE.js";import"./CompositeItem-CBntDvdI.js";import"./makeExternalStore-DRXMdcub.js";import"./BaseForm-DQ151vS2.js";import"./ActionButton-BHH4NDLY.js";import"./Button-CpS9y80N.js";import"./SkeletonBar-Byy-oVLe.js";import"./Tooltip-Cj81ITcV.js";import"./info-sign-BWsOKkRa.js";import"./chevron-up-DM-88PbA.js";import"./chevron-down-CtHVru-S.js";import"./useEventCallback-CQj7Y2wd.js";import"./iconLoader-JnSZyU9y.js";import"./CompositeRoot-D5fsi7vB.js";import"./Switch-BhUvFGFe.js";import"./TimePicker-DVunQrnU.js";import"./CollapsiblePanel-mSd7yFQM.js";import"./error-DkEU1DEd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BYJpc4fR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
