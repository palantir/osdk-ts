import{f as p,j as e}from"./iframe-B7GyHcsF.js";import{O as i}from"./object-table-DPd-aWI_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Bk1GMrYB.js";import"./index-CFQjkptn.js";import"./Dialog-CYxMX5KP.js";import"./cross-CbX11T1l.js";import"./svgIconContainer-DV6JsgR9.js";import"./useBaseUiId-DIKh32OU.js";import"./InternalBackdrop-dYAJysja.js";import"./composite-ZKnDJfr2.js";import"./index-CCC1KVPP.js";import"./index-BrNFn6FK.js";import"./index-CIkJKp5f.js";import"./useEventCallback-Dws1eW-l.js";import"./SkeletonBar-x8unuJhM.js";import"./LoadingCell-vDLd6n3U.js";import"./ColumnConfigDialog-CtOQy-z4.js";import"./DraggableList-BDxPGWV9.js";import"./search-BOqk2K5z.js";import"./Input-xO4VjGaV.js";import"./useControlled-CYQSl254.js";import"./Button-DcySZcut.js";import"./small-cross-C2Z9hnxs.js";import"./ActionButton-C8h86V18.js";import"./Checkbox-DqE-JteW.js";import"./useValueChanged-VqPWwgfd.js";import"./CollapsiblePanel-VqzXipcy.js";import"./MultiColumnSortDialog-CltP5yZp.js";import"./MenuTrigger-BLTWopKx.js";import"./CompositeItem-QnuG7jjG.js";import"./ToolbarRootContext-DPmvBz2H.js";import"./getDisabledMountTransitionStyles-DJHtY_2a.js";import"./getPseudoElementBounds-fr9V4EVn.js";import"./chevron-down-BWTVBIyh.js";import"./index-CV0k5xhB.js";import"./error-o8PSnfAD.js";import"./BaseCbacBanner-BGYGDjdi.js";import"./makeExternalStore-CHXnPqRT.js";import"./Tooltip-Ob1GddwU.js";import"./PopoverPopup-B5kfz1KF.js";import"./debounce-CcrQke-P.js";import"./useOsdkClient-BzlDplSL.js";import"./tick-BsrTYy8c.js";import"./DropdownField-2GtibBCE.js";import"./isEqual-CFHS8Jx5.js";import"./withOsdkMetrics-3hzxFyTR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
