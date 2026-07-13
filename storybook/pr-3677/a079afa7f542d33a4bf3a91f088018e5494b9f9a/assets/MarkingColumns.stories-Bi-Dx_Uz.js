import{f as n,j as t}from"./iframe-BrEQ26tz.js";import{O as p}from"./object-table-CMKnpjQe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXuZccyG.js";import"./Table-Dm7p-KQO.js";import"./index-0puuYqU-.js";import"./Dialog-BRlHWrYi.js";import"./cross-DQ7HK-Xf.js";import"./svgIconContainer-J7EmXi3t.js";import"./useBaseUiId-1p3qHLXR.js";import"./InternalBackdrop-CLSafEy8.js";import"./composite-3K1Hj1a6.js";import"./index-vaMM0mYm.js";import"./index-CQhdakj7.js";import"./index-RrDi6-K3.js";import"./useEventCallback-C08Iq64S.js";import"./SkeletonBar-BtudFaG4.js";import"./LoadingCell-C6G2iXVM.js";import"./ColumnConfigDialog-xj42HCB5.js";import"./DraggableList-DlyOhVaZ.js";import"./search-sX3RsEDw.js";import"./Input-BksaE-tT.js";import"./useControlled-BfKXnzXK.js";import"./Button-Cwz5OZa6.js";import"./small-cross-BpiJkvBW.js";import"./ActionButton-BFbaayfC.js";import"./Checkbox-B20jyr2n.js";import"./useValueChanged-BJWRaf34.js";import"./CollapsiblePanel-DEpHRFQw.js";import"./MultiColumnSortDialog-DWZwnC0S.js";import"./MenuTrigger-CK-EL019.js";import"./CompositeItem-Beq2XUPk.js";import"./ToolbarRootContext-fodSfPt7.js";import"./getDisabledMountTransitionStyles-u0TFfZxv.js";import"./getPseudoElementBounds-B3EDcC_N.js";import"./chevron-down-DCizwKLE.js";import"./index-DxlA-ifY.js";import"./error-CjGSNoEY.js";import"./BaseCbacBanner-DyBQAp0Y.js";import"./makeExternalStore-DFRDjfb3.js";import"./Tooltip-DWyzqwkA.js";import"./PopoverPopup-BKs3H50d.js";import"./toNumber-DZAG3vvy.js";import"./useOsdkClient-B_D1P3QG.js";import"./tick-C_gAuhGm.js";import"./DropdownField-Bx0Dj1zQ.js";import"./withOsdkMetrics-BfTXVCQt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
