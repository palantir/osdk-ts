import{f as n,j as t}from"./iframe-CDvWiTli.js";import{O as p}from"./object-table-Cu5iCoIf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9ozje1rh.js";import"./Table-vhdO5Is6.js";import"./index-CyujWbyi.js";import"./Dialog-CLGnTg5X.js";import"./cross-Bv0LJGn2.js";import"./svgIconContainer-DB9Ze22o.js";import"./useBaseUiId-DzzuGPPW.js";import"./InternalBackdrop-DNPvUfux.js";import"./composite-By3TAu-9.js";import"./index--6tfw9ra.js";import"./index-B3FSkHEh.js";import"./index-CSZLep8R.js";import"./useEventCallback-CQqa104J.js";import"./SkeletonBar-DrQ2q47S.js";import"./LoadingCell-Cij6CXty.js";import"./ColumnConfigDialog-DrSpk9ry.js";import"./DraggableList-YBcKq_Hf.js";import"./search-Buypx2Zu.js";import"./Input-DboAu0u6.js";import"./useControlled-DIQPWY3_.js";import"./Button-BM405h_w.js";import"./small-cross-3d5Tnmis.js";import"./ActionButton-B8rdXHVm.js";import"./Checkbox-BgwHYbaY.js";import"./minus-CProqGdy.js";import"./tick-B1s80BPn.js";import"./useValueChanged-BHabaJxI.js";import"./caret-down-x7Q67F7G.js";import"./CollapsiblePanel-DZyLcN9z.js";import"./MultiColumnSortDialog-B86iEowO.js";import"./MenuTrigger-CVLAhMAv.js";import"./CompositeItem-CXw04HWM.js";import"./ToolbarRootContext-Dws7trkk.js";import"./getDisabledMountTransitionStyles-CkOINVsi.js";import"./getPseudoElementBounds-Cg1aOwFr.js";import"./chevron-down-z3UkpJN3.js";import"./index-0rnZUxGt.js";import"./error-BGBHkm2P.js";import"./BaseCbacBanner-B8J_xq3K.js";import"./makeExternalStore-CvCwHhQX.js";import"./Tooltip-BDKUzGh-.js";import"./PopoverPopup-rKeLA2iy.js";import"./toNumber-BeDEcQ5o.js";import"./useOsdkClient-DRgkpKtK.js";import"./DropdownField-DWHkLyLI.js";import"./withOsdkMetrics-Cf4YfkcX.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
