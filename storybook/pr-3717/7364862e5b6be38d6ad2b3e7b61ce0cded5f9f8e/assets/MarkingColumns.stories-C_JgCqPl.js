import{f as p,j as e}from"./iframe-HrSYXef6.js";import{O as i}from"./object-table-I5vr_50v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BScVS8UW.js";import"./Table-DtVGv5ta.js";import"./index-AWa3BkWB.js";import"./Dialog-CxxvQgLG.js";import"./cross-BBP-YUQE.js";import"./svgIconContainer-D1I0WwWy.js";import"./useBaseUiId-CP873lVF.js";import"./InternalBackdrop-D2CXV-jG.js";import"./composite-Cu2-AIlr.js";import"./index-qGS5hC5d.js";import"./index-BrjiQCBd.js";import"./index-ST0RjFlT.js";import"./useEventCallback-CgVP8ncJ.js";import"./SkeletonBar-CRyyarlr.js";import"./LoadingCell-BPiFPCpM.js";import"./ColumnConfigDialog-DoWXYsPK.js";import"./DraggableList-DtpZ0W-c.js";import"./search-DLw3eFfX.js";import"./Input-DfqShC2r.js";import"./useControlled-H7YIdve8.js";import"./isEqual-C-9IJ_PK.js";import"./isObject-BjPXw2n2.js";import"./Button-Bad58QMI.js";import"./ActionButton-G-0d0lor.js";import"./Checkbox-2QQLSiP7.js";import"./useValueChanged-8HYB_GRA.js";import"./CollapsiblePanel-DczFpB2L.js";import"./MultiColumnSortDialog-Czl0o88v.js";import"./MenuTrigger-BYn_czNY.js";import"./CompositeItem-CRiUf8NT.js";import"./ToolbarRootContext-Dyl78ELg.js";import"./getDisabledMountTransitionStyles-DJ1k2xK0.js";import"./getPseudoElementBounds-BBOn8KOR.js";import"./chevron-down-CipEir7k.js";import"./index-sYfUvVaf.js";import"./error-TbGpn11h.js";import"./BaseCbacBanner-55DuNODr.js";import"./makeExternalStore-CErrcljM.js";import"./Tooltip-C-XfnGpH.js";import"./PopoverPopup-C1e2N6Fa.js";import"./toNumber-BFzbFqnt.js";import"./useOsdkClient-CniR-jrR.js";import"./tick-DCSU6MlA.js";import"./DropdownField-DNWDzKqm.js";import"./withOsdkMetrics-CPFanBGF.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
