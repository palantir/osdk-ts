import{j as t,g as n}from"./iframe-D4hrQN2M.js";import{A as r}from"./action-form-BtU7fhy5.js";import"./preload-helper-sZ7GZnTp.js";import"./DropdownField-BMDSt0eR.js";import"./debounce-CAX0ITwT.js";import"./useOsdkClient-CRnyhdA3.js";import"./index-TJFGWmSW.js";import"./Input-CkxkdCMO.js";import"./useBaseUiId-Dd8SLm5U.js";import"./useControlled-D7NqC10F.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./PopoverPopup-CnVnN1Uy.js";import"./InternalBackdrop-DTcgC7in.js";import"./composite-CR-Dz-Ek.js";import"./index-DxzPebG2.js";import"./getDisabledMountTransitionStyles-BQuC83a6.js";import"./ToolbarRootContext-A7T_D51T.js";import"./tick-BHTu8puw.js";import"./svgIconContainer-B2XpTIGD.js";import"./small-cross-DZUN_pWg.js";import"./search-D1Xzl9P3.js";import"./cross-DpkqXaMH.js";import"./useValueChanged-kuV8QgZ2.js";import"./getPseudoElementBounds-DbN1Aq9W.js";import"./CompositeItem-D42qWJYi.js";import"./makeExternalStore-CT9_9BER.js";import"./BaseForm-B9Ic6qU0.js";import"./ActionButton-C2k80xY4.js";import"./Button-C5ajAHO-.js";import"./SkeletonBar-D2ZrCjSS.js";import"./Tooltip-BcRZGxaq.js";import"./info-sign-B5bl4Ulk.js";import"./chevron-up-3Y132dp_.js";import"./chevron-down-CPNs7Pbe.js";import"./useEventCallback-Bi7T9n7X.js";import"./iconLoader-4QvAwcO-.js";import"./Switch-CEZwLKQF.js";import"./CompositeRoot-CGN01IcJ.js";import"./TimePicker-GZvj5vRQ.js";import"./CollapsiblePanel-DZyDRhH1.js";import"./error-DLpDeju-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-V-TF07Pc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
