import{j as t,g as n}from"./iframe-0nbFd4Up.js";import{A as r}from"./action-form-By3gNI4T.js";import"./preload-helper-C9c2Zh8f.js";import"./DropdownField-DdLtiHfF.js";import"./debounce--e6JvBD_.js";import"./useOsdkClient-CrSzWz2k.js";import"./index-DwMakAAg.js";import"./Input-YuE0Ls83.js";import"./useBaseUiId-hHYCbJGR.js";import"./useControlled-Gi7J51jw.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./PopoverPopup-DFBzgF9k.js";import"./InternalBackdrop-KhB9QZ7N.js";import"./composite-BsbtETqs.js";import"./index-D8qb59k0.js";import"./getDisabledMountTransitionStyles-BI_PHpJd.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./tick-CC64mxmv.js";import"./svgIconContainer-CfgrNU9r.js";import"./small-cross--2hEoLnO.js";import"./search-DDtr797p.js";import"./cross-DNUyMOOH.js";import"./useValueChanged-BdLBZwcj.js";import"./getPseudoElementBounds-aNzsWKIs.js";import"./CompositeItem-C9hOZqfz.js";import"./makeExternalStore-Dwl2nMnb.js";import"./BaseForm-Bg5jIH-H.js";import"./ActionButton-Tx5l-Qj1.js";import"./Button-Cn_l7fEs.js";import"./SkeletonBar-BJn80Ony.js";import"./Tooltip-CRSGFbZX.js";import"./info-sign-CEgEibXs.js";import"./chevron-up-Cx5pxXPE.js";import"./chevron-down-BNwXq3g8.js";import"./useEventCallback-nhi0bkCi.js";import"./iconLoader-kX7J0gkW.js";import"./Switch-id6JcyWB.js";import"./CompositeRoot-DeccQZNp.js";import"./TimePicker-BJRcK3ep.js";import"./CollapsiblePanel-vf3p_QIK.js";import"./error-CFI9j2MF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DTNlxinE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
