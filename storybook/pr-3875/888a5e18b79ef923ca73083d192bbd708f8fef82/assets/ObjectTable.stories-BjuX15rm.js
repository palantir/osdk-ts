import{j as i}from"./iframe-6a_kvn9r.js";import{O as p}from"./object-table-gJ255PhT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-v3SpIrGk.js";import"./preload-helper-UmLrF_r9.js";import"./Table-XFNsRdvZ.js";import"./index-DZsq7FTs.js";import"./Dialog-CJHtM02i.js";import"./cross-ClFn7dec.js";import"./svgIconContainer-BMlsWZH7.js";import"./useBaseUiId-BwFLjng5.js";import"./InternalBackdrop-DESVWcn8.js";import"./composite-BqONz2GB.js";import"./index-De5jnlky.js";import"./index-BA8CMsKZ.js";import"./index-DdLLueEx.js";import"./useEventCallback-CzHH4T4L.js";import"./SkeletonBar-cjMH9Rpu.js";import"./LoadingCell-emwA1P9i.js";import"./ColumnConfigDialog-DumybdDg.js";import"./DraggableList-DkgUp4lG.js";import"./search-DOcCo1oD.js";import"./Input-BN6wpSvl.js";import"./useControlled-DlWAEbXA.js";import"./Button-BY6mG_TR.js";import"./small-cross-Bn2R2wbf.js";import"./ActionButton-Bi5m9DmB.js";import"./Checkbox-BPX4OFc-.js";import"./useValueChanged-CcWLOV5o.js";import"./CollapsiblePanel-CdhtTK8U.js";import"./MultiColumnSortDialog-BtmZ1yCk.js";import"./MenuTrigger-sr65K0My.js";import"./CompositeItem-r_UKZCPX.js";import"./ToolbarRootContext-8rOO4UX6.js";import"./getDisabledMountTransitionStyles-YFTqCi3r.js";import"./getPseudoElementBounds-CWsjtQ7H.js";import"./chevron-down-CWTTgj3w.js";import"./index-BGR9g80G.js";import"./error-C1tZ3x6V.js";import"./BaseCbacBanner-Cn-gJzjV.js";import"./makeExternalStore-B7ja9LyT.js";import"./Tooltip-CbdMy9JX.js";import"./PopoverPopup-C2WrfQ0J.js";import"./debounce-BQ6n828Z.js";import"./useOsdkClient-CGw7GANw.js";import"./tick-Ddpdailt.js";import"./DropdownField-iDzYtBYA.js";import"./isEqual-By-mDykE.js";import"./withOsdkMetrics-D0t1junC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
