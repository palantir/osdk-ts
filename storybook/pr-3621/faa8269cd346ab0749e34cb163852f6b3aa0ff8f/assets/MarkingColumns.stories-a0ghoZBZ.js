import{f as n,j as t}from"./iframe-CSDQN0H7.js";import{O as p}from"./object-table-BuKVAusg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CogmwM7N.js";import"./Table-B0QwUsK4.js";import"./index-yl5IXyEv.js";import"./Dialog-BC3uc0Y8.js";import"./cross-Dnnue40e.js";import"./svgIconContainer-BawUlnx9.js";import"./useBaseUiId-CvMCsZtd.js";import"./InternalBackdrop-BdKO0-NW.js";import"./composite-CkHOUmoC.js";import"./index-D_3ES6Wr.js";import"./index-B79nei2k.js";import"./index-CeySp3aR.js";import"./useEventCallback-Bglv8EgK.js";import"./SkeletonBar-pIXAtDep.js";import"./LoadingCell-Bpr4varO.js";import"./ColumnConfigDialog-BtFf8mHH.js";import"./DraggableList-J1KBK6yb.js";import"./search-DhAPGoPJ.js";import"./Input-Dl_5uMeJ.js";import"./useControlled-D48I7YQp.js";import"./Button-VHpYDsB0.js";import"./small-cross-PM9uhvNu.js";import"./ActionButton-CwQ3ohbD.js";import"./Checkbox-BaMqHDrB.js";import"./useValueChanged-C8a7PXGc.js";import"./CollapsiblePanel-CsS7dO0N.js";import"./MultiColumnSortDialog-DFlDqGdD.js";import"./MenuTrigger-DUUzWWqH.js";import"./CompositeItem-BRUblGbs.js";import"./ToolbarRootContext-CYNYeNMx.js";import"./getDisabledMountTransitionStyles-DOrlSbAf.js";import"./getPseudoElementBounds-CKQpXPTX.js";import"./chevron-down-Canc_bc9.js";import"./index-7AcbBDGr.js";import"./error-C4QmCDiq.js";import"./BaseCbacBanner-oNR5RDuz.js";import"./makeExternalStore-DG4oGFRu.js";import"./Tooltip-XI26jfav.js";import"./PopoverPopup-6ejgW83z.js";import"./toNumber-DxW3sVjN.js";import"./useOsdkClient-Dma7C5oP.js";import"./tick-BFGTPPQw.js";import"./DropdownField-CyZ31NC-.js";import"./withOsdkMetrics-OPJnIEEa.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
