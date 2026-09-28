import{j as t,g as n}from"./iframe-DroyfEdp.js";import{A as r}from"./action-form-dq5mKQfz.js";import"./preload-helper-DE-s4jHf.js";import"./DropdownField-0LHmrOpE.js";import"./debounce-7vvo2FtY.js";import"./useOsdkClient-Dm16U9MA.js";import"./index-DKMli8iM.js";import"./Input-CIFY8xRI.js";import"./useBaseUiId-pK5yffkm.js";import"./useControlled-CyNj1h6c.js";import"./index-CnNUuV9s.js";import"./index-C74kuOpO.js";import"./PopoverPopup-D9izk2qS.js";import"./InternalBackdrop-B8R4iyvE.js";import"./composite-CNL7aYdy.js";import"./index-BJ1GCCCw.js";import"./getDisabledMountTransitionStyles-DYm48-D_.js";import"./ToolbarRootContext-COAtqpEr.js";import"./tick-CiJt-Vxn.js";import"./svgIconContainer-CAEQYwKx.js";import"./small-cross-CpVAMOV5.js";import"./search-BjVtZrtO.js";import"./cross-BriOBw5J.js";import"./useValueChanged-l9ugVdto.js";import"./getPseudoElementBounds-BIC4My0w.js";import"./CompositeItem-Dn6R0SEl.js";import"./makeExternalStore-BCFNzFHX.js";import"./BaseForm-ZQKyw5j2.js";import"./ActionButton-Bo5K6E7v.js";import"./Button-DQlH9UOj.js";import"./SkeletonBar-iXSzVjAk.js";import"./Tooltip-C6pHptAP.js";import"./info-sign-Bjc92JI0.js";import"./chevron-up-Du3mP--P.js";import"./chevron-down-CNLIjVlD.js";import"./useEventCallback-CM-KCUTe.js";import"./iconLoader-BBU25rup.js";import"./Switch-B0X_ljij.js";import"./CompositeRoot-xp_W_BW5.js";import"./TimePicker-BDLcCS1p.js";import"./CollapsiblePanel-XsDrNHSw.js";import"./error-DXyNBqI3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C_wBtmZt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
