import{j as i}from"./iframe-DsGELu4T.js";import{O as p}from"./object-table-CxvCywaa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0oImVTQ.js";import"./preload-helper-XA-VDU9h.js";import"./Table-CPTYGU3L.js";import"./index-FibZOxqI.js";import"./Dialog-BL83Ywq7.js";import"./cross-oXbqlTg1.js";import"./svgIconContainer-CnDXZd3l.js";import"./useBaseUiId-Bgw27mqh.js";import"./InternalBackdrop-9Qoq3oRQ.js";import"./composite-CRl6169X.js";import"./index-BAMqZ9uk.js";import"./index-D5CaD6SI.js";import"./index-Dn7r5zta.js";import"./useEventCallback-EtST8PvD.js";import"./SkeletonBar-CkVB7Otp.js";import"./LoadingCell-CFQRgKPS.js";import"./ColumnConfigDialog-CJZYfrc3.js";import"./DraggableList-3tZbeJKF.js";import"./search-C-C2z-My.js";import"./Input-BiHcxxvv.js";import"./useControlled-hcbn-QvT.js";import"./Button-CoSq253i.js";import"./small-cross-L2Eps0bY.js";import"./ActionButton-c8pCj5XE.js";import"./Checkbox-CJpR6IEJ.js";import"./useValueChanged-CH7RDj0k.js";import"./CollapsiblePanel-B6Y0ESYf.js";import"./MultiColumnSortDialog-Bksh3D7y.js";import"./MenuTrigger-DBH_6DyT.js";import"./CompositeItem-0ZiilmCA.js";import"./ToolbarRootContext-rEV65r5F.js";import"./getDisabledMountTransitionStyles-iYmZWD6l.js";import"./getPseudoElementBounds-B7n1t-QY.js";import"./chevron-down-BZA6QViL.js";import"./index-Dl4r3eFQ.js";import"./error-CKgv5Cwb.js";import"./BaseCbacBanner-BVuDduVm.js";import"./makeExternalStore-B1xZJ4O7.js";import"./Tooltip-Cv_DgBwb.js";import"./PopoverPopup-B8yGkdSD.js";import"./debounce-CTNx07rU.js";import"./useOsdkClient-BHuTNu7Y.js";import"./tick-C3wj9HAZ.js";import"./DropdownField-Bar5e3Pn.js";import"./isEqual-CCdnBCja.js";import"./withOsdkMetrics-Q1C_QdTj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
