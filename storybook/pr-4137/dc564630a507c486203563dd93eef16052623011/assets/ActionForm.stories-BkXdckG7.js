import{j as t,g as n}from"./iframe-HPloXe9j.js";import{A as r}from"./action-form-DxP96bGW.js";import"./preload-helper-DScJgkz5.js";import"./DropdownField-j8LPkCHX.js";import"./debounce-3RrYA89K.js";import"./useOsdkClient-BZavVCL8.js";import"./index-CYy51o6d.js";import"./Input-BxTgEocG.js";import"./useBaseUiId-CuSCou4B.js";import"./useControlled-8YOYv55u.js";import"./index-CZ-MIMEA.js";import"./index-CLiETF6g.js";import"./PopoverPopup-zlChUm0U.js";import"./InternalBackdrop-CuN7aJKc.js";import"./composite-BKkRB1Ja.js";import"./index-BtQkTWRV.js";import"./getDisabledMountTransitionStyles-I0fd0fDa.js";import"./ToolbarRootContext-C0mmD1Sp.js";import"./tick-COIkFqpx.js";import"./svgIconContainer-DgH7XjE0.js";import"./small-cross-Ccl3EiTU.js";import"./search-BtGEDCk0.js";import"./cross-9AkiFjIe.js";import"./useValueChanged-D8dkL44z.js";import"./getPseudoElementBounds-BzI7Zs8z.js";import"./CompositeItem-BeYsw0Rf.js";import"./makeExternalStore-B18oZ143.js";import"./BaseForm-B4rI4Mlt.js";import"./ActionButton-CzZ5C-jr.js";import"./Button-6Q_hxnNq.js";import"./SkeletonBar-BmlxW_EU.js";import"./Tooltip-CXYD7mSj.js";import"./info-sign-BoBfrPjy.js";import"./chevron-up-DlUXpsgU.js";import"./chevron-down-BfaqTxAc.js";import"./useEventCallback-D7m3Yiiv.js";import"./iconLoader-DzQObr-z.js";import"./Switch-C6Mvl5JQ.js";import"./CompositeRoot-LN4w2psQ.js";import"./TimePicker-2XCi_zw8.js";import"./CollapsiblePanel-DgpfvzE6.js";import"./error-CtWAgql8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1kb3R25.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
