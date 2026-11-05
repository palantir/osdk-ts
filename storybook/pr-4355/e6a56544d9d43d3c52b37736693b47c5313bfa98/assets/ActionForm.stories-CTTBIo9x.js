import{j as t,g as n}from"./iframe-DNoPlrmW.js";import{A as r}from"./action-form-CClZt19R.js";import"./preload-helper-BA-kC20r.js";import"./DropdownField-BQsQKUlk.js";import"./debounce-CwIobNTC.js";import"./useOsdkClient-DEmkR6YZ.js";import"./index-GMd43Lzl.js";import"./Input-Ci_chYxf.js";import"./useBaseUiId-CG8dqONM.js";import"./useControlled-L9fBFGN0.js";import"./index-CiJY3H2C.js";import"./index-PNiqJ9T4.js";import"./PopoverPopup-CsydTAyn.js";import"./InternalBackdrop-DL1HDt1e.js";import"./composite-8FnP0FRm.js";import"./index-SE8XSgW-.js";import"./getDisabledMountTransitionStyles-BJ4RXawF.js";import"./ToolbarRootContext-D3fcj2nK.js";import"./tick-CkHBz8KO.js";import"./svgIconContainer-CUvRyfnW.js";import"./small-cross-U2NFloQ_.js";import"./search-BAl_vtGE.js";import"./cross-Dbdjn7RF.js";import"./useValueChanged-DL6q5b55.js";import"./getPseudoElementBounds-ByFx_aK9.js";import"./CompositeItem-CVV0k2jm.js";import"./makeExternalStore-ThIGMhbJ.js";import"./BaseForm-D58sSh6-.js";import"./ActionButton-DjdbAx1F.js";import"./Button-Au7RONC3.js";import"./SkeletonBar-DvQ-YXlb.js";import"./Tooltip-BLCCo0To.js";import"./info-sign-Daj893j3.js";import"./chevron-up-B92WlZ_y.js";import"./chevron-down-AD2NYQ4Y.js";import"./useEventCallback-CX57274w.js";import"./iconLoader-6BumanSv.js";import"./Switch-BQ467THv.js";import"./CompositeRoot-7aUSnkUV.js";import"./TimePicker-PuNJAw4x.js";import"./CollapsiblePanel-CJnRgBiN.js";import"./error-BcP9NYX_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C7RJ1R_V.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
