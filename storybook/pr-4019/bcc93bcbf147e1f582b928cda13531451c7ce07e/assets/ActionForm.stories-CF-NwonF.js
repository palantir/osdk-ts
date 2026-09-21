import{j as t,g as n}from"./iframe-CbWKQTAd.js";import{A as r}from"./action-form-Ck5EAWw5.js";import"./preload-helper-BodAnLGY.js";import"./DropdownField-BhWFFRno.js";import"./debounce-5-704DJU.js";import"./useOsdkClient-IqzxIclx.js";import"./index-tkyBrQAe.js";import"./Input-DFzbl_7I.js";import"./useBaseUiId-XRd770-U.js";import"./useControlled-Lsl_hIqj.js";import"./index-CvOYyjqx.js";import"./index-B9_31cVf.js";import"./PopoverPopup-Btctsiv_.js";import"./InternalBackdrop-aJh4Cj33.js";import"./composite-DcG51BnW.js";import"./index-Bln6Sg35.js";import"./getDisabledMountTransitionStyles-GXdrPdpy.js";import"./ToolbarRootContext-0YQDLW37.js";import"./tick-BitNuW6k.js";import"./svgIconContainer-DOikMtqk.js";import"./small-cross-BUr6qJjI.js";import"./search-DGKjGcgN.js";import"./cross-DgoT9wry.js";import"./useValueChanged-DvUqsBxA.js";import"./getPseudoElementBounds-B4n-FV3q.js";import"./CompositeItem-C2HqLZ_Z.js";import"./makeExternalStore-DdKrBv4a.js";import"./BaseForm-DTVQ7uIJ.js";import"./ActionButton-DcAqfgCZ.js";import"./Button-BKLVv1MD.js";import"./SkeletonBar-DsGaioLv.js";import"./Tooltip-d_DmM_MB.js";import"./info-sign-B7jj8RXJ.js";import"./chevron-up-QZlJ5H5g.js";import"./chevron-down-eXF_jIno.js";import"./useEventCallback-0naykCU3.js";import"./iconLoader-BmAdNYWq.js";import"./CompositeRoot-DFiyBBKq.js";import"./Switch-6kf8OAgJ.js";import"./TimePicker-h_xzEuSZ.js";import"./CollapsiblePanel-doEvfhG5.js";import"./error-CW2P3uO4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5qCRIWi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
