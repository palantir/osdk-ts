import{j as i}from"./iframe-Uo3dslN8.js";import{O as p}from"./object-table-xo8-ePPK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7bjLmtw6.js";import"./preload-helper-Di20YyVw.js";import"./Table-Bj185Q2M.js";import"./index-DM2i2mIv.js";import"./Dialog-DPSIYe0q.js";import"./cross-CtSgYx1A.js";import"./svgIconContainer-CCPA44UG.js";import"./useBaseUiId-BMW1tYuT.js";import"./InternalBackdrop-Cawem0xc.js";import"./composite-CJL7rGjP.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./index-AMq3qfnV.js";import"./useEventCallback-DuKH2Kse.js";import"./SkeletonBar-hMMVmlwX.js";import"./LoadingCell-DbCXbulB.js";import"./ColumnConfigDialog-CJtYLyJh.js";import"./DraggableList-BOsu8b6O.js";import"./search-DMwUXAz4.js";import"./Input-COrEd_bS.js";import"./useControlled-DxDhJC_G.js";import"./Button-CVEJXnPN.js";import"./small-cross-23YS3Wdy.js";import"./ActionButton-C5Zbzrcj.js";import"./Checkbox-F4EIPJKJ.js";import"./useValueChanged-DKndpPjF.js";import"./CollapsiblePanel-BMUw2sen.js";import"./MultiColumnSortDialog-BhY76eSz.js";import"./MenuTrigger-DNYd3FuB.js";import"./CompositeItem-CwindMm_.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./getDisabledMountTransitionStyles-DjGcX-z1.js";import"./getPseudoElementBounds-B1qmsDI-.js";import"./chevron-down-CCfCID7b.js";import"./index-DmI8cFxT.js";import"./error-Suxt282O.js";import"./BaseCbacBanner-BTXRf756.js";import"./makeExternalStore-BoTJ6suj.js";import"./Tooltip-B4ethV14.js";import"./PopoverPopup-BHKbeMsS.js";import"./debounce-BaKAl05r.js";import"./useOsdkClient-CZ5jAc54.js";import"./tick-W4zHdn4i.js";import"./DropdownField-S1rKLw4k.js";import"./isEqual-1lbKKA-o.js";import"./withOsdkMetrics-BYDhROpI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
