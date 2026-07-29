import{f as n,j as t}from"./iframe-DhaeZ5jA.js";import{O as p}from"./object-table-C49dl9EA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-K2u40jh1.js";import"./Table-DtuaF1KF.js";import"./index-DeR24p_R.js";import"./Dialog-BdielFog.js";import"./cross-DClpwiSq.js";import"./svgIconContainer-D1A5TQ09.js";import"./useBaseUiId-SY6Ypglq.js";import"./InternalBackdrop-YSyW40Bm.js";import"./composite-Cgd0WX8p.js";import"./index-CzJm0BPp.js";import"./index-toHig1uh.js";import"./index-r4UUHJWf.js";import"./useEventCallback-DAZ3mmOB.js";import"./SkeletonBar-q71tbIuj.js";import"./LoadingCell-Dy8dkUBN.js";import"./ColumnConfigDialog-jmcQht-h.js";import"./DraggableList-DXD9a2YZ.js";import"./Input-1PVMAqzc.js";import"./useControlled-oeIdVPCz.js";import"./Button-fU95c8Zm.js";import"./small-cross-FOrpiinm.js";import"./ActionButton-CkAV_ALs.js";import"./Checkbox-CitcNguY.js";import"./minus-RQqZQWVu.js";import"./useValueChanged-YJqdV6te.js";import"./caret-down-CadaFI2j.js";import"./CollapsiblePanel-DSPCZ7td.js";import"./MultiColumnSortDialog-AtyvTEcA.js";import"./MenuTrigger-BuVNVofP.js";import"./CompositeItem-Bc8j5DYn.js";import"./ToolbarRootContext-DB3wgiWa.js";import"./getDisabledMountTransitionStyles-1sFT8hYK.js";import"./getPseudoElementBounds-Bh0PIHGi.js";import"./chevron-down-DfK3K9PO.js";import"./index-2zD_rf0t.js";import"./error-CSh6zJGP.js";import"./BaseCbacBanner-DXVaktqz.js";import"./makeExternalStore-k8detlbK.js";import"./Tooltip-xr8yJzni.js";import"./PopoverPopup-XkJstrhH.js";import"./toNumber-DodssQTN.js";import"./useOsdkClient-DDMxf_yF.js";import"./DropdownField-DEdCZRRM.js";import"./withOsdkMetrics-CuoiiQBR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
