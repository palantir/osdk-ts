import{f as p,j as e}from"./iframe-CZuJk2mr.js";import{O as i}from"./object-table-Sr4UqiK-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-OLzWEl.js";import"./Table-CiJXIyql.js";import"./index-DDksSLCw.js";import"./Dialog-Cu0NEvtn.js";import"./cross-cMU2e2iq.js";import"./svgIconContainer-D_03U5sn.js";import"./useBaseUiId-oT1O9JCt.js";import"./InternalBackdrop-D7By8IzE.js";import"./composite-sxVd7y-x.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./index-CchHo8N5.js";import"./useEventCallback-C-Y_eJLU.js";import"./SkeletonBar-KIkU-F0P.js";import"./LoadingCell-Dy5QT2-j.js";import"./ColumnConfigDialog-BJnqXzXJ.js";import"./DraggableList-DMKsNBrH.js";import"./search-2YrO29UM.js";import"./Input-CRD7X-5R.js";import"./useControlled-Bv0HDfXo.js";import"./Button-8AWdZuBH.js";import"./small-cross-Cks8he4h.js";import"./ActionButton-Y1hJnLuM.js";import"./Checkbox-BHgBtR90.js";import"./useValueChanged-B3gY-jcJ.js";import"./CollapsiblePanel-BSzHq4mN.js";import"./MultiColumnSortDialog-CoP8N9Nr.js";import"./MenuTrigger-DpjNDmx1.js";import"./CompositeItem-CuTnwCK-.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./getDisabledMountTransitionStyles-wKWoptbs.js";import"./getPseudoElementBounds-B7h64O9N.js";import"./chevron-down-CxdBBEPV.js";import"./index-J1vMkA6U.js";import"./error-BX22AwHJ.js";import"./BaseCbacBanner-Cdj36LJA.js";import"./makeExternalStore-BxStD-Ll.js";import"./Tooltip-pvJM2LHO.js";import"./PopoverPopup-Cbun7Jdd.js";import"./debounce-BD5a1j86.js";import"./useOsdkClient-BPa-6pZZ.js";import"./tick-DsvM9X65.js";import"./DropdownField-v7pGuAWY.js";import"./isEqual-xDcqCKe9.js";import"./withOsdkMetrics-D7T9qYjs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
