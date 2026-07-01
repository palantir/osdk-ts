import{f as n,j as t}from"./iframe-D0ucOuid.js";import{O as p}from"./object-table-C_R1CGuL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dbago4K3.js";import"./Table-6vk0NWG1.js";import"./index-COXB08R9.js";import"./Dialog-DEuQjMyH.js";import"./cross-wHe_kbci.js";import"./svgIconContainer-A7aIUps5.js";import"./useBaseUiId-CMuGOdMh.js";import"./InternalBackdrop-B20BVMqv.js";import"./composite-Dg0n5z7n.js";import"./index-BeNrEhUO.js";import"./index-D4KPHE31.js";import"./index-GVcqnKRw.js";import"./useEventCallback-PFvr2XjW.js";import"./SkeletonBar-BRjbNXuJ.js";import"./LoadingCell-Cw4wNUkS.js";import"./ColumnConfigDialog-DfvvEj37.js";import"./DraggableList-vgwjXTUQ.js";import"./search-D5fdEY4D.js";import"./Input-B-v7pt1U.js";import"./useControlled-DoXK2GrK.js";import"./Button-DHAxKs9e.js";import"./small-cross-MsiFTGER.js";import"./ActionButton-Ba7Oys0r.js";import"./Checkbox-Fs3feZ77.js";import"./minus-OtKL2JR0.js";import"./tick-DLLkfYxr.js";import"./useValueChanged-D7rKQF8U.js";import"./caret-down-_4qF2xpO.js";import"./CollapsiblePanel-CmoZ2-SA.js";import"./MultiColumnSortDialog-GFvpMJpK.js";import"./MenuTrigger-CwvP_FDF.js";import"./CompositeItem-ByQnfEiz.js";import"./ToolbarRootContext-Cv8r3D5y.js";import"./getDisabledMountTransitionStyles-cSnLProB.js";import"./getPseudoElementBounds-DEdkD5FW.js";import"./chevron-down-DfkRu7ka.js";import"./index-DfZ4053_.js";import"./error-D7ovlyVk.js";import"./BaseCbacBanner-C6PFxX8m.js";import"./makeExternalStore-c_SqPNLS.js";import"./Tooltip-BdvGv68V.js";import"./PopoverPopup-C-Em_J-J.js";import"./toNumber-ff6r2pXr.js";import"./useOsdkClient-BgyMYSvm.js";import"./DropdownField-Bs7ruPpT.js";import"./withOsdkMetrics-BljmcISJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
