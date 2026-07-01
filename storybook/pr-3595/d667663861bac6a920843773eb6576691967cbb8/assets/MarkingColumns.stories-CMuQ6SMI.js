import{f as n,j as t}from"./iframe-CtNf2zCh.js";import{O as p}from"./object-table-WGB28CSb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bk37jmNx.js";import"./Table-D4gBOBci.js";import"./index-BhkOpX4s.js";import"./Dialog-CuuNVSLL.js";import"./cross-50BwrUrV.js";import"./svgIconContainer-AefHIiIP.js";import"./useBaseUiId-CtAbPC4z.js";import"./InternalBackdrop-CP2FbaC-.js";import"./composite-BvZ1bS0F.js";import"./index-B_oVTKbP.js";import"./index-DWvcXhEw.js";import"./index-uyf2ng7s.js";import"./useEventCallback-D1zBsSRI.js";import"./SkeletonBar-DiELkt6Y.js";import"./LoadingCell-By5esezc.js";import"./ColumnConfigDialog-Clv3U6LT.js";import"./DraggableList-DVdG9mZ9.js";import"./search-VghTvyNJ.js";import"./Input-15eTBBYl.js";import"./useControlled-Di8r5OQI.js";import"./Button-8RL_f4hk.js";import"./small-cross-DNLQh9FQ.js";import"./ActionButton-Zks3rSli.js";import"./Checkbox-CV3H--Qf.js";import"./minus-KnoSWB3Y.js";import"./tick-CR_OZ9Y6.js";import"./useValueChanged-CGd7DR0t.js";import"./caret-down-BDKq7Ztc.js";import"./CollapsiblePanel-B2kzOPDq.js";import"./MultiColumnSortDialog-CGCNi21D.js";import"./MenuTrigger-B1-4cPRT.js";import"./CompositeItem-BOqlmihL.js";import"./ToolbarRootContext-Bu2KMNtD.js";import"./getDisabledMountTransitionStyles-DSaiVZxo.js";import"./getPseudoElementBounds-vmdcqoQ6.js";import"./chevron-down-BcKDKmJ5.js";import"./index-DVPe01ai.js";import"./error-lQtwSLCm.js";import"./BaseCbacBanner-K76KXLXH.js";import"./makeExternalStore-CeL_8I6s.js";import"./Tooltip-Dj67HE9H.js";import"./PopoverPopup-Hd5GQqZp.js";import"./toNumber-jtT0rDdE.js";import"./useOsdkClient-CLOatImZ.js";import"./DropdownField-DxafwjDl.js";import"./withOsdkMetrics-BSd49BLe.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
