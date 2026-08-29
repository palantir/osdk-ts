import{j as i}from"./iframe-TjZyb1bS.js";import{O as p}from"./object-table-BV4MS_q3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dth77Y_x.js";import"./preload-helper-6vf5keDo.js";import"./Table-BGNs9QD3.js";import"./index-DO-d5Nhw.js";import"./Dialog-23QYsuiV.js";import"./cross-CcY2Z_E0.js";import"./svgIconContainer-g1t1jdQ-.js";import"./useBaseUiId-Dy5x7CTr.js";import"./InternalBackdrop-CL0l71br.js";import"./composite-B6T__7Xq.js";import"./index-08ELxWRo.js";import"./index-7MMySw2W.js";import"./index-IX_ZzulM.js";import"./useEventCallback-B_jx4L8R.js";import"./SkeletonBar-BN1dFAOr.js";import"./LoadingCell-BAUyVAf6.js";import"./ColumnConfigDialog-x4FXt_HP.js";import"./DraggableList-BNTHvxrB.js";import"./search-EfOYLmyo.js";import"./Input-JrCXDO00.js";import"./useControlled-DPKnbe0H.js";import"./Button-D4RUqMFW.js";import"./small-cross-_-bOsCQr.js";import"./ActionButton-B1ZAyzPy.js";import"./Checkbox-C3YPr4s5.js";import"./useValueChanged-C4PO7ygq.js";import"./CollapsiblePanel-BaMD_OMq.js";import"./MultiColumnSortDialog-C5kaH62z.js";import"./MenuTrigger-DFd2Cz7b.js";import"./CompositeItem-BA7lzU2v.js";import"./ToolbarRootContext-DAXEwoS8.js";import"./getDisabledMountTransitionStyles-DjPnR7Pk.js";import"./getPseudoElementBounds-CK3999ou.js";import"./chevron-down-aFaMKH-b.js";import"./index-ntrV61BC.js";import"./error-Ch19zHJw.js";import"./BaseCbacBanner-TgOhY0Ii.js";import"./makeExternalStore-C8VFKLfw.js";import"./Tooltip-CXH0W3g_.js";import"./PopoverPopup-CFt2P9Dg.js";import"./debounce-C2sRTyHH.js";import"./useOsdkClient-DYOHCNMK.js";import"./tick-zIDdkd7l.js";import"./DropdownField-CBqw0p8h.js";import"./isEqual-DpAq6o8s.js";import"./withOsdkMetrics-C27aqxoK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
