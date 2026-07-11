import{f as n,j as t}from"./iframe-D0upskcb.js";import{O as p}from"./object-table-krf4QdMz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZ2D47rP.js";import"./Table-CqPeonCO.js";import"./index-on836xgG.js";import"./Dialog-D_G4Odoy.js";import"./cross-DxiX8KVj.js";import"./svgIconContainer-D_Ghvdae.js";import"./useBaseUiId-BNn9GgHp.js";import"./InternalBackdrop-olMXgvgr.js";import"./composite-C9uoLUMF.js";import"./index-D1u0xUoO.js";import"./index-C6o5P2jW.js";import"./index-CtyrfKZc.js";import"./useEventCallback-B8Cm-Pbf.js";import"./SkeletonBar-Ry40G3gq.js";import"./LoadingCell-BmEjz8wQ.js";import"./ColumnConfigDialog-CZFdfzHv.js";import"./DraggableList-BcQzcaB5.js";import"./Input-1rdd8TtD.js";import"./useControlled-BnXzK60e.js";import"./Button-CYGJgjwj.js";import"./small-cross-BXy5QFZn.js";import"./ActionButton-DVOcof9Y.js";import"./Checkbox-BVbX9nP2.js";import"./minus-G3YrKsmx.js";import"./useValueChanged-CbUrAHyk.js";import"./caret-down-BZchNZ00.js";import"./CollapsiblePanel-Ck2_oQgP.js";import"./MultiColumnSortDialog-TCIZ4X5Q.js";import"./MenuTrigger-DmWg0gYg.js";import"./CompositeItem-skzoawXb.js";import"./ToolbarRootContext-Dceqkfqr.js";import"./getDisabledMountTransitionStyles-Cz9p0YYn.js";import"./getPseudoElementBounds-qvg7Ddou.js";import"./chevron-down-BsmhUENd.js";import"./index-DtsiZRbJ.js";import"./error-DYmmZ0VK.js";import"./BaseCbacBanner-C1PB3OAy.js";import"./makeExternalStore-BKSpbTul.js";import"./Tooltip-B_DyCDKl.js";import"./PopoverPopup-BAY9AbEq.js";import"./toNumber-CNrWotji.js";import"./useOsdkClient-CnPouqrO.js";import"./DropdownField-BtOYgkFJ.js";import"./withOsdkMetrics-CE624qUa.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
