import{j as i}from"./iframe-BcJO5Es9.js";import{O as p}from"./object-table-CXB6ageE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BcSmfl3s.js";import"./preload-helper-CNqrSMrD.js";import"./Table-Ct6H-Odv.js";import"./index-D8zcFWOc.js";import"./Dialog-Cq0luLg-.js";import"./cross--P-I0ZkN.js";import"./svgIconContainer-0GuNzj2t.js";import"./useBaseUiId-C-k1aU7Y.js";import"./InternalBackdrop-Daw3hx3z.js";import"./composite-DPnLVqwa.js";import"./index-Cz5vlqVU.js";import"./index-DGYuc6nD.js";import"./index-CgaU1Mv5.js";import"./useEventCallback-qQBTb4zt.js";import"./SkeletonBar-SloCT5_B.js";import"./LoadingCell-BlzvGQe9.js";import"./ColumnConfigDialog-Df5ImCwa.js";import"./DraggableList-DwoSnA8e.js";import"./search-Q8aG5QMJ.js";import"./Input-8svXG8BP.js";import"./useControlled-CHN1pvcO.js";import"./Button-CmxEtBkN.js";import"./small-cross-DwoR8P_C.js";import"./ActionButton-Dd7X93sQ.js";import"./Checkbox-D5yelIY9.js";import"./useValueChanged-RvJvZ_Cg.js";import"./CollapsiblePanel-Cbn1Pxju.js";import"./MultiColumnSortDialog-CXxzUhP5.js";import"./MenuTrigger-pcHAjet2.js";import"./CompositeItem-B0brZGqV.js";import"./ToolbarRootContext-Bz5wpC0n.js";import"./getDisabledMountTransitionStyles-D45SEq1w.js";import"./getPseudoElementBounds-D8yU25vd.js";import"./chevron-down-BeaiUZln.js";import"./index-BGEt1deN.js";import"./error-D43ZO7i7.js";import"./BaseCbacBanner-DfZjQn6s.js";import"./makeExternalStore-CxoTebDy.js";import"./Tooltip-DQHXhc1k.js";import"./PopoverPopup-BVaQ5qjk.js";import"./debounce-Dvhb1WX-.js";import"./useOsdkClient-Du4zQHa2.js";import"./tick-9lyxa2jh.js";import"./DropdownField-C9_fke66.js";import"./isEqual-DDTFGPGr.js";import"./withOsdkMetrics-V7GcuCIR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
