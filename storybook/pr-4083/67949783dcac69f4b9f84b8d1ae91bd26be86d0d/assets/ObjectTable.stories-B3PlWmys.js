import{j as i}from"./iframe-CmWe6Tkd.js";import{O as p}from"./object-table-BDW2e7eZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRJNGg08.js";import"./preload-helper-CZkXumnj.js";import"./Table-Bf77Bvdy.js";import"./index-B0FfbiTF.js";import"./Dialog-Baty4Szl.js";import"./cross-DOjQafmq.js";import"./svgIconContainer-DT9zh-Vk.js";import"./useBaseUiId-Bs3xq9h4.js";import"./InternalBackdrop-Bgkh1XM7.js";import"./composite-BpFW5Zxj.js";import"./index-CsFAVmPm.js";import"./index-BoUQWx-c.js";import"./index-Czd4gxpW.js";import"./useEventCallback-zOr5ERUR.js";import"./SkeletonBar-BgpMicw2.js";import"./LoadingCell-BfizB9li.js";import"./ColumnConfigDialog-BvKtMJ72.js";import"./DraggableList-CG6HloQL.js";import"./search-BJsFf8Sf.js";import"./Input-CO62StGf.js";import"./useControlled-CuXXFPaU.js";import"./Button-DwrepdjR.js";import"./small-cross-Dx1H7YZV.js";import"./ActionButton-CvgVXH59.js";import"./Checkbox-BSGDor4r.js";import"./useValueChanged-D7qGEQa7.js";import"./CollapsiblePanel-CHhRUS9J.js";import"./MultiColumnSortDialog-BiWo3PKA.js";import"./MenuTrigger-CaGVAVpU.js";import"./CompositeItem-X2tnD8zQ.js";import"./ToolbarRootContext-DXrMWEKA.js";import"./getDisabledMountTransitionStyles-BRrVpNFj.js";import"./getPseudoElementBounds-CHGjGQ44.js";import"./chevron-down-B1zAncDT.js";import"./index-Ck62PufT.js";import"./error-C_AVzlpM.js";import"./BaseCbacBanner-8XqlSMPo.js";import"./makeExternalStore-CSTPATui.js";import"./Tooltip-CvPILd44.js";import"./PopoverPopup-2IEXcKZV.js";import"./debounce-CgnLqzzw.js";import"./useOsdkClient-CitkFKLb.js";import"./tick-BW8FxYJj.js";import"./DropdownField-BNVRIq1Y.js";import"./isEqual-Mehm483B.js";import"./withOsdkMetrics-CiiIaaP6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
