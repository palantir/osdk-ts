import{f as n,j as t}from"./iframe-BkVpHzvQ.js";import{O as p}from"./object-table-8vRjPPrq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9AvGhZX.js";import"./Table-CFTbHakB.js";import"./index-BL4DLC1N.js";import"./Dialog-DS5wl3xV.js";import"./cross-C1A8dztN.js";import"./svgIconContainer-CF7Mc-ko.js";import"./useBaseUiId-IrylWfg4.js";import"./InternalBackdrop-DOTKGPzQ.js";import"./composite-DzCDeGJq.js";import"./index-CL4PObh9.js";import"./index-B14WgDi5.js";import"./index-Q6O6ijwn.js";import"./useEventCallback-BBeGcB9a.js";import"./SkeletonBar-0gnMevOq.js";import"./LoadingCell-B7Wxy3hp.js";import"./ColumnConfigDialog-DibCKZwr.js";import"./DraggableList-CRH-TObc.js";import"./search-BhaSBKsV.js";import"./Input-Fro39VZ2.js";import"./useControlled-BADUKuig.js";import"./Button-D2sTUWJq.js";import"./small-cross-ZeeKCGaK.js";import"./ActionButton-DpxdNF2c.js";import"./Checkbox-BhTm1STq.js";import"./useValueChanged--YSm-EUj.js";import"./CollapsiblePanel-DzMFtKbG.js";import"./MultiColumnSortDialog-CH3-x324.js";import"./MenuTrigger-CIFbC0Gs.js";import"./CompositeItem-_cOFeCFn.js";import"./ToolbarRootContext-Chua5F7w.js";import"./getDisabledMountTransitionStyles-thBhDlW8.js";import"./getPseudoElementBounds-DOC15x2m.js";import"./chevron-down-BdtrKVv2.js";import"./index-moDLjwNO.js";import"./error-NWQKXzU-.js";import"./BaseCbacBanner-BzPvoS_8.js";import"./makeExternalStore-B8ehTRKv.js";import"./Tooltip-DKBwi4i9.js";import"./PopoverPopup-DYvrbRyo.js";import"./toNumber-Co-qwoeW.js";import"./useOsdkClient-DoQ7Kyvb.js";import"./tick-Bnx2U79M.js";import"./DropdownField-BnllX9Oh.js";import"./withOsdkMetrics-mJ4OJ_RR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
