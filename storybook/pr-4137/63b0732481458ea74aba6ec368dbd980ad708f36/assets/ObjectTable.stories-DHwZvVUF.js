import{j as i}from"./iframe-CgaQrvJX.js";import{O as p}from"./object-table-zWPUlTUx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtVeBhIZ.js";import"./preload-helper-B2Xmrc95.js";import"./Table-Bu9LGKjn.js";import"./index-Bzmlqe5w.js";import"./Dialog-CMx2bEhz.js";import"./cross-IeILlXDu.js";import"./svgIconContainer-DNetVQYr.js";import"./useBaseUiId-CIjmtvYO.js";import"./InternalBackdrop-BkdT6um9.js";import"./composite-B-SLP__V.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./index-DUXtr9cN.js";import"./useEventCallback-CByTzmdM.js";import"./SkeletonBar-DLIA_RTq.js";import"./LoadingCell-BVf_3OyH.js";import"./ColumnConfigDialog-DPr1PGC7.js";import"./DraggableList-Ve3W3f6x.js";import"./search-BUTYKFlQ.js";import"./Input-DQR44Pu5.js";import"./useControlled-A1Soqi4e.js";import"./Button-BWSgruJ1.js";import"./small-cross-CClz0VbI.js";import"./ActionButton-B7LnHlzj.js";import"./Checkbox-d7IFsgOk.js";import"./useValueChanged-BNtiYy3l.js";import"./CollapsiblePanel-B7VLrLlP.js";import"./MultiColumnSortDialog-CYrgn_ax.js";import"./MenuTrigger-CiC5_Yxk.js";import"./CompositeItem-Dxj4Vwhq.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./getDisabledMountTransitionStyles-BSI6iR4W.js";import"./getPseudoElementBounds-BD_yj4W1.js";import"./chevron-down-BU6VTUzE.js";import"./index-CTmg82ji.js";import"./error-DP9sVVUg.js";import"./BaseCbacBanner-BFsdrnBM.js";import"./makeExternalStore-BVbHcjBk.js";import"./Tooltip-C2TlaiS-.js";import"./PopoverPopup-CZsknx9j.js";import"./debounce-BrOWPCnK.js";import"./useOsdkClient-DwCcA5xy.js";import"./tick-Q1XgvJo3.js";import"./DropdownField-CwkJQmwG.js";import"./isEqual-B2SNskwK.js";import"./withOsdkMetrics-C3kX09Hw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
