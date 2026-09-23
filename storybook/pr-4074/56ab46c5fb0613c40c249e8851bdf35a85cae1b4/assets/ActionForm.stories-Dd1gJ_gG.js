import{j as t,g as n}from"./iframe-JE3hAilc.js";import{A as r}from"./action-form-BqQSXHGv.js";import"./preload-helper-D3m3uLck.js";import"./DropdownField-BLfbhE54.js";import"./debounce-DbnyHCyz.js";import"./useOsdkClient-CKMIbVIl.js";import"./index-BpOIoYeP.js";import"./Input-BBWCNVeu.js";import"./useBaseUiId-CU6aYJhX.js";import"./useControlled-i7oJhE2J.js";import"./index-NMATibBb.js";import"./index-D1wHMkU8.js";import"./PopoverPopup-BddRZ8jP.js";import"./InternalBackdrop-CjLu4iri.js";import"./composite-OBLfyo_g.js";import"./index-luf3eNCk.js";import"./getDisabledMountTransitionStyles-Bt2v_bU6.js";import"./ToolbarRootContext-BAaYeDZ8.js";import"./tick-Bxa_ZUol.js";import"./svgIconContainer-DxcHQg7k.js";import"./small-cross-CS_pcyMB.js";import"./search-CVE6ZsP3.js";import"./cross-B3dok42m.js";import"./useValueChanged-DBeldtQT.js";import"./getPseudoElementBounds-BkfHxAL-.js";import"./CompositeItem-CBdxcvZ2.js";import"./makeExternalStore-C3Po_h2x.js";import"./BaseForm-CQzC6VXh.js";import"./ActionButton-BwTmZVPf.js";import"./Button-C-mwssM2.js";import"./SkeletonBar-CjvHDxcU.js";import"./Tooltip-DWc2JDJZ.js";import"./info-sign-CBIx3UY_.js";import"./chevron-up-09Ec3rPg.js";import"./chevron-down-CzaF57dY.js";import"./useEventCallback-F9ZlU1zk.js";import"./iconLoader-C2Lms1Nd.js";import"./Switch-DSxEcBFV.js";import"./CompositeRoot-l44Dep54.js";import"./TimePicker-BWju5Adi.js";import"./CollapsiblePanel-CAxKVeuj.js";import"./error-7AaWXBYs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dv_mGpze.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
