import{f as n,j as t}from"./iframe-rYyjN1FS.js";import{O as p}from"./object-table-CSpiyeJk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DwOkEC9e.js";import"./Table-CB3B80mK.js";import"./index-PWNJeJ4B.js";import"./Dialog-8LAGv1kv.js";import"./cross-BSvjvGg-.js";import"./svgIconContainer-BEMLZm2t.js";import"./useBaseUiId-CQD2o2tA.js";import"./InternalBackdrop-BoVV0Etr.js";import"./composite-By-HW_ry.js";import"./index-Bh6NEvhj.js";import"./index-DO3Y63L9.js";import"./index-Jj0ImiO-.js";import"./useEventCallback-JQJY4Qmv.js";import"./SkeletonBar-J6PrPgEl.js";import"./LoadingCell-CDg0S06T.js";import"./ColumnConfigDialog-LOk0Rson.js";import"./DraggableList-zUt64XvO.js";import"./Input-fTVX9UVJ.js";import"./useControlled-BTr5Jg05.js";import"./Button-BXo2_s7Y.js";import"./small-cross-BguLqMer.js";import"./ActionButton-CLERDDyV.js";import"./Checkbox-BymjKA71.js";import"./minus-CMbldKFP.js";import"./useValueChanged-DdRGfc_L.js";import"./caret-down-5lAbe8t7.js";import"./CollapsiblePanel-Cyse16kq.js";import"./MultiColumnSortDialog-BD3GtfVi.js";import"./MenuTrigger-jvTAB3FD.js";import"./CompositeItem-CMzdyx9O.js";import"./ToolbarRootContext-BaY47ftM.js";import"./getDisabledMountTransitionStyles-yhVoBOos.js";import"./getPseudoElementBounds-DpyITQCB.js";import"./chevron-down-BDnzlmAQ.js";import"./index-B4zDCH9M.js";import"./error-BcTK3dOp.js";import"./BaseCbacBanner-J0BIlJSG.js";import"./makeExternalStore-acP89Q3x.js";import"./Tooltip-C0efIC0_.js";import"./PopoverPopup-BcZSxfRw.js";import"./toNumber-CmgmlAs0.js";import"./useOsdkClient-GWKVLGLy.js";import"./DropdownField-BiXcix5b.js";import"./withOsdkMetrics-BikHQ76e.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
