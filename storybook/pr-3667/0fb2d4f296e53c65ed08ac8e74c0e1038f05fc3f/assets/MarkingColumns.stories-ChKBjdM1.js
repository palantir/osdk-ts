import{f as n,j as t}from"./iframe-Bje1PeXU.js";import{O as p}from"./object-table-Cw0MYULE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9cEDirq.js";import"./Table-CyRTiHRv.js";import"./index-BaO-uBYL.js";import"./Dialog-Cfl5C7Ea.js";import"./cross-TzUlRH64.js";import"./svgIconContainer-2VGySw6h.js";import"./useBaseUiId-DHobwu9M.js";import"./InternalBackdrop-sRFUKmfP.js";import"./composite-Dezx9PFo.js";import"./index-BX-js2Qc.js";import"./index-DKJRCQ3B.js";import"./index-BozlONTY.js";import"./useEventCallback-BfidMDpR.js";import"./SkeletonBar-CVFRx8qB.js";import"./LoadingCell-BXBpfKhe.js";import"./ColumnConfigDialog-DeIL5HJE.js";import"./DraggableList-hh3pEDMA.js";import"./search-Qxl1jFm7.js";import"./Input-DB2Y3-TH.js";import"./useControlled-CNTUQqmb.js";import"./Button-B_mhpdsw.js";import"./small-cross-BhZwUvXZ.js";import"./ActionButton-BxIo3J6F.js";import"./Checkbox-B__7VVWx.js";import"./useValueChanged-CnfLg8Tx.js";import"./CollapsiblePanel-BKUiEAUI.js";import"./MultiColumnSortDialog-Daqm_R-N.js";import"./MenuTrigger-2Bpd5ZZQ.js";import"./CompositeItem-CbDPgCh-.js";import"./ToolbarRootContext-BzphdH9N.js";import"./getDisabledMountTransitionStyles-6HdMosnh.js";import"./getPseudoElementBounds--fhw1I1y.js";import"./chevron-down-D2rppxKJ.js";import"./index-DYEDQ1mz.js";import"./error-D0d9BVEp.js";import"./BaseCbacBanner-L4bxUCLe.js";import"./makeExternalStore-BQG5_Y3O.js";import"./Tooltip-Dmpa1CQk.js";import"./PopoverPopup-DV433XpP.js";import"./toNumber-BTLS1AMM.js";import"./useOsdkClient-DvL9n_rW.js";import"./tick-BxhPYmkc.js";import"./DropdownField-DQUfy36E.js";import"./withOsdkMetrics-KW-nKQQF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
