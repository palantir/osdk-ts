import{j as i}from"./iframe-CaNMSJKR.js";import{O as p}from"./object-table-B4nUFTX-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8OSzuzN.js";import"./preload-helper-CgAWU684.js";import"./Table-CXor-3n_.js";import"./index-BPdtXYwS.js";import"./Dialog-DZmI8oo7.js";import"./cross-B28N2oZp.js";import"./svgIconContainer-BGKrE44l.js";import"./useBaseUiId-PY7Joizm.js";import"./InternalBackdrop-D8_pjPZI.js";import"./composite-Dq7ZaU-F.js";import"./index-DwHiGc_W.js";import"./index-D7ympiaR.js";import"./index-B-0ROkdE.js";import"./useEventCallback-DELk9yi6.js";import"./SkeletonBar-DZW3AZk0.js";import"./LoadingCell-Bct2rEqt.js";import"./ColumnConfigDialog-CM4I9Zey.js";import"./DraggableList-BZrwHyPq.js";import"./search-DK5elQsW.js";import"./Input-D6a6LuGx.js";import"./useControlled-HJg4bzpt.js";import"./Button-BAJ6GAJV.js";import"./small-cross-BFWN5N2J.js";import"./ActionButton-CuPxYvfY.js";import"./Checkbox-DhBO-rGO.js";import"./useValueChanged-CuGKNkm7.js";import"./CollapsiblePanel-Deq-o9BK.js";import"./MultiColumnSortDialog-CPOHrKZz.js";import"./MenuTrigger-C0JMR4yg.js";import"./CompositeItem-BvVHH8oi.js";import"./ToolbarRootContext-D5kbM0o_.js";import"./getDisabledMountTransitionStyles-CpEFz5aF.js";import"./getPseudoElementBounds-B9dP_zSK.js";import"./chevron-down-QgUF0MKI.js";import"./index-A0dvdsuB.js";import"./error-B3rv2TKE.js";import"./BaseCbacBanner-DBsGqNjb.js";import"./makeExternalStore-CFwmhsDu.js";import"./Tooltip-DK9uzyUm.js";import"./PopoverPopup-te4Dxo5n.js";import"./debounce-BYEPsvAQ.js";import"./useOsdkClient-Cyo_6-30.js";import"./tick-DUxcYiue.js";import"./DropdownField-DhO1HYQh.js";import"./isEqual--yZjSA3R.js";import"./withOsdkMetrics-OgxjXoMv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
