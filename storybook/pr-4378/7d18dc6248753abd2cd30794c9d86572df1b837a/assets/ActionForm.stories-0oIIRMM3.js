import{j as t,g as n}from"./iframe-CNsFCmRD.js";import{A as r}from"./action-form-Cce4sHUu.js";import"./preload-helper-B3EQxtCm.js";import"./DropdownField-BeeT3wky.js";import"./debounce-BZlJnoz_.js";import"./useOsdkClient-CvQAwD1B.js";import"./index-DehS0r9u.js";import"./Input-DAosEkIl.js";import"./useBaseUiId-DIFzx6WD.js";import"./useControlled-DkXcDe2n.js";import"./index-B7uESB1d.js";import"./index-Bu5_opre.js";import"./isObject-DA6ucP6Z.js";import"./InternalBackdrop-DlN7xffD.js";import"./composite-Difoiya5.js";import"./index-BV9ZuCbx.js";import"./getDisabledMountTransitionStyles-FanyKRLk.js";import"./ToolbarRootContext-DMD9u7kY.js";import"./tick-B2tOyb01.js";import"./svgIconContainer-BLE7kABU.js";import"./small-cross-N6zuJUXf.js";import"./search-D35U4f_q.js";import"./cross-BgW6BP2I.js";import"./useValueChanged-BQU9nMqw.js";import"./getPseudoElementBounds-BDmo4YIs.js";import"./CompositeItem-PSR5eG0p.js";import"./makeExternalStore-V3MhvWul.js";import"./BaseForm-DxKrDHb8.js";import"./ActionButton-C58Jqytf.js";import"./Button-g1ae3uCc.js";import"./SkeletonBar-CVDn_hln.js";import"./Tooltip-DXHkZovs.js";import"./info-sign-tzdl5ryj.js";import"./chevron-up-DtJpCQNj.js";import"./chevron-down-CgfsyRf8.js";import"./useEventCallback-DRTsw9WP.js";import"./iconLoader-CoZwCssA.js";import"./Switch-BrCqAwFS.js";import"./CompositeRoot-CkXtyTRp.js";import"./TimePicker-CZlHhGhV.js";import"./CollapsiblePanel-Dl7L2YAZ.js";import"./error-bpMZEwT_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DhWG7RdG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
