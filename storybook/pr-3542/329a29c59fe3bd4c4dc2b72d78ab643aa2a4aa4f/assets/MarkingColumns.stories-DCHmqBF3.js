import{f as n,j as t}from"./iframe-nueKWeNk.js";import{O as p}from"./object-table-Czib9XGm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPrmn3Vx.js";import"./Table-C1cy7R5G.js";import"./index-8zQ28Zsf.js";import"./Dialog-C8A2sv-i.js";import"./cross-DQ6b64Le.js";import"./svgIconContainer-CFbBDdQj.js";import"./useBaseUiId-O_S2vgR1.js";import"./InternalBackdrop-D4XOzWIH.js";import"./composite-D_7UegR7.js";import"./index-2dE35M2O.js";import"./index-Bh14ilbo.js";import"./index-DkQXsaEE.js";import"./useEventCallback-CsKiwVMN.js";import"./SkeletonBar-DVwEFuY8.js";import"./LoadingCell-CKxtEiBn.js";import"./ColumnConfigDialog-d80hgdO6.js";import"./DraggableList-BTMUCe2x.js";import"./Input-CILTC0Ip.js";import"./useControlled-C7jYZiWT.js";import"./Button-JkfxhLDY.js";import"./small-cross-DRLnstQY.js";import"./ActionButton-BPXIoKzG.js";import"./Checkbox-BowAyOom.js";import"./minus-CEe7T5Cl.js";import"./useValueChanged-BeYtpoNg.js";import"./caret-down-Deg1EeYz.js";import"./CollapsiblePanel-BsDB2C1v.js";import"./MultiColumnSortDialog-C-4sY-RT.js";import"./MenuTrigger-B5LolE3q.js";import"./CompositeItem-bAw2hUcy.js";import"./ToolbarRootContext-Dh4ogsJV.js";import"./getDisabledMountTransitionStyles-CkyRYzNX.js";import"./getPseudoElementBounds-trRoRfof.js";import"./chevron-down-BSLP6rS7.js";import"./index-DNqSTEH1.js";import"./error-DbUviyRr.js";import"./BaseCbacBanner-CmivF4S8.js";import"./makeExternalStore-BGqn9pCa.js";import"./Tooltip-DWbTJlkv.js";import"./PopoverPopup-CI7Isdj-.js";import"./toNumber-BbfFh3Wy.js";import"./useOsdkClient-mDw3cB93.js";import"./DropdownField-CcmeOgVq.js";import"./withOsdkMetrics-wEMl8EJm.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
