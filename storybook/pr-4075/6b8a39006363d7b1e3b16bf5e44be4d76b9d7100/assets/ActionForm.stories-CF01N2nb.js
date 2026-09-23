import{j as t,g as n}from"./iframe-34VatmEZ.js";import{A as r}from"./action-form-D9WO4hJ0.js";import"./preload-helper-DV4gmwFB.js";import"./DropdownField-BL1cfRQ0.js";import"./debounce-CrVZzVbG.js";import"./useOsdkClient-gxJLLGj5.js";import"./index-BlAm73td.js";import"./Input-BKrVXT7B.js";import"./useBaseUiId-DeI-Jtiv.js";import"./useControlled-DVccPDBX.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./PopoverPopup-CSKaTK3m.js";import"./InternalBackdrop-CvK5FjjA.js";import"./composite-1B_4pEYH.js";import"./index-ADGNjetD.js";import"./getDisabledMountTransitionStyles-DZUNER2j.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./tick-DnmbfsGi.js";import"./svgIconContainer-_GM_NvIc.js";import"./small-cross-CZHtyfX7.js";import"./search-CVdCifPG.js";import"./cross-DvtnLYbI.js";import"./useValueChanged-DCa4_FQi.js";import"./getPseudoElementBounds-IeKEehJb.js";import"./CompositeItem-DOiHkRNL.js";import"./makeExternalStore-D4cd6CTa.js";import"./BaseForm-D_HIQ66q.js";import"./ActionButton-Czi1TMhc.js";import"./Button-DV1A9r6F.js";import"./SkeletonBar-VDjUVVNd.js";import"./Tooltip-Ce33QJzg.js";import"./info-sign-DTKbYb66.js";import"./chevron-up-DSehXApS.js";import"./chevron-down-BtQO1pkc.js";import"./useEventCallback-hRIxgR6L.js";import"./iconLoader-Disy04jK.js";import"./Switch-BcJe0x-4.js";import"./CompositeRoot--O9jUwEd.js";import"./TimePicker-bXJGboeE.js";import"./CollapsiblePanel-D3pf9y50.js";import"./error-C-NsPFd6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XZ0oOnyA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
