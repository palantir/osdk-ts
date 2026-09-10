import{j as t,g as n}from"./iframe-CpcWMsh2.js";import{A as r}from"./action-form-BoaTn61t.js";import"./preload-helper-CN3GQMjz.js";import"./DropdownField-BHTMsNk1.js";import"./debounce-B90qMA3e.js";import"./useOsdkClient-Bf3Wfvs3.js";import"./index-Crz8jB-9.js";import"./Input-BdQWVtdR.js";import"./useBaseUiId-DXzATXKT.js";import"./useControlled-nerw9-6R.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./PopoverPopup-BmebcJ3w.js";import"./InternalBackdrop-9c6OTDK9.js";import"./composite-CtH7isvm.js";import"./index-DJLjrcri.js";import"./getDisabledMountTransitionStyles-UM54dXw7.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./tick-DWjjoXoQ.js";import"./svgIconContainer-Huh63JJu.js";import"./small-cross-5mwwvKLt.js";import"./search-BprxbqFd.js";import"./cross-BGaRJcvO.js";import"./useValueChanged-W8zfC5hp.js";import"./getPseudoElementBounds-BytC3tPt.js";import"./CompositeItem-Bm31Wr9o.js";import"./makeExternalStore-6VRmQlrr.js";import"./BaseForm-CGjBDeTd.js";import"./ActionButton-BHZtYOuv.js";import"./Button-CUMMFBAM.js";import"./SkeletonBar-Cx2Gs9qW.js";import"./Tooltip-DshyWHE3.js";import"./info-sign-cZ4QLy1g.js";import"./chevron-up-Ctp0z2FB.js";import"./chevron-down-ByJuuwk-.js";import"./useEventCallback-BGZ2MJrW.js";import"./iconLoader-DILE6ZjP.js";import"./CompositeRoot-9Gx1ntls.js";import"./Switch-Dsq4nxOC.js";import"./TimePicker-BNLRVeRs.js";import"./CollapsiblePanel-DfsLMHyx.js";import"./error-Cea5AChJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CnzpNQ91.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
