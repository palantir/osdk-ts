import{f as n,j as t}from"./iframe-BwUhqCha.js";import{O as p}from"./object-table-iFGo_a35.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Co1LY0h5.js";import"./Table-CGFQ__bh.js";import"./index-CE6gam3r.js";import"./Dialog-CXGfvZok.js";import"./cross-DXeJR9Kc.js";import"./svgIconContainer-DS5qCVWC.js";import"./useBaseUiId-DQ4lMAbK.js";import"./InternalBackdrop-LOJdcNbG.js";import"./composite-CRoeB7O4.js";import"./index-Dff1cT5m.js";import"./index-oRK7HinW.js";import"./index-vgW0AFPj.js";import"./useEventCallback-nynLlygJ.js";import"./SkeletonBar-BRK6dPVL.js";import"./LoadingCell-CdIZTJQe.js";import"./ColumnConfigDialog-64HkrKi7.js";import"./DraggableList-BMiO1C4u.js";import"./search-DVnuDMkg.js";import"./Input-DBfhJfYQ.js";import"./useControlled-C4Euwqkt.js";import"./Button-olWJl-1Y.js";import"./small-cross-DT9VD2Ae.js";import"./ActionButton-BezRwr-Q.js";import"./Checkbox-lhe5Q7dO.js";import"./useValueChanged-DxOM_O-J.js";import"./CollapsiblePanel-BerSA6AE.js";import"./MultiColumnSortDialog-Dko20Thb.js";import"./MenuTrigger-BTyvX_k7.js";import"./CompositeItem-4yr6biJB.js";import"./ToolbarRootContext-C9Cr-bZn.js";import"./getDisabledMountTransitionStyles-B8iDIFjD.js";import"./getPseudoElementBounds-BVw0Ntgp.js";import"./chevron-down-BO5XFDgA.js";import"./index-BMfBpXQH.js";import"./error-CuXNzXqG.js";import"./BaseCbacBanner-BoImVR40.js";import"./makeExternalStore-BhQfOl-y.js";import"./Tooltip-BD793IPV.js";import"./PopoverPopup-BnLe1UW7.js";import"./toNumber-wcUKfDpo.js";import"./useOsdkClient-C034QtZy.js";import"./tick-ta9SCgP3.js";import"./DropdownField-f3HRfeI6.js";import"./withOsdkMetrics-DGwO1-Lc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
