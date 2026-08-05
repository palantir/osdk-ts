import{f as p,j as e}from"./iframe-BKT26ECK.js";import{O as i}from"./object-table-x2w3LtIb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fzvI_Owm.js";import"./Table-Cw4wO_Bs.js";import"./index-BJVY7skd.js";import"./Dialog-DhXyA_cn.js";import"./cross-BSfVnQTo.js";import"./svgIconContainer-JLeCzNrF.js";import"./useBaseUiId-CkXejorF.js";import"./InternalBackdrop-Ds1Vs2WH.js";import"./composite-B4I_gF8q.js";import"./index-t7JpEJ0Y.js";import"./index-B88WqkHq.js";import"./index-VrYGyuu7.js";import"./useEventCallback-sHZKw_gs.js";import"./SkeletonBar-D_t3Dt5n.js";import"./LoadingCell-DLgyQtl8.js";import"./ColumnConfigDialog-u9dv2Ly5.js";import"./DraggableList-DWL3tyoz.js";import"./search-Bf-ECdYs.js";import"./Input-CRHPegXc.js";import"./useControlled-XWGO9wxj.js";import"./isEqual-DMcuELws.js";import"./isObject-D2wJ0QdN.js";import"./Button-CoUSpzUJ.js";import"./ActionButton-wuhy4zvB.js";import"./Checkbox-CL3sZhbe.js";import"./useValueChanged-IHzUeZUw.js";import"./CollapsiblePanel-DhCcuAYe.js";import"./MultiColumnSortDialog-Bi50xfb7.js";import"./MenuTrigger-CyUGkSSs.js";import"./CompositeItem-DcxV0Jb0.js";import"./ToolbarRootContext-DwHWuq0m.js";import"./getDisabledMountTransitionStyles-S-dXebFE.js";import"./getPseudoElementBounds-CUK9mrPI.js";import"./chevron-down-Bndan05g.js";import"./index-e8V1myKy.js";import"./error-CRxd3DRb.js";import"./BaseCbacBanner-CYZysUWB.js";import"./makeExternalStore-CIXu0gOP.js";import"./Tooltip-oeF80ZMG.js";import"./PopoverPopup-CU0FrlBz.js";import"./toNumber-DsDar9qW.js";import"./useOsdkClient-D7HKqmcJ.js";import"./tick--T_SqTho.js";import"./DropdownField-DQPM9pPe.js";import"./withOsdkMetrics-c0sdVgaD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
