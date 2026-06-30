import{f as n,j as t}from"./iframe-BsO9h7r8.js";import{O as p}from"./object-table-CjOh7I1i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-kVh9WRV0.js";import"./Table-FEKUM3nY.js";import"./index-CJL1LSNA.js";import"./Dialog-C2rVR4nK.js";import"./cross-BgBdTUJe.js";import"./svgIconContainer-BA1JCxVV.js";import"./useBaseUiId-C3b_hb9v.js";import"./InternalBackdrop-CEZDE-iJ.js";import"./composite-D3AxlFmD.js";import"./index-NWo1xhbl.js";import"./index-S8QS8NVb.js";import"./index-BRub5lmI.js";import"./useEventCallback-CHQU9J8T.js";import"./SkeletonBar-B-kiLOQL.js";import"./LoadingCell-BjvaBkEF.js";import"./ColumnConfigDialog-BUK91993.js";import"./DraggableList-8ffX0gwh.js";import"./search-dIsWNuhQ.js";import"./Input-D4YvEVW6.js";import"./useControlled-DsZtwBPI.js";import"./Button-Dch8Yneq.js";import"./small-cross-mcIfg4uh.js";import"./ActionButton-DxWffNDA.js";import"./Checkbox-F5WjaUHX.js";import"./minus-CeZarIAf.js";import"./tick-DFLvYne8.js";import"./useValueChanged-Cu2TC2aA.js";import"./caret-down-PpPT452b.js";import"./CollapsiblePanel-Bmz24Nic.js";import"./MultiColumnSortDialog-BsGFp0n6.js";import"./MenuTrigger-aUrC62rH.js";import"./CompositeItem-qHn-BG8m.js";import"./ToolbarRootContext-DOzJL68x.js";import"./getDisabledMountTransitionStyles-rLL9h5J4.js";import"./getPseudoElementBounds-DA4TGPFb.js";import"./chevron-down-BmFA167U.js";import"./index-C3LlK2nW.js";import"./error-DdfCZKxk.js";import"./BaseCbacBanner-CcKGPHKk.js";import"./makeExternalStore-CrYVvgnt.js";import"./Tooltip-CBn1pNU3.js";import"./PopoverPopup-BX5w26Jr.js";import"./toNumber-BklM5tEA.js";import"./useOsdkClient-C_k8sg40.js";import"./DropdownField-DEPx739F.js";import"./withOsdkMetrics-Ded3pGJc.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
