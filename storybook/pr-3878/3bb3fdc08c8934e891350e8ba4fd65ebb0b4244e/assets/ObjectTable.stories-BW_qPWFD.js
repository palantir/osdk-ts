import{j as i}from"./iframe-Q3lyvqpT.js";import{O as p}from"./object-table-DjUxPUAU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0g9V6Gk.js";import"./preload-helper-C1UOXpSy.js";import"./Table-v4htO3pV.js";import"./index-DeVeQfvD.js";import"./Dialog-C8KqO5c3.js";import"./cross-0utMfnpw.js";import"./svgIconContainer-_aeVyyfk.js";import"./useBaseUiId-TlHWJ25V.js";import"./InternalBackdrop-CRj-pdnm.js";import"./composite-BRlBDXOv.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./index-Bl6Opt5R.js";import"./useEventCallback-DnvC_ML6.js";import"./SkeletonBar-QK5le0jY.js";import"./LoadingCell-BAiUfDTv.js";import"./ColumnConfigDialog-BRjbHqVx.js";import"./DraggableList-ji0QiaRd.js";import"./search-DRlPV6Yf.js";import"./Input-DsdhnLi8.js";import"./useControlled-D3J0OrAn.js";import"./Button-7q-Awilo.js";import"./small-cross-BEYL-4rR.js";import"./ActionButton-OcicrXmk.js";import"./Checkbox-C4u4wGQ6.js";import"./useValueChanged-BQwBfP0w.js";import"./CollapsiblePanel-CFtMnobt.js";import"./MultiColumnSortDialog-iq_y_xkS.js";import"./MenuTrigger-CaBal1-u.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./getDisabledMountTransitionStyles-CX6UYYQ4.js";import"./getPseudoElementBounds-Bb-Q1nBa.js";import"./chevron-down-CyTKzqpr.js";import"./index-CCtIAxk4.js";import"./error-CMb3oavi.js";import"./BaseCbacBanner-BhMHFvMV.js";import"./makeExternalStore-DEfXnagi.js";import"./Tooltip-C59Dncbu.js";import"./PopoverPopup-BMgvSen-.js";import"./debounce-Bsm6DEnd.js";import"./useOsdkClient-DfbTHzVZ.js";import"./tick-CuCRS-A9.js";import"./DropdownField-D-IHjSdp.js";import"./isEqual-vx51G8vk.js";import"./withOsdkMetrics-PcCF_U4s.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
