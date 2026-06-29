import{f as n,j as t}from"./iframe-BNNKx1qJ.js";import{O as p}from"./object-table-DTvxL5D4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FnBR9pZ5.js";import"./Table-BYRVBYgU.js";import"./index-Cso6cHcG.js";import"./Dialog-BzLkyBZa.js";import"./cross-CYeOoUlc.js";import"./svgIconContainer-UXVuHS9c.js";import"./useBaseUiId-BTWwbLF7.js";import"./InternalBackdrop-DDDwcH62.js";import"./composite-CjX4rbqZ.js";import"./index-C5NImRQU.js";import"./index-naqArDfz.js";import"./index-Bq05Celt.js";import"./useEventCallback-DmnJBcoN.js";import"./SkeletonBar-BiKZHr81.js";import"./LoadingCell-Bwj73zl4.js";import"./ColumnConfigDialog-mkapnhM_.js";import"./DraggableList-D-UNchOv.js";import"./search-BLPbXJjN.js";import"./Input-D9LGNIE_.js";import"./useControlled-BVIookUm.js";import"./Button-C2urmu83.js";import"./small-cross-BLIvQRhO.js";import"./ActionButton-CZaknvG-.js";import"./Checkbox-Cu9aPbPK.js";import"./minus-C5nbNPz7.js";import"./tick-WZPX0pfq.js";import"./useValueChanged-eDJgqJMG.js";import"./caret-down-B7MLxcyP.js";import"./CollapsiblePanel-Dhrhn5WT.js";import"./MultiColumnSortDialog-D1-svnga.js";import"./MenuTrigger-CcHVPV18.js";import"./CompositeItem-PKzlPPnP.js";import"./ToolbarRootContext-BT3UeKOd.js";import"./getDisabledMountTransitionStyles-CGo-Dn6l.js";import"./getPseudoElementBounds-BFvaMIWl.js";import"./chevron-down-BY5TKFMU.js";import"./index-DrES_4Zr.js";import"./error-DAV0owaw.js";import"./BaseCbacBanner-Cwu2E8z6.js";import"./makeExternalStore-DDcVP2eY.js";import"./Tooltip-IyluTrsV.js";import"./PopoverPopup-BvIJjfkN.js";import"./toNumber-mtdIjC2h.js";import"./useOsdkClient-DnVrniqS.js";import"./DropdownField-RmdTnwHT.js";import"./withOsdkMetrics-CRQzHWgS.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
