import{f as p,j as e}from"./iframe-DgffzXcd.js";import{O as i}from"./object-table-fY9Xd0yZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cnms5IGS.js";import"./Table-CzDvDm7i.js";import"./index-BBLuu-Hq.js";import"./Dialog-BCwFL75a.js";import"./cross-BSsj-b40.js";import"./svgIconContainer-Blhk3Pl5.js";import"./useBaseUiId-D8q2NPVv.js";import"./InternalBackdrop-Bgldltbx.js";import"./composite-CF6w6iAh.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./index-Cef6tpmG.js";import"./useEventCallback-DtRRBbn7.js";import"./SkeletonBar-CE1Y87-p.js";import"./LoadingCell-CsHmwUPd.js";import"./ColumnConfigDialog-astW80O7.js";import"./DraggableList-B1uaj-eR.js";import"./search-CJlxOI-X.js";import"./Input-c6SLv_Xy.js";import"./useControlled-BV_EXpzJ.js";import"./Button-UP0puh42.js";import"./small-cross-BBQkhsLR.js";import"./ActionButton-BaBnxcfR.js";import"./Checkbox-RB80j2cY.js";import"./useValueChanged-aTAAjdkj.js";import"./CollapsiblePanel-DXdXfeG6.js";import"./MultiColumnSortDialog-DDvpuTsH.js";import"./MenuTrigger-DCg3dPT6.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./getDisabledMountTransitionStyles-Db73lXfO.js";import"./getPseudoElementBounds-DD-pb8mO.js";import"./chevron-down-B-BBWbod.js";import"./index-AOiW_Fy4.js";import"./error-C62WbJ6c.js";import"./BaseCbacBanner-tjiO2qm2.js";import"./makeExternalStore-FJNApXaM.js";import"./Tooltip-Ddt-e1A4.js";import"./PopoverPopup-YsjB_oA6.js";import"./debounce-KT7GVLZu.js";import"./useOsdkClient-DKu9s4PU.js";import"./tick-DXpn86OC.js";import"./DropdownField-FoaA7AiA.js";import"./isEqual-XaPl52Ec.js";import"./withOsdkMetrics-BMLt42BN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
