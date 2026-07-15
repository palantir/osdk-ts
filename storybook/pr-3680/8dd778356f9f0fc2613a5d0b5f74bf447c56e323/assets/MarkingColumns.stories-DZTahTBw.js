import{f as n,j as t}from"./iframe-BRAN6mwJ.js";import{O as p}from"./object-table-Bx2wWP_j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-X-_euM3S.js";import"./Table-DRbSoQOy.js";import"./index-BtPJ513K.js";import"./Dialog-CMZdYx9W.js";import"./cross-fVcbgOgO.js";import"./svgIconContainer-VG5m1OWT.js";import"./useBaseUiId-As0o-zvu.js";import"./InternalBackdrop-CZ3_cdU8.js";import"./composite-JH2uFn8O.js";import"./index-CWFn4kDt.js";import"./index-Bjm1W2Qh.js";import"./index-3LlDx94I.js";import"./useEventCallback-K_kUc5Bb.js";import"./SkeletonBar-C5hstbkk.js";import"./LoadingCell-DYEqBQ_w.js";import"./ColumnConfigDialog-Bs8h4LbN.js";import"./DraggableList-DFAcJjrk.js";import"./search-BZSvBuOj.js";import"./Input-D4S4zska.js";import"./useControlled-Bl0Kxrtm.js";import"./Button-DvBPGTcG.js";import"./small-cross-CXdjjvcg.js";import"./ActionButton-C8AHXfuu.js";import"./Checkbox-CG28xJMY.js";import"./useValueChanged-CCmJ6sLa.js";import"./CollapsiblePanel-D8Nk-qTM.js";import"./MultiColumnSortDialog-CxxP_kx4.js";import"./MenuTrigger-DGFLqotq.js";import"./CompositeItem-C1kNAstD.js";import"./ToolbarRootContext-CGMWo3-1.js";import"./getDisabledMountTransitionStyles-BfkYVs9f.js";import"./getPseudoElementBounds-DvRiCaZy.js";import"./chevron-down-BIA4jTfU.js";import"./index-DmVpTzvr.js";import"./error-CudqN4ed.js";import"./BaseCbacBanner-DI6p8IW2.js";import"./makeExternalStore-BHZHOET0.js";import"./Tooltip-CzBe-wDP.js";import"./PopoverPopup-FlGwIyET.js";import"./toNumber-BIU6FNYy.js";import"./useOsdkClient-nWHxm1RL.js";import"./tick-BfHb9-1x.js";import"./DropdownField-CJWDjA1V.js";import"./withOsdkMetrics-DkYyIFw2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
