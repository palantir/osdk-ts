import{f as p,j as e}from"./iframe-BUQyUD8m.js";import{O as i}from"./object-table-Ds9LqJDs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CrxmGslj.js";import"./index-BICsXjCE.js";import"./Dialog-Cicf7a4d.js";import"./cross-1uLQRGRH.js";import"./svgIconContainer-o4oAXi-V.js";import"./useBaseUiId-U_k4td6p.js";import"./InternalBackdrop-ClRX3Efv.js";import"./composite-CELzk-qp.js";import"./index-BurFCGWb.js";import"./index-4mhiFuK4.js";import"./index-_XREHo1x.js";import"./useEventCallback-Dj7v-W5e.js";import"./SkeletonBar-kkhCK0VO.js";import"./LoadingCell-VGLxO3xD.js";import"./ColumnConfigDialog-Dx4DSbQ8.js";import"./DraggableList-BV4M3Ozp.js";import"./search-DagSNO5e.js";import"./Input-CtsEUXGl.js";import"./useControlled-CPowlOFs.js";import"./isEqual-DXPWwiqu.js";import"./isObject-BxdRw410.js";import"./Button-DEbL0EP0.js";import"./ActionButton--7yshnrs.js";import"./Checkbox-CW-A1aF1.js";import"./useValueChanged-Bc7io6Ho.js";import"./CollapsiblePanel-CNXYFAyn.js";import"./MultiColumnSortDialog-5NdKS9sN.js";import"./MenuTrigger-M7-KqOvt.js";import"./CompositeItem-iT1BpgJw.js";import"./ToolbarRootContext-CxUHg0mL.js";import"./getDisabledMountTransitionStyles-B8Q4G4Fv.js";import"./getPseudoElementBounds-XI3ORFf2.js";import"./chevron-down-DiBQFFuK.js";import"./index-CvJx8Lxg.js";import"./error-TXaSC1XE.js";import"./BaseCbacBanner--ZmoOtG1.js";import"./makeExternalStore-7rJI6eRL.js";import"./Tooltip-Dvh5BE71.js";import"./PopoverPopup-DAQjKvSK.js";import"./toNumber-BpqP-OeJ.js";import"./useOsdkClient-DrmKPxO2.js";import"./tick--S61-hA-.js";import"./DropdownField-9xytAn4v.js";import"./withOsdkMetrics-Pgtowb3-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
