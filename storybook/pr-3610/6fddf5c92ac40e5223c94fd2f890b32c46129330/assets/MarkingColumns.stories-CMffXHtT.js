import{f as n,j as t}from"./iframe-BKZSR25P.js";import{O as p}from"./object-table-BAsiFqGa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-u_-78QZb.js";import"./Table-CYckjYZw.js";import"./index-CKD_841s.js";import"./Dialog-MhTsKWIW.js";import"./cross-CFIey-Yz.js";import"./svgIconContainer-DusdeQqA.js";import"./useBaseUiId-CJWX5oGV.js";import"./InternalBackdrop-Bwfhw-Z5.js";import"./composite-B0ttgqjc.js";import"./index-C1jxgw1d.js";import"./index-C6E5Sbqe.js";import"./index-DgZpRZ2A.js";import"./useEventCallback-DOF8yoPt.js";import"./SkeletonBar-DfjR0GuP.js";import"./LoadingCell-DP-Ji0aQ.js";import"./ColumnConfigDialog-3J71x8aU.js";import"./DraggableList-Dq5K9IPl.js";import"./search-Dl3F-NNz.js";import"./Input-CrgI8EjG.js";import"./useControlled-CHsZd_KW.js";import"./Button-C7oPWaoJ.js";import"./small-cross-CTLNwY5M.js";import"./ActionButton-icbw4IsC.js";import"./Checkbox-DVOdNkE3.js";import"./minus-pdeqdZ2k.js";import"./tick-iw1BloSB.js";import"./useValueChanged-UMUgeLwd.js";import"./caret-down-CGteFaqh.js";import"./CollapsiblePanel-ZHXzMR5u.js";import"./MultiColumnSortDialog-D0QaaxaL.js";import"./MenuTrigger-D91WEL79.js";import"./CompositeItem-DPHOJj1V.js";import"./ToolbarRootContext-BTGWSX4f.js";import"./getDisabledMountTransitionStyles-BtB2lXyk.js";import"./getPseudoElementBounds-COtbkiJg.js";import"./chevron-down-B6P62qST.js";import"./index-59_8WguB.js";import"./error-CYRaCWyI.js";import"./BaseCbacBanner-DqPtj4g7.js";import"./makeExternalStore-D-H3VwiL.js";import"./Tooltip-BUIkri6B.js";import"./PopoverPopup-B2OPOIFL.js";import"./toNumber-zSZJQ_xH.js";import"./useOsdkClient-D213QnnS.js";import"./DropdownField-DvHjSNqh.js";import"./withOsdkMetrics-DVMeuPzl.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
