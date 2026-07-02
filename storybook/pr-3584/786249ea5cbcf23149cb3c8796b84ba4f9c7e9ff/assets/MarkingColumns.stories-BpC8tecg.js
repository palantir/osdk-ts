import{f as n,j as t}from"./iframe-BEsMVQ8s.js";import{O as p}from"./object-table-Czr6TRVo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cf0pAjcd.js";import"./Table-B4ef91OM.js";import"./index-DPsevB9f.js";import"./Dialog-0sSjWRun.js";import"./cross-C4jU1e6c.js";import"./svgIconContainer-CcfHwutB.js";import"./useBaseUiId-CU-CDrEd.js";import"./InternalBackdrop-D_6AJlJR.js";import"./composite-BAlGHGho.js";import"./index-Df6ueY5E.js";import"./index-Cq3bSlsW.js";import"./index-DoQqIJvK.js";import"./useEventCallback-Cf9RO5dO.js";import"./SkeletonBar-C3vY4d_z.js";import"./LoadingCell-CJHp90Pu.js";import"./ColumnConfigDialog-D-rDubty.js";import"./DraggableList-DhAruwOi.js";import"./search-ByVMCr4l.js";import"./Input-D7Y8ptXc.js";import"./useControlled-BRxkADvG.js";import"./Button-Cga_HmQM.js";import"./small-cross-CORJGP3K.js";import"./ActionButton-CI3oZa-W.js";import"./Checkbox-Da4N9wMk.js";import"./minus-CySoK7nv.js";import"./tick-TyrrZfF4.js";import"./useValueChanged-D_bxBhXw.js";import"./caret-down-DA5W6cas.js";import"./CollapsiblePanel-BLtWbvRI.js";import"./MultiColumnSortDialog-J3g0LqoZ.js";import"./MenuTrigger-BnwK3N17.js";import"./CompositeItem-CxogbyFG.js";import"./ToolbarRootContext-D48JRqwT.js";import"./getDisabledMountTransitionStyles-Eiz-hNSX.js";import"./getPseudoElementBounds-fCL9l2Re.js";import"./chevron-down-Cz5OhYrY.js";import"./index-BvQN0Z1G.js";import"./error-r4EwvWWh.js";import"./BaseCbacBanner-BkXF6G2l.js";import"./makeExternalStore-B5hfV-Oa.js";import"./Tooltip-CpbCl9fT.js";import"./PopoverPopup-Bx0hkbyt.js";import"./toNumber-DQFHtp-H.js";import"./useOsdkClient-C34xQ130.js";import"./DropdownField-B7dsJuMU.js";import"./withOsdkMetrics-ay9dWHbx.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
