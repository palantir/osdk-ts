import{j as t,g as n}from"./iframe-CpvsyndC.js";import{A as r}from"./action-form-DSCOD0Qk.js";import"./preload-helper-v1ULc-zT.js";import"./DropdownField--U9fCIxx.js";import"./debounce-CzKUTwhW.js";import"./useOsdkClient-C7Ga7ftv.js";import"./index-OXZTet4E.js";import"./Input-D6DNjjz9.js";import"./useBaseUiId-CYqXXgOS.js";import"./useControlled-D-CxRUi2.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./PopoverPopup-BfQ70eOn.js";import"./InternalBackdrop-CRstaiGF.js";import"./composite-Bs9G8wyi.js";import"./index-C9kvG9bI.js";import"./getDisabledMountTransitionStyles-CD-yuuJB.js";import"./ToolbarRootContext-Bn57AYug.js";import"./tick-B3tE0rZT.js";import"./svgIconContainer-Msyl1KBc.js";import"./small-cross-D3J472u7.js";import"./search-CKGbca0G.js";import"./cross-Bcfh6JZM.js";import"./useValueChanged-CfxM7xWl.js";import"./getPseudoElementBounds-OuRRLSTT.js";import"./CompositeItem-DpS-WC5l.js";import"./makeExternalStore-BjYOVJLR.js";import"./BaseForm-n-pgmyhn.js";import"./ActionButton-BfYiSCcv.js";import"./Button-CCew8i_i.js";import"./SkeletonBar-CBAJCw1t.js";import"./Tooltip-BS2jpkpK.js";import"./info-sign-BaQoy4Ch.js";import"./chevron-up-D65VTpAR.js";import"./chevron-down-AhYvmllp.js";import"./useEventCallback-TcvyV0P6.js";import"./iconLoader-BtwqRgdo.js";import"./CompositeRoot-CK5ssIQ3.js";import"./Switch-C6VJxnG5.js";import"./TimePicker-dUf-MG2_.js";import"./CollapsiblePanel-CI8PgSve.js";import"./error-o4jN_MzE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BrjOXXvf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
