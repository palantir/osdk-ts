import{j as t,g as n}from"./iframe-Chio77VP.js";import{A as r}from"./action-form-mRHQgo9m.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BOa15dWM.js";import"./debounce-Ins44pUS.js";import"./useOsdkClient-DFUhHdMt.js";import"./index-Ca2LpqUZ.js";import"./Input-C-4igv96.js";import"./useBaseUiId-ClFlSRoQ.js";import"./useControlled-C7GDl2B7.js";import"./index-BcgDg9yf.js";import"./index-DnMFWa6M.js";import"./PopoverPopup-Ba-YatLV.js";import"./InternalBackdrop-ndglsXAe.js";import"./composite-DE8-mgXU.js";import"./index-CEEu1Ax6.js";import"./getDisabledMountTransitionStyles-CnbA4lIo.js";import"./ToolbarRootContext-CZQCk8Ol.js";import"./tick-Db0tIP7m.js";import"./svgIconContainer-Csco7ptr.js";import"./small-cross-LZKNmLNK.js";import"./search-Bq_ERYnO.js";import"./cross-DSLJTQ5w.js";import"./useValueChanged-Oi-HM7VZ.js";import"./getPseudoElementBounds-qSW1gYDZ.js";import"./CompositeItem-Qz08TpRA.js";import"./makeExternalStore-CTFx1LEB.js";import"./BaseForm-CbyXg-lG.js";import"./ActionButton-Bq1xmvFN.js";import"./Button-6EmhjClO.js";import"./SkeletonBar--R3A6M4c.js";import"./Tooltip-71Wdtc8K.js";import"./info-sign-B8g82v-r.js";import"./chevron-up-yzMUJV4D.js";import"./chevron-down-D-UVCR2J.js";import"./useEventCallback-B4Uu45dA.js";import"./iconLoader-BkKTcsfe.js";import"./Switch-51cO3pIn.js";import"./CompositeRoot-BtrOimns.js";import"./TimePicker-BywlnKzS.js";import"./CollapsiblePanel-1ox7xPDd.js";import"./error-Yn-rJTrJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cz5B5mCa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
