import{j as t,g as n}from"./iframe-DEpmrtbG.js";import{A as r}from"./action-form-Dw-aI59v.js";import"./preload-helper-Bgg2uCW1.js";import"./DropdownField-D0CE821u.js";import"./debounce-BECAHL4g.js";import"./useOsdkClient-CRefb4Et.js";import"./index-DgxVBE9v.js";import"./Input-DnQqAjUi.js";import"./useBaseUiId-CETaC9GH.js";import"./useControlled-CxIvThFp.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./PopoverPopup-BCiIUJbQ.js";import"./InternalBackdrop-BJf2S27G.js";import"./composite-DBo_GtSD.js";import"./index-By9oDPdz.js";import"./getDisabledMountTransitionStyles-hbhLeVH_.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./tick-C59Dr2Db.js";import"./svgIconContainer-DWCXHbm6.js";import"./small-cross-wFOvE6mp.js";import"./search-B4TawZLP.js";import"./cross-CrU6nGJP.js";import"./useValueChanged-CVjECJ2T.js";import"./getPseudoElementBounds-DeGavAO8.js";import"./CompositeItem-LCipfobg.js";import"./makeExternalStore-BaPAj8aa.js";import"./BaseForm-DVtnnQY6.js";import"./ActionButton-CmDGjkch.js";import"./Button-C-DZ3Yzq.js";import"./SkeletonBar-qEbRKPf1.js";import"./Tooltip-DFM3nmx3.js";import"./info-sign-PVuRR_5W.js";import"./chevron-up-u1U_q5Bu.js";import"./chevron-down-Cvm0d31k.js";import"./useEventCallback-DWcDc9KV.js";import"./iconLoader-C2z40OSm.js";import"./CompositeRoot-BspKcE-Z.js";import"./Switch-XBYGP_B_.js";import"./TimePicker-B2pbLqcQ.js";import"./CollapsiblePanel-BCcZQ43x.js";import"./error-DVsFEdhY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DnWSlC-3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
