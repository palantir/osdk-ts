import{f as n,j as t}from"./iframe-DoJds5Yj.js";import{O as p}from"./object-table-C4x9bHGv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RS5iTJdk.js";import"./Table-B08JCj04.js";import"./index-CpyAeASa.js";import"./Dialog-CLCN8pZD.js";import"./cross-DLVFX9qV.js";import"./svgIconContainer-BxzmuM28.js";import"./useBaseUiId-C56aISWF.js";import"./InternalBackdrop-CxSKnDAJ.js";import"./composite-D-vbGeaq.js";import"./index-BCW1_h7G.js";import"./index-Bk9LS9vz.js";import"./index-B6B7fnFz.js";import"./useEventCallback-J8DvtBhu.js";import"./SkeletonBar-Bh8qk80E.js";import"./LoadingCell-BL5n1LYf.js";import"./ColumnConfigDialog-RRie7R5x.js";import"./DraggableList-DjnIoHZN.js";import"./search-DAmHWSue.js";import"./Input-6umAMkIy.js";import"./useControlled-DFg6pFz3.js";import"./Button-CtJVynrP.js";import"./small-cross-DkVhO3Sl.js";import"./ActionButton-jSgc2cu7.js";import"./Checkbox-CMBBaQVf.js";import"./useValueChanged-BrT8b0_v.js";import"./CollapsiblePanel-Ck9E15A3.js";import"./MultiColumnSortDialog-DCq1d7-Q.js";import"./MenuTrigger-CLZEF--r.js";import"./CompositeItem-3ioIa48b.js";import"./ToolbarRootContext-wk4qZbjI.js";import"./getDisabledMountTransitionStyles-CCwmBVwj.js";import"./getPseudoElementBounds-wPDwPThG.js";import"./chevron-down-j6b73UiU.js";import"./index-CIBiif7B.js";import"./error-xcTc2vTA.js";import"./BaseCbacBanner-Bb7KLRjv.js";import"./makeExternalStore-CiQlKRbQ.js";import"./Tooltip-D4uYZKHS.js";import"./PopoverPopup-ClgAxYcb.js";import"./toNumber-BIfSnTmi.js";import"./useOsdkClient-BBsWkuRM.js";import"./tick-pV3hjSXC.js";import"./DropdownField-HY_vLRS3.js";import"./withOsdkMetrics-DSCr3MbE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
