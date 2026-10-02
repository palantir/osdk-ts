import{j as t,g as n}from"./iframe-UiMnRuuf.js";import{A as r}from"./action-form-Ccy2nTg7.js";import"./preload-helper-D9-KtqjS.js";import"./DropdownField-CWywt0Av.js";import"./debounce-CO81sG8W.js";import"./useOsdkClient-BHPGD1cz.js";import"./index-0Ixo6srr.js";import"./Input-CNfnK_9k.js";import"./useBaseUiId-BENer-r-.js";import"./useControlled-BRDQspVd.js";import"./index-e-D0c2mh.js";import"./index-DBgZ08g1.js";import"./PopoverPopup-BQIehYyb.js";import"./InternalBackdrop-ETQR7T-n.js";import"./composite-jFy9GvzG.js";import"./index-DEITom6T.js";import"./getDisabledMountTransitionStyles-D8Fbf3VT.js";import"./ToolbarRootContext-B5RqdBSK.js";import"./tick-Cm7cC8fk.js";import"./svgIconContainer-Dm9tYT__.js";import"./small-cross-R5-Dp5lp.js";import"./search-Cp4CoIwR.js";import"./cross-CN0okcjD.js";import"./useValueChanged-DyztBfxc.js";import"./getPseudoElementBounds-DbDKue2D.js";import"./CompositeItem-BAINckPf.js";import"./makeExternalStore-pWUg2aV2.js";import"./BaseForm-GfM9VOT8.js";import"./ActionButton-DuhhsnPX.js";import"./Button-rRx38Mfg.js";import"./SkeletonBar-Dd8DJhB7.js";import"./Tooltip-Ci9SwqoQ.js";import"./info-sign-BKy1Qu1d.js";import"./chevron-up-mLNM90Gi.js";import"./chevron-down-CpxF8NNT.js";import"./useEventCallback-DXT4fJhK.js";import"./iconLoader-CXOslrxF.js";import"./Switch-0VTmNmxh.js";import"./CompositeRoot-DUQjDJ72.js";import"./TimePicker-BWVK93nz.js";import"./CollapsiblePanel-DFbxjutV.js";import"./error-Cy2KrzuU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6UjXomb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
