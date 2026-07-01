import{f as n,j as t}from"./iframe-Cgn9HmW4.js";import{O as p}from"./object-table-DHIy5iPt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-uBDGuKYx.js";import"./Table-DYJZ1j0G.js";import"./index-DwK3Yx7j.js";import"./Dialog-Bd8CD6cd.js";import"./cross-BGrnYC-u.js";import"./svgIconContainer-BYyT4Gwo.js";import"./useBaseUiId-WJ2yHsck.js";import"./InternalBackdrop-BqlOhJld.js";import"./composite-bDxGJdE-.js";import"./index-BEI-SJts.js";import"./index-DHHs6hZF.js";import"./index-DzIxT0GV.js";import"./useEventCallback-BQLe3jIj.js";import"./SkeletonBar-wMFdKqk6.js";import"./LoadingCell-CpDEdcPb.js";import"./ColumnConfigDialog-DWmgHBYV.js";import"./DraggableList-B4FY6AoA.js";import"./Input-DUWIo-hu.js";import"./useControlled-B6oHnu5C.js";import"./Button-DJZWbkxn.js";import"./small-cross-CA3SEL44.js";import"./ActionButton-1huN_Vqe.js";import"./Checkbox-DM5iIiM7.js";import"./minus-C4uJBiq2.js";import"./useValueChanged-T53dJcdc.js";import"./caret-down-VmLNBz-T.js";import"./CollapsiblePanel-DJ8rFDoV.js";import"./MultiColumnSortDialog-BR8giZMn.js";import"./MenuTrigger-p-1rmOL3.js";import"./CompositeItem-B9G2Zlnp.js";import"./ToolbarRootContext-MspK2pmB.js";import"./getDisabledMountTransitionStyles-Bb3m2pKG.js";import"./getPseudoElementBounds-DcGYgjhu.js";import"./chevron-down-Cf6034Xy.js";import"./index-BM1uFKXg.js";import"./error-DK8nTP8j.js";import"./BaseCbacBanner-Dvq4Iw33.js";import"./makeExternalStore-B-Cfj-ff.js";import"./Tooltip-CDLobcib.js";import"./PopoverPopup-DhsNNj41.js";import"./toNumber-DK6kooAo.js";import"./useOsdkClient-6BveonK9.js";import"./DropdownField-Dng57F5f.js";import"./withOsdkMetrics-Bd3oOI3v.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
