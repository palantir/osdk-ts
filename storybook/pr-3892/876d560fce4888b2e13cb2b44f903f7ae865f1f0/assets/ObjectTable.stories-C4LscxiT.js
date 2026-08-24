import{j as i}from"./iframe-jCChBqpD.js";import{O as p}from"./object-table-CKx7vRdd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVr05glv.js";import"./preload-helper-BjtDmjUW.js";import"./Table-BzxaaTkw.js";import"./index-BDYSe5T3.js";import"./Dialog-Cvzcs2Vo.js";import"./cross-BFiMfS60.js";import"./svgIconContainer-V036n2V3.js";import"./useBaseUiId-BgwIkJaa.js";import"./InternalBackdrop-B4keXGQY.js";import"./composite-C4cjwLVl.js";import"./index-DHVDL356.js";import"./index-CzoHWjtt.js";import"./index-DLZ_Dkwd.js";import"./useEventCallback-Ca3owwPd.js";import"./SkeletonBar-CFmITWP2.js";import"./LoadingCell-Cevnx7ko.js";import"./ColumnConfigDialog-DPValkIe.js";import"./DraggableList-POtWMylI.js";import"./search-BXUdOqpE.js";import"./Input-mP6whCaC.js";import"./useControlled-Cy4C8mUF.js";import"./Button-DYAz7KKI.js";import"./small-cross-CAvDrfoI.js";import"./ActionButton-BVjk_BMh.js";import"./Checkbox-C0yLsfQ2.js";import"./useValueChanged-BXkOTGUI.js";import"./CollapsiblePanel-BDGrQUPM.js";import"./MultiColumnSortDialog-Dfy90Vxq.js";import"./MenuTrigger-BDAnLdLA.js";import"./CompositeItem-InY95CWo.js";import"./ToolbarRootContext-BWHl3dWP.js";import"./getDisabledMountTransitionStyles-Bymg6Wrg.js";import"./getPseudoElementBounds-RSwUcFZt.js";import"./chevron-down-FjlLjWzq.js";import"./index-38-6lZvw.js";import"./error-S_2dtwT6.js";import"./BaseCbacBanner-CZkJZTBD.js";import"./makeExternalStore-DZ2_Wte_.js";import"./Tooltip-xlXWqJAV.js";import"./PopoverPopup-ByV2ArYQ.js";import"./debounce-CBlUtCtN.js";import"./useOsdkClient-Bljk_PUl.js";import"./tick-CLtzdCC5.js";import"./DropdownField-mM78F7jp.js";import"./useDebouncedCallback-Qm1Fh51r.js";import"./withOsdkMetrics-CEFSBq5G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
