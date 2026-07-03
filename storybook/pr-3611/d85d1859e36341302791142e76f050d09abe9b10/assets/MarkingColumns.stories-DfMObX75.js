import{f as n,j as t}from"./iframe-mtefFlYx.js";import{O as p}from"./object-table-5PqxFl9M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMg5tkBc.js";import"./Table-DtekIPJ8.js";import"./index-D5EVZcT6.js";import"./Dialog-CKXe6qma.js";import"./cross-ryeNHxpX.js";import"./svgIconContainer-XXeuxZEq.js";import"./useBaseUiId-CH2Oddap.js";import"./InternalBackdrop-CiTZxro7.js";import"./composite-DP5yfQBs.js";import"./index-BnK9EFlB.js";import"./index-B7xmUkLM.js";import"./index-BOSao0tt.js";import"./useEventCallback-CLIciaSx.js";import"./SkeletonBar-DR5B6Byw.js";import"./LoadingCell-CXoJdmNW.js";import"./ColumnConfigDialog-DzyNrk7J.js";import"./DraggableList-C-JH2xdQ.js";import"./search-BvNGMiW-.js";import"./Input-Box540y_.js";import"./useControlled-DUyBSi1T.js";import"./Button-CNnlY8OQ.js";import"./small-cross-m1t25jgR.js";import"./ActionButton-DNKP-E2I.js";import"./Checkbox-B0nN2K87.js";import"./useValueChanged-CCUtkdym.js";import"./CollapsiblePanel-D9QSrd-w.js";import"./MultiColumnSortDialog-qK4qKLx6.js";import"./MenuTrigger-BSFWK_ZM.js";import"./CompositeItem-eF3gpMHO.js";import"./ToolbarRootContext-BoGcPfLr.js";import"./getDisabledMountTransitionStyles-B0HDGRMo.js";import"./getPseudoElementBounds-DTJrRVIr.js";import"./chevron-down-DdiMYB74.js";import"./index-hOrZ8mE-.js";import"./error-BI1AD_9O.js";import"./BaseCbacBanner-BZc8f4j6.js";import"./makeExternalStore-BJTuK7VG.js";import"./Tooltip-D_sH3DSD.js";import"./PopoverPopup-DhTbVVx0.js";import"./toNumber-DRp0mlYa.js";import"./useOsdkClient-Am-ZJ2Cv.js";import"./tick-XZBYT5Br.js";import"./DropdownField-jBL1fkhz.js";import"./withOsdkMetrics-DC3iijN8.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
