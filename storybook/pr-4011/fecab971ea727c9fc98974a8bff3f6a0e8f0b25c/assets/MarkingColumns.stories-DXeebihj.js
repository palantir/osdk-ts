import{f as p,j as e}from"./iframe-Cbv5zznp.js";import{O as i}from"./object-table-Bn5bQJkg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqfcifpH.js";import"./Table-BgFM93fE.js";import"./index-D2aFmDJC.js";import"./Dialog-BA607rzO.js";import"./cross-C8I2PI6u.js";import"./svgIconContainer-BWSQzhSR.js";import"./useBaseUiId-CbroaXAW.js";import"./InternalBackdrop-CUgFheWq.js";import"./composite-DJiR_4ty.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./index-D_4oJywF.js";import"./useEventCallback-r3b2hAl0.js";import"./SkeletonBar-OKZ2wWwG.js";import"./LoadingCell-C89HmfYL.js";import"./ColumnConfigDialog-cf5LyL_h.js";import"./DraggableList-7LB8K7ON.js";import"./search-CH6DBRTT.js";import"./Input-DmJSS6xV.js";import"./useControlled-BoBGM7g4.js";import"./Button-Tfyx2Upy.js";import"./small-cross-OENn1soQ.js";import"./ActionButton-CRpLCn8e.js";import"./Checkbox-DrLDryFH.js";import"./useValueChanged-CRrnyi5j.js";import"./CollapsiblePanel-DUHKDOmV.js";import"./MultiColumnSortDialog-BNLYytTp.js";import"./MenuTrigger-DvQE4buu.js";import"./CompositeItem-CWAeob4t.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./getDisabledMountTransitionStyles-Drv_mS0M.js";import"./getPseudoElementBounds-CnQ2m5T7.js";import"./chevron-down-DHe7MR3-.js";import"./index-B-Z3zT8c.js";import"./error-DnP2O5g6.js";import"./BaseCbacBanner-DkzBhqtE.js";import"./makeExternalStore-BZhL-95P.js";import"./Tooltip-C20r3_Es.js";import"./PopoverPopup-DcG6I0rn.js";import"./debounce-Do5MJNfP.js";import"./useOsdkClient-CLoY1UKz.js";import"./tick-CdvKMWYt.js";import"./DropdownField-D-ungKoa.js";import"./isEqual-Bvhr1-hP.js";import"./withOsdkMetrics-ByXJuDkr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
