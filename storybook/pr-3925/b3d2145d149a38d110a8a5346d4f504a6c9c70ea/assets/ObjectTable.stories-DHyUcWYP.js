import{j as i}from"./iframe-c92eWBTm.js";import{O as p}from"./object-table-Urt2J0sH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzQUPFXd.js";import"./preload-helper-C_mEB70A.js";import"./Table-D1liNC7d.js";import"./index-BNyL3dmc.js";import"./Dialog-BIitP0kQ.js";import"./cross-DLdKHUYj.js";import"./svgIconContainer-BR-sWY_B.js";import"./useBaseUiId-CZByDVJ8.js";import"./InternalBackdrop-Cjgj0ob4.js";import"./composite-DB4Ar6eT.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./index-CE_IpDOF.js";import"./useEventCallback-SiGShz6K.js";import"./SkeletonBar-5Mr_eOxZ.js";import"./LoadingCell-6WPtGaJN.js";import"./ColumnConfigDialog-CebDBM7r.js";import"./DraggableList-DI6uBsNq.js";import"./search-DUI8Keyd.js";import"./Input-DX2QK7C5.js";import"./useControlled-Caf6eOHS.js";import"./Button-BhSQs9el.js";import"./small-cross-B-PGSW1r.js";import"./ActionButton-D2-2fNqp.js";import"./Checkbox-BgbSeEa4.js";import"./useValueChanged-BTnCsynL.js";import"./CollapsiblePanel-B-G40PCw.js";import"./MultiColumnSortDialog-yr4c3WdG.js";import"./MenuTrigger-11hVYbaR.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./getDisabledMountTransitionStyles-CX00gzMZ.js";import"./getPseudoElementBounds-9oMqqWVm.js";import"./chevron-down-Bx1a8QAg.js";import"./index-wu_kXnGO.js";import"./error-10PygTue.js";import"./BaseCbacBanner-C6A-9fTV.js";import"./makeExternalStore-D7JaTI9q.js";import"./Tooltip-g3VbHlYI.js";import"./PopoverPopup-OY5zmnj_.js";import"./debounce-Q6oraD_R.js";import"./useOsdkClient-C_evHfwa.js";import"./tick-paWTMZXM.js";import"./DropdownField-B_YoHs2i.js";import"./isEqual-DfwbMjk2.js";import"./withOsdkMetrics-3UcJmunM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
