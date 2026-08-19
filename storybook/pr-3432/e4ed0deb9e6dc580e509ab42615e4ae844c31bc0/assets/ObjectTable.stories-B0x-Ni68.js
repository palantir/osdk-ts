import{j as i}from"./iframe-w9F8Brjw.js";import{O as p}from"./object-table-B20ii03U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnMXSpKb.js";import"./preload-helper-gOuIvRG0.js";import"./Table-D6xWvbkx.js";import"./index-BX6-ktEu.js";import"./Dialog-4zHFT5hi.js";import"./cross-Bsja6aaP.js";import"./svgIconContainer-52lfJd2c.js";import"./useBaseUiId-C3CWNnun.js";import"./InternalBackdrop-DWe5YV-b.js";import"./composite-DJjHoSCt.js";import"./index-CuwPgqye.js";import"./index-DeR9tbl3.js";import"./index-XFCS0tZr.js";import"./useEventCallback-BRjx0IL1.js";import"./SkeletonBar-ib1NEa7A.js";import"./LoadingCell-Dre-6LuM.js";import"./ColumnConfigDialog-Nirjm6-T.js";import"./DraggableList-CE3kxa99.js";import"./search-CJlgZYNJ.js";import"./Input-BI7HWStD.js";import"./useControlled-1YClOBeG.js";import"./Button-C0Dxr-Rp.js";import"./small-cross-Xk1Ycd4l.js";import"./ActionButton-CtedR1c9.js";import"./Checkbox-B0jqNeGa.js";import"./useValueChanged-mPynHNuh.js";import"./CollapsiblePanel-aj87wu0f.js";import"./MultiColumnSortDialog-D1DBA-gw.js";import"./MenuTrigger-BlnZU8w2.js";import"./CompositeItem-CaktBZ-x.js";import"./ToolbarRootContext-CPJg8Zy4.js";import"./getDisabledMountTransitionStyles-DbidhjV6.js";import"./getPseudoElementBounds-DNWW3lak.js";import"./chevron-down-alluwZla.js";import"./index-yG1LfRf4.js";import"./error-rgHAMUMi.js";import"./BaseCbacBanner-CVYQc2Pt.js";import"./makeExternalStore-BPJfeWP7.js";import"./Tooltip-D4WB2rF9.js";import"./PopoverPopup-Ce3dI16V.js";import"./debounce-Ckhswbkw.js";import"./useOsdkClient-DM5pv681.js";import"./tick-DO8XqzsE.js";import"./DropdownField-BXhKp9ja.js";import"./isEqual-DxnFqG6z.js";import"./withOsdkMetrics-Brc0TCIF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
