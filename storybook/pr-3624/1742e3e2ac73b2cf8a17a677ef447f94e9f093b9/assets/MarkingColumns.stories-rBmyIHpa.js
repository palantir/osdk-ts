import{f as n,j as t}from"./iframe-BeCKStTi.js";import{O as p}from"./object-table-BuDALHzo.js";import{E as m}from"./Employee-BBLL99Vm.js";import"./preload-helper-BICrzKRt.js";import"./Table-C5VSqhJw.js";import"./index-BfYzXW_3.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./svgIconContainer-D-9_AOAs.js";import"./useBaseUiId-COsIpFVh.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./index-ya4S42ZF.js";import"./useEventCallback-g6xh18Ck.js";import"./SkeletonBar-Cbjlo5SH.js";import"./LoadingCell-B04qx1eN.js";import"./ColumnConfigDialog-DdaKJmFv.js";import"./DraggableList-CTKpXlM5.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useControlled-5Cxw9uoZ.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./Checkbox-B6cs6clj.js";import"./useValueChanged-BYmOXC78.js";import"./CollapsiblePanel-DkIfNruL.js";import"./MultiColumnSortDialog-JV7B42df.js";import"./MenuTrigger-Boxj4qRh.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./getPseudoElementBounds-DW-1RV5o.js";import"./chevron-down-BtABU6Ff.js";import"./index-DWv9wz-O.js";import"./error-DvUULirA.js";import"./BaseCbacBanner-DAo4gLE_.js";import"./makeExternalStore-WWCfiCZx.js";import"./Tooltip-CzbeK7mV.js";import"./PopoverPopup-eHRJK0-R.js";import"./toNumber-DLFKNsjO.js";import"./useOsdkClient-BYjQakhT.js";import"./tick-DR0G5XTI.js";import"./DropdownField-DPTs74yS.js";import"./withOsdkMetrics-DoKVZacI.js";const or={component:p,parameters:{docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}},msw:{handlers:[...n.handlers]}},tags:["beta"],title:"Components/ObjectTable/Features"},r={args:{columnDefinitions:[{locator:{id:"fullName",type:"property"}},{locator:{id:"department",type:"property"}},{locator:{id:"classificationMarking",type:"property"}},{locator:{id:"clearanceMarking",type:"property"}}],objectType:m},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    columnDefinitions: [{
      locator: {
        id: "fullName",
        type: "property"
      }
    }, {
      locator: {
        id: "department",
        type: "property"
      }
    }, {
      locator: {
        id: "classificationMarking",
        type: "property"
      }
    }, {
      locator: {
        id: "clearanceMarking",
        type: "property"
      }
    }],
    objectType: Employee
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
