import{f as p,j as e}from"./iframe-qmzCXWN4.js";import{O as i}from"./object-table-C1mW-ore.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfaqjKYe.js";import"./Table-CP9UXHBo.js";import"./index-BHXsooho.js";import"./Dialog-BlF9tEPt.js";import"./cross-CQlGHY78.js";import"./svgIconContainer-IgiOu0RR.js";import"./useBaseUiId-BJvBYugX.js";import"./InternalBackdrop-CgDKP17E.js";import"./composite-DL4bYzm9.js";import"./index-Cejy0gyw.js";import"./index-ChmUS2LB.js";import"./index-wI8QjcAS.js";import"./useEventCallback-8Q0F8-SM.js";import"./SkeletonBar-CSPSdf3f.js";import"./LoadingCell-Dcxpo96m.js";import"./ColumnConfigDialog-C4aEhu1N.js";import"./DraggableList-B-XECCar.js";import"./search-Diu7klqt.js";import"./Input-CFsjF6HE.js";import"./useControlled-BcZ-NiAO.js";import"./Button-DAis4ZgI.js";import"./small-cross-Cf0sj-e3.js";import"./ActionButton-CU7TeyVP.js";import"./Checkbox-CKk9nv02.js";import"./useValueChanged-CqxUQgrJ.js";import"./CollapsiblePanel-D_Wdr9Hn.js";import"./MultiColumnSortDialog-BwLc6nJW.js";import"./MenuTrigger-axdjtxqW.js";import"./CompositeItem-Csvh_d0_.js";import"./ToolbarRootContext-DGUkZWal.js";import"./getDisabledMountTransitionStyles-C0YhA-Ys.js";import"./getPseudoElementBounds-C3iFuC2O.js";import"./chevron-down-Dwy6C3BH.js";import"./index-DQfy-mzv.js";import"./error-BLaFtDHL.js";import"./BaseCbacBanner-BLrAnx8v.js";import"./makeExternalStore-BXxLBZ9K.js";import"./Tooltip-CZjN0xGR.js";import"./PopoverPopup-Bodc44xX.js";import"./debounce-DcZ-cQ5_.js";import"./useOsdkClient-CBhT0OrD.js";import"./tick-Dwo8b7et.js";import"./DropdownField-DZLyjXC2.js";import"./isEqual-DfvWC4cG.js";import"./withOsdkMetrics-D5CdmZxO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
