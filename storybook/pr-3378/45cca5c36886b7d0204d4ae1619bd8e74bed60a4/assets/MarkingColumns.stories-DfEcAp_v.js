import{f as n,j as t}from"./iframe-CrtKjtEH.js";import{O as p}from"./object-table-DZ94ftyj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SSahoAr9.js";import"./Table-JZdg7GZI.js";import"./index-BwQBel0j.js";import"./Dialog-DvJk3xGZ.js";import"./cross-Cz8Bb3_T.js";import"./svgIconContainer-Dh3sUjjs.js";import"./useBaseUiId-DFsa-aX3.js";import"./InternalBackdrop-DHnTIILL.js";import"./composite-us4_F480.js";import"./index-Cq2x_ofO.js";import"./index-Sa5B4YvM.js";import"./index-CuGk1-av.js";import"./useEventCallback-SxjUEFvH.js";import"./SkeletonBar-BYsqkHTT.js";import"./LoadingCell-BGeEx55K.js";import"./ColumnConfigDialog-CXAwcs_C.js";import"./DraggableList-CMqs31lE.js";import"./search-CKBv43nH.js";import"./Input-hNZs0cNG.js";import"./useControlled-DFzHzZIl.js";import"./Button-H44IxOh8.js";import"./small-cross-Cic4keO3.js";import"./ActionButton-DQ3aCozb.js";import"./Checkbox-KwuDvry-.js";import"./minus-DUkZ9BHe.js";import"./tick-Cv92TETm.js";import"./useValueChanged-J_ST96R0.js";import"./caret-down-DurJlXNi.js";import"./CollapsiblePanel-BePveukO.js";import"./MultiColumnSortDialog-CDJDpTdN.js";import"./MenuTrigger-BaZUTHxY.js";import"./CompositeItem-D3qD8JcI.js";import"./ToolbarRootContext-Bk2PwjRD.js";import"./getDisabledMountTransitionStyles-DRXZcQpH.js";import"./getPseudoElementBounds-BQJe2Ssi.js";import"./chevron-down-DxQEXQwy.js";import"./index-BwhAMRUz.js";import"./error-DqXHGA21.js";import"./BaseCbacBanner-CHxVVdQG.js";import"./makeExternalStore-tacfjPhd.js";import"./Tooltip-BuByXAxE.js";import"./PopoverPopup-C2Oo12G7.js";import"./toNumber-DaTB0o4U.js";import"./useOsdkClient-MXDbRwE3.js";import"./DropdownField-wYt9gYlV.js";import"./withOsdkMetrics-BZ-XFVYd.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
