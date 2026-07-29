import{j as e}from"./iframe-CKD5HruB.js";import{useMDXComponents as r}from"./index-6TQ29P93.js";import{M as c,C as s}from"./blocks-DCjtb_9b.js";import{Default as t,ReadOnly as l,WithInitialSelection as h,InDialog as o,WithImpliedAndDisallowed as a,BannerOnly as x}from"./CbacPicker.stories-rl4K4XoE.js";import"./preload-helper-hKF5-QEH.js";import"./index-C-Jtbf2R.js";import"./index-gvH2Yom1.js";import"./index-Ew-9EV14.js";import"./index-BFBLg6hy.js";import"./Button-CyC_7-fu.js";import"./useBaseUiId-D5bspJ_1.js";import"./cross-BHctvI5a.js";import"./svgIconContainer-CkOzuBrZ.js";import"./Tooltip-Db6_vURK.js";import"./InternalBackdrop-Dgf6hbWz.js";import"./composite-DWKJExsa.js";import"./getDisabledMountTransitionStyles-0Pv_e8jb.js";import"./ToolbarRootContext-CJlMENjt.js";import"./PopoverPopup-DkEFC2C3.js";import"./info-sign-Cs5FPkUz.js";import"./makeExternalStore-kUPM65ES.js";import"./useRegisterUserAgent-BcwR52Bp.js";import"./ActionButton-Dcz3KYGz.js";import"./Dialog-DiQi6URM.js";function d(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{title:"Components/CbacPicker/Docs",tags:["beta"]}),`
`,e.jsx(i.h1,{id:"cbacpicker",children:"CbacPicker"}),`
`,e.jsx(i.p,{children:`Components for managing classification-based access control (CBAC) markings.
CBAC markings control who can access data. Each piece of data can be tagged
with markings from different categories, and the combination determines its
access restrictions.`}),`
`,e.jsxs(i.p,{children:[`The picker lets users select markings grouped by category. Some categories are
`,e.jsx(i.strong,{children:"disjunctive"}),` (pick exactly one, like a sensitivity level) and others are
`,e.jsx(i.strong,{children:"conjunctive"}),` (pick any combination, like access groups). The server enforces
which combinations are valid, which markings are implied by others, and which
are disallowed.`]}),`
`,e.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { CbacPicker } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function ClassificationForm() {
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  return (
    <CbacPicker
      initialMarkingIds={markingIds}
      onChange={setMarkingIds}
    />
  );
}
`})}),`
`,e.jsx(i.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Install ",e.jsx(i.code,{children:"@osdk/cbac-components"})," and its peer dependencies"]}),`
`,e.jsxs(i.li,{children:["Wrap your app with ",e.jsx(i.code,{children:"OsdkProvider"})]}),`
`,e.jsxs(i.li,{children:["Import ",e.jsx(i.code,{children:"@osdk/cbac-components/styles.css"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["See the ",e.jsx(i.a,{href:"https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/README.md#setup",rel:"nofollow",children:"README"}),`
for full setup instructions.`]}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"read-only-display",children:"Read-only display"}),`
`,e.jsxs(i.p,{children:["Disable all marking interactions by setting ",e.jsx(i.code,{children:"readOnly"})," to ",e.jsx(i.code,{children:"true"}),"."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(i.h3,{id:"with-initial-selection",children:"With initial selection"}),`
`,e.jsx(i.p,{children:"Pre-populate the picker with an existing set of marking IDs."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"picker-in-a-dialog",children:"Picker in a dialog"}),`
`,e.jsxs(i.p,{children:["For modal workflows, use ",e.jsx(i.code,{children:"CbacPickerDialog"}),` to present the picker in a dialog
with confirm and cancel actions.`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(i.h3,{id:"with-implied-and-disallowed-markings",children:"With implied and disallowed markings"}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"BaseCbacPicker"})," with ",e.jsx(i.code,{children:"computeMarkingStates"}),` to display markings that are
automatically implied or restricted by the current selection.`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h3,{id:"banner-only",children:"Banner only"}),`
`,e.jsx(i.p,{children:"Display a standalone classification banner without the picker."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(i.h3,{id:"cbacpicker-props",children:"CbacPicker Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"initialMarkingIds"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"Initial set of selected marking IDs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(markingIds: string[]) => void"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Called when the selection changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxClassificationConstraint"})}),e.jsx("td",{children:e.jsx("code",{children:"MaxClassificationConstraint"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Upper bound on the classification level"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Disables marking toggle interactions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"CSS class for the picker container"})]})]})]}),`
`,e.jsx(i.h3,{id:"cbacpickerdialog-props",children:"CbacPickerDialog Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isOpen"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Controls dialog visibility"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onOpenChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(open: boolean) => void"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Called when dialog open state changes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onConfirm"})}),e.jsx("td",{children:e.jsx("code",{children:"(markingIds: string[]) => void"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Called with the selected marking IDs on confirm"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"initialMarkingIds"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"Initial set of selected marking IDs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxClassificationConstraint"})}),e.jsx("td",{children:e.jsx("code",{children:"MaxClassificationConstraint"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Upper bound on the classification level"})]})]})]}),`
`,e.jsx(i.p,{children:`The dialog title automatically adjusts: "Add classification" when no initial
markings are provided, "Edit classification" when editing existing markings.
The confirm button is disabled with a tooltip when the selection is invalid.`}),`
`,e.jsx(i.h3,{id:"basecbacpicker-props",children:"BaseCbacPicker Props"}),`
`,e.jsx(i.p,{children:`For advanced use cases where you supply your own marking data instead of
fetching from the OSDK.`}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"categories"})}),e.jsx("td",{children:e.jsx("code",{children:"CategoryMarkingGroup[]"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Marking categories with their markings"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"markingStates"})}),e.jsx("td",{children:e.jsx("code",{children:"Map<string, MarkingSelectionState>"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"State for each marking (SELECTED, IMPLIED, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"banner"})}),e.jsx("td",{children:e.jsx("code",{children:"CbacBannerData"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Banner data (classification string, colors)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onMarkingToggle"})}),e.jsx("td",{children:e.jsx("code",{children:"(markingId: string) => void"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Called when a marking button is clicked"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onDismissBanner"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Called when the banner dismiss button is clicked"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"showInfoBanner"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:'Show the "implied markings" info banner'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"requiredMarkingGroups"})}),e.jsx("td",{children:e.jsx("code",{children:"ReadonlyArray<RequiredMarkingGroup>"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Groups of markings that must be selected together"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isValid"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Whether the current selection is valid"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Disable marking interactions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Show loading state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"error"})}),e.jsx("td",{children:e.jsx("code",{children:"Error"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Show error message"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"CSS class for the container"})]})]})]}),`
`,e.jsx(i.h3,{id:"basecbacbanner-props",children:"BaseCbacBanner Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"classificationString"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Text displayed in the banner"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"textColor"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Banner text color"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"backgroundColors"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Background colors (rendered as gradient if multiple)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Makes banner clickable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onDismiss"})}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Shows a dismiss button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"CSS class for the banner"})]})]})]}),`
`,e.jsx(i.h3,{id:"types",children:"Types"}),`
`,e.jsx(i.h4,{id:"markingselectionstate",children:"MarkingSelectionState"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"State"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"NONE"'})}),e.jsx("td",{children:"Default state, marking is available but not selected"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"SELECTED"'})}),e.jsx("td",{children:"Marking is explicitly selected by the user"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"IMPLIED"'})}),e.jsx("td",{children:"Marking is automatically included due to other selected markings"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"DISALLOWED"'})}),e.jsx("td",{children:"Marking cannot be selected due to restrictions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'"IMPLIED_DISALLOWED"'})}),e.jsx("td",{children:"Marking is both implied and disallowed by the current selection"})]})]})]}),`
`,e.jsx(i.h4,{id:"categorymarkinggroup",children:"CategoryMarkingGroup"}),`
`,e.jsxs(i.p,{children:[`A category paired with all markings that belong to it. Each category has a
`,e.jsx(i.code,{children:"categoryType"})," (",e.jsx(i.code,{children:'"CONJUNCTIVE"'})," for checkbox-style or ",e.jsx(i.code,{children:'"DISJUNCTIVE"'}),` for
radio-style) and a `,e.jsx(i.code,{children:"markingType"})," (",e.jsx(i.code,{children:'"MANDATORY"'})," or ",e.jsx(i.code,{children:'"CBAC"'}),")."]}),`
`,e.jsx(i.h3,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"@osdk/cbac-components/experimental"}),` barrel exports these selection logic
utilities alongside the components:`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Export"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"computeMarkingStates"})}),e.jsx("td",{children:"Compute display state for each marking given selected, implied, and disallowed IDs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toggleMarking"})}),e.jsx("td",{children:"Toggle a marking in the selection, respecting conjunctive/disjunctive category rules"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"groupMarkingsByCategory"})}),e.jsx("td",{children:"Group a flat list of markings into CategoryMarkingGroup arrays"})]})]})]}),`
`,e.jsx(i.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"@osdk/cbac-components"})," follows a two-layer architecture:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"OSDK layer"})," (",e.jsx(i.code,{children:"CbacPicker"}),", ",e.jsx(i.code,{children:"CbacPickerDialog"}),`) fetches data using
`,e.jsx(i.code,{children:"@osdk/react"}),` hooks, converts it to primitive props, and passes it to the
base layer.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Base layer"})," (",e.jsx(i.code,{children:"BaseCbacPicker"}),", ",e.jsx(i.code,{children:"BaseCbacBanner"}),", ",e.jsx(i.code,{children:"BaseCbacPickerDialog"}),`)
provides pure UI with no OSDK dependency, accepting primitive data directly.`]}),`
`]}),`
`,e.jsx(i.p,{children:`Most users should use the OSDK-layer components. The base components are for
advanced use cases where you already have marking data from a different source.`}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Marking buttons are keyboard navigable via ",e.jsx(i.code,{children:"Tab"})]}),`
`,e.jsxs(i.li,{children:["Each marking button supports ",e.jsx(i.code,{children:"Enter"}),"/",e.jsx(i.code,{children:"Space"})," to toggle selection"]}),`
`,e.jsxs(i.li,{children:["The classification banner dismiss button has an ",e.jsx(i.code,{children:"aria-label"})]}),`
`,e.jsxs(i.li,{children:["Loading and error states use appropriate ",e.jsx(i.code,{children:"role"})," attributes (",e.jsx(i.code,{children:"status"}),", ",e.jsx(i.code,{children:"alert"}),")"]}),`
`,e.jsxs(i.li,{children:["Disallowed markings have ",e.jsx(i.code,{children:"aria-disabled"})," to communicate state to screen readers"]}),`
`]})]})}function L(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(d,{...n})}):d(n)}export{L as default};
