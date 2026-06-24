import{f as n,j as t}from"./iframe-CKsf8UzZ.js";import{O as p}from"./object-table-CgwITWqY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgJHPNxH.js";import"./Table-CBGPxVUx.js";import"./index-Dn2ZZwsq.js";import"./Dialog-DI4irBAH.js";import"./cross-Ds666Ua7.js";import"./svgIconContainer-Ccw1bsj4.js";import"./useBaseUiId-dSJZymtq.js";import"./InternalBackdrop-Ci4vNuuJ.js";import"./composite-CUumUHIC.js";import"./index-DlUiPV7k.js";import"./index-DSXhREWg.js";import"./index-BQTn6s2Z.js";import"./useEventCallback-ChnzYJvg.js";import"./SkeletonBar-CXTSrTBk.js";import"./LoadingCell-BJn7k88G.js";import"./ColumnConfigDialog-BIpFKDgu.js";import"./DraggableList-CcDBexAH.js";import"./Input-BT6CPm0v.js";import"./useControlled-B0QG-6kn.js";import"./Button-C4wI3ixl.js";import"./small-cross-CCWB5NSU.js";import"./ActionButton-D7tfX_eh.js";import"./Checkbox-iw9UGTWc.js";import"./minus-7Cyn_EOh.js";import"./useValueChanged-BERztixu.js";import"./caret-down-DCiXkeeC.js";import"./CollapsiblePanel-hq6jtFeP.js";import"./MultiColumnSortDialog-BL1AYsGQ.js";import"./MenuTrigger-O1bnrjCl.js";import"./CompositeItem-D9PUIA7b.js";import"./ToolbarRootContext-CSd27HYM.js";import"./getDisabledMountTransitionStyles-D0XRG3B1.js";import"./getPseudoElementBounds-BlX9v7qi.js";import"./chevron-down-CmxYovX-.js";import"./index-BDIs0NMg.js";import"./error-UHLKJUDO.js";import"./BaseCbacBanner-obCjakJD.js";import"./makeExternalStore-Dvu38b--.js";import"./Tooltip-CtdVbZdg.js";import"./PopoverPopup-CnWnChle.js";import"./toNumber-CYJ1I-Xn.js";import"./useOsdkClient-CH_yLZnk.js";import"./DropdownField-CLoQmSwa.js";import"./withOsdkMetrics-CggXmOKU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
