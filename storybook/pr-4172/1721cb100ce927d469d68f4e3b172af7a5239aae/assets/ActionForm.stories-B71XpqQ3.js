import{j as t,g as n}from"./iframe-B7aJzwbo.js";import{A as r}from"./action-form-BTwnAreq.js";import"./preload-helper-eRVNIb5p.js";import"./DropdownField-DAAdN4xL.js";import"./debounce-B7x7S7rs.js";import"./useOsdkClient-CeMWOo2K.js";import"./index-RdZvG0OW.js";import"./Input-qBFcNfHq.js";import"./useBaseUiId-CkpX5NB7.js";import"./useControlled-BukasUFK.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./PopoverPopup-DN9sGOVC.js";import"./InternalBackdrop-CCGHrTok.js";import"./composite-HBnNRj0V.js";import"./index-7YIR26jv.js";import"./getDisabledMountTransitionStyles-zUIg4MN2.js";import"./ToolbarRootContext-NP1s66to.js";import"./tick-BbAB870P.js";import"./svgIconContainer-CdK9JNQh.js";import"./small-cross-CNtYeUul.js";import"./search-CZmCb7y8.js";import"./cross-B1O6ebQi.js";import"./useValueChanged-C6TaqKGn.js";import"./getPseudoElementBounds-CvilJ6ol.js";import"./CompositeItem-D0hFRJVg.js";import"./makeExternalStore--7xxm-Xg.js";import"./BaseForm-Cq-W2DoJ.js";import"./ActionButton-DUUDtffd.js";import"./Button-C-woLY16.js";import"./SkeletonBar-C0OTRwFB.js";import"./Tooltip-C9jwtRtJ.js";import"./info-sign-C7vHmlPk.js";import"./chevron-up-C7Q58OFU.js";import"./chevron-down-BK8JqzlO.js";import"./useEventCallback-BnLqpuJa.js";import"./iconLoader-D07kvcBJ.js";import"./Switch-Bt7N3o_p.js";import"./CompositeRoot-DRlfgqoB.js";import"./TimePicker-DWR33-uv.js";import"./CollapsiblePanel-DOUntJrC.js";import"./error-CWUTjlhY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-4AR2Wafq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
