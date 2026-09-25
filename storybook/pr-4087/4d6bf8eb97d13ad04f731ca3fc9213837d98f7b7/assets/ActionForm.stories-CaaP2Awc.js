import{j as t,g as n}from"./iframe-H475fjT9.js";import{A as r}from"./action-form-pNeyiTt8.js";import"./preload-helper-4X7ac1X_.js";import"./DropdownField-OZIspKIM.js";import"./debounce-CMJV0GRr.js";import"./useOsdkClient-g1QGvPXq.js";import"./index-xnZyhOap.js";import"./Input-CSGRdmE4.js";import"./useBaseUiId-D9Y7uIA_.js";import"./useControlled-CTWYlqbQ.js";import"./index-D2G91xGC.js";import"./index-2KdCkDaD.js";import"./PopoverPopup-CzB6XrrJ.js";import"./InternalBackdrop-BXEe3g5T.js";import"./composite-BYdl5w4l.js";import"./index-BKiIIZGc.js";import"./getDisabledMountTransitionStyles-Doqo3qWD.js";import"./ToolbarRootContext-DRktyYqF.js";import"./tick-DvK5h6T_.js";import"./svgIconContainer-DRh8H81_.js";import"./small-cross-CQ-8gmc_.js";import"./search-BeyzIhyn.js";import"./cross-Dm1NPVGS.js";import"./useValueChanged-D786mFUn.js";import"./getPseudoElementBounds-DKasT9kp.js";import"./CompositeItem-Nblbqfxi.js";import"./makeExternalStore-DSrF5gYv.js";import"./BaseForm-DYqXRe9k.js";import"./ActionButton-ByBqwnle.js";import"./Button-C-c_YzgP.js";import"./SkeletonBar-DEUejCfV.js";import"./Tooltip-DjkP-spo.js";import"./info-sign-BMGCU7GZ.js";import"./chevron-up-ClqMCafD.js";import"./chevron-down-BgkFJdjv.js";import"./useEventCallback-DKZ2K8mI.js";import"./iconLoader-CWIKEgg0.js";import"./Switch-CJ9kXpO2.js";import"./CompositeRoot-D0DVPPw6.js";import"./TimePicker-2ZzGfqmc.js";import"./CollapsiblePanel-DnbYruvy.js";import"./error-C3Cl8o9I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D1pGtXX8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
