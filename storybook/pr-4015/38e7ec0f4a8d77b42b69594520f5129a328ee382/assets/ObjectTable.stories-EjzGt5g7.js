import{j as i}from"./iframe-DP2XT2Ax.js";import{O as p}from"./object-table-CWd3XKCa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BhhBmJG3.js";import"./preload-helper-MSxHh9cg.js";import"./Table-oBozEYgN.js";import"./index-CZwfuIm2.js";import"./Dialog-D2jP7-9g.js";import"./cross-BST2eW_7.js";import"./svgIconContainer-CYYVNj4c.js";import"./useBaseUiId-FZoWw8m8.js";import"./InternalBackdrop-BhboBOxC.js";import"./composite-CmPQztny.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./index-DbIKPCqv.js";import"./useEventCallback-Dg6K2X_Q.js";import"./SkeletonBar-DH4NDkMn.js";import"./LoadingCell-ClVBOB9X.js";import"./ColumnConfigDialog-og7pKw1Q.js";import"./DraggableList-C1eYiUo8.js";import"./search-DHZrW8_w.js";import"./Input-1UPAFlWH.js";import"./useControlled-C4scXiay.js";import"./Button-BVtJyzoK.js";import"./small-cross-CtLGGmA4.js";import"./ActionButton-uv8s5IRm.js";import"./Checkbox-Beu4Oh0H.js";import"./useValueChanged-RoL-GB64.js";import"./CollapsiblePanel-DPIs0k4c.js";import"./MultiColumnSortDialog-xHpIpjzv.js";import"./MenuTrigger-CFNU6crv.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./getDisabledMountTransitionStyles-DDs7xAlw.js";import"./getPseudoElementBounds-QeoJL95h.js";import"./chevron-down-CzZnZ__S.js";import"./index-DTkzCssz.js";import"./error-BbJX9_-G.js";import"./BaseCbacBanner-pjzVuofY.js";import"./makeExternalStore-Db1GWq1p.js";import"./Tooltip-aqIVw1KW.js";import"./PopoverPopup-C_ncCoFL.js";import"./debounce-Dj81RInU.js";import"./useOsdkClient-CAkDS70D.js";import"./tick-C2-r-ZD3.js";import"./DropdownField-CtHib4R8.js";import"./isEqual-DLffGPnv.js";import"./withOsdkMetrics-l-VjWGrr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
