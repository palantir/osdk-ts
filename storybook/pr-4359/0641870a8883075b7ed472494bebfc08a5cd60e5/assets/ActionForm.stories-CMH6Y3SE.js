import{j as t,g as n}from"./iframe-BZzSz7BH.js";import{A as r}from"./action-form-D0CkftzC.js";import"./preload-helper-CNCm3N6L.js";import"./DropdownField-squh2G6a.js";import"./debounce-bMnFMRzg.js";import"./useOsdkClient-PElMpwH_.js";import"./index-B0_2NaMN.js";import"./Input-D_wnf1zt.js";import"./useBaseUiId-DkyKYNDq.js";import"./useControlled-DTdqQX0O.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./PopoverPopup-DSpnAg_f.js";import"./InternalBackdrop-Dz8c766k.js";import"./composite-BTQMDNX2.js";import"./index-B8CHFzHN.js";import"./getDisabledMountTransitionStyles-CVVnoiuw.js";import"./ToolbarRootContext-BbBpvcok.js";import"./tick-DNPnh0Dr.js";import"./svgIconContainer-Dhl9__RH.js";import"./small-cross-duhx-2IW.js";import"./search-Bp2lXg3F.js";import"./cross-DZZxBCNz.js";import"./useValueChanged-BTOjYRe_.js";import"./getPseudoElementBounds-CNHnb_Zs.js";import"./CompositeItem-B-WQrem9.js";import"./makeExternalStore-8dQqHLia.js";import"./BaseForm-BDeQ8IcR.js";import"./ActionButton-CPOmOwV3.js";import"./Button-DjbJHqTl.js";import"./SkeletonBar-BHiQfJ3N.js";import"./Tooltip-DpHxoLtf.js";import"./info-sign-CSCG8l5W.js";import"./chevron-up-Bjrspjdo.js";import"./chevron-down-BtcR6Z3d.js";import"./useEventCallback-s0-nnfm7.js";import"./iconLoader-Cu3c6PAV.js";import"./Switch-njcawG5E.js";import"./CompositeRoot-96hpSuFG.js";import"./TimePicker-Js9cSVxl.js";import"./CollapsiblePanel-Cn1JiM3m.js";import"./error-CUMr5i6e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-EMHKCnPx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
