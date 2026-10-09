import{j as t,g as n}from"./iframe-Cul2E1vG.js";import{A as r}from"./action-form-DzeI6vTr.js";import"./preload-helper--6M4Khrx.js";import"./DropdownField-BbPTQMjY.js";import"./debounce-DapI4ZKL.js";import"./useOsdkClient-DJKFKBMb.js";import"./index-Bn5VDq5b.js";import"./Input-DRePQ-W6.js";import"./useBaseUiId-BQIQ8jck.js";import"./useControlled-CzFr7QRD.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./PopoverPopup-DOy0S3uG.js";import"./InternalBackdrop-m5F5-2dG.js";import"./composite-SNvyYtRl.js";import"./index-BgP6GmOx.js";import"./getDisabledMountTransitionStyles-D8gt5JL7.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./tick-CiTQftSD.js";import"./svgIconContainer-mVJAcMp8.js";import"./small-cross-DLuZoUhq.js";import"./search-BwSeGY7Y.js";import"./cross-C6zh1HjN.js";import"./useValueChanged-B-W2cV9q.js";import"./getPseudoElementBounds-Bzvith0Z.js";import"./CompositeItem-CvRXWH1T.js";import"./makeExternalStore-Dw-8aD8B.js";import"./BaseForm-DjPvF2DA.js";import"./ActionButton-BcIcAh2z.js";import"./Button-oDRXfShn.js";import"./SkeletonBar-XecFs5pz.js";import"./Tooltip-DXd-c-BV.js";import"./info-sign-BGI9xLIx.js";import"./chevron-up-BRfUTmQt.js";import"./chevron-down-zZ58BLda.js";import"./useEventCallback-DWZk488X.js";import"./iconLoader-7_VV0mOT.js";import"./Switch-Bn5nAOrq.js";import"./CompositeRoot-BiKaUxyj.js";import"./TimePicker-DSPvs4up.js";import"./CollapsiblePanel-BalN1idY.js";import"./error-Bp_j0tyg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cv3w3vr0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
