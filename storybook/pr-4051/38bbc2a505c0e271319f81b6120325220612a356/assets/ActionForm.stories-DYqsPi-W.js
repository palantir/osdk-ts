import{j as t,g as n}from"./iframe-B9FGe5wd.js";import{A as r}from"./action-form-DeWdc7W2.js";import"./preload-helper-BIve45PS.js";import"./DropdownField-COR0BXwM.js";import"./debounce-m12bCzvP.js";import"./useOsdkClient-usrWCKIw.js";import"./index-B6Sv1VZS.js";import"./Input-Dxr70xfD.js";import"./useBaseUiId-DfSj_XIi.js";import"./useControlled-c-18TxdJ.js";import"./index-BkBeEw9r.js";import"./index-DrrLP325.js";import"./PopoverPopup-C_VmHiZ7.js";import"./InternalBackdrop--zuPxYtX.js";import"./composite-DHxnLj2Y.js";import"./index-Dxjh7rRf.js";import"./getDisabledMountTransitionStyles-CRl0TcRY.js";import"./ToolbarRootContext-ClYwCpcv.js";import"./tick-B7eZKbT-.js";import"./svgIconContainer-CaF_wsik.js";import"./small-cross-DRTTYj7_.js";import"./search-oVgFpE2T.js";import"./cross-D3t_et5l.js";import"./useValueChanged-CBKkH70d.js";import"./getPseudoElementBounds-DuNPvi2X.js";import"./CompositeItem-D_joThID.js";import"./makeExternalStore-hUZ9hqeg.js";import"./BaseForm-B7QkzH4U.js";import"./ActionButton-CL2cla4Q.js";import"./Button-D3RbxwJA.js";import"./SkeletonBar-D8XdUgSi.js";import"./Tooltip-CpDuLI7V.js";import"./info-sign-DwqI1MyU.js";import"./chevron-up-xhbdgnGk.js";import"./chevron-down-BJC3N-Xj.js";import"./useEventCallback-688mizLg.js";import"./iconLoader-eJNvamGn.js";import"./Switch-CJHEgjEI.js";import"./CompositeRoot-Dc9JyptG.js";import"./TimePicker-wafmtLhM.js";import"./CollapsiblePanel-mSdRRs77.js";import"./error-DJQGwxmj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bxy0f18Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
