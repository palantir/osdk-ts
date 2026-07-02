import{f as n,j as t}from"./iframe-824MDbsX.js";import{O as p}from"./object-table-C2iJRdsl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9fU7vfH.js";import"./Table-B17Kaf_B.js";import"./index-BvtG0yoH.js";import"./Dialog-CX9vBlwc.js";import"./cross-BvhJRl2q.js";import"./svgIconContainer-C0aQNaWj.js";import"./useBaseUiId-B7fC6zLH.js";import"./InternalBackdrop-wfCpdRwr.js";import"./composite-DlZedyd-.js";import"./index-CNlaO6D3.js";import"./index-s8tyOI8h.js";import"./index-BtM2nKX3.js";import"./useEventCallback-CKMDz2cN.js";import"./SkeletonBar-CWbJpR9P.js";import"./LoadingCell-Dkp2lt5X.js";import"./ColumnConfigDialog-QGLNI3vq.js";import"./DraggableList-1YDOv-LT.js";import"./search-DQehjN2R.js";import"./Input-B71CK3bD.js";import"./useControlled-CqytqVhE.js";import"./Button-BgArZGHK.js";import"./small-cross-CT0wMCSB.js";import"./ActionButton-BQASYBrp.js";import"./Checkbox-DR845Tha.js";import"./minus-CklVROHx.js";import"./tick-B_ttueYJ.js";import"./useValueChanged-DEYTclBc.js";import"./caret-down-DHJ32lcM.js";import"./CollapsiblePanel-JubEHFKQ.js";import"./MultiColumnSortDialog-CutLJbjq.js";import"./MenuTrigger-hbopTXbM.js";import"./CompositeItem-Cl5D5ixC.js";import"./ToolbarRootContext-Cw_8-e2d.js";import"./getDisabledMountTransitionStyles-BH9yTp9J.js";import"./getPseudoElementBounds-DvZMAOyT.js";import"./chevron-down-CQa1ZH9Z.js";import"./index-CwTH1dCS.js";import"./error-Djg1igBh.js";import"./BaseCbacBanner-eBxc4bqB.js";import"./makeExternalStore-CnAxKKCp.js";import"./Tooltip-43G3TeZc.js";import"./PopoverPopup-BgSbMZKV.js";import"./toNumber-CIFgP7m3.js";import"./useOsdkClient-HVepMAzu.js";import"./DropdownField-XA2TJgdI.js";import"./withOsdkMetrics-D4774-Fy.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
