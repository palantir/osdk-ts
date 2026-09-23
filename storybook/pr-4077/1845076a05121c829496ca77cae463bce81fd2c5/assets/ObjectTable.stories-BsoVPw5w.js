import{j as i}from"./iframe-BcWEdWfB.js";import{O as p}from"./object-table-CcJJKdxt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXrtBhgq.js";import"./preload-helper-CVa1rIJ3.js";import"./Table-DyBmPdC7.js";import"./index-CwkFMZjv.js";import"./Dialog-D2ZW1Zu6.js";import"./cross-BZ3hgBtX.js";import"./svgIconContainer-D3wylWJt.js";import"./useBaseUiId-DAACsJ_e.js";import"./InternalBackdrop-CE9SLGDS.js";import"./composite-C2TbRxj5.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./index-BtKdi8uW.js";import"./useEventCallback-ZJD0lbuw.js";import"./SkeletonBar-vf1eVt6J.js";import"./LoadingCell-BTx_PCC4.js";import"./ColumnConfigDialog-bpLpuO55.js";import"./DraggableList-aXFULAtF.js";import"./search-BS0hsyoc.js";import"./Input-BARy-z-s.js";import"./useControlled-BOuSIVI5.js";import"./Button-BuWDqgqc.js";import"./small-cross-BoP5SHxC.js";import"./ActionButton-BIm8wQj8.js";import"./Checkbox-DuWxrP3q.js";import"./useValueChanged-DOMZUlbB.js";import"./CollapsiblePanel-VV5j-F5g.js";import"./MultiColumnSortDialog-DfSAVFI7.js";import"./MenuTrigger-B3hzon_A.js";import"./CompositeItem-3OABFBu2.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./getDisabledMountTransitionStyles-2lA8cPr-.js";import"./getPseudoElementBounds-ykQ7nCp3.js";import"./chevron-down-BTTnF4Fu.js";import"./index-CGjIfcSI.js";import"./error-Dx8WDHU2.js";import"./BaseCbacBanner-VrNUXLoJ.js";import"./makeExternalStore-DAxtPfWd.js";import"./Tooltip-BwYW0r-w.js";import"./PopoverPopup-C8yuAyjI.js";import"./debounce-B-M85eRT.js";import"./useOsdkClient-Cb16LKZK.js";import"./tick-DjnJsHe3.js";import"./DropdownField-B8TqC271.js";import"./isEqual-Bk9KFbCG.js";import"./withOsdkMetrics-YvSA4_Vm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
