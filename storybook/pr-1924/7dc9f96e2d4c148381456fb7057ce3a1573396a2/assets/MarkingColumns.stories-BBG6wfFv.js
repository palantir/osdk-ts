import{f as p,j as e}from"./iframe-BlKzkmtn.js";import{O as i}from"./object-table-BxYj44_e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJb7ZBwp.js";import"./Table-DZAx6NnT.js";import"./index-BE33dGXM.js";import"./Dialog-Dfpzi-SI.js";import"./cross-CDSlzZ_j.js";import"./svgIconContainer-DTMdlGkn.js";import"./useBaseUiId-QFjXRhmc.js";import"./InternalBackdrop-eJVev9cg.js";import"./composite-DWj46q8f.js";import"./index-DVqE6h_f.js";import"./index-EtRT7Ia5.js";import"./index-gHjVE7W3.js";import"./useEventCallback-5TsxIkx3.js";import"./SkeletonBar-Dnih6rCl.js";import"./LoadingCell-fAFZo53q.js";import"./ColumnConfigDialog-DN5DmLBx.js";import"./DraggableList-BX1X0rhs.js";import"./search-DTlUtZ9H.js";import"./Input-BdMnwJ3c.js";import"./useControlled-C8Xhu7sh.js";import"./isEqual-90GY5dh2.js";import"./isObject-ClZ4w9zb.js";import"./Button-CR_nzyNk.js";import"./ActionButton-BUcZVkw2.js";import"./Checkbox-Cz_V7Kd7.js";import"./useValueChanged-CuTY1Q7Q.js";import"./CollapsiblePanel-Bo0E7Alp.js";import"./MultiColumnSortDialog-CQnsfhBk.js";import"./MenuTrigger-DdkeI051.js";import"./CompositeItem-DdICfa7h.js";import"./ToolbarRootContext-DkjfOPRa.js";import"./getDisabledMountTransitionStyles-CkgNCITp.js";import"./getPseudoElementBounds-yhK2vVLh.js";import"./chevron-down-CEf4r7Rj.js";import"./index-DXLdK1XH.js";import"./error-xYUSpHPn.js";import"./BaseCbacBanner-DACFTWfI.js";import"./makeExternalStore-CI1ZTcF0.js";import"./Tooltip-gnzZ7hep.js";import"./PopoverPopup-D-yg0k83.js";import"./toNumber-CM2f851I.js";import"./useOsdkClient-C0bP3yO7.js";import"./tick-DIfPNuKj.js";import"./DropdownField-DsRXFEg5.js";import"./withOsdkMetrics-DjHdw3vL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
