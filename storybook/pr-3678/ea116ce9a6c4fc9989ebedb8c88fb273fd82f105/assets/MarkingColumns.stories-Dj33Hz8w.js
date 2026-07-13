import{f as n,j as t}from"./iframe-By9pRaoA.js";import{O as p}from"./object-table-D0J9gSiO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fdgzTKHW.js";import"./Table-jQkLNgNC.js";import"./index-D2ozCwp5.js";import"./Dialog-B4jX2mlk.js";import"./cross-P_4ciuh5.js";import"./svgIconContainer-CpebHvXe.js";import"./useBaseUiId-CYMsd0M3.js";import"./InternalBackdrop-D5SW5u_T.js";import"./composite-DIkwmFNe.js";import"./index-CnEr4dU_.js";import"./index-F4kEgzNU.js";import"./index-0ckVSbYS.js";import"./useEventCallback-DnMCAkkC.js";import"./SkeletonBar-Cg23jR56.js";import"./LoadingCell-5MT6NefK.js";import"./ColumnConfigDialog-rgNs4Si5.js";import"./DraggableList-CRNDQh01.js";import"./search-BgHvItpS.js";import"./Input-7YhiL2si.js";import"./useControlled-DAprVs_l.js";import"./Button-CzNzZXq8.js";import"./small-cross-D9aQ_R5E.js";import"./ActionButton-CgoF9dud.js";import"./Checkbox-BjeRlDCM.js";import"./useValueChanged-B0JYWSis.js";import"./CollapsiblePanel-D3n8E8fF.js";import"./MultiColumnSortDialog-CaeKigvz.js";import"./MenuTrigger-YFkUJHBj.js";import"./CompositeItem-DH6wy_la.js";import"./ToolbarRootContext-Bp8YW2C9.js";import"./getDisabledMountTransitionStyles-D51M12Q3.js";import"./getPseudoElementBounds-B4RTAlXZ.js";import"./chevron-down-B4xA_P8g.js";import"./index-CeHK1pXv.js";import"./error-CoMa_A79.js";import"./BaseCbacBanner-DpfZvj3N.js";import"./makeExternalStore-CcYwcljB.js";import"./Tooltip-BLDvfHQC.js";import"./PopoverPopup-IaqvoW8Y.js";import"./toNumber-CGbiZlSY.js";import"./useOsdkClient-CERFBPr4.js";import"./tick-DKsDHuZs.js";import"./DropdownField-Cgf1MEYs.js";import"./withOsdkMetrics-BLQqcSnG.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
