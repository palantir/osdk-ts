import{f as n,j as t}from"./iframe-Uvr3H1Op.js";import{O as p}from"./object-table-PKYlFr0q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-azeUAWw4.js";import"./Table-DYeYsjVB.js";import"./index-Bw6dKAeS.js";import"./Dialog-B0tl4XW0.js";import"./cross-BIFVozWy.js";import"./svgIconContainer-BgSoEQ9p.js";import"./useBaseUiId-DIxjj4qw.js";import"./InternalBackdrop-BQlqtS8A.js";import"./composite-D8ifTthT.js";import"./index-D9RYFHso.js";import"./index-_SwWRCkA.js";import"./index-DpOvjxVc.js";import"./useEventCallback-BQbDLMde.js";import"./SkeletonBar-CSXjdptg.js";import"./LoadingCell-C95svDrV.js";import"./ColumnConfigDialog-BWuZxmvC.js";import"./DraggableList-C0B1MSmN.js";import"./Input-BdW_NicF.js";import"./useControlled-B0AKWVeA.js";import"./Button-CK38Vm-g.js";import"./small-cross-DX4c9aAQ.js";import"./ActionButton-CYoTsnUb.js";import"./Checkbox-DqelBONt.js";import"./minus-CncsxDFW.js";import"./useValueChanged-ByOQ4r5l.js";import"./caret-down-BgociiNe.js";import"./CollapsiblePanel-gHlua46C.js";import"./MultiColumnSortDialog-EtNOp-Rd.js";import"./MenuTrigger-ffmo_A8O.js";import"./CompositeItem-CaXGpcb4.js";import"./ToolbarRootContext-Buxbmh8u.js";import"./getDisabledMountTransitionStyles-zlNjz-cy.js";import"./getPseudoElementBounds-BA0vERgR.js";import"./chevron-down-DZmEYMYz.js";import"./index-CfMt0YY_.js";import"./error-CiewOVTA.js";import"./BaseCbacBanner-CBWt_ORr.js";import"./makeExternalStore-LqOeLuM6.js";import"./Tooltip-IKvcjJcD.js";import"./PopoverPopup-DiGBnfsK.js";import"./toNumber-DfmClugO.js";import"./useOsdkClient-B-qFDd17.js";import"./DropdownField-BsI7gxcv.js";import"./withOsdkMetrics-Bnaf2t1M.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
