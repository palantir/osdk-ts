import{j as i}from"./iframe-lKHX2RT0.js";import{O as p}from"./object-table-Bc4WIn5Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Be4vbPUS.js";import"./preload-helper-CPQlIB48.js";import"./Table-CL_aIROu.js";import"./index-DN0L_sQz.js";import"./Dialog-CTKIyT5I.js";import"./cross-BS8Ys0sh.js";import"./svgIconContainer-CI8K89aC.js";import"./useBaseUiId-BNpyRqoY.js";import"./InternalBackdrop-CN7gDkpU.js";import"./composite-Cid_avm0.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./index-CIthZ6_f.js";import"./useEventCallback-BiQpxw87.js";import"./SkeletonBar-CjbRBu-J.js";import"./LoadingCell-CqqZdURq.js";import"./ColumnConfigDialog-DxRJKGk2.js";import"./DraggableList-yPuiK1Qh.js";import"./search-DYMiyHIs.js";import"./Input-Bw27QJ9U.js";import"./useControlled-CuEFhIkH.js";import"./Button-BEKYhgY7.js";import"./small-cross-gLhT5iIM.js";import"./ActionButton-5BHbkKfJ.js";import"./Checkbox-DsSCYp1f.js";import"./useValueChanged-CgAPPxks.js";import"./CollapsiblePanel-C2fgakez.js";import"./MultiColumnSortDialog-BclQGH37.js";import"./MenuTrigger-Cz8IFqra.js";import"./CompositeItem-YCGN9OAN.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./getDisabledMountTransitionStyles-BaPsLnpd.js";import"./getPseudoElementBounds-CtuiofEl.js";import"./chevron-down-5rT0_jwP.js";import"./index-mAvkRfFj.js";import"./error-Zaa9-6nd.js";import"./BaseCbacBanner-B1P_USXd.js";import"./makeExternalStore-BxeHtCAo.js";import"./Tooltip-CxNH616S.js";import"./PopoverPopup-VlygiTLm.js";import"./debounce-CjBjqfvI.js";import"./useOsdkClient-BttjugBK.js";import"./tick-DFRjlTY6.js";import"./DropdownField-dvCdI0vW.js";import"./isEqual-6_xjYyh7.js";import"./withOsdkMetrics-BcneEdmh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
