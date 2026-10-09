import{j as i}from"./iframe-Dmb-mlzV.js";import{O as p}from"./object-table-BvPbr9V5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kq_13wtm.js";import"./preload-helper-MIGgaMld.js";import"./Table-DBxmMaHT.js";import"./index-Ds3o4atQ.js";import"./Dialog-Cx8yE6Zj.js";import"./cross-_swrXFsE.js";import"./svgIconContainer-DAFeyB5Y.js";import"./useBaseUiId-Bl-3cYCN.js";import"./InternalBackdrop-Ckq1He5X.js";import"./composite-6EKatbQT.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./index-BSTL75vv.js";import"./useEventCallback-BF2Zplqh.js";import"./SkeletonBar-Cl_UfBJ6.js";import"./LoadingCell-C0Ss7wVX.js";import"./ColumnConfigDialog-BcQK_pJk.js";import"./DraggableList-C6Z51B2x.js";import"./search-DMyFpELI.js";import"./Input-CBzkX4z8.js";import"./useControlled-BM7SnBgs.js";import"./Button-8xVTVGsk.js";import"./small-cross-CQzmVcPc.js";import"./ActionButton-BcxqHeYY.js";import"./Checkbox-CPQeqY_8.js";import"./useValueChanged-DaiSG_CT.js";import"./CollapsiblePanel-TUHNx-2l.js";import"./MultiColumnSortDialog-D3guv5lw.js";import"./MenuTrigger-BC5LGWiT.js";import"./CompositeItem-BWXXLF3M.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./getDisabledMountTransitionStyles-CxV8SjgV.js";import"./getPseudoElementBounds-ZV-MtXgM.js";import"./chevron-down-BZ7oFKmu.js";import"./index-DZas1VAi.js";import"./error-XRi8aH0l.js";import"./BaseCbacBanner-B6NVk--o.js";import"./makeExternalStore-gkjC6p4e.js";import"./Tooltip-DA3P9wam.js";import"./PopoverPopup-CXUJ3lCx.js";import"./debounce-DOzDLznc.js";import"./useOsdkClient-DIHMDKUR.js";import"./tick-CFwIKfat.js";import"./DropdownField-DuGjp-tV.js";import"./isEqual-BPWMISy8.js";import"./withOsdkMetrics-CiUTqFkS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
