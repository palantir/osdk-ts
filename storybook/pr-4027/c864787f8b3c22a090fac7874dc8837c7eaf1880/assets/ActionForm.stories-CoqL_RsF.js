import{j as t,g as n}from"./iframe-Cmp4Wz_P.js";import{A as r}from"./action-form-LGgv3HFl.js";import"./preload-helper-Da0vPE9s.js";import"./DropdownField-dSwdlAau.js";import"./debounce-eMFzGMlT.js";import"./useOsdkClient-fBoD-PC4.js";import"./index-xjnGmoVb.js";import"./Input-Dxt6Zigl.js";import"./useBaseUiId-BcNPDCTs.js";import"./useControlled-CRN5n83g.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./PopoverPopup-qOkFvw8W.js";import"./InternalBackdrop-eb4yl9Hp.js";import"./composite-hwQ1nQqf.js";import"./index-CoENTDGw.js";import"./getDisabledMountTransitionStyles-CSh_Lmpf.js";import"./ToolbarRootContext-_b46dMtv.js";import"./tick-CevBPgG7.js";import"./svgIconContainer-Clw7VTOr.js";import"./small-cross-DEp431Nj.js";import"./search-DwQ9m9I4.js";import"./cross-Cpc_V52N.js";import"./useValueChanged-DQAltEsb.js";import"./getPseudoElementBounds-BZ5_UdIs.js";import"./CompositeItem-CC2Ai5yy.js";import"./makeExternalStore-C1wNmiU_.js";import"./BaseForm-CV2P_wun.js";import"./ActionButton-BC90jPtT.js";import"./Button-CjafA2QB.js";import"./SkeletonBar-DFEJB6KG.js";import"./Tooltip-DCubWUo4.js";import"./info-sign-BZbLnR2Q.js";import"./chevron-up-DpyzxJ6t.js";import"./chevron-down-DQjw3lMC.js";import"./useEventCallback-DuquQoKZ.js";import"./iconLoader-BdBJVJpc.js";import"./CompositeRoot-ChMeRNET.js";import"./Switch-Cssbj4g0.js";import"./TimePicker-SynY9Ny8.js";import"./CollapsiblePanel-DSx0PiCY.js";import"./error-BUufFz3W.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-t52t2MsY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
