import{f as p,j as e}from"./iframe-DVYnRpdj.js";import{O as i}from"./object-table-D2LKbGoh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jWAjn0tL.js";import"./Table-Dxj1ILvb.js";import"./index-CH1L1VNU.js";import"./Dialog-CWjOSvXy.js";import"./cross-B9-dwz-Y.js";import"./svgIconContainer-CTL4p5cf.js";import"./useBaseUiId-BwB1POS7.js";import"./InternalBackdrop-N9SofBTy.js";import"./composite-C4ay5osQ.js";import"./index-CNxR8hD1.js";import"./index-5JSg7TKC.js";import"./index-D-sIGuKb.js";import"./useEventCallback-VFhsdas6.js";import"./SkeletonBar-C9zAaSl2.js";import"./LoadingCell-DN0DKMXJ.js";import"./ColumnConfigDialog-B55nyHVt.js";import"./DraggableList-DtigIKar.js";import"./search--hEGkwmt.js";import"./Input-qR3cLgNT.js";import"./useControlled-BTTM4wRl.js";import"./isEqual-BgqmPc7Z.js";import"./isObject-DKcO7n6l.js";import"./Button-BvmdrF_3.js";import"./ActionButton-C2gtk3D2.js";import"./Checkbox-xgTkB24d.js";import"./useValueChanged-Cxtk_s41.js";import"./CollapsiblePanel-BHoiEa8Y.js";import"./MultiColumnSortDialog-BzrGwEIf.js";import"./MenuTrigger-BxwoC8_m.js";import"./CompositeItem-C6n7AP2m.js";import"./ToolbarRootContext-DrMZ4IJS.js";import"./getDisabledMountTransitionStyles-DfQCDxjZ.js";import"./getPseudoElementBounds-CyipiQbQ.js";import"./chevron-down-KrczOSzf.js";import"./index-CFnWEuFo.js";import"./error-IFx71VBh.js";import"./BaseCbacBanner-BjCczzKS.js";import"./makeExternalStore-Cytkrsbu.js";import"./Tooltip-VzwiJ3X5.js";import"./PopoverPopup-Bz8q9iux.js";import"./toNumber-Ca0I2YME.js";import"./useOsdkClient-BJpIsQwT.js";import"./tick-BDn1wXHc.js";import"./DropdownField-DegXtX4D.js";import"./withOsdkMetrics-RqRZ8y66.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
