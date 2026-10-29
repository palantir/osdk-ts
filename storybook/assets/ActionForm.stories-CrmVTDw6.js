import{j as t,g as n}from"./iframe-CAIgECfm.js";import{A as r}from"./action-form-CyB6GR9r.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Cvt8oMSZ.js";import"./debounce-B0a0YjK6.js";import"./useOsdkClient-C0sKTx_B.js";import"./index-B3MYTMei.js";import"./Input-DiYmIIHx.js";import"./useBaseUiId-D9Drx6D-.js";import"./useControlled-Dfbx34Uf.js";import"./index-oq0LOBzb.js";import"./index-Ufz-XkYv.js";import"./PopoverPopup-BQG7iL0H.js";import"./InternalBackdrop-CszvMWda.js";import"./composite-JJXOCwqO.js";import"./index-Bo8EBVtj.js";import"./getDisabledMountTransitionStyles-Dte8P-y1.js";import"./ToolbarRootContext-wvUb7vtw.js";import"./tick-DJkFbBfA.js";import"./svgIconContainer-C3DKY__f.js";import"./small-cross-Dd4LJYDa.js";import"./search-DtjskLKm.js";import"./cross-BQNRDOaU.js";import"./useValueChanged-5KOAJGnG.js";import"./getPseudoElementBounds-DK95qc36.js";import"./CompositeItem-ByF2vx3e.js";import"./makeExternalStore-1s6PxRaa.js";import"./BaseForm-DsmvykA-.js";import"./ActionButton-Dm82L77i.js";import"./Button-B8Prvm33.js";import"./SkeletonBar-BTrZKUFD.js";import"./Tooltip-BLisYypf.js";import"./info-sign-BFxGP_aP.js";import"./chevron-up-K48VvhXT.js";import"./chevron-down-DmkBexVO.js";import"./useEventCallback-DEW-Jvqw.js";import"./iconLoader-D8IDMJ9T.js";import"./Switch-D_pc3-Ii.js";import"./CompositeRoot--pC6VFJA.js";import"./TimePicker-C0t23fhp.js";import"./CollapsiblePanel-DdLN5yGK.js";import"./error-DOslEiGD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BxbwCQgj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
