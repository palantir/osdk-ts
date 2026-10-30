import{j as t,g as n}from"./iframe-Bib3kGT6.js";import{A as r}from"./action-form-B3LhTZKS.js";import"./preload-helper-C51LGZ31.js";import"./DropdownField-j-f9GReF.js";import"./debounce-BONFZmZ3.js";import"./useOsdkClient-FvgP99Ie.js";import"./index-VjAhrkKZ.js";import"./Input-isV5Y8xL.js";import"./useBaseUiId-CnlY9UEZ.js";import"./useControlled-Drh12MBC.js";import"./index-CYSDWPDR.js";import"./index-DGYgRGZ8.js";import"./PopoverPopup-Dk_xDUPF.js";import"./InternalBackdrop-Bk9vvVbD.js";import"./composite--njzr7wG.js";import"./index-BoAbROLn.js";import"./getDisabledMountTransitionStyles-G-mSpcgO.js";import"./ToolbarRootContext-DtzEjAjd.js";import"./tick-BQw9UkqU.js";import"./svgIconContainer-BZsDWIhS.js";import"./small-cross-vP71PtUb.js";import"./search-P-oq-XW2.js";import"./cross-qIT4Mchn.js";import"./useValueChanged-wvMqhi3F.js";import"./getPseudoElementBounds-CAYA-GnQ.js";import"./CompositeItem-BS4Q5bgP.js";import"./makeExternalStore-BO4M2yBP.js";import"./BaseForm-B65fLTzK.js";import"./ActionButton-ChBBZFUd.js";import"./Button-D_pfSgnH.js";import"./SkeletonBar-Csvi_hZx.js";import"./Tooltip-CK9OMmvF.js";import"./info-sign-BQV5zBSS.js";import"./chevron-up-CY0J2IGx.js";import"./chevron-down-lJXkLqJI.js";import"./useEventCallback-DCT06OVg.js";import"./iconLoader-CICPlulk.js";import"./Switch-DYnYkIaZ.js";import"./CompositeRoot-B1ApySat.js";import"./TimePicker-D47J7x8z.js";import"./CollapsiblePanel-lc_QiXgr.js";import"./error-k1gRtmZa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BuJy5uT4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
