import{f as n,j as t}from"./iframe-DYEsw9Jb.js";import{O as p}from"./object-table-DGFRiUTu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CqTPAs1-.js";import"./Table-gthod9Cr.js";import"./index-rKpgFT4B.js";import"./Dialog-Zub-vuSE.js";import"./cross-CEJZ0QJE.js";import"./svgIconContainer-Ep4B-7k3.js";import"./useBaseUiId-R9XHVV5s.js";import"./InternalBackdrop-CJY7wN6v.js";import"./composite-BExUsQtH.js";import"./index-BB2HU14Y.js";import"./index-OKzGs_og.js";import"./index-CGHW13Mu.js";import"./useEventCallback-CIiU4_xH.js";import"./SkeletonBar-BuQGjEC2.js";import"./LoadingCell-Bwv-FS1q.js";import"./ColumnConfigDialog-BN55iGhp.js";import"./DraggableList-BZUZZFvj.js";import"./Input-DBujCEAt.js";import"./useControlled-DwOoZCA5.js";import"./Button-DL_BJkq8.js";import"./small-cross-D3VPhnGL.js";import"./ActionButton-DFPNSZAX.js";import"./Checkbox-D03tYB4u.js";import"./minus-CefI1boG.js";import"./useValueChanged-BEnYBh8A.js";import"./caret-down-BWanr_mJ.js";import"./CollapsiblePanel-d2D_q-NJ.js";import"./MultiColumnSortDialog-B1noJWSB.js";import"./MenuTrigger-DrJ3gme4.js";import"./CompositeItem-7-W7FaG8.js";import"./ToolbarRootContext-7fSwrXwn.js";import"./getDisabledMountTransitionStyles-B7rnSUFI.js";import"./getPseudoElementBounds-aq4NDIW8.js";import"./chevron-down-D8V8HxWq.js";import"./index-Dc_OOPzN.js";import"./error-BKxzXRUt.js";import"./BaseCbacBanner-D2Fyni5Y.js";import"./makeExternalStore-CK_bsYtR.js";import"./Tooltip-DnvP6EB_.js";import"./PopoverPopup-atP-rQCm.js";import"./toNumber-DDGJOv7N.js";import"./useOsdkClient-ClH-F4OD.js";import"./DropdownField-CXjoX74D.js";import"./withOsdkMetrics-CwTlLXct.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
