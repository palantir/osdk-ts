import{j as t,g as n}from"./iframe-ca23OhYy.js";import{A as r}from"./action-form-B9cj6V0C.js";import"./preload-helper-CpBe6w6L.js";import"./DropdownField-Bx2rVDJP.js";import"./debounce-Cqzs3vCN.js";import"./useOsdkClient-BgRNBudR.js";import"./index-CSQGa-uf.js";import"./Input-CDnjWJWA.js";import"./useBaseUiId-BFRON7cN.js";import"./useControlled-C1AlQciX.js";import"./index-rx-oKm__.js";import"./index-4C3ZxLWs.js";import"./PopoverPopup-i0IaPECP.js";import"./InternalBackdrop-BD_kNEKT.js";import"./composite-D8ER8GvA.js";import"./index-_isEvDLT.js";import"./getDisabledMountTransitionStyles-F_MGGD3V.js";import"./ToolbarRootContext-sGl4TGZ5.js";import"./tick-MfwPO4IK.js";import"./svgIconContainer-DY2iVrle.js";import"./small-cross-DKWrBlfW.js";import"./search-RTWZj0KA.js";import"./cross-CETsQjwW.js";import"./useValueChanged-D-liDC3H.js";import"./getPseudoElementBounds-DOG3HfD3.js";import"./CompositeItem-B-dNGI5-.js";import"./makeExternalStore-BRJsYdtc.js";import"./BaseForm-D6OzMmIP.js";import"./ActionButton--CJ0iKEB.js";import"./Button-DRovoLAj.js";import"./SkeletonBar-iGP3E_gb.js";import"./Tooltip-0Szhy22Z.js";import"./info-sign-FhvJen7H.js";import"./chevron-up-D0d5GPTw.js";import"./chevron-down-CIVY1k1-.js";import"./useEventCallback-B5TdNu7r.js";import"./iconLoader-57V18KCP.js";import"./CompositeRoot-a4fbqUFJ.js";import"./Switch-5BaXJE23.js";import"./TimePicker-Csk1MPx6.js";import"./CollapsiblePanel-CO3SJ3wp.js";import"./error-BW4SFkbJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVtZ9wxA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
