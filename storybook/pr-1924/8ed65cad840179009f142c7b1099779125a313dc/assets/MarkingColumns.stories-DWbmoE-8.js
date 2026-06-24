import{f as n,j as t}from"./iframe-Bsjubv1K.js";import{O as p}from"./object-table-DURDhq6W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBSlvtqk.js";import"./Table-Z7k6oMtg.js";import"./index-CmudF92_.js";import"./Dialog-J-wG69N-.js";import"./cross-Bic_H-ZR.js";import"./svgIconContainer-C-XcVJ1-.js";import"./useBaseUiId-DLDYt0-k.js";import"./InternalBackdrop-CfyMhpO0.js";import"./composite-DtZ9Vvdz.js";import"./index-Bx0AStCC.js";import"./index-Bbjgty7W.js";import"./index-DCy8jhW-.js";import"./useEventCallback-DGhbcgqJ.js";import"./SkeletonBar-ZFS7yQ6v.js";import"./LoadingCell-B0Cvn0MO.js";import"./ColumnConfigDialog-DSpg1J4e.js";import"./DraggableList-dIRf92nU.js";import"./Input-pFro5s6B.js";import"./useControlled-DdoDj9m0.js";import"./Button-CiqW3A50.js";import"./small-cross-B4v8eKuv.js";import"./ActionButton-D2Udsgzr.js";import"./Checkbox-BbtYmr1c.js";import"./minus-RYmJ9p2X.js";import"./useValueChanged-hbDDG6Ls.js";import"./caret-down-BjI21B09.js";import"./CollapsiblePanel-BwkInuKB.js";import"./MultiColumnSortDialog-PRPbvwVb.js";import"./MenuTrigger-B21_5zK4.js";import"./CompositeItem-XSSP3KvM.js";import"./ToolbarRootContext-DhANGvr5.js";import"./getDisabledMountTransitionStyles-BQOm9_Oa.js";import"./getPseudoElementBounds-CYlHEKGd.js";import"./chevron-down-DpkYLQzA.js";import"./index-maTKFo8k.js";import"./error-D6Q7N0S4.js";import"./BaseCbacBanner-DlDZUny9.js";import"./makeExternalStore-yaoTa5zf.js";import"./Tooltip-qGilLSWA.js";import"./PopoverPopup-Cxgjp3ur.js";import"./toNumber-0WsdKQzB.js";import"./useOsdkClient-DVgsSqP8.js";import"./DropdownField-BkYd45Ym.js";import"./withOsdkMetrics--AKB5z5x.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
