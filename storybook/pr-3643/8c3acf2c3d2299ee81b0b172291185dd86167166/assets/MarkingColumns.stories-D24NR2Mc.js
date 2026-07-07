import{f as n,j as t}from"./iframe-XEuGnsRt.js";import{O as p}from"./object-table-_UHYQX6_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3LA7DjD.js";import"./Table-BcibfcEg.js";import"./index-hoYFZTEU.js";import"./Dialog-D_mBKZUP.js";import"./cross-BkPJ4PVY.js";import"./svgIconContainer-Cb0RQGHu.js";import"./useBaseUiId-mCdtl4Rh.js";import"./InternalBackdrop-Dlc-yvI_.js";import"./composite-C7wKqsc5.js";import"./index-5B18EPoI.js";import"./index-Bm5H1-Zc.js";import"./index-DxPjU1RD.js";import"./useEventCallback-BXLpHy4Q.js";import"./SkeletonBar-CPImx-zD.js";import"./LoadingCell-BXX7To8Z.js";import"./ColumnConfigDialog-D59jO6Us.js";import"./DraggableList-Di19QZuD.js";import"./search-DrYL0jYv.js";import"./Input-BhE5wDoN.js";import"./useControlled-Ckobll8s.js";import"./Button-U91LUJU5.js";import"./small-cross-BXWfHbnv.js";import"./ActionButton-CTzHxAnF.js";import"./Checkbox-D9y8jkEY.js";import"./useValueChanged-UOAKkZbL.js";import"./CollapsiblePanel-DpP5dUOC.js";import"./MultiColumnSortDialog-K3YkdOcz.js";import"./MenuTrigger-alT3VBp4.js";import"./CompositeItem-B3HgSfnx.js";import"./ToolbarRootContext-DFElDt9z.js";import"./getDisabledMountTransitionStyles-cjPb1eyH.js";import"./getPseudoElementBounds-BM8-KJSz.js";import"./chevron-down-D0a4uQjN.js";import"./index-BJHmMD-z.js";import"./error-cdNJDk16.js";import"./BaseCbacBanner-7WgXRQgh.js";import"./makeExternalStore-J5wtFKEn.js";import"./Tooltip-CM7FIUkT.js";import"./PopoverPopup-Ci5HbqZ7.js";import"./toNumber-DdZO3eWY.js";import"./useOsdkClient-BDGuTD9F.js";import"./tick-v51j4XjK.js";import"./DropdownField-DR-jM4-A.js";import"./withOsdkMetrics-BM-nqYzx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
