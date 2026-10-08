import{j as i}from"./iframe-Brmfbmz5.js";import{O as p}from"./object-table-CZyOPeX-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKPlS9CP.js";import"./preload-helper-DOndN82M.js";import"./Table-Dihz3VNY.js";import"./index-CdHtMllz.js";import"./Dialog-kDCJqmDt.js";import"./cross-fGiz3Rjs.js";import"./svgIconContainer-Cy0NnLfo.js";import"./useBaseUiId-DOGmrDtt.js";import"./InternalBackdrop-BBaC-oN-.js";import"./composite-RDVcdR-R.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./index-CiHCZajJ.js";import"./useEventCallback-C-UQ4FkC.js";import"./SkeletonBar-Ctx3x6Sq.js";import"./LoadingCell-a5pDNTOJ.js";import"./ColumnConfigDialog-CE3UKD9L.js";import"./DraggableList-A99mHYVJ.js";import"./search-DtsbzCVy.js";import"./Input-BEXhNqGp.js";import"./useControlled-B9XW-ROk.js";import"./Button-BUGtRXvM.js";import"./small-cross-CYkGPall.js";import"./ActionButton-DhxyDZhK.js";import"./Checkbox-CkMSnatl.js";import"./useValueChanged-Dxcrt-LB.js";import"./CollapsiblePanel-CxH7OGUx.js";import"./MultiColumnSortDialog-BvGhLNBG.js";import"./MenuTrigger-NuCGdNBT.js";import"./CompositeItem-CAOvInfw.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./getDisabledMountTransitionStyles-DnHbaKev.js";import"./getPseudoElementBounds-DBTAfkRQ.js";import"./chevron-down-Bstv9WV1.js";import"./index-DTHd-YPe.js";import"./error-CqVZQ730.js";import"./BaseCbacBanner-SgyeccVL.js";import"./makeExternalStore-BLoslo8k.js";import"./Tooltip-DTsAOBOi.js";import"./PopoverPopup-C2QBGYEY.js";import"./debounce-7VY6siZ3.js";import"./useOsdkClient-L9Axw6J7.js";import"./tick-CC58sMYT.js";import"./DropdownField-C8ZOeSWx.js";import"./isEqual-DRFwE4Y9.js";import"./withOsdkMetrics-By8VTH2x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
