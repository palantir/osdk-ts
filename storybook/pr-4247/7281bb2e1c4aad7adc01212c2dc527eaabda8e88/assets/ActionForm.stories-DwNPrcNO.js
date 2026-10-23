import{j as t,g as n}from"./iframe-Bfa633nI.js";import{A as r}from"./action-form-CrkmABe7.js";import"./preload-helper-S8ArRewN.js";import"./DropdownField-DBLuDlNB.js";import"./debounce-UGU4ubXF.js";import"./useOsdkClient-yvB3K87Q.js";import"./index-CAFX3a2o.js";import"./Input-vSvt0OGa.js";import"./useBaseUiId-DkL2EsGI.js";import"./useControlled-DE-SX_fd.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./PopoverPopup-Bli7SJMu.js";import"./InternalBackdrop-BkK8ufDF.js";import"./composite-MyhD4oE7.js";import"./index-D18CgaCd.js";import"./getDisabledMountTransitionStyles-CdY-VY1I.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./tick-BpRcty2P.js";import"./svgIconContainer-CMg2uk3-.js";import"./small-cross-dpPEHUzg.js";import"./search-DBXxF15B.js";import"./cross-CO8lPM-Y.js";import"./useValueChanged-BMAglr7j.js";import"./getPseudoElementBounds-DASAzYI8.js";import"./CompositeItem-BHvcBU4g.js";import"./makeExternalStore-D8-WR8za.js";import"./BaseForm-BiYYrpZ6.js";import"./ActionButton-DjVRKWVw.js";import"./Button-bQTkGamX.js";import"./SkeletonBar-Q9lR3jGv.js";import"./Tooltip-CGVIqFa_.js";import"./info-sign-mAah-4Bl.js";import"./chevron-up-aN-TKgNu.js";import"./chevron-down-sNl64qaM.js";import"./useEventCallback-DqyAn3HD.js";import"./iconLoader-w_7fCBgj.js";import"./Switch-CzYziyQb.js";import"./CompositeRoot-GHWxNL93.js";import"./TimePicker-DrBtoBg3.js";import"./CollapsiblePanel-CgpMYvLN.js";import"./error-jmH2Pe7J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKztbHSk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
