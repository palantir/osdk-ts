import{f as n,j as t}from"./iframe-DD-sY41C.js";import{O as p}from"./object-table-C7K2o4SA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5__Lz23Y.js";import"./Table-BcOiEXYl.js";import"./index-DFpVWQaH.js";import"./Dialog-BMITpN0z.js";import"./cross-DfrTo7j3.js";import"./svgIconContainer-B-j9KSns.js";import"./useBaseUiId-DxfPKsWQ.js";import"./InternalBackdrop-BlEliq9h.js";import"./composite-CSdXqb3j.js";import"./index-BBeu3EMd.js";import"./index-C2FCvJks.js";import"./index-oPJpjnjV.js";import"./useEventCallback-BEgf_CBu.js";import"./SkeletonBar-tIbl-3Ul.js";import"./LoadingCell-BgqW9Ktg.js";import"./ColumnConfigDialog-B_sMM5ZC.js";import"./DraggableList-Bf6HRq3k.js";import"./search-C-wSGCX5.js";import"./Input-Cpv8q5Re.js";import"./useControlled-Dym6gTEg.js";import"./Button-C03k3Hmi.js";import"./small-cross-Yo-mXp8S.js";import"./ActionButton-D860R6q0.js";import"./Checkbox-w-XfhVkU.js";import"./useValueChanged-EpfPtF10.js";import"./CollapsiblePanel-BTi7Eniv.js";import"./MultiColumnSortDialog-Bn7IUqg2.js";import"./MenuTrigger-uTIebe-y.js";import"./CompositeItem-LcGaYN6G.js";import"./ToolbarRootContext-BA5CPKJH.js";import"./getDisabledMountTransitionStyles-BNe8KeBx.js";import"./getPseudoElementBounds-CnB_FRXW.js";import"./chevron-down-ybK0QuTX.js";import"./index-Bz6Dx7Fv.js";import"./error-IQA24bgf.js";import"./BaseCbacBanner-D01VwXXT.js";import"./makeExternalStore-BAzCglqy.js";import"./Tooltip-Dws1GkJb.js";import"./PopoverPopup-CsEeWVju.js";import"./toNumber-RWYBoIe2.js";import"./useOsdkClient-bat7vKyu.js";import"./tick-CJuhHJf9.js";import"./DropdownField-DWK2SiII.js";import"./withOsdkMetrics-hwQdk7mj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
