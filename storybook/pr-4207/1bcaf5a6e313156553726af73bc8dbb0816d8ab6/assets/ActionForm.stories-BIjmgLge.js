import{j as t,g as n}from"./iframe-BxrMAPhN.js";import{A as r}from"./action-form-Bx_nU49S.js";import"./preload-helper-DrnFR1_M.js";import"./DropdownField-Dn-sPpxO.js";import"./debounce-B6IFkGZ6.js";import"./useOsdkClient-BmkTGWD1.js";import"./index-3ce-DqIm.js";import"./Input-B49f-IH3.js";import"./useBaseUiId-CYhkk9Wl.js";import"./useControlled-CBAJvoho.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./PopoverPopup-VtScEPpW.js";import"./InternalBackdrop-fby99vEC.js";import"./composite-Dd7hy379.js";import"./index-CUS5I621.js";import"./getDisabledMountTransitionStyles-CmE2wGB-.js";import"./ToolbarRootContext-BseqN11S.js";import"./tick-F7U5QknT.js";import"./svgIconContainer-BTC4I1jP.js";import"./small-cross-DcC-nrRa.js";import"./search-DDIdgg65.js";import"./cross-CgUMfDbf.js";import"./useValueChanged-kVe0_w2P.js";import"./getPseudoElementBounds-DT1sYSxK.js";import"./CompositeItem-DrJtYX8s.js";import"./makeExternalStore-BOIpe8LX.js";import"./BaseForm-BkposxA5.js";import"./ActionButton-CV_MAkW4.js";import"./Button-BHjA9vXD.js";import"./SkeletonBar-Dijlhnp9.js";import"./Tooltip-NlgzcR6l.js";import"./info-sign-JEzPAhhL.js";import"./chevron-up-aB_v0NyC.js";import"./chevron-down-vMhLf0Yn.js";import"./useEventCallback-ztQWmBPn.js";import"./iconLoader-EssqyFTA.js";import"./Switch-B2krgjVB.js";import"./CompositeRoot-BDmJiSR5.js";import"./TimePicker-P39OZEIF.js";import"./CollapsiblePanel-Dc01KugY.js";import"./error-AaI7Sssv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-PY8DhDl3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
