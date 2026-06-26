import{f as n,j as t}from"./iframe-DZ2S5Egj.js";import{O as p}from"./object-table-D6tuwqEB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAPHHyAk.js";import"./Table-BRLjo4K0.js";import"./index-BICvOmJS.js";import"./Dialog-BjgRFSYO.js";import"./cross-DiCLSwim.js";import"./svgIconContainer-Py-qBXJ8.js";import"./useBaseUiId-RqVZ5Iof.js";import"./InternalBackdrop-BaExSSxI.js";import"./composite-bGCnmzNS.js";import"./index-2mFhqMpc.js";import"./index-7zEgThHK.js";import"./index-B1EYm1Ra.js";import"./useEventCallback--EGnBVML.js";import"./SkeletonBar-CGwxtwU2.js";import"./LoadingCell-EzPOFxe-.js";import"./ColumnConfigDialog-C-EzSSY7.js";import"./DraggableList-BDdG3pJ7.js";import"./Input-NexZiXd0.js";import"./useControlled-sXBUF8Dy.js";import"./Button-DFRo9j0R.js";import"./small-cross-D4k6MeIe.js";import"./ActionButton-C7yIcVkJ.js";import"./Checkbox-BTH4jvdS.js";import"./minus-D98D5OdX.js";import"./useValueChanged-4oIYQ548.js";import"./caret-down-gh0_1W4E.js";import"./CollapsiblePanel-adqxmSfW.js";import"./MultiColumnSortDialog-DpPKLUDT.js";import"./MenuTrigger-B7Vxl2Ha.js";import"./CompositeItem-lJPf-gaD.js";import"./ToolbarRootContext-Pr5QZpay.js";import"./getDisabledMountTransitionStyles-85N76buP.js";import"./getPseudoElementBounds-D025tcs2.js";import"./chevron-down-BLP1CBjx.js";import"./index-DjhwwRUx.js";import"./error-BtA3iyKe.js";import"./BaseCbacBanner-4rXC83L0.js";import"./makeExternalStore-b0GDh5A1.js";import"./Tooltip-Bq1fKJHu.js";import"./PopoverPopup-biQLaPj2.js";import"./toNumber-whiKGYf6.js";import"./useOsdkClient-B_XZbSfx.js";import"./DropdownField-lct_KZP8.js";import"./withOsdkMetrics-d32PRZ1v.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
