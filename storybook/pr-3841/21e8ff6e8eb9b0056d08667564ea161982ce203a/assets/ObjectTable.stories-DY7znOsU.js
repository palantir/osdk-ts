import{j as i}from"./iframe-CPDW-PQM.js";import{O as p}from"./object-table-DTqjU_D_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DzLTzGgw.js";import"./preload-helper-DLPPZvQy.js";import"./Table-BUuLX7nP.js";import"./index-BD9zYiqo.js";import"./Dialog-DDyKfg5y.js";import"./cross-DR7gxXwq.js";import"./svgIconContainer-C7wqaI1B.js";import"./useBaseUiId-B5I3_RDX.js";import"./InternalBackdrop-DdjQtzae.js";import"./composite-p-h0KAPd.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./index-B7g8W8Zp.js";import"./useEventCallback-CD0AM3jl.js";import"./SkeletonBar-CXBL3BvT.js";import"./LoadingCell-CjHZr7dQ.js";import"./ColumnConfigDialog-BIYXL1ew.js";import"./DraggableList-ChfPDfFa.js";import"./search-BZvDdvYt.js";import"./Input-CD_gqaHO.js";import"./useControlled-i4DTbWgc.js";import"./Button-CRJqCk8i.js";import"./small-cross-CSCn7V4Z.js";import"./ActionButton-J4pZ9dww.js";import"./Checkbox-Cq2SeKPb.js";import"./useValueChanged-f6yxC0pT.js";import"./CollapsiblePanel-CoH06yjt.js";import"./MultiColumnSortDialog-BGYn-b00.js";import"./MenuTrigger-ChgVJvO_.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./getDisabledMountTransitionStyles-Dto8xlJk.js";import"./getPseudoElementBounds-Dfn0jdGk.js";import"./chevron-down-BhbuOWem.js";import"./index-DF93-j-r.js";import"./error-BojBsd96.js";import"./BaseCbacBanner-BvfEUDY_.js";import"./makeExternalStore-EbQWCuwR.js";import"./Tooltip-B-fohL4X.js";import"./PopoverPopup-BdxYHBaz.js";import"./debounce-XSxzF9O8.js";import"./useOsdkClient-i81o04a7.js";import"./tick-BD10YuUL.js";import"./DropdownField-DJ9z17_O.js";import"./isEqual-CousIfvQ.js";import"./withOsdkMetrics-BSyWaS_D.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
