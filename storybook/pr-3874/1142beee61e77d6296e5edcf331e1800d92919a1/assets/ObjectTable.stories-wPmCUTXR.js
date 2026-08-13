import{j as i}from"./iframe-BqWWYvNh.js";import{O as p}from"./object-table-D1i_MteR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cs2IxHfF.js";import"./preload-helper-xbJFiFoV.js";import"./Table-BX-SSoai.js";import"./index-CHmc-CZF.js";import"./Dialog-C-ikag1c.js";import"./cross-BaCDbzQm.js";import"./svgIconContainer-D7PWuspg.js";import"./useBaseUiId-L7xZvVKI.js";import"./InternalBackdrop-BOKLllZf.js";import"./composite-B43hsjOr.js";import"./index-CJAJ6Hem.js";import"./index-UQo3BLiH.js";import"./index-C0RuiYT6.js";import"./useEventCallback-C7SpahXs.js";import"./SkeletonBar-CglVjYVB.js";import"./LoadingCell-DezR9abp.js";import"./ColumnConfigDialog-Loanbrqk.js";import"./DraggableList-DZYCzNct.js";import"./search-BZ-aP0AE.js";import"./Input-CFZ5X7h6.js";import"./useControlled-3vqQ5CZv.js";import"./Button-Drs29Umo.js";import"./small-cross-9yRNchJC.js";import"./ActionButton-CbAlOb7R.js";import"./Checkbox-BTcuEy4-.js";import"./useValueChanged-Bph4xhtR.js";import"./CollapsiblePanel-DwW1Bs6d.js";import"./MultiColumnSortDialog-D6neb_LS.js";import"./MenuTrigger-BXX-G2Zm.js";import"./CompositeItem-CC_bbvNo.js";import"./ToolbarRootContext-DXJ8TGiF.js";import"./getDisabledMountTransitionStyles-gc3ASc_K.js";import"./getPseudoElementBounds-DQIHMp8o.js";import"./chevron-down-DlgsXnWQ.js";import"./index-i_nBIU9X.js";import"./error-B_VRdTx7.js";import"./BaseCbacBanner-DtrJgJpz.js";import"./makeExternalStore-Brum0TCo.js";import"./Tooltip-CbfSD75c.js";import"./PopoverPopup-BOEEd-B9.js";import"./debounce-uF2HrJP8.js";import"./useOsdkClient-HveXGpzo.js";import"./tick-DMZ_0kJh.js";import"./DropdownField-BdVf8YUK.js";import"./isEqual-D6LwsQsu.js";import"./withOsdkMetrics-BbVO6-6g.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
